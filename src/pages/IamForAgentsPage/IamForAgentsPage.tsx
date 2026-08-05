import iamForAgentLeftImg from '@assets/images/product_agents/iam_for_agent_left.png';
import iamForAgentRightImg from '@assets/images/product_agents/iam_for_agent_right.png';
import managementConsoleImg from '@assets/images/product_agents/iam_for_agents__management_console.png';
import { ComparisonSlider } from '@components/ui/ComparisonSlider';
import { ValueCard } from '@components/ui/ValueCard';

import { AGENT_FEATURES } from './content';

/**
 * "IAM for Agents" product page. A white intro section with heading, copy and
 * before/after comparison slider, followed by a dark features section.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function IamForAgentsPage() {
  return (
    <>
      <section className="relative w-full bg-off-white overflow-hidden">
        {/* mt-16 clears the fixed navbar */}
        <div className="relative z-10 mt-16 pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
          <h1 className="m-0 text-2xl sm:text-3xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight tracking-tight text-ink">
            Identity &amp; Access Management for Agents &amp; MCP Servers
          </h1>

          <p className="m-0 mt-4 sm:mt-5 text-sm sm:text-base font-light leading-relaxed text-ink/65">
            Dipole enables you to define and enforce fine-grained access policies for autonomous and interactive AI agents, controlling which MCP servers and enterprise resources they can access, and under what conditions. Manage everything from a centralized control plane with complete visibility and end-to-end auditability.
          </p>

          {/* Comparison slider */}
          <div className="mt-8 sm:mt-10">
            <ComparisonSlider
              leftLabel={
                <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-t-xl bg-white text-sm sm:text-[0.95rem] font-normal tracking-tight text-black">
                  Before Dipole
                </span>
              }
              rightLabel={
                <span className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-t-xl bg-white text-sm sm:text-[0.95rem] font-normal tracking-tight text-ink">
                  After Dipole
                </span>
              }
              left={
                <div className="w-full h-full bg-white flex items-center justify-center p-3 sm:p-6">
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

      {/* Features section */}
      <section className="relative w-full py-12 sm:py-16 bg-brand-green overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-[2.5%]">
          <h2 className="m-0 mb-8 sm:mb-10 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-white tracking-tight">
            Every Agent. Every Request. Secured.
          </h2>

          <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full lg:w-[30%] shrink-0">
              <p className="m-0 mb-4 sm:mb-5 text-[0.92rem] font-light leading-relaxed text-white/55 text-left">
                Dipole's management console gives you complete visibility and end-to-end auditability of every action performed by your agentic stack across your systems.
              </p>
              <p className="m-0 mb-4 text-[0.92rem] font-normal leading-relaxed text-white/85 text-left">
                Discover which agent, acting on behalf of which user, accessed which MCP servers and resources, under what conditions, and when.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-4 px-5 sm:px-6 py-3 text-sm font-medium text-ink bg-white rounded-lg no-underline transition-opacity duration-200 hover:opacity-80"
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

          <h2 className="m-0 mt-10 sm:mt-12 mb-8 sm:mb-10 text-xl sm:text-2xl lg:text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-white tracking-tight">
            Features of IAM for Agentic AI
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto lg:auto-rows-[300px]">
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

      {/* Closing light section */}
      <section className="relative w-full py-12 sm:py-16 bg-off-white overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-[2.5%]" />
      </section>
    </>
  );
}
