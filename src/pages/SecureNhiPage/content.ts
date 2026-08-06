import policyIcon from '@assets/icons/cards/policy_icon.svg';
import secureIcon from '@assets/icons/cards/secure_icon.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';
import noCodeIcon from '@assets/icons/cards/no-code.svg';
import nhiAccessImg from '@assets/images/usecases/nhi/nhi-access.svg';
import nhiAccessDipoleImg from '@assets/images/usecases/nhi/nhi-access-dipole.svg';
import nhiSecretsImg from '@assets/images/usecases/nhi/nhi-secrets.svg';

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
    title: 'Secure Every Machine-to-Machine Connection',
    subtitle:
      'Your infrastructure runs on thousands of non-human identities making millions of connections. Dipole ensures every one of them is authenticated, authorized, and auditable.',
    image: nhiAccessImg,
    imageAlt: 'Non-human identity access secured by Dipole',
  },
  problem: {
    heading: 'Machine Identities Are Your Fastest Growing Attack Surface.',
    paragraphs: [
      'Non-human identities are the foundation of modern infrastructure. Every microservice, every serverless function, every scheduled job, and every integration is a machine identity making privileged decisions at scale.',
      "As these identities multiply, so does the risk. They communicate across cloud providers, third-party platforms, databases, and internal services, each requiring distinct credentials and access patterns. Traditional security tools were built for human users and static environments. They cannot govern a landscape where non-human identities outnumber engineers by orders of magnitude and change with every deployment.",
    ],
    image: nhiSecretsImg,
    imageAlt: 'Non-human identity attack surface',
  },
  solution: {
    heading: 'How Dipole Secures Every Machine-to-Machine Connection',
    paragraphs: [
      "Visibility alone doesn't reduce risk. Dipole goes beyond monitoring by actively shrinking the attack surface of your non-human identities through policy-driven, identity-verified access enforcement between every workload and the sensitive resources it reaches.",
      "Dipole dynamically enforces secretless, conditional access for every non-human identity in your ecosystem. Every connection is authenticated by cryptographic identity, governed by fine-grained policy, bound by access conditions, and logged with full attribution. Non-human identities access only what they're authorized to, only when conditions allow, and only with credentials that expire the moment the task is done.",
    ],
    image: nhiAccessDipoleImg,
    imageAlt: 'Dipole securing machine-to-machine connections',
  },
  features: {
    heading: 'Features of IAM for Non-Human Identities',
    cards: [
      {
        title: 'Policy Driven',
        description:
          'Govern every non-human identity through access policies based on cryptographic identity and real-time conditions. Eliminate the need to manage low-level credentials across services and environments.',
        icon: policyIcon,
      },
      {
        title: 'Secretless',
        description:
          'Replace static, long-lived credentials with temporary, just-in-time access rights that expire after every interaction. No secret sprawl. No leakage surface. No unauthorized persistence.',
        icon: secureIcon,
      },
      {
        title: 'Automated',
        description:
          'Provision and enforce access for every non-human identity the same way you manage the rest of your infrastructure. No manual credential creation. No rotation schedules. No operational drag.',
        icon: automaticIcon,
      },
      {
        title: 'No-Code',
        description:
          'Remove the burden of building and maintaining authentication logic within your services. Implement a single, transparent access model across every workload, every platform, every environment.',
        icon: noCodeIcon,
      },
    ],
  },
};
