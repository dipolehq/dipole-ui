import mcpAccessImg from '@assets/images/usecases/mcp/mcp-access.svg';
import mcpAccessDipoleImg from '@assets/images/usecases/mcp/mcp-access-dipole.svg';
import mcpAccessSecretsImg from '@assets/images/usecases/mcp/mcp-access-secrets.svg';
import integrationIcon from '@assets/icons/cards/integration.svg';
import card2Icon from '@assets/icons/cards/card2.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';
import card6Icon from '@assets/icons/cards/card6.svg';
import { UseCaseCard } from '@components/ui/UseCaseCard';

/**
 * "Secure MCP Servers" use case page.
 *
 * The navbar and footer come from `SiteLayout`.
 */
export function SecureMcpPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#f9f7f3] overflow-hidden">
      {/* mt-16 clears the fixed navbar; pt-10 is the heading's own breathing room. */}
      <div className="mt-16 pt-10 pb-20 px-[2.5%]">
        <h1 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
          Secure Access To MCP Servers
        </h1>

        <p className="m-0 mt-5 max-w-[780px] text-[1rem] font-light leading-[1.7] text-[#0b0d0e]/65">
          AI agents are multiplying across every stack, and with them, a new class of identity and access challenges that traditional security tooling was never designed to handle.
        </p>

        <img
          src={mcpAccessImg}
          alt="MCP server access secured by Dipole"
          className="block w-[90%] mx-auto h-auto mt-10 object-contain"
          draggable={false}
        />
      </div>

      {/* Dark section */}
      <section className="w-full py-16 bg-[#1C3B37]">
        <div className="px-[2.5%] flex items-center gap-10">
          <div className="w-1/2 shrink-0">
            <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-white whitespace-nowrap">
              MCP Servers Are Open Doors. Agents Walk Right Through.
            </h2>

            <p className="m-0 text-[0.95rem] font-light leading-[1.75] text-white/60">
              AI agents operate autonomously, deciding at runtime which tools to invoke, which data to query, and which services to reach, all without a human in the loop to approve each action.
            </p>

            <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-white/60">
              These interactions span sensitive resources: databases, SaaS APIs, internal services, and third-party platforms, each requiring different credential types, authentication methods, and access scopes.
            </p>

            <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-white/60">
              Agents run around the clock, at scale, and without awareness of credential hygiene. Organizations need auditability, fine-grained policy enforcement, and zero-trust principles applied to every agent identity accessing every MCP server.
            </p>
          </div>

          <div className="flex-1 min-w-0 flex items-center justify-center">
            <img
              src={mcpAccessSecretsImg}
              alt="MCP server access without governance"
              className="block w-[55%] h-auto object-contain  translate-y-15"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Light section */}
      <section className="w-full py-16 bg-[#f9f7f3]">
        <div className="px-[2.5%]">
          <h2 className="m-0 mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            How Dipole Secures MCP Servers (Self Hosted or Managed)
          </h2>

          <div className="flex items-start gap-10">
            <div className="w-[45%] shrink-0">
              <p className="m-0 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Dipole provides a central control plane that governs access to MCP servers based on verified agent identity and policy, not stored secrets. Accelerate AI adoption with confidence, knowing every agent connection is authenticated, authorized, and auditable.
              </p>

              <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Dipole integrates with both self-hosted and managed MCP server deployments, working alongside your existing identity providers and credential infrastructure. Our Blended Identity model verifies both the agent and the human behind it, ensuring per-user credential isolation across every tool invocation.
              </p>

              <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Flexible access policies support the full range of protocols, services, and credential types that MCP servers demand, from simple API keys to short-lived, scope-based tokens issued just-in-time. Conditional access rules let you restrict when, where, and under what circumstances agents can connect.
              </p>

              <p className="m-0 mt-4 text-[0.95rem] font-light leading-[1.75] text-[#0b0d0e]/60">
                Centralized event logging captures every access decision, every tool call, and every credential issuance, giving security teams full visibility and a complete audit trail with no blind spots.
              </p>
            </div>

            <div className="flex-1 min-w-0 flex items-center justify-center">
              <img
                src={mcpAccessDipoleImg}
                alt="Dipole securing MCP server access end to end"
                className="block w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          </div>

          <h2 className="m-0 mt-20 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#0b0d0e]">
            Features of IAM for MCP Servers
          </h2>

          <div className="mt-10 grid grid-cols-4 gap-5">
            <UseCaseCard
              icon={<img src={integrationIcon} alt="" className="w-8 h-8" />}
              title="Platform Native"
              description="Connect Dipole with any agentic AI platform or custom-built agent to govern access to every tool, resource, and downstream service they reach."
            />
            <UseCaseCard
              icon={<img src={card6Icon} alt="" className="w-8 h-8" />}
              title="Credential Agnostic"
              description="Support the full spectrum of credential types your MCP servers demand, from API keys and OAuth tokens to scoped, short-lived federation credentials, all managed through a single policy layer."
            />
            <UseCaseCard
              icon={<img src={card2Icon} alt="" className="w-8 h-8" />}
              title="Secretless"
              description="Replace long-lived secrets with temporary, just-in-time credentials that expire the moment the interaction ends. Nothing stored. Nothing to leak. Nothing to rotate."
            />
            <UseCaseCard
              icon={<img src={automaticIcon} alt="" className="w-8 h-8" />}
              title="Automated"
              description="Agents can query events, update policies, and manage workloads in real-time through Dipole's MCP Server and APIs. Security governance that adapts as fast as your agents operate."
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
