import { ValueCard } from '@components/ui/ValueCard';

import { EXECUTION_EDGE, TECHNICAL_EDGE, type ValuePropositionCard } from './content';

const CARD_GROUPS: { label: string; cards: ValuePropositionCard[]; className: string }[] = [
  { label: 'Execution Edge', cards: EXECUTION_EDGE, className: 'px-[2.5%]' },
  { label: 'Technical Edge', cards: TECHNICAL_EDGE, className: 'px-[2.5%] mt-12' },
];

/**
 * Value proposition section — positioning statement followed by the execution
 * and technical edge card grids.
 */
export function ValueProposition() {
  return (
    <section className="relative w-full py-12 pb-20 bg-[#1C3B37] overflow-hidden">
      <div className="relative z-10 w-full max-w-full mx-auto">
        <h2 className="m-0 mb-10 px-[2.5%] text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
          Dipole's Value Proposition
        </h2>
        <div className="pl-[2.5%]">
          <p className="m-0 mb-2 text-[0.92rem] font-normal leading-[1.75] text-white/75 text-left whitespace-nowrap">
            Dipole: Secretless Identity & Access Management for Agents & Workloads.
          </p>
          <p className="m-0 text-[0.92rem] font-light leading-[1.75] text-white/55 text-left max-w-[680px]">
            It helps enterprises manage and govern how their agents access resources — injecting credentials just-in-time so secrets never touch application code, with a complete audit trail of every action.
          </p>
        </div>

        {/* Cards. The gap here was sized to clear the wormhole render above; it
            now only needs to separate the cards from the intro copy. */}
        <div className="pt-16">
          {CARD_GROUPS.map((group) => (
            <div key={group.label} className={group.className}>
              <h3 className="m-0 mb-5 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-white/40">
                {group.label}
              </h3>
              {/* Fixed row height so every card across both groups is identical.
                  Sized to fit the longest card's copy snugly — was 320px, which
                  left dead space under the shorter cards. */}
              <div className="grid grid-cols-3 gap-5 grid-rows-[300px]">
                {group.cards.map((card) => (
                  <ValueCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    icon={<img src={card.icon} alt="" width="56" height="56" className="w-full h-full object-contain" />}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
