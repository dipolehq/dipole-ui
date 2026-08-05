/**
 * Data shape for a single Before/After comparison row.
 */
export interface ComparisonRow {
  before: string;
  after: string;
}

/**
 * Data shape for one team's Before/After table.
 */
export interface TeamComparisonGroup {
  team: string;
  rows: ComparisonRow[];
}

/** Default team comparison data used across all use-case pages. */
const TEAM_COMPARISONS: TeamComparisonGroup[] = [
  {
    team: 'Security Teams',
    rows: [
      {
        before: 'Static API keys and tokens scattered across repositories and configs',
        after: 'Access governed by workload identity, not shared secrets',
      },
      {
        before: 'No unified view of which workload accesses what',
        after: 'Single, cloud-based policy engine covering every environment',
      },
      {
        before: 'Constant friction between security policies and engineering velocity',
        after: 'Security and development aligned through a common access model',
      },
    ],
  },
  {
    team: 'DevSecOps',
    rows: [
      {
        before: 'Manual credential creation for every new service',
        after: 'Automated secretless access for every workload connection',
      },
      {
        before: 'Rotation schedules that slip, break, or get ignored',
        after: 'Short-lived credentials delivered just-in-time, revoked automatically',
      },
      {
        before: 'Secret sprawl growing faster than the team can track',
        after: 'Zero operational overhead for credential lifecycle management',
      },
    ],
  },
  {
    team: 'Developers',
    rows: [
      {
        before: 'Writing custom auth logic for each downstream service',
        after: 'No auth code to write, maintain, or debug',
      },
      {
        before: 'Managing environment variables, vault calls, and token refresh',
        after: 'Transparent integration that works with existing and new applications',
      },
      {
        before: 'Different credential patterns across different platforms',
        after: 'One consistent approach across Kubernetes, AWS, CI/CD, and VMs',
      },
    ],
  },
  {
    team: 'Compliance',
    rows: [
      {
        before: 'Audit logs scattered across cloud accounts and services',
        after: 'Centralized audit trail of every workload-to-workload access decision',
      },
      {
        before: 'No clear record of which workload accessed what, and when',
        after: 'Verifiable proof of secretless, just-in-time credentials for sensitive systems',
      },
      {
        before: 'Manual evidence gathering for compliance reviews',
        after: 'Single source of truth for access reviews, ready on demand',
      },
    ],
  },
];

/**
 * Shared "Every Team Gets What They Need. No Compromises." section.
 *
 * Dark green section with a heading and 4 team-specific Before/After comparison
 * tables (Security Teams, DevSecOps, Developers, Compliance). Used identically
 * across all use-case pages.
 */
export function TeamBenefits() {
  return (
    <section className="w-full py-16 bg-[#1C3B37]">
      <div className="px-[2.5%]">
        <h2 className="m-0 text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-[1.2] tracking-[-0.02em] text-white">
          Every Team Gets What They Need. No Compromises.
        </h2>

        {TEAM_COMPARISONS.map((group, groupIndex) => (
          <div
            key={group.team}
            className={`flex items-start gap-10 ${
              groupIndex === 0
                ? 'mt-12'
                : 'mt-12 pt-12 border-t border-white/10'
            }`}
          >
            <div className="w-[25%] shrink-0">
              <h3 className="m-0 text-[1.1rem] font-semibold leading-[1.3] text-white">
                {group.team}
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
                  {group.rows.map((row, rowIndex) => (
                    <tr key={row.before}>
                      <td
                        className={`py-4 pr-6 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top ${
                          rowIndex < group.rows.length - 1
                            ? 'border-b border-white/8'
                            : ''
                        }`}
                      >
                        {row.before}
                      </td>
                      <td
                        className={`py-4 pl-8 text-[0.88rem] font-light leading-[1.6] text-white/60 align-top ${
                          rowIndex < group.rows.length - 1
                            ? 'border-b border-white/8'
                            : ''
                        }`}
                      >
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
