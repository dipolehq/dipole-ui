import managementConsoleImg from '@assets/images/differentiators/management_console.svg';
import mcpAuthdanceImg from '@assets/images/differentiators/mcp_authdance.svg';
import dashboardImg from '@assets/images/differentiators/dashboard.svg';
import secretlessImg from '@assets/images/differentiators/secretless.svg';

export const DIFFERENTIATOR_TABS = [
  'Centralized Management Console',
  'MCP Gateway',
  'Zero Static Secrets',
  'Complete Visibility',
] as const;

export type DifferentiatorTab = (typeof DIFFERENTIATOR_TABS)[number];

export interface DifferentiatorContent {
  title: string;
  /** Lead paragraph, rendered in the muted style. */
  description: string;
  /** Closing line, rendered with more emphasis than the description. */
  highlight?: string;
  /** Diagram, scaled to fit the section's fixed image frame. */
  image?: string;
}

export const DIFFERENTIATORS: Record<DifferentiatorTab, DifferentiatorContent> = {
  'Centralized Management Console': {
    title: 'The Central Nervous System for Workload Access',
    description:
      'Every outbound connection from every agent and service flows through Dipole. You decide what talks to what, how it proves itself, and under what circumstances. Policies replace tribal knowledge.',
    highlight:
      'A single control surface replaces hundreds of scattered credentials managed by dozens of teams who forgot they created them.',
    image: managementConsoleImg,
  },
  'MCP Gateway': {
    title: 'AI Agents Get Their Own Security Boundary',
    description:
      'When Claude or Gemini calls a tool, the request passes through Dipole first. The human behind the agent authenticates once. From that point, Dipole issues isolated, per-user tokens for each downstream tool. The agent itself holds nothing useful.',
    highlight:
      'Revoke one user, one agent, or one tool independently. No shared credentials, no cross-contamination.',
    image: mcpAuthdanceImg,
  },
  'Zero Static Secrets': {
    title: 'Nothing to Leak Because Nothing Is Stored',
    description:
      'Credentials exist for the duration of a single request and vanish. They are never written to disk, never placed in environment variables, never committed to a repository. The attack surface of a leaked secret becomes zero when there is no secret to find.',
    highlight: 'Your workloads authenticate by what they are, not by what they know.',
    image: secretlessImg,
  },
  'Complete Visibility': {
    title: 'Every Action Answered, Every Question Traceable',
    description:
      '"Which agent accessed production Snowflake at 2am?" Answered in seconds. Every policy decision, every credential issuance, every denial is logged with the full chain: which identity, which target, which policy matched, and who the human was if an agent was involved.',
    highlight: 'Compliance stops being a quarterly scramble and becomes a live feed.',
    image: dashboardImg,
  },
};
