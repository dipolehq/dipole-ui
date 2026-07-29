import type { CSSProperties } from 'react';

/**
 * Which surface the bars are drawn on top of — NOT the colour of the bars.
 *
 * The gradient is always chosen to contrast with the surface:
 *   `onDark`  -> brand accent rising into transparent, for the #0b0d0e sections
 *   `onLight` -> brand near-black rising into transparent, for the white sections
 */
export type GradientBarsTheme = 'onDark' | 'onLight';

interface ThemePreset {
  /** Colour at the bottom of each bar. */
  from: string;
  /** Colour at the top of each bar. */
  to: string;
}

/**
 * Each preset fades into its surface colour rather than `transparent`, for two
 * reasons: `transparent` is transparent *black*, so fading to it dims the
 * gradient on the way out; and opaque bars can overlap to hide subpixel seams
 * without stacked alpha producing a bright line instead.
 *
 * Override `gradientTo` if the effect is placed on a different surface.
 */
const THEME_PRESETS: Record<GradientBarsTheme, ThemePreset> = {
  // Brand accent (--color-accent, #e0492f) glowing up out of the dark.
  onDark: { from: 'rgb(224, 73, 47)', to: 'rgb(11, 13, 14)' },
  // Brand near-black (#0b0d0e) for a restrained silhouette on white.
  onLight: { from: 'rgb(11, 13, 14)', to: 'rgb(255, 255, 255)' },
};

/** Resting height of the shortest (centre) bar, as a percentage. */
const MIN_HEIGHT_PERCENT = 30;
/** Resting height of the tallest (outermost) bars, as a percentage. */
const MAX_HEIGHT_PERCENT = 100;
/** >1 flattens the middle of the curve, keeping the centre bars low for longer. */
const HEIGHT_CURVE_EXPONENT = 1.2;
/** Stagger between neighbouring bars, in seconds, so they ripple rather than pulse in unison. */
const STAGGER_SECONDS = 0.1;

/**
 * Share of each bar's height, from the top down, over which it fades out.
 *
 * Without this the bar ends on a hard horizontal cut. Because neighbouring bars
 * compress the same gradient into different heights, they show different
 * brightnesses at the same screen height — so a short bar's top edge lands
 * against a much brighter neighbour and reads as a hard corner. Fading the top
 * out removes that step.
 */
const TOP_FADE_PERCENT = 45;

/**
 * Resting height for a bar, forming a symmetric valley: tallest at the two
 * outer edges, shortest in the middle.
 */
function barHeightPercent(index: number, total: number): number {
  if (total <= 1) return MAX_HEIGHT_PERCENT;

  const position = index / (total - 1);
  const distanceFromCentre = Math.abs(position - 0.5);
  const curve = Math.pow(distanceFromCentre * 2, HEIGHT_CURVE_EXPONENT);

  return MIN_HEIGHT_PERCENT + (MAX_HEIGHT_PERCENT - MIN_HEIGHT_PERCENT) * curve;
}

/**
 * Opaque at the bottom, fading to nothing over the top `TOP_FADE_PERCENT`.
 * Scales with the bar, so the fade stays proportional at every height.
 */
const TOP_FADE_GRADIENT = `linear-gradient(to bottom, transparent 0%, black ${TOP_FADE_PERCENT}%)`;

/** `style` plus the custom property the keyframe reads, so no cast escape hatch is needed. */
type BarStyle = CSSProperties & { '--initial-scale': number };

export interface GradientBarsProps {
  /** Surface the bars sit on. Selects the gradient preset. */
  theme?: GradientBarsTheme;
  /** How many vertical bars to render. */
  numBars?: number;
  /** Overrides the preset's bottom colour. */
  gradientFrom?: string;
  /** Overrides the preset's top colour. */
  gradientTo?: string;
  /** Duration of one pulse, in seconds. */
  animationDuration?: number;
  className?: string;
}

/**
 * Decorative backdrop: a row of vertical gradient bars arranged in a valley
 * shape, each slowly pulsing on a staggered delay.
 *
 * Fills its parent and does not position itself, so the caller decides where it
 * goes (typically a `absolute inset-0` wrapper). Purely decorative: hidden from
 * assistive technology, non-interactive, and static under
 * `prefers-reduced-motion`.
 */
export function GradientBars({
  theme = 'onDark',
  numBars = 15,
  gradientFrom,
  gradientTo,
  animationDuration = 2,
  className = '',
}: GradientBarsProps) {
  const preset = THEME_PRESETS[theme];
  const from = gradientFrom ?? preset.from;
  const to = gradientTo ?? preset.to;

  return (
    <div
      className={`w-full h-full overflow-hidden pointer-events-none ${className}`.trim()}
      aria-hidden="true"
    >
      {/* transform-gpu promotes the row to its own layer so animating many bars
          stays on the compositor. */}
      <div className="flex w-full h-full transform-gpu">
        {Array.from({ length: numBars }, (_, index) => {
          const scale = barHeightPercent(index, numBars) / 100;

          const style: BarStyle = {
            // flex-basis 0 + grow lets flexbox absorb the negative margins
            // below, so the bars still span the full width exactly.
            flex: '1 1 0%',
            background: `linear-gradient(to top, ${from}, ${to})`,
            transformOrigin: 'bottom',
            // Resting height. The keyframe re-declares transform, so this is
            // what shows before the animation starts and under reduced motion.
            transform: `scaleY(${scale})`,
            animation: `gradientBarPulse ${animationDuration}s ease-in-out infinite alternate`,
            animationDelay: `${index * STAGGER_SECONDS}s`,
            // Soften the top edge so a bar dissolves into the surface instead
            // of ending on a hard cut against its taller neighbour.
            maskImage: TOP_FADE_GRADIENT,
            WebkitMaskImage: TOP_FADE_GRADIENT,
            // Bar widths are fractional (container / numBars), so adjacent
            // edges land on subpixels and each antialiases to partial coverage
            // against the surface behind — which reads as a dark hairline.
            // Overlapping neighbours by 1px guarantees full coverage instead.
            // Safe alongside the mask: the only region with alpha < 1 is the
            // top fade, where the bar's colour has already reached the surface
            // colour, so stacking two of them over the surface is a no-op.
            ...(index < numBars - 1 ? { marginRight: '-1px' } : null),
            '--initial-scale': scale,
          };

          return <div key={index} className="gradient-bar h-full" style={style} />;
        })}
      </div>
    </div>
  );
}
