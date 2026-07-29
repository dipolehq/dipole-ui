import { useCallback, useEffect, useRef } from 'react';

/**
 * Which surface the grid is drawn on top of — NOT the colour of the squares.
 *
 * The squares are always the opposite of the surface, because a grid can only
 * be seen where it contrasts with its background:
 *   `onDark`  -> white squares,      for the #0b0d0e sections
 *   `onLight` -> near-black squares, for the white sections
 *
 * Picking the variant that matches the surface's own colour renders nothing:
 * blending a colour over itself is a no-op at any opacity.
 */
export type FlickeringGridTheme = 'onDark' | 'onLight';

interface ThemePreset {
  color: string;
  maxOpacity: number;
}

const THEME_PRESETS: Record<FlickeringGridTheme, ThemePreset> = {
  // White squares. Kept low so the grid reads as texture rather than
  // competing with foreground copy.
  onDark: { color: 'rgb(255, 255, 255)', maxOpacity: 0.18 },
  // Brand near-black squares. Note this is exactly #0b0d0e, so this variant is
  // invisible on the dark sections by design — use `onDark` there.
  onLight: { color: 'rgb(11, 13, 14)', maxOpacity: 0.22 },
};

/** Largest frame delta we'll act on, so a backgrounded tab can't cause a flash. */
const MAX_FRAME_DELTA_SECONDS = 0.1;

const FALLBACK_RGBA_PREFIX = 'rgba(0, 0, 0,';

/**
 * Normalizes any CSS colour string into an `rgba(r, g, b,` prefix by painting it
 * to a 1x1 canvas and reading the pixel back, so per-square opacity can be
 * appended cheaply in the draw loop.
 *
 * Touches the DOM, so it must only be called from an effect — never in render.
 */
function toRgbaPrefix(color: string): string {
  const probe = document.createElement('canvas');
  probe.width = 1;
  probe.height = 1;

  const probeCtx = probe.getContext('2d');
  if (!probeCtx) return FALLBACK_RGBA_PREFIX;

  probeCtx.fillStyle = color;
  probeCtx.fillRect(0, 0, 1, 1);

  const [r, g, b] = probeCtx.getImageData(0, 0, 1, 1).data;
  return `rgba(${r ?? 0}, ${g ?? 0}, ${b ?? 0},`;
}

export interface FlickeringGridProps {
  /** Surface the grid sits on. Selects the colour/opacity preset. */
  theme?: FlickeringGridTheme;
  /** Side length of each square, in CSS pixels. */
  squareSize?: number;
  /** Gap between squares, in CSS pixels. */
  gridGap?: number;
  /** Probability per second that a given square re-rolls its opacity. */
  flickerChance?: number;
  /** Overrides the theme preset colour. Any CSS colour string. */
  color?: string;
  /** Overrides the theme preset peak opacity. */
  maxOpacity?: number;
  /**
   * Gaussian blur applied to the whole grid, in CSS pixels. Softens the squares
   * into a hazy field so they stop competing with foreground text.
   *
   * Applied as a CSS `filter` rather than the canvas 2D `ctx.filter`, because
   * Safari does not support the latter. Set to `0` for crisp squares.
   */
  blur?: number;
  /** Fixed width in CSS pixels. Defaults to filling the container. */
  width?: number;
  /** Fixed height in CSS pixels. Defaults to filling the container. */
  height?: number;
  className?: string;
}

/**
 * Decorative canvas backdrop: a grid of small squares that randomly re-roll
 * their opacity, producing a subtle flicker.
 *
 * Performance and accessibility notes:
 * - Animation is paused while the canvas is scrolled out of view.
 * - Honours `prefers-reduced-motion`, rendering a single static frame instead.
 * - Purely decorative, so it is hidden from assistive technology.
 */
