import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { NavDropdownColumn } from '@components/ui/NavDropdown';

export interface MorphingNavMenuItem {
  /** Trigger label shown in the navbar. */
  label: string;
  /** Columns rendered inside the panel when this item is active. */
  columns: NavDropdownColumn[];
}

export interface MorphingNavMenuProps {
  items: MorphingNavMenuItem[];
}

/** Grace period before closing so pointer can cross to the panel. */
const CLOSE_DELAY_MS = 180;

/** Panel width, matching the original NavDropdown. */
const PANEL_WIDTH = 'w-[min(880px,calc(100vw-3rem))]';

/**
 * Two-digit index, continuous across all columns.
 */
function formatIndex(n: number): string {
  return String(n).padStart(2, '0');
}

/**
 * Morphing navbar mega-menu. A single shared panel stays mounted while the user
 * moves between triggers. Content slides left/right based on which direction
 * the user moved:
 * - Left → Right (e.g. Product → Use Cases): new content enters from the right
 * - Right → Left (e.g. Use Cases → Product): new content enters from the left
 * - First open: simple fade-in, no directional slide
 */
export function MorphingNavMenu({ items }: MorphingNavMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  /**
   * Direction of the last transition:
   *  0 = first open (fade only)
   *  1 = moved right (new content enters from right)
   * -1 = moved left (new content enters from left)
   */
  const [, setDirection] = useState<-1 | 0 | 1>(0);
  /** Tracks whether we're mid-slide so we can skip transition on first open. */
  const [shouldSlide, setShouldSlide] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

  const cancelClose = useCallback(() => clearTimeout(closeTimer.current), []);

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setActiveIndex(null);
      setDirection(0);
      setShouldSlide(false);
    }, CLOSE_DELAY_MS);
  }, []);

  const closeNow = useCallback(() => {
    clearTimeout(closeTimer.current);
    setActiveIndex(null);
    setDirection(0);
    setShouldSlide(false);
  }, []);

  const handleNavigate = useCallback(
    (href: string) => {
      closeNow();
      if (href.startsWith('/')) {
        navigate(href);
      } else {
        window.location.href = href;
      }
    },
    [closeNow, navigate],
  );

  const activate = useCallback(
    (index: number) => {
      cancelClose();
      setActiveIndex((prev) => {
        if (prev === null) {
          // First open — no slide, just fade.
          setDirection(0);
          setShouldSlide(false);
        } else if (prev !== index) {
          // Switching between triggers — slide.
          setDirection(index > prev ? 1 : -1);
          setShouldSlide(true);
        }
        return index;
      });
    },
    [cancelClose],
  );

  // Clear pending close on unmount.
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Close on Escape or outside click.
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNow();
    };
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) closeNow();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [activeIndex, closeNow]);

  const isOpen = activeIndex !== null;

  return (
    <div
      ref={rootRef}
      className="relative flex items-center gap-1"
      onMouseLeave={scheduleClose}
    >
      {/* Triggers */}
      {items.map((item, index) => (
        <button
          key={item.label}
          type="button"
          onMouseEnter={() => activate(index)}
          onClick={() => activate(index)}
          className={`inline-flex items-center gap-1 px-4 py-2 text-[0.9rem] font-normal tracking-[0.01em] bg-transparent border-none rounded-lg cursor-pointer transition-colors duration-200 ${
            activeIndex === index ? 'text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          {item.label}
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              activeIndex === index ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      ))}

      {/* Shared panel — stays mounted while any trigger is active. */}
      <div
        className={`fixed top-16 left-1/2 ${PANEL_WIDTH} bg-[#1C3B37] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen
            ? 'opacity-100 visible -translate-x-1/2 translate-y-0'
            : 'opacity-0 invisible -translate-x-1/2 -translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {/* Overflow hidden so sliding content doesn't bleed out. */}
        <div className="overflow-hidden relative">
          {items.map((item, index) => {
            const isCurrent = index === activeIndex;

            // Compute transform for this panel.
            // Inactive panels are always positioned based on their index
            // relative to the active one: items to the left sit at -100%,
            // items to the right sit at +100%. This way, when they become
            // active, they slide in from the correct direction.
            let transform = '';
            if (isCurrent) {
              transform = 'translateX(0)';
            } else if (activeIndex !== null) {
              transform = index < activeIndex ? 'translateX(-30%)' : 'translateX(30%)';
            } else {
              transform = 'translateX(30%)';
            }

            return (
              <div
                key={item.label}
                style={{
                  transform,
                  transition: shouldSlide
                    ? 'transform 450ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 350ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                    : 'none',
                }}
                className={`${
                  isCurrent ? 'relative' : 'absolute inset-0'
                } ${isCurrent ? 'opacity-100' : 'opacity-0'}`}
              >
                <PanelContent columns={item.columns} onNavigate={handleNavigate} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Panel content — extracted so it mirrors the existing NavDropdown layout.   */
/* -------------------------------------------------------------------------- */

const GRID_COLUMNS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

interface PanelContentProps {
  columns: NavDropdownColumn[];
  onNavigate: (href: string) => void;
}

function PanelContent({ columns, onNavigate }: PanelContentProps) {
  return (
    <div className={`grid ${GRID_COLUMNS[columns.length] ?? 'grid-cols-2'}`}>
      {columns.map((column, columnIndex) => {
        const offset = columns
          .slice(0, columnIndex)
          .reduce((sum, c) => sum + c.items.length, 0);

        return (
          <div
            key={column.label}
            className={`px-6 py-6 ${
              columnIndex < columns.length - 1 ? 'border-r border-white/10' : ''
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[0.66rem] font-medium tracking-[0.18em] uppercase text-white/50 whitespace-nowrap">
                // {column.label}
              </span>
              <span
                className="flex-1 border-t border-dashed border-white/20"
                aria-hidden="true"
              />
            </div>

            <ul className="m-0 p-0 list-none">
              {column.items.map((item, itemIndex) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    className="group flex items-start gap-3.5 px-2 py-2.5 -mx-2 no-underline rounded-[4px] transition-colors duration-150 hover:bg-white/[0.04]"
                  >
                    <span
                      className="shrink-0 grid place-items-center w-10 h-10 border border-white/20 text-white/80 rounded-[3px] transition-colors duration-150 group-hover:border-white/45"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.9rem] font-semibold leading-[1.35] text-white">
                        {item.title}
                      </span>
                      <span className="block mt-0.5 text-[0.78rem] font-light leading-[1.55] text-white/55">
                        {item.description}
                      </span>
                    </span>

                    <span className="shrink-0 flex flex-col items-end gap-2 pl-1">
                      <span className="font-mono text-[0.62rem] tabular-nums text-white/30">
                        {formatIndex(offset + itemIndex + 1)}
                      </span>
                      {item.cta && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 font-mono text-[0.58rem] font-medium tracking-[0.12em] uppercase text-white/50 border border-white/25 rounded-[2px] whitespace-nowrap transition-colors duration-150 group-hover:border-white/50">
                          {item.cta.label}
                          <span aria-hidden="true">&rarr;</span>
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
