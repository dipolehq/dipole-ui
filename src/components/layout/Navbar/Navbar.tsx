import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brand } from '@components/ui/Brand';

const USE_CASES = [
  { label: 'AI Agent Security', description: 'Secure every agent-to-service call', href: '#' },
  { label: 'Secret Management', description: 'Zero standing credentials', href: '#' },
  { label: 'Access Governance', description: 'Policy-driven access control', href: '#' },
  { label: 'Compliance & Audit', description: 'Real-time audit trails', href: '#' },
];

/**
 * Top navigation bar.
 * Left: Brand lockup (logo + name)
 * Center: nav links with an animated "Use Cases" dropdown
 * Right: two CTA buttons
 */
export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const openDropdown = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between h-16 px-12 bg-[#0b0d0e] border-b border-white/[0.06]"
      aria-label="Main navigation"
    >
      {/* Left */}
      <div className="flex items-center">
        <Brand />
      </div>

      {/* Center */}
      <div className="flex items-center gap-1">
        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-[0.9rem] font-normal tracking-[0.01em] text-white/50 bg-transparent border-none rounded-lg cursor-pointer transition-colors duration-200 hover:text-white"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((v) => !v)}
          >
            Use Cases
          </button>

          <div
            className={`absolute top-[calc(100%+1rem)] left-1/2 min-w-[240px] p-2.5 bg-[rgba(22,24,26,0.95)] backdrop-blur-[20px] border border-white/[0.07] rounded-[0.875rem] shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-250 ease-out ${
              dropdownOpen
                ? 'opacity-100 visible -translate-x-1/2 translate-y-0 pointer-events-auto'
                : 'opacity-0 invisible -translate-x-1/2 translate-y-1 pointer-events-none'
            }`}
            role="menu"
          >
            <div className="flex flex-col gap-0.5">
              {USE_CASES.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col gap-0.5 px-4 py-3 rounded-[0.6rem] no-underline cursor-pointer transition-colors duration-150 hover:bg-white/[0.06]"
                  role="menuitem"
                >
                  <span className="text-[0.85rem] font-medium text-white">{item.label}</span>
                  <span className="text-[0.75rem] font-light text-white/40">{item.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <a href="#" className="inline-flex items-center px-4 py-2 text-[0.9rem] font-normal tracking-[0.01em] text-white/50 no-underline rounded-lg transition-colors duration-200 hover:text-white">
          Docs
        </a>
        <Link to="/pricing" className="inline-flex items-center px-4 py-2 text-[0.9rem] font-normal tracking-[0.01em] text-white/50 no-underline rounded-lg transition-colors duration-200 hover:text-white">
          Pricing
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center h-[2.375rem] px-[1.15rem] text-[0.85rem] font-[450] tracking-[0.01em] text-white/55 bg-transparent border border-white/15 rounded-lg cursor-pointer transition-colors duration-200 hover:text-white"
        >
          Talk To Team
        </button>
        <button
          type="button"
          className="inline-flex items-center h-[2.375rem] px-[1.15rem] text-[0.85rem] font-medium tracking-[0.01em] text-black/70 bg-white border-none rounded-lg cursor-pointer transition-colors duration-200 hover:text-black"
        >
          Request Dipole Tenant
        </button>
      </div>
    </nav>
  );
}
