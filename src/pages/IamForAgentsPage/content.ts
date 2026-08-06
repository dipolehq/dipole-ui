import secureIcon from '@assets/icons/cards/secure_icon.svg';
import logsIcon from '@assets/icons/cards/logs_icon.svg';
import blendedIdentity from '@assets/icons/cards/blended_identity.svg';
import policyIcon from '@assets/icons/cards/policy_icon.svg';
import addOnIcon from '@assets/icons/cards/addon_icon.svg';

export interface AgentFeature {
  title: string;
  description: string;
  icon: string;
}

/** Feature cards for the "Features of IAM for Agentic AI" section. */
export const AGENT_FEATURES: AgentFeature[] = [
  {
    title: 'Blended Identity',
    description:
      "Fuse the AI agent's machine identity with the human driving it into a single verifiable principal. Write access policies against this combined identity so every request is attributable to both who initiated it and what executed it.",
    icon: blendedIdentity,
  },
  {
    title: 'OAuth 2.1 Authorization',
    description:
      "MCP clients and AI agents authenticate using a fully compliant OAuth 2.1 authorization code flow with PKCE, as defined in the MCP specification. Access tokens are issued and governed by Dipole's Access Policies. No custom authorization code or token handling required on your end.",
    icon: secureIcon,
  },
  {
    title: 'Secure Token Exchange',
    description:
      "Agents never see or store the real credentials for downstream MCP servers. Dipole fetches the appropriate credential at the moment of access and injects it on the agent's behalf. Nothing persisted, nothing leaked.",
    icon: logsIcon,
  },
  {
    title: 'Policy Based Ephemeral Access',
    description:
      'Control which agents and users reach which MCP servers through declarative access policies. Add constraints like business hours, geographic boundaries, or endpoint health checks for layered enforcement.',
    icon: policyIcon,
  },
  {
    title: 'Plug Into Your Existing IdP',
    description:
      'Connects to Okta, Azure AD, Google Workspace, or any OIDC and SAML provider already in your stack. Users authenticate the way they always have. No parallel identity system to stand up.',
    icon: addOnIcon,
  },
  {
    title: 'Complete Audit Logs',
    description:
      'Every MCP tool call is recorded with the agent identity, the authenticated user, the target server, and the policy outcome. Stream to your SIEM for a searchable, tamper-evident log of all agent activity.',
    icon: logsIcon,
  },
];
