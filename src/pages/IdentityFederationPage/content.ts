import federationDipoleImg from '@assets/images/usecases/federation/federation-dipole.svg';
import federationMeshImg from '@assets/images/usecases/federation/federation-mesh.svg';
import federationPlaneImg from '@assets/images/usecases/federation/federation-plane.svg';
import centralizedIcon from '@assets/icons/cards/centralized_Icon.svg';
import policyIcon from '@assets/icons/cards/policy_icon.svg';
import secureIcon from '@assets/icons/cards/secure_icon.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';

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
    title: 'Identity Federation with Dipole',
    subtitle:
      'Unify non-human identity and access management across every cloud provider, SaaS platform, and internal service your workloads touch, without managing a single cross-cloud credential.',
    image: federationDipoleImg,
    imageAlt: 'Dipole identity federation across clouds and platforms',
  },
  problem: {
    heading: "Your Workloads Span Clouds. Your Identity Model Doesn't.",
    paragraphs: [
      "Your workloads run across AWS, Azure, GCP, SaaS platforms, and on-prem infrastructure. Each environment brings its own identity system, its own credential model, and its own access management primitives.",
      "For DevOps and security teams, this fragmentation means managing separate credential lifecycles per provider, stitching together inconsistent access controls, and maintaining security policies that don't translate across boundaries. The more environments you operate in, the wider the gaps between them.",
    ],
    image: federationMeshImg,
    imageAlt: 'Fragmented identity across cloud providers',
  },
  solution: {
    heading: 'How Dipole Eliminates Cross-Cloud Credential Fragmentation',
    paragraphs: [
      "Dipole acts as a single identity control plane that spans every environment your workloads operate in. AWS, Azure, GCP, SaaS, on-prem. One layer. One policy model. One audit trail.",
      "Federate once per environment, then broker access flexibly across any service your workloads need to reach. Dipole verifies workload identity natively in each environment and translates it into scoped, short-lived credentials for the target, regardless of which cloud or platform that target lives in.",
      "Access policies, conditional access rules, and complete audit logging are enforced consistently from a single console, whether a workload in AWS is accessing a service in Azure, or a Kubernetes pod is calling a SaaS API.",
    ],
    image: federationPlaneImg,
    imageAlt: 'Dipole as a single identity control plane across clouds',
  },
  features: {
    heading: 'Features of Identity Federation with Dipole',
    cards: [
      {
        title: 'Centralized Identity Federation',
        description:
          'Define identities, enforce access policies, and broker credentials from a single control plane that spans every cloud, every platform, and every environment your workloads touch.',
        icon: centralizedIcon,
      },
      {
        title: 'Policy Driven',
        description:
          'Govern pipeline access through identity-aware policies and dynamic conditions. Eliminate the overhead of managing low-level credentials across workflows and environments.',
        icon: policyIcon,
      },
      {
        title: 'Secretless',
        description:
          'Move beyond static tokens to short-lived credentials delivered just-in-time, scoped to each run, and revoked the moment the job completes.',
        icon: secureIcon,
      },
      {
        title: 'Automated',
        description:
          'Provision and manage pipeline access the same way you manage the rest of your infrastructure. No manual secret creation, no rotation schedules, no operational drag.',
        icon: automaticIcon,
      },
    ],
  },
};
