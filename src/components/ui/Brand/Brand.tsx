import { Link } from 'react-router-dom';

import logoUrl from '@assets/brand/dipole_logo.svg';

interface BrandProps {
  /** Accessible label + wordmark text. */
  label?: string;
  /** Destination route for the wordmark link. Ignored when `linked` is false. */
  to?: string;
  /**
   * Render as a link. Set false for places where the lockup is decorative and
   * shouldn't be clickable — e.g. the footer, which already links home elsewhere.
   */
  linked?: boolean;
}

const LOCKUP_CLASSES = 'inline-flex items-center gap-[0.7rem] no-underline text-current';

/**
 * Brand lockup: the Dipole logo mark paired with the wordmark. The mark is
 * rendered as a CSS mask filled with `currentColor`, so it inverts to match
 * each panel's foreground color automatically (white on dark, dark on light).
 */
export function Brand({ label = 'Dipole', to = '/', linked = true }: BrandProps) {
  const lockup = (
    <>
      <span
        className="block shrink-0 w-[2.7rem] h-[2.2rem] bg-current [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
        style={{ maskImage: `url(${logoUrl})`, WebkitMaskImage: `url(${logoUrl})` }}
      />
      <span className="font-[var(--font-brand)] text-[1.25rem] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
        {label}
      </span>
    </>
  );

  if (!linked) {
    return <span className={LOCKUP_CLASSES}>{lockup}</span>;
  }

  return (
    <Link to={to} className={LOCKUP_CLASSES} aria-label={label}>
      {lockup}
    </Link>
  );
}
