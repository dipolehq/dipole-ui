import { Link } from 'react-router-dom';

import { ROUTES } from '@app/router/routes';
import { Brand } from '@components/ui/Brand';
import { MorphingNavMenu } from '@components/ui/MorphingNavMenu';

import { PRODUCT_COLUMNS, USE_CASE_COLUMNS } from './navItems';

/**
 * Top navigation bar.
 * Left: Brand lockup (logo + name)
 * Center: nav links, with a morphing mega-menu for Product + Use Cases
 * Right: two CTA buttons
 */
export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between h-16 px-12 bg-[#1C3B37]"
      aria-label="Main navigation"
    >
      {/* Left */}
      <div className="flex items-center">
        <Brand />
      </div>

      {/* Center */}
      <div className="flex items-center gap-1">
        <MorphingNavMenu
          items={[
            { label: 'Product', columns: PRODUCT_COLUMNS },
            { label: 'Use Cases', columns: USE_CASE_COLUMNS },
          ]}
        />

        <a href="#" className="inline-flex items-center px-4 py-2 text-[0.9rem] font-normal tracking-[0.01em] text-white/50 no-underline rounded-lg transition-colors duration-200 hover:text-white">
          Docs
        </a>
        <Link to={ROUTES.pricing} className="inline-flex items-center px-4 py-2 text-[0.9rem] font-normal tracking-[0.01em] text-white/50 no-underline rounded-lg transition-colors duration-200 hover:text-white">
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
