import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@app/router/routes';
import { Brand } from '@components/ui/Brand';
import { MobileMenu } from '@components/layout/MobileMenu';
import { MorphingNavMenu } from '@components/ui/MorphingNavMenu';

import { PRODUCT_COLUMNS, USE_CASE_COLUMNS } from './navItems';

/**
 * Top navigation bar.
 *
 * Desktop (lg+): Brand | morphing mega-menu + links | CTAs
 * Mobile (<lg): Brand | hamburger → full-screen overlay with accordion nav
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-brand-green"
        aria-label="Main navigation"
      >
        {/* Left — Brand */}
        <div className="flex items-center shrink-0">
          <Brand />
        </div>

        {/* Center — Desktop navigation (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-1">
          <MorphingNavMenu
            items={[
              { label: 'Product', columns: PRODUCT_COLUMNS },
              { label: 'Use Cases', columns: USE_CASE_COLUMNS },
            ]}
          />

          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-normal tracking-tight text-white/50 no-underline rounded-lg transition-colors duration-200 hover:text-white"
          >
            Docs
          </a>
          <Link
            to={ROUTES.pricing}
            className="inline-flex items-center px-4 py-2 text-sm font-normal tracking-tight text-white/50 no-underline rounded-lg transition-colors duration-200 hover:text-white"
          >
            Pricing
          </Link>
        </div>

        {/* Right — Desktop CTAs (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center h-10 px-4 text-sm font-medium text-white/55 bg-transparent border border-white/15 rounded-lg cursor-pointer transition-colors duration-200 hover:text-white"
          >
            Talk To Team
          </button>
          <button
            type="button"
            className="inline-flex items-center h-10 px-4 text-sm font-medium text-black/70 bg-white border-none rounded-lg cursor-pointer transition-colors duration-200 hover:text-black"
          >
            Request Dipole Tenant
          </button>
        </div>

        {/* Right — Hamburger (visible on mobile only) */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="flex lg:hidden items-center justify-center w-11 h-11 text-white bg-transparent border-none cursor-pointer rounded-lg"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navGroups={[
          { label: 'Product', columns: PRODUCT_COLUMNS },
          { label: 'Use Cases', columns: USE_CASE_COLUMNS },
        ]}
      />
    </>
  );
}
