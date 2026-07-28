import type { PropsWithChildren } from 'react';

import { ErrorBoundary } from '@components/feedback/ErrorBoundary';

/**
 * Central composition point for cross-cutting providers
 * (state, theming, data-fetching clients, i18n, etc.).
 *
 * Add new providers here rather than nesting them ad-hoc across the tree.
 * Order matters: outermost providers wrap inner ones.
 */
export function AppProviders({ children }: PropsWithChildren) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}
