import type { ReactNode } from 'react';

import { ROUTES } from '@app/router/routes';
import type { NavDropdownColumn } from '@components/ui/NavDropdown';

/**
 * Wraps icon paths in a consistently sized stroked SVG.
 *
 * Deliberately a plain helper rather than a component: this module's export is
 * data, and mixing component declarations in would break Fast Refresh.
 */
const icon = (paths: ReactNode): ReactNode => (
  <svg
    className="w-[18px] h-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {paths}
  </svg>
);

/** "Product" mega-menu contents. */
export const PRODUCT_COLUMNS: NavDropdownColumn[] = [
  {
    label: 'Solutions',
    items: [
      {
        title: 'IAM For Agents',
        description:
          'Secure what resources your Agents & MCP can access with 100% auditability',
        href: ROUTES.iamForAgents,
        // AI agent: robot head with antenna.
        icon: icon(
          <>
            <circle cx="12" cy="3.4" r="1.2" />
            <path d="M12 4.6V7" />
            <rect x="4" y="7" width="16" height="11" rx="3" />
            <path d="M2 11.5v2M22 11.5v2" />
            <path d="M10 15.5h4" />
            <circle cx="9.5" cy="12" r="1" fill="currentColor" stroke="none" />
            <circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none" />
          </>,
        )
      },
      {
        title: 'IAM For Workloads',
        description:
          'Secure the workload to workload communication with secretless access',
        href: '#',
        // Software service: stacked server tiers.
        icon: icon(
          <>
            <rect x="3" y="4" width="18" height="7" rx="2" />
            <rect x="3" y="13" width="18" height="7" rx="2" />
            <path d="M11 7.5h6M11 16.5h6" />
            <circle cx="7" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="7" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
          </>,
        ),
      },
    ],
  },
  {
    label: 'Integrations',
    items: [
      {
        title: 'Trust Provider',
        description: 'Integrate dipole with all major and your preferred trust providers',
        href: '#',
        // Identity: fingerprint ridges.
        icon: icon(
          <>
            <path d="M12 3a9 9 0 00-9 9c0 2 .5 3.5 1.5 5" />
            <path d="M12 7a5 5 0 00-5 5c0 1.5.4 2.6 1 3.5" />
            <path d="M12 11a1.5 1.5 0 00-1.5 1.5c0 2 .5 3.5 1.5 5" />
            <path d="M15 21c1.5-2 2-4.5 2-9a5 5 0 00-2-4" />
          </>,
        ),
      },
      {
        title: 'Credential Provider',
        description: 'Integrate dipole with all major and your preferred credential providers',
        href: '#',
        // Credentials: key with head and teeth.
        icon: icon(
          <>
            <circle cx="7.5" cy="12" r="3.5" />
            <path d="M11 12h9" />
            <path d="M17 12v3M20 12v2.5" />
          </>,
        ),
      },
      {
        title: 'Other Services',
        description: 'Dipole supports integration with all the major cloud provider, database and other services',
        href: '#',
        icon: icon(
          <>
            <path d="M9 3v6M15 3v6" />
            <path d="M6 9h12v4a6 6 0 01-12 0V9z" />
            <path d="M12 19v2" />
          </>,
        ),
      },
    ],
  },
];

/** "Use Cases" mega-menu contents. */
export const USE_CASE_COLUMNS: NavDropdownColumn[] = [
  {
    label: 'Secure',
    items: [
      {
        title: 'Secure Interactive Agents',
        description:
          'Secure how your employees interact with internal and external resources via Claude, Cursor, and etc',
        href: '#',
        // Interactive: chat bubble mid-conversation.
        icon: icon(
          <>
            <path d="M20 15a2 2 0 01-2 2H8l-4 4V6a2 2 0 012-2h12a2 2 0 012 2v9z" />
            <circle cx="8.5" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="12" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="15.5" cy="10.5" r="0.9" fill="currentColor" stroke="none" />
          </>,
        ),
      },
      {
        title: 'Secure Autonomous Agents',
        description:
          'Secure how your agents access your internal and external resources. ',
        href: '/autonomous-access',
        // Autonomous: self-driving loop around a core.
        icon: icon(
          <>
            <path d="M20 12a8 8 0 01-8 8 8 8 0 01-6.9-4" />
            <path d="M4 12a8 8 0 018-8 8 8 0 016.9 4" />
            <path d="M19 4v4h-4M5 20v-4h4" />
            <circle cx="12" cy="12" r="2.5" />
          </>,
        ),
      },
      {
        title: 'Secure MCP Servers',
        description:
          'Secure how your agents access MCP servers and gain full visibility into who accessed what',
        href: '/secure-mcp-access',
        // MCP server: a hub exposing tools to callers.
        icon: icon(
          <>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9V4M12 15v5M15 12h5M9 12H4" />
            <circle cx="12" cy="3" r="1.4" />
            <circle cx="21" cy="12" r="1.4" />
            <circle cx="3" cy="12" r="1.4" />
            <circle cx="12" cy="21" r="1.4" />
          </>,
        ),
      },
      {
        title: 'Secure CI/CD',
        description:
          'Reduce the secret sprawl and leakage in software deployment with secretless approach',
        href: '/secure-ci-cd-access',
        // CI/CD: branch merging back into the trunk.
        icon: icon(
          <>
            <path d="M6 4.5v15" />
            <circle cx="6" cy="19.5" r="2" />
            <circle cx="18" cy="6" r="2" />
            <path d="M18 8a9 9 0 01-9 9" />
          </>,
        ),
      },
      {
        title: 'Secure Non-Human Identities',
        description:
          'Enforce access policies and conditions on communication between non-human identities',
        href: '/secure-nhi-access',
        // Machine-to-machine: two nodes talking both ways.
        icon: icon(
          <>
            <rect x="2" y="7" width="7" height="7" rx="1.5" />
            <rect x="15" y="10" width="7" height="7" rx="1.5" />
            <path d="M9.5 9.5h4a1.5 1.5 0 011.5 1.5v1.5" />
            <path d="M14.5 15h-4A1.5 1.5 0 019 13.5V12" />
            <path d="M11 7.5l-1.5 2 2 1M13 17l1.5-2-2-1" />
          </>,
        ),
      },
    ],
  },
  {
    label: 'More',
    items: [
      {
        title: 'Secure Secrets Managers',
        description:
          'Govern how workloads access your vaults and secrets managers with identity-first controls',
        href: '#',
        // Vault/lock icon.
        icon: icon(
          <>
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
            <circle cx="12" cy="16" r="1.5" />
          </>,
        ),
      },
      {
        title: 'Go Secretless',
        description:
          'Eliminate static credentials entirely with just-in-time, identity-verified access',
        href: '#',
        // Shield with no-entry sign.
        icon: icon(
          <>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M8 12h8" />
          </>,
        ),
      },
      {
        title: 'Identity Federation',
        description:
          'Federate workload identity across clouds, clusters, and platforms with zero trust',
        href: '#',
        // Connected nodes / federation.
        icon: icon(
          <>
            <circle cx="6" cy="6" r="2.5" />
            <circle cx="18" cy="6" r="2.5" />
            <circle cx="12" cy="18" r="2.5" />
            <path d="M8 7.5l4 8.5M16 7.5l-4 8.5M8.5 6h7" />
          </>,
        ),
      },
      {
        title: 'Workload Zero Trust',
        description:
          'Apply zero-trust principles to every workload connection across your infrastructure',
        href: '#',
        // Shield with checkmark.
        icon: icon(
          <>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </>,
        ),
      },
    ],
  },
];

