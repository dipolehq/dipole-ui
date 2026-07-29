import { FlickeringGrid } from '@components/effects/FlickeringGrid';

import { DifferentiatorTabs } from './DifferentiatorTabs';

/**
 * Differentiators section — fills the viewport below the navbar and hosts the
 * tabbed differentiator browser.
 */
export function Differentiators() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] py-16 bg-white overflow-hidden">
      {/* Flickering grid backdrop. Absolutely positioned children paint above
          in-flow content, so the content wrapper below needs its own layer. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onLight" />
      </div>

      <div className="relative z-10 w-full h-full max-w-full mx-auto px-[2.5%] flex flex-col">
        <h2 className="m-0 mb-12 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-[#0b0d0e] tracking-[-0.02em]">
          What Makes Dipole Different.
        </h2>
        <div className="flex-1 min-h-0">
          <DifferentiatorTabs />
        </div>
      </div>
    </section>
  );
}
