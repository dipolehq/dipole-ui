import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '@app/router/routes';
import type { NavDropdownColumn } from '@components/ui/NavDropdown';

interface MobileNavGroup {
  label: string;
  columns: NavDropdownColumn[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navGroups: MobileNavGroup[];
}

/**
 * Full-screen mobile navigation overlay.
 *
 * Features:
 * - Animated slide-in from right
 * - Accordion sections for Product / Use Cases
 * - Body scroll lock when open
 * - Closes on Escape, outside click, or route change
 * - 44px minimum touch targets
 * - Accessible: aria-expanded, keyboard navigation
 */
export function MobileMenu({ isOpen, onClose, navGroups }: MobileMenuProps) {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleGroup = useCallback((label: string) => {
    setExpandedGroup((prev) => (prev === label ? null : label));
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-90 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-100 w-[85vw] max-w-sm h-full bg-brand-green overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-end h-16 px-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-11 h-11 text-white bg-transparent border-none cursor-pointer rounded-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 pb-8">
          {/* Accordion groups (Product, Use Cases) */}
          {navGroups.map((group) => (
            <div key={group.label} className="border-b border-white/10">
              <button
                type="button"
                onClick={() => toggleGroup(group.label)}
                aria-expanded={expandedGroup === group.label}
                className="w-full flex items-center justify-between min-h-[44px] py-3 px-2 text-base font-medium text-white bg-transparent border-none cursor-pointer"
              >
                {group.label}
                <svg
                  className={`w-4 h-4 text-white/50 transition-transform duration-300 ${
                    expandedGroup === group.label ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Accordion content */}
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: expandedGroup === group.label ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="pb-3">
                    {group.columns.map((col) => (
                      <div key={col.label} className="mb-3">
                        <span className="block px-2 py-1 text-xs font-medium tracking-wider uppercase text-white/40">
                          {col.label}
                        </span>
                        {col.items.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={(e) => {
                              if (item.href.startsWith('/')) {
                                e.preventDefault();
                                onClose();
                                navigate(item.href);
                              }
                            }}
                            className="flex items-center gap-3 min-h-[44px] px-2 py-2 text-sm font-normal text-white/80 no-underline rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <span className="shrink-0 w-8 h-8 grid place-items-center border border-white/20 rounded text-white/70">
                              {item.icon}
                            </span>
                            <span>{item.title}</span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Simple links */}
          <a
            href="#"
            className="flex items-center min-h-[44px] py-3 px-2 text-base font-medium text-white no-underline border-b border-white/10"
          >
            Docs
          </a>
          <Link
            to={ROUTES.pricing}
            onClick={onClose}
            className="flex items-center min-h-[44px] py-3 px-2 text-base font-medium text-white no-underline border-b border-white/10"
          >
            Pricing
          </Link>

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              className="w-full min-h-[44px] px-4 text-sm font-medium text-white/80 bg-transparent border border-white/20 rounded-lg cursor-pointer transition-colors hover:text-white hover:border-white/40"
            >
              Talk To Team
            </button>
            <button
              type="button"
              className="w-full min-h-[44px] px-4 text-sm font-medium text-brand-green bg-white border-none rounded-lg cursor-pointer transition-opacity hover:opacity-90"
            >
              Request Dipole Tenant
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