export function FlickeringGrid({
  theme = 'onLight',
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color,
  maxOpacity,
  blur = 2,
  width,
  height,
  className = '',
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const preset = THEME_PRESETS[theme];
  const resolvedColor = color ?? preset.color;
  const resolvedMaxOpacity = maxOpacity ?? preset.maxOpacity;

  // A blur fades out the canvas edges, which would show as a soft frame around
  // the section. Draw past the container on every side by enough to push that
  // falloff outside the visible area, and let the container clip it.
  const overscan = Math.ceil(blur * 3);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, cssWidth: number, cssHeight: number) => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;

      const stride = squareSize + gridGap;
      const cols = Math.max(0, Math.floor(cssWidth / stride));
      const rows = Math.max(0, Math.floor(cssHeight / stride));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i += 1) {
        squares[i] = Math.random() * resolvedMaxOpacity;
      }

      return { cols, rows, squares, dpr };
    },
    [squareSize, gridGap, resolvedMaxOpacity],
  );

  const updateSquares = useCallback(
    (squares: Float32Array, deltaSeconds: number) => {
      const chance = flickerChance * deltaSeconds;
      for (let i = 0; i < squares.length; i += 1) {
        if (Math.random() < chance) {
          squares[i] = Math.random() * resolvedMaxOpacity;
        }
      }
    },
    [flickerChance, resolvedMaxOpacity],
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      grid: { cols: number; rows: number; squares: Float32Array; dpr: number },
      rgbaPrefix: string,
    ) => {
      const { cols, rows, squares, dpr } = grid;
      const stride = squareSize + gridGap;

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      for (let col = 0; col < cols; col += 1) {
        for (let row = 0; row < rows; row += 1) {
          const opacity = squares[col * rows + row] ?? 0;
          ctx.fillStyle = `${rgbaPrefix}${opacity})`;
          ctx.fillRect(col * stride * dpr, row * stride * dpr, squareSize * dpr, squareSize * dpr);
        }
      }
    },
    [squareSize, gridGap],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    // jsdom and very old browsers return null here; render nothing rather than throw.
    if (!ctx) return;

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const rgbaPrefix = toRgbaPrefix(resolvedColor);

    const measure = () => ({
      w: (width ?? container.clientWidth) + overscan * 2,
      h: (height ?? container.clientHeight) + overscan * 2,
    });

    let box = measure();
    let grid = setupCanvas(canvas, box.w, box.h);
    let frameId = 0;
    let lastTime: number | null = null;
    let isInView = false;
    let isRunning = false;

    const renderFrame = (time: number) => {
      if (!isInView) {
        isRunning = false;
        return;
      }

      // First frame after a start/resume has no meaningful delta; skip the
      // update so the grid doesn't re-roll everything at once.
      const deltaSeconds = lastTime === null ? 0 : Math.min((time - lastTime) / 1000, MAX_FRAME_DELTA_SECONDS);
      lastTime = time;

      updateSquares(grid.squares, deltaSeconds);
      drawGrid(ctx, grid, rgbaPrefix);
      frameId = requestAnimationFrame(renderFrame);
    };

    const start = () => {
      if (isRunning || reducedMotion) return;
      isRunning = true;
      lastTime = null;
      frameId = requestAnimationFrame(renderFrame);
    };

    const resizeObserver = new ResizeObserver(() => {
      box = measure();
      grid = setupCanvas(canvas, box.w, box.h);
      // Repaint immediately so a resize isn't a blank frame, and so the
      // reduced-motion case still reflects the new size.
      drawGrid(ctx, grid, rgbaPrefix);
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        isInView = entry.isIntersecting;
        if (isInView) start();
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(canvas);

    // Paint one frame up front so the grid is visible before the first tick,
    // and so reduced-motion users still get the static texture.
    drawGrid(ctx, grid, rgbaPrefix);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, resolvedColor, overscan, width, height]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`.trim()}
    >
      <canvas
        ref={canvasRef}
        className="absolute block pointer-events-none"
        style={{
          top: -overscan,
          left: -overscan,
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
