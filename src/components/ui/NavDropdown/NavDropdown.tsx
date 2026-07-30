import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from 'react';

export interface NavDropdownCta {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  title: string;
  description: string;
  href: string;
  /** Small line icon, rendered inside the bordered square. */
  icon: ReactNode;
  /** Optional call to action shown in the item's right rail. */
  cta?: NavDropdownCta;
}

export interface NavDropdownColumn {
  /** Eyebrow label, rendered uppercase after a `//` prefix. */
  label: string;
  items: NavDropdownItem[];
}

/** The panel's own colour — not the surface it sits on. */
export type NavDropdownTheme = 'dark' | 'light';

export interface NavDropdownProps {
  /** Trigger text in the navbar. */
  label: string;
  columns: NavDropdownColumn[];
  /** Panel colour scheme. `dark` blends with the navbar; `light` contrasts hard. */
  theme?: NavDropdownTheme;
  className?: string;
}

/** Grace period before closing, so the pointer can cross from trigger to panel. */
const CLOSE_DELAY_MS = 150;

/** Panel width, capped so it never touches the viewport edges. */
const PANEL_WIDTH = 'w-[min(880px,calc(100vw-3rem))]';

/**
 * Class sets per theme. Written as literal strings because Tailwind only
 * generates utilities it can statically see.
 */
const THEMES: Record<
  NavDropdownTheme,
  {
    panel: string;
    divider: string;
    rule: string;
    iconBox: string;
    title: string;
    description: string;
    index: string;
    row: string;
  }
> = {
  dark: {
    panel: 'bg-[#0b0d0e] shadow-[0_24px_60px_rgba(0,0,0,0.6)]',
    divider: 'border-white/10',
    rule: 'border-white/20',
    iconBox: 'border-white/20 text-white/80 group-hover:border-white/45',
    title: 'text-white',
    description: 'text-white/55',
    index: 'text-white/30',
    row: 'hover:bg-white/[0.04]',
  },
  light: {
    panel: 'bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]',
    divider: 'border-[#0b0d0e]/10',
    rule: 'border-[#0b0d0e]/25',
    iconBox: 'border-[#0b0d0e]/20 text-[#0b0d0e] group-hover:border-[#0b0d0e]/45',
    title: 'text-[#0b0d0e]',
    description: 'text-[#0b0d0e]/55',
    index: 'text-[#0b0d0e]/30',
    row: 'hover:bg-[#0b0d0e]/[0.035]',
  },
};

/**
 * Tailwind needs literal class names to generate utilities, so the column count
 * maps to a fixed set rather than being interpolated.
 */
const GRID_COLUMNS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

/** Two-digit index, continuous across all columns (01, 02 … 05). */
function formatIndex(n: number): string {
  return String(n).padStart(2, '0');
}

/**
 * Navbar mega-menu.
 *
 * Opens on hover or click and closes on pointer-out, Escape, outside click, or
 * item selection. Items are plain links in DOM order, so Tab walks through them
 * naturally, rather than using `role="menu"`, which would imply arrow-key
 * navigation we do not implement.
 */
export function NavDropdown({
  label,
  columns,
  theme = 'dark',
  className = '',
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const t = THEMES[theme];

  const reactId = useId().replace(/:/g, '');
  const triggerId = `navdropdown-trigger-${reactId}`;
  const panelId = `navdropdown-panel-${reactId}`;

  const cancelClose = useCallback(() => clearTimeout(closeTimer.current), []);

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  }, []);

  const closeNow = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpen(false);
  }, []);

  // Clear a pending close on unmount. Read the ref inside the cleanup so it
  // sees the current handle, not the one captured at mount.
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeNow();
    };
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) closeNow();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [open, closeNow]);

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`.trim()}
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        id={triggerId}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center px-4 py-2 text-[0.9rem] font-normal tracking-[0.01em] bg-transparent border-none rounded-lg cursor-pointer transition-colors duration-200 ${
          open ? 'text-white bg-white/[0.06]' : 'text-white/50 hover:text-white'
        }`}
      >
        {label}
      </button>

      {/* Fixed rather than absolute so the panel is centred on the viewport
          independently of where the trigger sits in the navbar. `top-16` matches
          the navbar's h-16. */}
      <div
        id={panelId}
        aria-labelledby={triggerId}
        className={`fixed top-16 left-1/2 ${PANEL_WIDTH} ${t.panel} rounded-b-[3px] transition-all duration-200 ease-out ${
          open
            ? 'opacity-100 visible -translate-x-1/2 translate-y-0'
            : 'opacity-0 invisible -translate-x-1/2 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className={`grid ${GRID_COLUMNS[columns.length] ?? 'grid-cols-2'}`}>
          {columns.map((column, columnIndex) => {
            // Numbering runs continuously across columns.
            const offset = columns
              .slice(0, columnIndex)
              .reduce((sum, c) => sum + c.items.length, 0);

            return (
              <div
                key={column.label}
                className={`px-6 py-6 ${
                  columnIndex < columns.length - 1 ? `border-r ${t.divider}` : ''
                }`}
              >
                {/* Eyebrow, with a dashed rule filling the remaining width. */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[0.66rem] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)] whitespace-nowrap">
                    // {column.label}
                  </span>
                  <span className={`flex-1 border-t border-dashed ${t.rule}`} aria-hidden="true" />
                </div>

                <ul className="m-0 p-0 list-none">
                  {column.items.map((item, itemIndex) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        onClick={closeNow}
                        className={`group flex items-start gap-3.5 px-2 py-2.5 -mx-2 no-underline rounded-[4px] transition-colors duration-150 ${t.row}`}
                      >
                        <span
                          className={`shrink-0 grid place-items-center w-10 h-10 border rounded-[3px] transition-colors duration-150 ${t.iconBox}`}
                          aria-hidden="true"
                        >
                          {item.icon}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span
                            className={`block text-[0.9rem] font-semibold leading-[1.35] ${t.title}`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`block mt-0.5 text-[0.78rem] font-light leading-[1.55] ${t.description}`}
                          >
                            {item.description}
                          </span>
                        </span>

                        <span className="shrink-0 flex flex-col items-end gap-2 pl-1">
                          <span
                            className={`font-mono text-[0.62rem] tabular-nums ${t.index}`}
                          >
                            {formatIndex(offset + itemIndex + 1)}
                          </span>
                          {item.cta && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 font-mono text-[0.58rem] font-medium tracking-[0.12em] uppercase text-[var(--color-accent)] border border-[var(--color-accent)]/50 rounded-[2px] whitespace-nowrap transition-colors duration-150 group-hover:border-[var(--color-accent)]">
                              {item.cta.label}
                              <span aria-hidden="true">→</span>
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

      </div>
    </div>
  );
}
