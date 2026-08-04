import ciCdPipelineImg from '@assets/images/usecases/cicd/ci-cd-pipeline.svg';
import ciCdPipelineDipoleImg from '@assets/images/usecases/cicd/ci-cd-pipeline-dipole.svg';
import ciCdSecretsImg from '@assets/images/usecases/cicd/ci-cd-secrets.svg';
import card1Icon from '@assets/icons/cards/card1.svg';
import card2Icon from '@assets/icons/cards/card2.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';
import noCodeIcon from '@assets/icons/cards/no-code.svg';
import { UseCaseCard } from '@components/ui/UseCaseCard';

/**
 * "Secure CI/CD Access" use case page.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function SecureCiCdPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#f9f7f3] overflow-hidden">
      {/* mt-16 clears the fixed navbar; pt-10 is the heading's own breathing room. */}
      <div className="mt-16 pt-10 pb-20 px-[2.5%]">
        <h1 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
          Secure CI/CD Access
        </h1>

        <p className="m-0 mt-5 max-w-[780px] text-[1rem] font-light leading-[1.7] text-[#0b0d0e]/65">
          Eliminate static or hard-coded credentials from your software deployment pipelines.
        </p>

        <img
          src={ciCdPipelineImg}
          alt="CI/CD pipeline secured by Dipole"
          width={1564}
          height={556}
          className="block w-full h-auto mt-10 aspect-[1564/556] object-contain"
          draggable={false}
        />
      </div>

      {/* Problem statement section */}
      <section className="w-full py-16 bg-[#1C3B37]">
        <div className="px-[2.5%] flex items-center gap-10">
          <div className="w-1/2 shrink-0">
            <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-white whitespace-nowrap">
              Pipelines Move Fast. So Do Leaked Credentials.
            </h2>

            <p className="m-0 text-[0.95rem] font-light leading-[1.75] text-white/60">
              CI/CD pipelines are the backbone of your software delivery, and one of the most exposed surfaces for credential abuse. Secrets stored within pipeline configurations can be observed, exfiltrated, or misused across workflow runs.
            </p>

            <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-white/60">
              Long-lived tokens grant persistent access to production systems with no expiry, no attribution, and no revocation path. Eliminating static credentials from your deployment infrastructure is no longer optional.
            </p>
          </div>

          <div className="flex-1 min-w-0 flex items-center justify-center">
            <img
              src={ciCdSecretsImg}
              alt="CI/CD credential exposure diagram"
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
            How Dipole Secures Your CI/CD Pipeline, End to End
          </h2>

          <div className="flex items-start gap-10">
            <div className="w-[45%] shrink-0">
              <p className="m-0 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Dipole replaces static pipeline credentials with real-time, identity-based access security. No tokens stored. No secrets to rotate. No credentials that outlive the job.
              </p>

              <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Every pipeline connection is governed by policy and conditional access rules, enforced consistently across every run. Two-sided federation guarantees that both your pipeline and the target service verify each other before access is granted.
              </p>

              <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Your CI/CD becomes faster to operate, simpler to audit, and impossible to compromise through stolen credentials.
              </p>
            </div>

            <div className="flex-1 min-w-0 flex items-center justify-center">
              <img
                src={ciCdPipelineDipoleImg}
                alt="Dipole securing CI/CD pipeline access"
                className="block w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          <h2 className="m-0 mt-20 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            Features of IAM for CI/CD
          </h2>

          <div className="mt-10 grid grid-cols-4 gap-5">
            <UseCaseCard
              icon={<img src={card1Icon} alt="" className="w-8 h-8" />}
              title="Policy Driven"
              description="Govern pipeline access through identity-aware policies and dynamic conditions. Eliminate the overhead of managing low-level credentials across workflows and environments."
            />
            <UseCaseCard
              icon={<img src={card2Icon} alt="" className="w-8 h-8" />}
              title="Secretless"
              description="Move beyond static tokens to short-lived credentials delivered just-in-time, scoped to each run, and revoked the moment the job completes."
            />
            <UseCaseCard
              icon={<img src={automaticIcon} alt="" className="w-8 h-8" />}
              title="Automated"
              description="Provision and manage pipeline access the same way you manage the rest of your infrastructure. No manual secret creation, no rotation schedules, no operational drag."
            />
            <UseCaseCard
              icon={<img src={noCodeIcon} alt="" className="w-8 h-8" />}
              title="No-Code"
              description="Eliminate the need for developers to build and manage auth within applications. Implement a single, consistent approach."
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
    </section>
  );
}
