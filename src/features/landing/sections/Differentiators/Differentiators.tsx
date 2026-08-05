import { DifferentiatorTabs } from './DifferentiatorTabs';

/**
 * Differentiators section — fills the viewport below the navbar on desktop,
 * auto-height on mobile. Hosts the tabbed differentiator browser.
 */
export function Differentiators() {
  return (
    <section className="relative w-full min-h-[60vh] lg:h-[calc(100vh-4rem)] py-10 sm:py-16 bg-off-white overflow-hidden">
      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-8 xl:px-[2.5%] flex flex-col">
        <h2 className="m-0 mb-8 sm:mb-12 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-ink tracking-tight">
          What Makes Dipole Different.
        </h2>
        <div className="flex-1 min-h-0">
          <DifferentiatorTabs />
        </div>
      </div>
    </section>
  );
}
