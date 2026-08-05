import integrationIcon from '@assets/icons/cards/integration.svg';
import card6Icon from '@assets/icons/cards/card6.svg';
import card2Icon from '@assets/icons/cards/card2.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';
import mcpAccessImg from '@assets/images/usecases/mcp/mcp-access.svg';
import mcpAccessDipoleImg from '@assets/images/usecases/mcp/mcp-access-dipole.svg';
import mcpAccessSecretsImg from '@assets/images/usecases/mcp/mcp-access-secrets.svg';

export interface UseCaseFeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface UseCasePageContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  problem: {
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  solution: {
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  features: {
    heading: string;
    cards: UseCaseFeatureCard[];
  };
}

export const PAGE_CONTENT: UseCasePageContent = {
  hero: {
    title: 'Secure Access To MCP Servers',
    subtitle:
      'AI agents are multiplying across every stack, and with them, a new class of identity and access challenges that traditional security tooling was never designed to handle.',
    image: mcpAccessImg,
    imageAlt: 'MCP server access secured by Dipole',
  },
  problem: {
    heading: 'MCP Servers Are Open Doors. Agents Walk Right Through.',
    paragraphs: [
      'AI agents operate autonomously, deciding at runtime which tools to invoke, which data to query, and which services to reach, all without a human in the loop to approve each action.',
      'These interactions span sensitive resources: databases, SaaS APIs, internal services, and third-party platforms, each requiring different credential types, authentication methods, and access scopes.',
      'Agents run around the clock, at scale, and without awareness of credential hygiene. Organizations need auditability, fine-grained policy enforcement, and zero-trust principles applied to every agent identity accessing every MCP server.',
    ],
    image: mcpAccessSecretsImg,
    imageAlt: 'MCP server access without governance',
  },
  solution: {
    heading: 'How Dipole Secures MCP Servers (Self Hosted or Managed)',
    paragraphs: [
      'Dipole provides a central control plane that governs access to MCP servers based on verified agent identity and policy, not stored secrets. Accelerate AI adoption with confidence, knowing every agent connection is authenticated, authorized, and auditable.',
      "Dipole integrates with both self-hosted and managed MCP server deployments, working alongside your existing identity providers and credential infrastructure. Our Blended Identity model verifies both the agent and the human behind it, ensuring per-user credential isolation across every tool invocation.",
      'Flexible access policies support the full range of protocols, services, and credential types that MCP servers demand, from simple API keys to short-lived, scope-based tokens issued just-in-time. Conditional access rules let you restrict when, where, and under what circumstances agents can connect.',
      'Centralized event logging captures every access decision, every tool call, and every credential issuance, giving security teams full visibility and a complete audit trail with no blind spots.',
    ],
    image: mcpAccessDipoleImg,
    imageAlt: 'Dipole securing MCP server access end to end',
  },
  features: {
    heading: 'Features of IAM for MCP Servers',
    cards: [
      {
        title: 'Platform Native',
        description:
          'Connect Dipole with any agentic AI platform or custom-built agent to govern access to every tool, resource, and downstream service they reach.',
        icon: integrationIcon,
      },
      {
        title: 'Credential Agnostic',
        description:
          'Support the full spectrum of credential types your MCP servers demand, from API keys and OAuth tokens to scoped, short-lived federation credentials, all managed through a single policy layer.',
        icon: card6Icon,
      },
      {
        title: 'Secretless',
        description:
          'Replace long-lived secrets with temporary, just-in-time credentials that expire the moment the interaction ends. Nothing stored. Nothing to leak. Nothing to rotate.',
        icon: card2Icon,
      },
      {
        title: 'Automated',
        description:
          "Agents can query events, update policies, and manage workloads in real-time through Dipole's MCP Server and APIs. Security governance that adapts as fast as your agents operate.",
        icon: automaticIcon,
      },
    ],
  },
};
