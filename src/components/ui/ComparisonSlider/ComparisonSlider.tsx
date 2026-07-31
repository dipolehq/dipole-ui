import { useCallback, useRef, useState, type ReactNode } from 'react';

export interface ComparisonSliderProps {
  /** Content shown on the left side (base layer, fully visible). */
  left: ReactNode;
  /** Content shown on the right side (overlaid, clipped from the left). */
  right: ReactNode;
  /** Initial divider position as a percentage (0–100). */
  initialPosition?: number;
  /**
   * Tab rendered flush against the frame's top-left edge. Passed as a node so
   * the caller can style it to match its own panel.
   */
  leftLabel?: ReactNode;
  /** Tab rendered flush against the frame's top-right edge. */
  rightLabel?: ReactNode;
  className?: string;
}

/**
 * Draggable before/after comparison slider.
 *
 * The left panel is the base layer (always fully visible underneath).
 * The right panel overlays it at z-10 and is clipped from the left via
 * `clip-path: inset(0 0 0 X%)` — dragging the handle right reveals more
 * of the left panel, dragging left reveals more of the right.
 *
 * Supports mouse drag and touch drag. The divider is keyboard-accessible
 * via arrow keys.
 */
export function ComparisonSlider({
  left,
  right,
  initialPosition = 50,
  leftLabel,
  rightLabel,
  className = '',
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging) return;

      if ('touches' in e && e.touches.length > 0) {
        const touch = e.touches[0];
        if (touch) updatePosition(touch.clientX);
      } else if ('clientX' in e) {
        updatePosition(e.clientX);
      }
    },
    [isDragging, updatePosition],
  );

  const startDrag = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      setIsDragging(true);
      // Immediately update position on the initial press.
      if ('touches' in e && e.touches.length > 0) {
        const touch = e.touches[0];
        if (touch) updatePosition(touch.clientX);
      } else if ('clientX' in e) {
        updatePosition(e.clientX);
      }
    },
    [updatePosition],
  );

  const stopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 2;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    }
  }, []);

  const hasLabels = Boolean(leftLabel || rightLabel);

  return (
    <div className={`flex flex-col ${className}`.trim()}>
      {/* Label tabs, sitting flush on the frame's top edge. No gap, and the
          frame squares off its top corners so the tabs read as attached. */}
      {hasLabels && (
        <div className="flex items-end justify-between">
          {leftLabel}
          {rightLabel}
        </div>
      )}

      {/* Slider container */}
      <div
        ref={containerRef}
        className={`relative aspect-[5/2] w-full overflow-hidden select-none ${
          hasLabels ? 'rounded-b-2xl' : 'rounded-2xl'
        }`}
        onMouseMove={onPointerMove}
        onMouseUp={stopDrag}
        onTouchMove={onPointerMove}
        onTouchEnd={stopDrag}
      >
        {/* Left panel — base layer, fully visible underneath. */}
        <div className="absolute left-0 top-0 w-full h-full select-none">{left}</div>

        {/* Right panel — overlaid at z-10, clipped from the left. */}
        <div
          className="absolute left-0 top-0 z-10 w-full h-full select-none"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          {right}
        </div>

        {/* Divider line */}
        <div
          className="bg-white/50 h-full w-1 absolute z-20 top-0 -ml-[2px] select-none"
          style={{ left: `${position}%` }}
        >
          {/* Handle — vertical pill with grip icon */}
          <button
            type="button"
            aria-label="Drag to compare"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            role="slider"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            onMouseUp={stopDrag}
            onTouchEnd={stopDrag}
            className="bg-white/90 rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            {/* GripVertical equivalent — 6 dots in a 2×3 grid */}
            <svg
              className="h-4 w-4 text-[#0b0d0e] select-none"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <circle cx="9" cy="6" r="1.5" />
              <circle cx="15" cy="6" r="1.5" />
              <circle cx="9" cy="12" r="1.5" />
              <circle cx="15" cy="12" r="1.5" />
              <circle cx="9" cy="18" r="1.5" />
              <circle cx="15" cy="18" r="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
