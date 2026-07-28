export const SPEEDUP_TABS = ['Engineering', 'Security'] as const;

export type SpeedupTab = (typeof SPEEDUP_TABS)[number];

export interface SpeedupFeature {
  title: string;
  description: string;
}

export const SPEEDUP_FEATURES: Record<SpeedupTab, SpeedupFeature[]> = {
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
