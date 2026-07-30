import footerArt from '@assets/images/footer.avif';
import { FlickeringGrid } from '@components/effects/FlickeringGrid';
import { Brand } from '@components/ui/Brand';

import { FOOTER_COLUMNS } from './content';

/**
 * Site footer. Dark surface with the brand lockup and copyright on the left,
 * link columns on the right, and the ASCII artwork bleeding off the bottom edge.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0b0d0e] text-white overflow-hidden">
      {/* Flickering grid backdrop — behind both the links and the artwork. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onDark" />
      </div>

      {/* px-12 matches the navbar's horizontal padding so the footer brand
          lockup lines up exactly with the one in the header. */}
      <div className="relative z-10 px-12 pt-14">
        <div className="flex items-start justify-between gap-12">
          {/* Brand + copyright */}
          <div className="shrink-0">
            <Brand linked={false} />
            <p className="m-0 mt-4 text-[0.78rem] font-light leading-[1.6] text-white/40 whitespace-nowrap">
              &copy; {year} Dipole, Inc. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-14">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.label} aria-label={column.label}>
                <h3 className="m-0 mb-4 font-mono text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/35">
                  {column.label}
                </h3>
                <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: '_blank', rel: 'noreferrer noopener' }
                          : {})}
                        className="text-[0.85rem] font-light text-white/70 no-underline transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Artwork sits below the content and bleeds to the bottom edge. Lifted
          above the grid so the texture doesn't read through the ASCII art. */}
      <img
        src={footerArt}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="relative z-10 block w-full h-auto mt-10 pointer-events-none select-none"
      />
    </footer>
  );
}
