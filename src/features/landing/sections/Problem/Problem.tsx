import leftProblemImg from '@assets/images/left_problem.png';
import rightProblemImg from '@assets/images/right_problem.png';
import { ComparisonSlider } from '@components/ui/ComparisonSlider';

import { CapabilityPanel } from './CapabilityPanel';

/**
 * Problem statement section — contrasts solved human identity against
 * unmanaged machine identity via a draggable comparison.
 *
 * The slider is best experienced on tablet+ screens. On mobile it still works
 * but the content inside is dense — the panels scale down proportionally.
 */
export function Problem() {
  return (
    <section className="relative w-full py-10 sm:py-16 bg-brand-green overflow-hidden">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
        <h2 className="m-0 mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-white tracking-tight">
          Identity for Humans Exists. Identity for Machines Doesn't.
        </h2>

        <div className="w-full lg:w-2/3 mb-4 sm:mb-6">
          <p className="m-0 text-sm sm:text-[0.92rem] font-normal leading-relaxed text-white/85 text-left">
            Your agents and workloads need what your employees already have: verified identity, enforced policy, and complete attribution. Not better secret management. No secrets at all.
          </p>
        </div>

        <div className="mt-4">
          <ComparisonSlider
            leftLabel={
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-t-xl bg-white text-xs sm:text-[0.95rem] font-normal tracking-tight text-ink">
                Human Identities
              </span>
            }
            rightLabel={
              <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-t-xl bg-white text-xs sm:text-[0.95rem] font-normal tracking-tight text-brand-green">
                Agent Identities
              </span>
            }
            left={
              <div className="w-full h-full bg-white flex items-stretch p-2 sm:p-4">
                <div className="w-[55%] h-full flex items-center justify-center pr-[2%]">
                  <img
                    src={leftProblemImg}
                    alt="Human access management — solved"
                    className="h-[90%] object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                </div>

                <CapabilityPanel
                  surface="light"
                  marker="tick"
                  eyebrow="Solved"
                  intro="Every employee login is verified, enforced by policy, and recorded for audit. This side is a solved problem."
                />
              </div>
            }
            right={
              <div className="w-full h-full bg-white flex items-stretch p-2 sm:p-4">
                <CapabilityPanel
                  surface="dark"
                  marker="cross"
                  topInset="pt-[5%]"
                  eyebrow="Unsolved"
                  intro="Thousands of API keys and tokens scattered across vaults, env vars, and config files. No identity attached, no expiry set, no way to know who used them."
                />

                <div className="w-[55%] h-full flex items-center justify-center pl-[2%]">
                  <img
                    src={rightProblemImg}
                    alt="Agent access management — broken"
                    className="h-[90%] object-contain pointer-events-none select-none translate-x-[-2%] translate-y-[0.5%]"
                    draggable={false}
                  />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
