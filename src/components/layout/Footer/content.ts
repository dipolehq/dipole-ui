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
    label: 'Product',
    links: [
      { label: 'IAM For Agents', href: '#' },
      { label: 'IAM For Workloads', href: '#' }
    ],
  },
  {
    label: 'Use Case',
    links: [
      { label: 'Secure Interactive Agents', href: '#' },
      { label: 'Secure Autonomous Agents', href: '#' },
      { label: 'Secure MCP Servers', href: '#' },
      { label: 'Secure CI/CD', href: '#' },
      { label: 'Secure Non-Human Identities', href: '#' },
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
