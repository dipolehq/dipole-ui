import iamForAgentLeftImg from '@assets/images/product_agents/iam_for_agent_left.png';
import iamForAgentRightImg from '@assets/images/product_agents/iam_for_agent_right.png';
import { FlickeringGrid } from '@components/effects/FlickeringGrid';
import { ComparisonSlider } from '@components/ui/ComparisonSlider';

/**
 * "IAM for Agents" product page. Scaffold for now: a white intro section with
 * the flickering backdrop, heading, copy and comparison slider, followed by a
 * dark section.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function IamForAgentsPage() {
  return (
    <>
      <section className="relative w-full bg-white overflow-hidden">
        {/* Decorative backdrop. The navbar is fixed and opaque, so it renders
            above this. */}
        <div className="absolute inset-0 z-0">
          <FlickeringGrid theme="onLight" />
        </div>

        {/* mt-16 clears the fixed navbar; pt-10 is the heading's own breathing room. */}
        <div className="relative z-10 mt-16 pt-10 pb-16 px-[2.5%]">
          <h1 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            Identity &amp; Access Management for Agents &amp; MCP Servers
          </h1>

          <p className="m-0 mt-5 text-[1rem] font-light leading-[1.7] text-[#0b0d0e]/65">
            Dipole enables you to define and enforce fine-grained access policies for autonomous and interactive AI agents, controlling which MCP servers and enterprise resources they can access, and under what conditions. Manage everything from a centralized control plane with complete visibility and end-to-end auditability.
          </p>

          {/* Comparison slider. `left` is the base layer; `right` overlays it and
              is clipped from the left as the handle moves. */}
          <div className="mt-10">
            <ComparisonSlider
              // Tabs are styled to match the panel each one labels, so they read
              // as attached to their own half of the comparison.
              leftLabel={
                <span className="inline-flex items-center px-6 py-2.5 rounded-t-xl bg-[#1a1d20] text-[0.95rem] font-normal tracking-[-0.01em] text-white">
                  Before Dipole
                </span>
              }
              rightLabel={
                <span className="inline-flex items-center px-6 py-2.5 rounded-t-xl bg-white border-t border-x border-[#0b0d0e]/15 text-[0.95rem] font-normal tracking-[-0.01em] text-[#0b0d0e]">
                  After Dipole
                </span>
              }
              left={
                <div className="w-full h-full bg-[#1a1d20] flex items-center justify-center p-6">
                  <img
                    src={iamForAgentLeftImg}
                    alt="Agent access without Dipole"
                    width={2642}
                    height={1042}
                    draggable={false}
                    className="block max-w-full max-h-full object-contain pointer-events-none select-none"
                  />
                </div>
              }
              right={
                <div className="w-full h-full bg-white flex items-center justify-center p-1">
                  <img
                    src={iamForAgentRightImg}
                    alt="Agent access governed by Dipole"
                    width={3872}
                    height={1633}
                    draggable={false}
                    className="block w-full h-full object-contain pointer-events-none select-none scale-105"
                  />
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Dark section — content to follow. */}
      <section className="relative w-full min-h-[60vh] py-16 bg-[#0b0d0e] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FlickeringGrid theme="onDark" />
        </div>
      </section>
    </>
  );
}
