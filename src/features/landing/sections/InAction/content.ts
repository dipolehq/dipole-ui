export interface InActionItem {
  title: string;
  description: string;
}

/** The three flagship scenarios shown in the "Dipole in Action" section. */
export const IN_ACTION_ITEMS: InActionItem[] = [
  {
    title: 'Secure Agentic AI',
    description:
      'Streamline and secure access from AI agents to leading LLMs like OpenAI, Claude, and Gemini, APIs, and tools with policy-based, identity-driven controls.',
  },
  {
    title: 'Secure AI Access to MCP Servers',
    description:
      'The explosion of Agentic AI is posing new challenges for security and DevOps teams across all industries and organizational sizes.',
  },
  {
    title: 'Federated CI/CD',
    description:
      'Eliminate hard-coded and long-lived credentials, and build truly resilient software deployment pipelines, with a unified identity system across clouds.',
  },
];
