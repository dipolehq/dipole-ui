import iamForAgentLeftImg from '@assets/images/product_agents/iam_for_agent_left.png';
import iamForAgentRightImg from '@assets/images/product_agents/iam_for_agent_right.png';
import managementConsoleImg from '@assets/images/product_agents/iam_for_agents__management_console.png';
import { ComparisonSlider } from '@components/ui/ComparisonSlider';
import { ValueCard } from '@components/ui/ValueCard';

import { AGENT_FEATURES } from './content';

/**
 * "IAM for Agents" product page. A white intro section with the flickering
 * backdrop, heading, copy and before/after comparison slider, followed by a
 * dark features section.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function IamForAgentsPage() {
  return (
    <>
      <section className="relative w-full bg-[#f9f7f3] overflow-hidden">
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
                <span className="inline-flex items-center px-6 py-2.5 rounded-t-xl bg-[#ffffff] text-[0.95rem] font-normal tracking-[-0.01em] text-black">
                  Before Dipole
                </span>
              }
              rightLabel={
                <span className="inline-flex items-center px-6 py-2.5 rounded-t-xl bg-white text-[0.95rem] font-normal tracking-[-0.01em] text-[#0b0d0e]">
                  After Dipole
                </span>
              }
              left={
                <div className="w-full h-full bg-[#ffffff] flex items-center justify-center p-6">
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
                    className="block w-full h-full object-contain pointer-events-none select-none scale-105 translate-x-2 -translate-y-1"
                  />
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Features section. */}
      <section className="relative w-full min-h-[60vh] py-16 bg-[#1C3B37] overflow-hidden">
        <div className="relative z-10 w-full px-[2.5%]">
          <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
            Every Agent. Every Request. Secured.
          </h2>

          <div className="mt-10 flex items-start gap-8">
            <div className="w-[30%] shrink-0">
              <p className="m-0 mb-5 text-[0.92rem] font-light leading-[1.75] text-white/55 text-left">
                Dipole's management console gives you complete visibility and end-to-end auditability of every action performed by your agentic stack across your systems.
              </p>
              <p className="m-0 mb-4 text-[0.92rem] font-normal leading-[1.75] text-white/85 text-left">
                Discover which agent, acting on behalf of which user, accessed which MCP servers and resources, under what conditions, and when.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-4 px-6 py-3 text-[0.9rem] font-medium text-[#0b0d0e] bg-white rounded-lg no-underline transition-opacity duration-200 hover:opacity-80"
              >
                See How It Works
              </a>
            </div>

            <div className="flex-1 min-w-0">
              <img
                src={managementConsoleImg}
                alt="Dipole management console showing agent identities, policies and audit logs"
                width={2048}
                height={1071}
                className="block w-full h-auto aspect-[2048/1071] pointer-events-none select-none"
                draggable={false}
              />
            </div>
          </div>

          <h2 className="m-0 mt-12 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
            Features of IAM for Agentic AI
          </h2>

          {/* auto-rows keeps every card the same fixed height across both rows,
              matching the value proposition grid on the landing page. */}
          <div className="grid grid-cols-3 gap-5 auto-rows-[300px]">
            {AGENT_FEATURES.map((feature) => (
              <ValueCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={
                  <img
                    src={feature.icon}
                    alt=""
                    width="56"
                    height="56"
                    className="w-full h-full object-contain"
                  />
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing light section — content to follow. */}
      <section className="relative w-full min-h-[60vh] py-16 bg-[#f9f7f3] overflow-hidden">
        <div className="relative z-10 w-full px-[2.5%]" />
      </section>
    </>
  );
}
