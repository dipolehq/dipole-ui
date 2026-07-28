/**
 * Centralized route path constants. `AppRouter` and every in-app link read
 * from here so a path is only ever written once.
 */
export const ROUTES = {
  home: '/',
  pricing: '/pricing',
  notFound: '*',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
