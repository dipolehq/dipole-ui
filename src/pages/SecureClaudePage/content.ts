import claudeAccessDipoleImg from '@assets/images/usecases/claude/claude-access-dipole.svg';
import claudeAccessImg from '@assets/images/usecases/claude/claude-access.svg';
import claudeAccessSolutionImg from '@assets/images/usecases/claude/claude-access-solution.png';
import blendedIdentityIcon from '@assets/icons/cards/blended_identity.svg';
import isolationIcon from '@assets/icons/cards/isolation_icon.svg';
import secureIcon from '@assets/icons/cards/secure_icon.svg';
import logsIcon from '@assets/icons/cards/logs_icon.svg';
import policyIcon from '@assets/icons/cards/policy_icon.svg';
import centralizedIcon from '@assets/icons/cards/centralized_Icon.svg';
import wifIcon from '@assets/icons/cards/wif_icon.svg';
import noCodeIcon from '@assets/icons/cards/no-code.svg';

export interface UseCaseFeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface BoldParagraph {
  bold: string;
  text: string;
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
    boldParagraphs: BoldParagraph[];
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
    title: 'Secure Claude Access',
    subtitle:
      "Verify every Claude agent's identity, enforce least-privilege access to every resource it touches, and log every interaction for audit, whether Claude powers your team's workflows or runs autonomously inside your services.",
    image: claudeAccessDipoleImg,
    imageAlt: 'Claude agent access secured by Dipole',
  },
  problem: {
    heading: "Your Teams Adopted Claude. Your Security Didn't.",
    paragraphs: [
      "Whether your organization uses Claude through workforce tools and MCP or calls the Claude API directly from services and agents, the same security blind spots emerge at every deployment.",
    ],
    boldParagraphs: [
      {
        bold: "Claude has no identity of its own.",
        text: "It borrows the user's session and inherits their full access scope. There's no way to distinguish what Claude did from what the user did. Audit trails become unreliable, and any resource outside your IdP's perimeter stays completely unprotected.",
      },
      {
        bold: "Secrets live where they shouldn't.",
        text: "MCP server configurations hold API keys and OAuth tokens inline. These credentials are static, never rotated, and stored in application configs that were never built to be secret stores.",
      },
      {
        bold: "Long-lived API keys with zero accountability.",
        text: "Services calling Claude's API directly authenticate with static sk-ant-... keys that get hardcoded into environment variables, shared across microservices, committed to repos, and forgotten in CI configs. One leaked key grants full, unrestricted access to your entire Claude quota and capabilities.",
      },
      {
        bold: "Access governance is fragmented.",
        text: "Each Claude deployment requires its own credential setup, its own access rules, and its own logging. There is no single place to ask \"who accessed what through Claude, and were they supposed to?\"",
      },
    ],
    image: claudeAccessImg,
    imageAlt: 'Claude access without governance',
  },
  solution: {
    heading: 'How Dipole Secures Claude Access',
    paragraphs: [
      "Dipole governs Claude across every deployment model from a single control plane. For workforce deployments through MCP, every Claude agent receives a Blended Identity: verifiable, auditable, and distinct from the human user driving it. Access to tools and services is enforced through real-time policy evaluation with per-user credential isolation built in.",
      "For services and agents calling Claude's API directly, Dipole's Workload Identity Federation (WIF) eliminates static sk-ant-... keys entirely. Short-lived, scoped tokens are obtained and injected at request time, automatically, with no code changes required.",
      "Every interaction is attributable. Every credential expires. Every policy is enforced from one console. Security teams can greenlight Claude adoption, across the workforce or deep inside the backend, knowing identity, access, and audit are fully covered.",
    ],
    image: claudeAccessSolutionImg,
    imageAlt: 'Dipole securing Claude access end to end',
  },
  features: {
    heading: 'Features of IAM for Claude',
    cards: [
      {
        title: 'Blended Identity',
        description: "Treat human and agent identities as distinct but connected within a unified access and audit framework. Know exactly who triggered what, through which agent, at all times.",
        icon: blendedIdentityIcon,
      },
      {
        title: 'Workload Identity Federation',
        description: "Eliminate sk-ant-... keys entirely. Dipole exchanges verified workload identity for short-lived Claude access tokens, issued on demand, injected automatically, gone after the call.",
        icon: wifIcon,
      },
      {
        title: 'Per-User Credential Isolation',
        description: "When Claude acts on behalf of different users, each gets their own isolated credentials. User A's Claude session can never access User B's resources. Least privilege enforced at the individual level, not just the team level.",
        icon: isolationIcon,
      },
      {
        title: 'Secretless Access',
        description: "Every credential issued is temporary, scoped, and expires after use. No static keys in configs. No secrets to rotate. No long-lived tokens sitting idle waiting to be compromised.",
        icon: secureIcon,
      },
      {
        title: 'Centralized Management',
        description: "One control plane governing every Claude interaction across your organization. Workforce agents, backend services, MCP connections, all managed through the same policy console.",
        icon: centralizedIcon,
      },
      {
        title: 'Policy Enforcement',
        description: "Access decisions happen in real time at the boundary, before any tool is invoked or any data is reached. Allow, deny, or conditionally restrict based on identity, context, and policy.",
        icon: policyIcon,
      },
      {
        title: 'Audit With Attribution',
        description: "Every Claude interaction logged with full identity context: which agent, which user, which resource, what outcome. Complete operational visibility without chasing logs across systems.",
        icon: logsIcon,
      },
      {
        title: 'Zero Code Integration',
        description: "Your applications call Claude exactly as they do today. Dipole intercepts and injects credentials transparently at the proxy layer. No SDK changes, no auth libraries, no refactoring required.",
        icon: noCodeIcon,
      },
    ],
  },
};
