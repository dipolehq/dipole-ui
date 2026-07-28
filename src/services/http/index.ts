import { env } from '@config/env';
import { createFetchHttpClient } from '@services/http/fetchHttpClient';

export * from '@services/http/types';

/**
 * Shared application HTTP client instance, pre-configured from env.
 * Import this in feature `api/` modules to make requests.
 */
export const httpClient = createFetchHttpClient({
  baseUrl: env.api.baseUrl,
  timeoutMs: env.api.timeoutMs,
});
