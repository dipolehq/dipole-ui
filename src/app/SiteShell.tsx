import { useEffect } from 'react';

import { env } from '@config/env';
import { IntroductionPanel } from '@features/introduction';
import { ProductPanel } from '@features/product';
import { FeaturePanel } from '@features/feature';
import { DifferentiatorTabs } from '@components/ui/DifferentiatorTabs';

/**
 * Top-level shell. Stacks the page sections in scroll order.
 */
export function SiteShell() {
  useEffect(() => {
    document.title = env.appName;
  }, []);

  return (
    <>
      <IntroductionPanel />
      <ProductPanel />
      {/* White section before FeaturePanel */}
      <section className="relative w-full py-16 bg-white">
        <div className="w-full max-w-full mx-auto px-[2.5%]">
          <h2 className="m-0 mb-12 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-[#0b0d0e] tracking-[-0.02em]">
            What Makes Dipole Different.
          </h2>
          <DifferentiatorTabs />
        </div>
      </section>
      <FeaturePanel />
    </>
  );
}
