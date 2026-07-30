import { FlickeringGrid } from '@components/effects/FlickeringGrid';
import { ActionCard } from '@components/ui/ActionCard';

import { IN_ACTION_ITEMS } from './content';

/**
 * "Dipole in Action" section — white surface with dark cards, one per flagship
 * scenario. Closes out the landing page.
 */
export function InAction() {
  return (
    <section className="relative w-full py-16 bg-white">
      {/* Flickering grid backdrop. Absolutely positioned children paint above
          in-flow content, so the content wrapper below needs its own layer. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onLight" />
      </div>

      <div className="relative z-10 w-full max-w-full mx-auto px-[2.5%]">
        <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] text-[#0b0d0e] tracking-[-0.02em]">
          Dipole in Action.
        </h2>

        {/* Fixed row height so all three cards match, matching the treatment
            used by the value proposition grid. */}
        <div className="grid grid-cols-3 gap-5 grid-rows-[220px]">
          {IN_ACTION_ITEMS.map((item) => (
            <ActionCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
