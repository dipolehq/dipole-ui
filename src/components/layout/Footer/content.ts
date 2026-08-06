export interface FooterLink {
  label: string;
  href: string;
  /** Opens in a new tab with the usual rel hardening. */
  external?: boolean;
}

export interface FooterColumn {
  label: string;
  links: FooterLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    label: 'Use Case',
    links: [
      { label: 'Secure Interactive Agents', href: '/secure-claude-access' },
      { label: 'Secure Autonomous Agents', href: '/autonomous-access' },
      { label: 'Secure MCP Servers', href: '/secure-mcp-access' },
      { label: 'Secure CI/CD', href: '/secure-ci-cd-access' },
      { label: 'Secure Non-Human Identities', href: '/secure-nhi-access' },
      { label: 'Secure Secrets Managers', href: '#' },
      { label: 'Go Secretless', href: '#' },
      { label: 'Identity Federation', href: '/identity-federation' },
      { label: 'Workload Zero Trust', href: '#' },
    ],
  },
  {
    label: 'Product',
    links: [
      { label: 'IAM For Agents', href: '/iam-for-agents' },
      { label: 'IAM For Workloads', href: '#' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Docs', href: '#' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    label: 'Socials',
    links: [
      { label: 'X', href: 'https://x.com', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    ],
  },
];
