import { useState } from 'react';
import { OrbitingLogos } from '@components/effects/OrbitingLogos';

const TABS = ['Engineering', 'Security'] as const;
type Tab = (typeof TABS)[number];

const FEATURES: Record<Tab, { title: string; description: string }[]> = {
  Engineering: [
    {
      title: 'Zero Auth Code, Full Speed',
      description:
        'Stop writing authentication logic into every service. Dipole handles access at the infrastructure layer so developers focus on features, not credentials. One annotation to secure a workload. Done.',
    },
    {
      title: 'Credentials That Manage Themselves',
      description:
        'Every credential is issued just-in-time, scoped to a single request, and expires automatically. No rotation scripts, no vault integrations, no "who owns this secret" Slack threads.',
    },
    {
      title: 'Every Cloud, Every Protocol, No Exceptions',
      description:
        'Kubernetes, VMs, Lambda, CI/CD. HTTP, PostgreSQL, MySQL, Redis, AWS, MCP. One system that works wherever your workloads run and whatever they talk to. No rewrites when you switch platforms.',
    },
  ],
  Security: [
    {
      title: 'Policy-Driven Access Control for Every Identity',
      description:
        'Define who can access what, under which conditions, and enforce it in real time on every request. Deny by default. No exceptions, no workarounds, no shadow access through forgotten service accounts.',
    },
    {
      title: 'Complete Audit Trail With Full Attribution',
      description:
        'Every access decision is logged with which identity, which target, which policy matched, and whether access was granted or denied. Know exactly which agent acted on behalf of which user, instantly.',
    },
    {
      title: 'Eliminate Credential Exposure Entirely',
      description:
        'No long-lived secrets in your environment means nothing to leak, nothing to rotate, and zero blast radius if infrastructure is compromised. Credentials exist only in memory for the duration of a single request.',
    },
  ],
};

/**
 * Feature panel: tabbed feature list on the left, orbiting logos anchored
 * to the top-right corner of the section.
 */
export function FeaturePanel() {
  const [activeTab, setActiveTab] = useState<Tab>('Engineering');

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] py-16 bg-[#0b0d0e] overflow-hidden -mt-px">
      {/* Orbiting logos — absolutely positioned to section's top-right corner */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none">
        <OrbitingLogos />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-full mx-auto px-[2.5%]">
        <h2 className="m-0 mb-12 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-white tracking-[-0.02em]">
          Speedup AI Adoption With Dipole
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-[0.9rem] font-medium rounded-full cursor-pointer transition-colors duration-200 border-none ${
                activeTab === tab
                  ? 'bg-white text-[#0b0d0e]'
                  : 'bg-white/10 text-white/70 hover:bg-white/15'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-10 max-w-[620px]">
          {FEATURES[activeTab].map((feature) => (
            <div key={feature.title} className="flex items-start gap-6">
              {/* Checkmark icon */}
              <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/15">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h3 className="m-0 mb-2 text-[1.2rem] font-semibold text-white leading-[1.3]">
                  {feature.title}
                </h3>
                <p className="m-0 text-[0.92rem] font-light leading-[1.75] text-white/55">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
