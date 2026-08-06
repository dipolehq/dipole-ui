import integrationIcon from '@assets/icons/cards/integration.svg';
import addOnIcon from '@assets/icons/cards/addon_icon.svg';
import secureIcon from '@assets/icons/cards/secure_icon.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';
import autonomousAccessImg from '@assets/images/usecases/autonomous/autonomous-access.svg';
import autonomousAccessDipoleImg from '@assets/images/usecases/autonomous/autonomous-access-dipole.svg';
import autonomousSecretsImg from '@assets/images/usecases/autonomous/autonomous-secrets.svg';

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
    title: 'Secure Autonomous Agents Access',
    subtitle:
      'Autonomous agents make thousands of decisions without human approval. Dipole makes sure every one of those decisions respects identity, policy, and least-privilege access.',
    image: autonomousAccessImg,
    imageAlt: 'Autonomous agent access secured by Dipole',
  },
  problem: {
    heading: 'Autonomous Decisions. Uncontrolled Access. Invisible Risk.',
    paragraphs: [
      "Autonomous agents don't follow playbooks. They decide at runtime which tools to call, which services to query, and which data to pull. A single orchestration chain can fan out into dozens of simultaneous connections across your infrastructure, cloud APIs, and third-party services.",
      'These interactions touch sensitive resources: databases, SaaS platforms, LLMs, internal microservices, and cloud infrastructure, spanning multiple environments and requiring varying credential types, authentication methods, and access scopes.',
      'As agentic AI proliferates, security teams need comprehensive auditing, fine-grained policy enforcement, and zero-trust controls applied to every autonomous agent identity operating across the organization.',
    ],
    image: autonomousSecretsImg,
    imageAlt: 'Autonomous agent access without governance',
  },
  solution: {
    heading: 'How Dipole Secures Autonomous Agent Access',
    paragraphs: [
      'Dipole provides a central control plane that governs autonomous agent access to sensitive data and resources based on verified identity and policy, not stored secrets. Accelerate AI adoption with confidence, knowing every agent interaction is authenticated, authorized, and auditable.',
      'Dipole deploys wherever your agents operate, integrating with your existing identity providers and credential infrastructure. Our Blended Identity model verifies both the agent and the human driving it, ensuring per-user credential isolation across every interaction, regardless of how many agents are in the chain.',
      'Flexible access policies support the full range of services, protocols, and credential types that agentic AI demands, from simple API keys to short-lived, scope-based tokens issued just-in-time. Conditional access rules let you restrict when, where, and under what circumstances any agent can connect.',
      'Centralized event logging captures every access decision, every credential issuance, and every denied request, giving security teams full visibility and a complete audit trail with no blind spots.',
    ],
    image: autonomousAccessDipoleImg,
    imageAlt: 'Dipole securing autonomous agent access',
  },
  features: {
    heading: 'Features of IAM for Autonomous Agents',
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
          'Support the full spectrum of credential types your autonomous agents demand, from API keys and OAuth tokens to scoped, short-lived federation credentials, all managed through a single policy layer.',
        icon: addOnIcon,
      },
      {
        title: 'Secretless',
        description:
          'Replace long-lived secrets with temporary, just-in-time credentials that expire the moment the interaction ends. Nothing stored. Nothing to leak. Nothing to rotate.',
        icon: secureIcon,
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
