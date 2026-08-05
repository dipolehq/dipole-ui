import card1Icon from '@assets/icons/cards/card1.svg';
import card2Icon from '@assets/icons/cards/card2.svg';
import automaticIcon from '@assets/icons/cards/automatic.svg';
import noCodeIcon from '@assets/icons/cards/no-code.svg';
import ciCdPipelineImg from '@assets/images/usecases/cicd/ci-cd-pipeline.svg';
import ciCdPipelineDipoleImg from '@assets/images/usecases/cicd/ci-cd-pipeline-dipole.svg';
import ciCdSecretsImg from '@assets/images/usecases/cicd/ci-cd-secrets.svg';

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
    title: 'Secure CI/CD Access',
    subtitle:
      'Eliminate static or hard-coded credentials from your software deployment pipelines.',
    image: ciCdPipelineImg,
    imageAlt: 'CI/CD pipeline secured by Dipole',
  },
  problem: {
    heading: 'Pipelines Move Fast. So Do Leaked Credentials.',
    paragraphs: [
      'CI/CD pipelines are the backbone of your software delivery, and one of the most exposed surfaces for credential abuse. Secrets stored within pipeline configurations can be observed, exfiltrated, or misused across workflow runs.',
      'Long-lived tokens grant persistent access to production systems with no expiry, no attribution, and no revocation path. Eliminating static credentials from your deployment infrastructure is no longer optional.',
    ],
    image: ciCdSecretsImg,
    imageAlt: 'CI/CD credential exposure diagram',
  },
  solution: {
    heading: 'How Dipole Secures Your CI/CD Pipeline, End to End',
    paragraphs: [
      'Dipole replaces static pipeline credentials with real-time, identity-based access security. No tokens stored. No secrets to rotate. No credentials that outlive the job.',
      'Every pipeline connection is governed by policy and conditional access rules, enforced consistently across every run. Two-sided federation guarantees that both your pipeline and the target service verify each other before access is granted.',
      'Your CI/CD becomes faster to operate, simpler to audit, and impossible to compromise through stolen credentials.',
    ],
    image: ciCdPipelineDipoleImg,
    imageAlt: 'Dipole securing CI/CD pipeline access',
  },
  features: {
    heading: 'Features of IAM for CI/CD',
    cards: [
      {
        title: 'Policy Driven',
        description:
          'Govern pipeline access through identity-aware policies and dynamic conditions. Eliminate the overhead of managing low-level credentials across workflows and environments.',
        icon: card1Icon,
      },
      {
        title: 'Secretless',
        description:
          'Move beyond static tokens to short-lived credentials delivered just-in-time, scoped to each run, and revoked the moment the job completes.',
        icon: card2Icon,
      },
      {
        title: 'Automated',
        description:
          'Provision and manage pipeline access the same way you manage the rest of your infrastructure. No manual secret creation, no rotation schedules, no operational drag.',
        icon: automaticIcon,
      },
      {
        title: 'No-Code',
        description:
          'Eliminate the need for developers to build and manage auth within applications. Implement a single, consistent approach.',
        icon: noCodeIcon,
      },
    ],
  },
};
