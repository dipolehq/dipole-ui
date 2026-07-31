import leftProblemImg from '@assets/images/left_problem.png';
import rightProblemImg from '@assets/images/right_problem.png';
import { FlickeringGrid } from '@components/effects/FlickeringGrid';
import { ComparisonSlider } from '@components/ui/ComparisonSlider';

import { CapabilityPanel } from './CapabilityPanel';

/**
 * Problem statement section — contrasts solved human identity against
 * unmanaged machine identity via a draggable comparison.
 *
 * Both halves use the same layout: diagram on the outer edge, copy column on the
 * inner edge, so the two sides read as a like-for-like comparison.
 */
export function Problem() {
  return (
    <section className="relative w-full py-16 bg-[#0b0d0e] overflow-hidden">
      {/* Flickering grid backdrop — sits behind the content. */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid theme="onDark" />
      </div>

      <div className="relative z-10 w-full px-[2.5%]">
        <h2 className="m-0 mb-6 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
          Identity for Humans Exists. Identity for Machines Doesn't.
        </h2>

        <div className="w-2/3 mb-6">
          <p className="m-0 text-[0.92rem] font-normal leading-[1.75] text-white/85 text-left">
            Your agents and workloads need what your employees already have: verified identity, enforced policy, and complete attribution. Not better secret management. No secrets at all.
          </p>
        </div>

        <div className="mt-4">
          <ComparisonSlider
            // Tabs are styled to match the panel each one labels, so they read as
            // attached to their own half of the comparison.
            leftLabel={
              <span className="inline-flex items-center px-6 py-2.5 rounded-t-xl bg-white text-[0.95rem] font-normal tracking-[-0.01em] text-[#0b0d0e]">
                Human Identities
              </span>
            }
            rightLabel={
              <span className="inline-flex items-center px-6 py-2.5 rounded-t-xl bg-[#1a1d20] border-t border-x border-white/15 text-[0.95rem] font-normal tracking-[-0.01em] text-white">
                Agent Identities
              </span>
            }
            left={
              // items-stretch so the copy column can top-align with the diagram;
              // items-center would vertically centre it instead.
              <div className="w-full h-full bg-white flex items-stretch p-4">
                <div className="w-1/2 h-full flex items-center justify-center pr-[3%]">
                  <img
                    src={leftProblemImg}
                    alt="Human access management — solved"
                    className="h-full object-contain pointer-events-none select-none"
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
              <div className="w-full h-full bg-[#1a1d20] flex items-stretch p-4">
                <CapabilityPanel
                  surface="dark"
                  marker="cross"
                  topInset="pt-[5%]"
                  eyebrow="Unsolved"
                  intro="Thousands of API keys and tokens scattered across vaults, env vars, and config files. No identity attached, no expiry set, no way to know who used them."
                />

                <div className="w-1/2 h-full flex items-center justify-center pl-[3%]">
                  <img
                    src={rightProblemImg}
                    alt="Agent access management — broken"
                    className="h-full object-contain pointer-events-none select-none translate-x-[-3.5%] translate-y-[0.5%]"
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
