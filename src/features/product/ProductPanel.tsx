import accessPolicyImg from '@assets/access_policy.webp';
import card1Icon from '@assets/card_icons/card1.svg';
import card2Icon from '@assets/card_icons/card2.svg';
import card3Icon from '@assets/card_icons/card3.svg';
import card4Icon from '@assets/card_icons/card4.svg';
import card5Icon from '@assets/card_icons/card5.svg';
import card6Icon from '@assets/card_icons/card6.svg';
import wormholeImg from '@assets/wormhole.png';
import { ValueCard } from '@components/ui/ValueCard';

const EXECUTION_EDGE = [
  {
    title: 'Ship Faster Without Security Tradeoffs',
    description:
      'Deploy new services and agents without waiting for security to provision secrets, rotate keys, or approve service accounts. Developers add one annotation and access is live, governed by policy from day one.',
    icon: card1Icon,
  },
  {
    title: 'Instant Revocation, Zero Blast Radius',
    description:
      'Cut off any workload or agent in seconds by disabling a policy. No secret rotation, no dependency chains, no broken deployments. One identity revoked, everything else untouched.',
    icon: card2Icon,
  },
  {
    title: 'Full Attribution on Every Access Decision',
    description:
      'Know exactly which workload, which agent, and which human triggered every action. Answer compliance questions in seconds, not days. SOC 2 and ISO 27001 ready out of the box.',
    icon: card3Icon,
  },
];

const TECHNICAL_EDGE = [
  {
    title: 'Identity-Based, Not Secret-Based',
    description:
      'Workloads authenticate by proving who they are through their runtime environment: K8s service accounts, cloud metadata, OIDC tokens. No bootstrap secrets, no stored credentials, nothing to leak or rotate.',
    icon: card4Icon,
  },
  {
    title: 'Real-Time Policy Enforcement, Not Static Rules',
    description:
      'Every request is evaluated at the moment it happens against identity, target, time, geography, and posture. Credentials are issued just-in-time with seconds-to-minutes lifetimes. Nothing is pre-provisioned or cached forever.',
    icon: card5Icon,
  },
  {
    title: 'Protocol-Aware, Not Just HTTP',
    description:
      'Injects credentials natively into PostgreSQL, MySQL, Redis, AWS SigV4, mTLS, and MCP tool calls. Not a generic proxy that only understands HTTP headers. Deep protocol intelligence, zero application changes.',
    icon: card6Icon,
  },
];

/**
 * Product panel: white section + dark value proposition section.
 */
export function ProductPanel() {
  return (
    <>
      {/* White section */}
      <section className="relative w-full py-12 bg-white">
        <div className="w-full max-w-full mx-auto">
          <h2 className="m-0 mb-10 px-[2.5%] text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.2] text-[#0b0d0e] tracking-[-0.02em]">
            Dipole is the management console you need.
          </h2>

          <div className="flex items-start gap-8">
            <div className="w-[30%] shrink-0 pl-[2.5%]">
              <p className="m-0 mb-5 text-[0.92rem] font-light leading-[1.75] text-[#0b0d0e]/55 text-left">
                Dipole gives you a single place to define which workloads and agents can
                access which services, how they prove their identity, under what conditions
                access is allowed, and what credentials they receive. All from one console.
              </p>
              <p className="m-0 mb-5 text-[0.92rem] font-light leading-[1.75] text-[#0b0d0e]/55 text-left">
                No more scattered secrets with no owner. No more guessing which service
                account talks to which database. Every identity is registered, every access
                decision is governed by policy, and every action is fully attributed and
                auditable.
              </p>
              <p className="m-0 mb-4 text-[0.92rem] font-normal leading-[1.75] text-[#0b0d0e]/85 text-left">
                When you need to revoke access, you change a policy. Not a secret. Nothing
                else breaks.
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-4 px-6 py-3 text-[0.9rem] font-medium text-white bg-[#0b0d0e] rounded-lg no-underline transition-opacity duration-200 hover:opacity-80"
              >
                See How It Works
              </a>
            </div>

            <div className="flex-1 min-w-0 pr-[2.5%]">
              <img
                className="block w-full h-auto aspect-[1536/650] pointer-events-none select-none"
                src={accessPolicyImg}
                alt="Dipole access policy console"
                width="1536"
                height="650"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark value proposition section */}
      <section className="relative w-full py-12 pb-20 bg-[#0b0d0e] overflow-hidden">
        {/* Wormhole background image */}
        <img
          className="absolute -top-[5%] -right-[5%] w-[65%] h-auto pointer-events-none select-none opacity-85 [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_15%,rgba(0,0,0,0.7)_35%,black_55%),linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.2)_80%,transparent_100%),linear-gradient(to_left,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%),linear-gradient(to_top,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_15%,rgba(0,0,0,0.7)_35%,black_55%),linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.2)_80%,transparent_100%),linear-gradient(to_left,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%),linear-gradient(to_top,black_0%,black_85%,rgba(0,0,0,0.2)_95%,transparent_100%)] [-webkit-mask-composite:source-in]"
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
            <div className="px-[2.5%]">
              <h3 className="m-0 mb-5 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-white/40">
                Execution Edge
              </h3>
              <div className="grid grid-cols-3 gap-5 grid-rows-[320px]">
                {EXECUTION_EDGE.map((card) => (
                  <ValueCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    icon={<img src={card.icon} alt="" width="56" height="56" className="w-full h-full object-contain" />}
                  />
                ))}
              </div>
            </div>

            <div className="px-[2.5%] mt-12">
              <h3 className="m-0 mb-5 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-white/40">
                Technical Edge
              </h3>
              <div className="grid grid-cols-3 gap-5 grid-rows-[320px]">
                {TECHNICAL_EDGE.map((card) => (
                  <ValueCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    icon={<img src={card.icon} alt="" width="56" height="56" className="w-full h-full object-contain" />}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
