import nhiAccessImg from '@assets/images/usecases/nhi/nhi-access.svg';
import nhiAccessDipoleImg from '@assets/images/usecases/nhi/nhi-access-dipole.svg';
import nhiSecretsImg from '@assets/images/usecases/nhi/nhi-secrets.svg';
import card5Icon from '@assets/icons/cards/card5.svg';
import card2Icon from '@assets/icons/cards/card2.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';
import noCodeIcon from '@assets/icons/cards/no-code.svg';
import { UseCaseCard } from '@components/ui/UseCaseCard';

/**
 * "Secure Non-Human Identities" use case page.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function SecureNhiPage() {
  return (
    <>
      <section className="relative w-full bg-[#f9f7f3] overflow-hidden">
        {/* mt-16 clears the fixed navbar. The section fills exactly one viewport
            below the navbar so the green section starts right on scroll. */}
        <div className="mt-16 h-[calc(100vh-4rem)] flex flex-col px-[2.5%] pt-10">
          <h1 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            Secure Every Machine-to-Machine Connection
          </h1>

          <p className="m-0 mt-5 text-[1rem] font-light leading-[1.7] text-[#0b0d0e]/65">
            Your infrastructure runs on thousands of non-human identities making millions of connections. Dipole ensures every one of them is authenticated, authorized, and auditable.
          </p>

          <div className="flex-1 min-h-0 flex items-center justify-center">
            <img
              src={nhiAccessImg}
              alt="Non-human identity access secured by Dipole"
              className="block w-[80%] max-h-full h-auto object-contain"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Problem statement section */}
      <section className="w-full py-16 bg-[#1C3B37]">
        <div className="px-[2.5%] flex items-center gap-10">
          <div className="w-1/2 shrink-0">
            <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-white whitespace-nowrap">
              Machine Identities Are Your Fastest Growing Attack Surface.
            </h2>

            <p className="m-0 text-[0.95rem] font-light leading-[1.75] text-white/60">
              Non-human identities are the foundation of modern infrastructure. Every microservice, every serverless function, every scheduled job, and every integration is a machine identity making privileged decisions at scale.
            </p>

            <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-white/60">
              As these identities multiply, so does the risk. They communicate across cloud providers, third-party platforms, databases, and internal services, each requiring distinct credentials and access patterns. Traditional security tools were built for human users and static environments. They cannot govern a landscape where non-human identities outnumber engineers by orders of magnitude and change with every deployment.
            </p>
          </div>

          <div className="flex-1 min-w-0 flex items-center justify-center">
            <img
              src={nhiSecretsImg}
              alt="Non-human identity attack surface"
              className="block w-[55%] h-auto object-contain translate-y-15"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section className="w-full py-16 bg-[#f9f7f3]">
        <div className="px-[2.5%]">
          <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            How Dipole Secures Every Machine-to-Machine Connection
          </h2>

          <div className="flex items-start gap-10">
            <div className="w-[45%] shrink-0">
              <p className="m-0 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Visibility alone doesn't reduce risk. Dipole goes beyond monitoring by actively shrinking the attack surface of your non-human identities through policy-driven, identity-verified access enforcement between every workload and the sensitive resources it reaches.
              </p>

              <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Dipole dynamically enforces secretless, conditional access for every non-human identity in your ecosystem. Every connection is authenticated by cryptographic identity, governed by fine-grained policy, bound by access conditions, and logged with full attribution. Non-human identities access only what they're authorized to, only when conditions allow, and only with credentials that expire the moment the task is done.
              </p>
            </div>

            <div className="flex-1 min-w-0 flex items-center justify-center">
              <img
                src={nhiAccessDipoleImg}
                alt="Dipole securing machine-to-machine connections"
                className="block w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          <h2 className="m-0 mt-12 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            Features of IAM for Non-Human Identities
          </h2>

          <div className="mt-10 grid grid-cols-4 gap-5">
            <UseCaseCard
              icon={<img src={card5Icon} alt="" className="w-8 h-8" />}
              title="Policy Driven"
              description="Govern every non-human identity through access policies based on cryptographic identity and real-time conditions. Eliminate the need to manage low-level credentials across services and environments."
            />
            <UseCaseCard
              icon={<img src={card2Icon} alt="" className="w-8 h-8" />}
              title="Secretless"
              description="Replace static, long-lived credentials with temporary, just-in-time access rights that expire after every interaction. No secret sprawl. No leakage surface. No unauthorized persistence."
            />
            <UseCaseCard
              icon={<img src={automaticIcon} alt="" className="w-8 h-8" />}
              title="Automated"
              description="Provision and enforce access for every non-human identity the same way you manage the rest of your infrastructure. No manual credential creation. No rotation schedules. No operational drag."
            />
            <UseCaseCard
              icon={<img src={noCodeIcon} alt="" className="w-8 h-8" />}
              title="No-Code"
              description="Remove the burden of building and maintaining authentication logic within your services. Implement a single, transparent access model across every workload, every platform, every environment."
            />
          </div>
        </div>
      </section>

      {/* Teams section */}
      <section className="w-full py-16 bg-[#1C3B37]">
        <div className="px-[2.5%]">
          <h2 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-white">
            Every Team Gets What They Need. No Compromises.
          </h2>

          <div className="mt-12 flex items-start gap-10">
            <div className="w-[25%] shrink-0">
              <h3 className="m-0 text-[1.1rem] font-semibold leading-[1.3] text-white">
                Security Teams
              </h3>
            </div>

            <div className="flex-1 min-w-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15">
                      Before
                    </th>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15 pl-8">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Static API keys and tokens scattered across repositories and configs
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Access governed by workload identity, not shared secrets
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      No unified view of which workload accesses what
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Single, cloud-based policy engine covering every environment
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      Constant friction between security policies and engineering velocity
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      Security and development aligned through a common access model
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* DevSecOps */}
          <div className="mt-12 pt-12 border-t border-white/10 flex items-start gap-10">
            <div className="w-[25%] shrink-0">
              <h3 className="m-0 text-[1.1rem] font-semibold leading-[1.3] text-white">
                DevSecOps
              </h3>
            </div>

            <div className="flex-1 min-w-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15">
                      Before
                    </th>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15 pl-8">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Manual credential creation for every new service
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Automated secretless access for every workload connection
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Rotation schedules that slip, break, or get ignored
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Short-lived credentials delivered just-in-time, revoked automatically
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      Secret sprawl growing faster than the team can track
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      Zero operational overhead for credential lifecycle management
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Developers */}
          <div className="mt-12 pt-12 border-t border-white/10 flex items-start gap-10">
            <div className="w-[25%] shrink-0">
              <h3 className="m-0 text-[1.1rem] font-semibold leading-[1.3] text-white">
                Developers
              </h3>
            </div>

            <div className="flex-1 min-w-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15">
                      Before
                    </th>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15 pl-8">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Writing custom auth logic for each downstream service
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      No auth code to write, maintain, or debug
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Managing environment variables, vault calls, and token refresh
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Transparent integration that works with existing and new applications
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      Different credential patterns across different platforms
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      One consistent approach across Kubernetes, AWS, CI/CD, and VMs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Compliance */}
          <div className="mt-12 pt-12 border-t border-white/10 flex items-start gap-10">
            <div className="w-[25%] shrink-0">
              <h3 className="m-0 text-[1.1rem] font-semibold leading-[1.3] text-white">
                Compliance
              </h3>
            </div>

            <div className="flex-1 min-w-0">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15">
                      Before
                    </th>
                    <th className="w-1/2 pb-4 text-[0.85rem] font-semibold text-white/80 text-left border-b border-white/15 pl-8">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Audit logs scattered across cloud accounts and services
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Centralized audit trail of every workload-to-workload access decision
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      No clear record of which workload accessed what, and when
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 border-b border-white/8 align-top">
                      Verifiable proof of secretless, just-in-time credentials for sensitive systems
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      Manual evidence gathering for compliance reviews
                    </td>
                    <td className="py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top">
                      Single source of truth for access reviews, ready on demand
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full py-16 bg-[#f9f7f3]">
        <div className="px-[2.5%]">
          <h2 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            Ready to Get Started?
          </h2>

          <p className="m-0 mt-5 max-w-[680px] text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
            Legacy identity and credential management creates vulnerabilities that scale with your infrastructure. Secure every workload connection and streamline your access governance with Dipole. Start managing access the way it should have always worked.
          </p>

          <a
            href="#"
            className="inline-flex items-center mt-7 px-6 py-3 text-[0.9rem] font-medium text-white bg-[#1C3B37] rounded-lg no-underline transition-opacity duration-200 hover:opacity-85"
          >
            Talk To Team
          </a>
        </div>
      </section>
    </>
  );
}
