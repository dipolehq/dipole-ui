import type { PricingCardProps } from '@components/ui/PricingCard';

export const PRICING_TABS = ['Agentic AI', 'Workloads'] as const;
export type PricingTab = (typeof PRICING_TABS)[number];

export interface FAQItem {
  question: string;
  answer: string;
}

/** Agentic AI pricing plans. */
export const AGENTIC_AI_PLANS: Omit<PricingCardProps, 'className'>[] = [
  {
    plan: 'Starter',
    price: 'Free!',
    description:
      'Start using Dipole now for your personal projects or small teams that want to try it before committing to a plan.',
    buttonText: 'Get a Dipole Tenant',
    features: [
      '3 AI Agents',
      '5 MCP Authorization Service Policies',
      'Blended Identity via Human IdPs',
      'Single MCP Identity Gateway',
      '24 Hours of Event Log Retention',
      'Community Support',
    ],
  },
  {
    plan: 'Teams',
    price: '$20',
    priceUnit: '/agent/mo',
    description:
      'Best for startups and teams with multiple AI agents running in production that are concerned about access and security.',
    buttonText: 'Contact Us',
    features: [
      '500 AI Agents',
      'Unlimited Authorization Service Policies',
      'Blended Identity via Human IdPs',
      'Customizable MCP Identity Gateway',
      '7 Days of Event Log Retention',
      'Live Support During Business Hours - Email/Slack',
    ],
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    description:
      'Best for enterprise customers with multiple teams, multiple environments, and hundreds of AI agents running across their systems.',
    buttonText: 'Contact Us',
    features: [
      'Unlimited AI Agents',
      'Unlimited Authorization Service Policies',
      'Blended Identity via Human IdPs',
      'Dedicated MCP Identity Gateway',
      'Custom Event Log Retention',
      '24x7 Support - Email/Slack/Zoom',
      'Custom Features On Request',
    ],
  },
];

/** Workloads pricing plans. */
export const WORKLOADS_PLANS: Omit<PricingCardProps, 'className'>[] = [
  {
    plan: 'Starter',
    price: 'Free!',
    description:
      'Start using Dipole now for your personal projects or small teams that want to try it before committing to a plan.',
    buttonText: 'Get a Dipole Tenant',
    features: [
      '10 Workloads (clients and services)',
      '10 Access Policies',
      '1 Resource Set (default)',
      '24 Hours of Event Log Retention',
      'Conditional Acces Conditions',
      'Community/Documentation Support',
    ],
  },
  {
    plan: 'Teams',
    price: '$20',
    priceUnit: '/workload/mo',
    description:
      'Best for startups and teams with multiple services running in production that are concerned about the secret sprawl, leakage and rotation pain.',
    buttonText: 'Contact Us',
    features: [
      '50 Workloads (clients and services)',
      '50 Access Policies',
      '3 Resource Sets',
      '7 Days of Event Log Retention',
      'Conditional Acces Conditions',
      'Live Support During Business Hours',
    ],
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    description:
      'Best for enterprise customers with multiple teams, multiple environments, and hundreds of services running across their systems.',
    buttonText: 'Contact Us',
    features: [
      'Unlimited Workloads',
      'Unlimited Access Policies',
      'Unlimited Resource Sets',
      'Custom Event Log Retention',
      'Conditional Acces Conditions',
      '24x7 Support - Email/Slack',
      'Custom Features On Request',
    ],
  },
];

/** FAQ items for the pricing page. */
export const PRICING_FAQS: FAQItem[] = [
  {
    question: 'Does Dipole offer a free tier?',
    answer:
      "Of course! We offer a generous free plan forever, no credit card required. You get 10 workloads, 10 access policies, 3 AI agents, 5 MCP authorization policies, a shared MCP Identity Gateway, all trust provider and credential provider types, and 24 hours of event log retention. It's the real product with generous limits.",
  },
  {
    question: 'How does an IAM for Agents differs from an IAM for Workloads?',
    answer:
      "IAM for Workloads secures machine to machine traffic, like your microservice calling Stripe or a Lambda hitting your database. IAM for Agents adds a human identity layer on top. When an AI agent acts on behalf of a user, Dipole verifies both the agent AND the human behind it, so each person gets their own isolated credentials. Workload IAM doesn't need that human layer because there's no user in the loop.",
  },
  {
    question: 'How does a client workload differ from server worklaod?',
    answer:
      'Simple! A client workload is the software making the request (your microservice, Lambda, CI job, or AI agent). A server workload is the destination being accessed (an API, database, cloud service or an MCP server). You define both, then connect them with an access policy.',
  },
  {
    question: 'How does an access policy differ from access authorization policy?',
    answer:
      'An access policy is the rule you create: "Client X can access Server Y, verified by Trust Provider Z, using Credential W." An access authorization event is what gets logged every time that rule is evaluated. You write policies, Dipole generates authorization events automatically as proof of every decision.',
  },
  {
    question: 'What is a blended identity?',
    answer:
      'Blended Identity combines workload identity (which agent or service) with user identity (which human) in a single access decision. This lets you write policies like "Claude can access Jira, but only when the authenticated user is in the engineering team." Each user gets their own isolated credentials through the same agent.',
  },
  {
    question: 'Do we need to change our application code to integrate and use Dipole?',
    answer:
      'Not at all! Dipole works transparently. The Agent Proxy runs as a sidecar next to your workload (one annotation in Kubernetes). Your application makes requests exactly as it does today. The proxy intercepts, verifies identity, injects the credential, and forwards. Your app never knows it happened. Zero code changes.',
  },
  {
   question: 'How is Dipole different from a secrets vault (like HashiCorp Vault)?',
   answer:
     "A vault stores secrets and your app still needs code to fetch them, handle rotation, and manage access. The secret still lives in your application's memory. Dipole eliminates the secret entirely. Your app makes a normal request, the proxy injects the credential transparently, and your workload never sees or stores it. Vault is a better lockbox. Dipole removes the need for a lockbox.",
 },
  {
    question: 'Is this true that using dipole eliminates all the security vulnerability regarding credentials?',
    answer:
      "Dipole eliminates entire categories of credential risks. Your workloads never store credentials, so there's nothing to leak in logs, commit to git, or steal from environment variables. Nothing to rotate manually. However, we'll be honest: no single tool eliminates all security vulnerabilities. What we guarantee is that a compromised workload won't have any stored credentials for an attacker to find, because they simply aren't there.",
  },
   {
    question: 'Does Dipole see my actual data (request/response bodies)?',
    answer:
      "Absolutely not. The Dipole Edge runs entirely inside your infrastructure. Your request and response data never leaves your environment and never touches our servers. Dipole Cloud only receives access control metadata (this workload wants to access that server, here's its identity proof) to make policy decisions. Your actual traffic stays completely within your own network.",
  },
];
