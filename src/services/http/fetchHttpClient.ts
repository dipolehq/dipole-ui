import { HttpError, type HttpClient, type RequestOptions } from '@services/http/types';

interface FetchHttpClientConfig {
  baseUrl: string;
  timeoutMs: number;
  defaultHeaders?: Record<string, string>;
}

/**
 * `fetch`-based implementation of the HttpClient contract.
 *
 * Handles URL/query composition, timeouts, JSON (de)serialization, and maps
 * non-2xx responses to a typed `HttpError`. Consumers stay unaware of transport
 * details and only work against the `HttpClient` interface.
 */
export function createFetchHttpClient(config: FetchHttpClientConfig): HttpClient {
  const { baseUrl, timeoutMs, defaultHeaders = {} } = config;

  function buildUrl(path: string, query?: RequestOptions['query']): string {
    const url = new URL(path.replace(/^\//, ''), baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) url.searchParams.set(key, String(value));
      }
    }
    return url.toString();
  }

  async function request<TResponse>(
    method: string,
    path: string,
    body?: unknown,
    options: RequestOptions = {},
  ): Promise<TResponse> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    // Respect a caller-provided signal in addition to the timeout.
    options.signal?.addEventListener('abort', () => controller.abort());

    try {
      const response = await fetch(buildUrl(path, options.query), {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...defaultHeaders,
          ...options.headers,
        },
        body: body === undefined ? undefined : JSON.stringify(body),
        signal: controller.signal,
      });

      const payload = await parseBody(response);

      if (!response.ok) {
        throw new HttpError(response.status, response.statusText, payload);
      }

      return payload as TResponse;
    } finally {
      clearTimeout(timeout);
    }
  }

  async function parseBody(response: Response): Promise<unknown> {
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      return response.json();
    }
    const text = await response.text();
    return text.length > 0 ? text : null;
  }

  return {
    get: (path, options) => request('GET', path, undefined, options),
    post: (path, body, options) => request('POST', path, body, options),
    put: (path, body, options) => request('PUT', path, body, options),
    patch: (path, body, options) => request('PATCH', path, body, options),
    delete: (path, options) => request('DELETE', path, undefined, options),
  };
}
