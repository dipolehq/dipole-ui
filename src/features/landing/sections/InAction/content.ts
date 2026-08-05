import mcpAccessDipoleImg from '@assets/images/usecases/mcp/mcp-access-dipole.svg';

export interface InActionItem {
  title: string;
  description: string;
  image?: string;
}

/** The three flagship scenarios shown in the "Dipole in Action" section. */
export const IN_ACTION_ITEMS: InActionItem[] = [
  {
    title: 'Secure Access To MCP Servers',
    description:
      'AI agents are multiplying across every stack, and with them, a new class of identity and access challenges that traditional security tooling was never designed to handle.',
    image: mcpAccessDipoleImg,
  },
  {
    title: 'Secure Autonomous Agents Access',
    description:
      'Autonomous agents make thousands of decisions without human approval. Dipole makes sure every one of those decisions respects identity, policy, and least-privilege access.',
  },
  {
    title: 'Secure CI/CD Access',
    description:
      'Eliminate static or hard-coded credentials from your software deployment pipelines.',
  },
];
