import { Link } from 'react-router-dom';

import footerArt from '@assets/images/footer.avif';
import { Brand } from '@components/ui/Brand';

import { FOOTER_COLUMNS } from './content';

/**
 * Site footer. Dark surface with the brand lockup and copyright on the left,
 * link columns on the right, and the ASCII artwork bleeding off the bottom edge.
 *
 * Mobile: stacks vertically — brand on top, columns in a 2x2 grid below.
 * Desktop: horizontal row — brand left, columns right.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-brand-green text-white overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 pt-10 sm:pt-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Brand + copyright */}
          <div className="shrink-0">
            <Brand linked={false} />
            <p className="m-0 mt-4 text-xs font-light leading-relaxed text-white/40">
              &copy; {year} Dipole, Inc. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:flex sm:gap-14">
            {FOOTER_COLUMNS.map((column) => (
              <nav key={column.label} aria-label={column.label}>
                <h3 className="m-0 mb-3 sm:mb-4 font-mono text-[0.62rem] font-medium tracking-widest uppercase text-white/35">
                  {column.label}
                </h3>
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-sm font-light text-white/70 no-underline transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-sm font-light text-white/70 no-underline transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm font-light text-white/70 no-underline transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Artwork — full bleed at the bottom */}
      <img
        src={footerArt}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="relative z-10 block w-full h-auto mt-8 sm:mt-10 pointer-events-none select-none"
      />
    </footer>
  );
}
