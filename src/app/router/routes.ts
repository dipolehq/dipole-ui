/**
 * Centralized route path constants.
 */
export const ROUTES = {
  home: '/',
  notFound: '*',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
