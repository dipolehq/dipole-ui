import { Brand } from '@components/ui/Brand';

/**
 * Site footer: brand lockup, social + policy links, and copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-current/[0.14] pt-12 px-10 pb-10">
      <div className="mb-12">
        <Brand />
      </div>

      <div className="flex justify-between items-center gap-8 text-base">
        <nav className="flex gap-8" aria-label="Social">
          <a href="https://x.com" target="_blank" rel="noreferrer noopener" className="no-underline text-inherit transition-opacity duration-200 hover:opacity-70">
            X
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener" className="no-underline text-inherit transition-opacity duration-200 hover:opacity-70">
            LinkedIn
          </a>
        </nav>

        <nav className="flex gap-8 opacity-60" aria-label="Policies">
          <a href="#privacy" className="no-underline text-inherit transition-opacity duration-200 hover:opacity-70">Privacy Policy</a>
          <a href="#faqs" className="no-underline text-inherit transition-opacity duration-200 hover:opacity-70">FAQs</a>
        </nav>
      </div>

      <p className="mt-5 text-base opacity-60">Dipole &copy; {year}</p>
    </footer>
  );
}
