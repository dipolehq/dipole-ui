/**
 * Shared "Ready to Get Started?" CTA section.
 *
 * Used on the landing page and all use-case pages as the closing call-to-action.
 * Responsive: consistent container padding at all breakpoints.
 */
export function ReadyToStart() {
  return (
    <section className="w-full py-12 sm:py-16 bg-off-white">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
        <h2 className="m-0 text-2xl sm:text-3xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight tracking-tight text-ink">
          Ready to Get Started?
        </h2>

        <p className="m-0 mt-4 sm:mt-5 max-w-2xl text-sm sm:text-[0.95rem] font-light leading-relaxed text-ink/60">
          Legacy identity and credential management creates vulnerabilities that
          scale with your infrastructure. Secure every workload connection and
          streamline your access governance with Dipole. Start managing access the
          way it should have always worked.
        </p>

        <a
          href="#"
          className="inline-flex items-center mt-6 sm:mt-7 px-5 sm:px-6 py-3 text-sm font-medium text-white bg-brand-green rounded-lg no-underline transition-opacity duration-200 hover:opacity-85"
        >
          Talk To Team
        </a>
      </div>
    </section>
  );
}
