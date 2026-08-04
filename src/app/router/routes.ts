/**
 * Centralized route path constants. `AppRouter` and every in-app link read
 * from here so a path is only ever written once.
 */
export const ROUTES = {
  home: '/',
  pricing: '/pricing',
  iamForAgents: '/iam-for-agents',
  secureCiCd: '/secure-ci-cd-access',
  secureMcp: '/secure-mcp-access',
  secureAutonomous: '/autonomous-access',
  secureNhi: '/secure-nhi-access',
  notFound: '*',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
