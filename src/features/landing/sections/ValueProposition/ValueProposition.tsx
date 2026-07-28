import wormholeImg from '@assets/images/wormhole.png';
import { ValueCard } from '@components/ui/ValueCard';

import { EXECUTION_EDGE, TECHNICAL_EDGE, type ValuePropositionCard } from './content';

/**
 * Layered mask that fades the wormhole backdrop out on every edge so it blends
 * into the section background instead of ending abruptly.
 */
const WORMHOLE_MASK =
  '[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_15%,rgba(0,0,0,0.7)_35%,black_55%),linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.2)_80%,transparent_100%),linear-gradient(to_left,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%),linear-gradient(to_top,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_15%,rgba(0,0,0,0.7)_35%,black_55%),linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.2)_80%,transparent_100%),linear-gradient(to_left,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%),linear-gradient(to_top,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%)] [-webkit-mask-composite:source-in]';

const CARD_GROUPS: { label: string; cards: ValuePropositionCard[]; className: string }[] = [
  { label: 'Execution Edge', cards: EXECUTION_EDGE, className: 'px-[2.5%]' },
  { label: 'Technical Edge', cards: TECHNICAL_EDGE, className: 'px-[2.5%] mt-12' },
];

/**
 * Value proposition section — positioning statement followed by the execution
 * and technical edge card grids, over a masked wormhole backdrop.
 */
export function ValueProposition() {
  return (
    <section className="relative w-full py-12 pb-20 bg-[#0b0d0e] overflow-hidden">
      {/* Wormhole background image */}
      <img
        className={`absolute -top-[5%] -right-[5%] w-[65%] h-auto pointer-events-none select-none opacity-85 ${WORMHOLE_MASK}`}
        src={wormholeImg}
        alt=""
        aria-hidden="true"
        draggable={false}
      />

      <div className="relative w-full max-w-full mx-auto">
        <h2 className="m-0 mb-10 px-[2.5%] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
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

        {/* Cards */}
        <div className="pt-48">
          {CARD_GROUPS.map((group) => (
            <div key={group.label} className={group.className}>
              <h3 className="m-0 mb-5 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-white/40">
                {group.label}
              </h3>
              <div className="grid grid-cols-3 gap-5 grid-rows-[320px]">
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
