import { ValueCard } from '@components/ui/ValueCard';

import { EXECUTION_EDGE, TECHNICAL_EDGE, type ValuePropositionCard } from './content';

const CARD_GROUPS: { label: string; cards: ValuePropositionCard[]; className: string }[] = [
  { label: 'Execution Edge', cards: EXECUTION_EDGE, className: '' },
  { label: 'Technical Edge', cards: TECHNICAL_EDGE, className: 'mt-8 sm:mt-12' },
];

/**
 * Value proposition section — positioning statement followed by the execution
 * and technical edge card grids.
 * Mobile: single column cards. Desktop: 3-column grid with fixed row height.
 */
export function ValueProposition() {
  return (
    <section className="relative w-full py-10 sm:py-12 pb-16 sm:pb-20 bg-brand-green overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
        <h2 className="m-0 mb-8 sm:mb-10 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-white tracking-tight">
          Dipole's Value Proposition
        </h2>
        <div>
          <p className="m-0 mb-2 text-sm sm:text-[0.92rem] font-normal leading-relaxed text-white/75 text-left">
            Dipole: Secretless Identity & Access Management for Agents & Workloads.
          </p>
          <p className="m-0 text-sm sm:text-[0.92rem] font-light leading-relaxed text-white/55 text-left max-w-2xl">
            It helps enterprises manage and govern how their agents access resources — injecting credentials just-in-time so secrets never touch application code, with a complete audit trail of every action.
          </p>
        </div>

        <div className="pt-10 sm:pt-16">
          {CARD_GROUPS.map((group) => (
            <div key={group.label} className={group.className}>
              <h3 className="m-0 mb-4 sm:mb-5 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-white/40">
                {group.label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-auto lg:auto-rows-[300px]">
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
