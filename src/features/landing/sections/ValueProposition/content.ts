import card1Icon from '@assets/icons/cards/card1.svg';
import card2Icon from '@assets/icons/cards/card2.svg';
import card3Icon from '@assets/icons/cards/card3.svg';
import card4Icon from '@assets/icons/cards/card4.svg';
import card5Icon from '@assets/icons/cards/card5.svg';
import card6Icon from '@assets/icons/cards/card6.svg';

export interface ValuePropositionCard {
  title: string;
  description: string;
  icon: string;
}

export const EXECUTION_EDGE: ValuePropositionCard[] = [
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

export const TECHNICAL_EDGE: ValuePropositionCard[] = [
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
