/**
 * Transport-agnostic HTTP contract.
 *
 * Features depend on this interface, not on `fetch`/axios directly. That keeps
 * the data layer swappable and testable (Dependency Inversion Principle).
 */

export interface RequestOptions {
  signal?: AbortSignal;
  headers?: Record<string, string>;
  query?: Record<string, string | number | boolean | undefined>;
}

export interface HttpClient {
  get<TResponse>(path: string, options?: RequestOptions): Promise<TResponse>;
  post<TResponse, TBody = unknown>(
    path: string,
    body?: TBody,
    options?: RequestOptions,
  ): Promise<TResponse>;
  put<TResponse, TBody = unknown>(
    path: string,
    body?: TBody,
    options?: RequestOptions,
  ): Promise<TResponse>;
  patch<TResponse, TBody = unknown>(
    path: string,
    body?: TBody,
    options?: RequestOptions,
  ): Promise<TResponse>;
  delete<TResponse>(path: string, options?: RequestOptions): Promise<TResponse>;
}

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly body: unknown,
  ) {
    super(`HTTP ${status} ${statusText}`);
    this.name = 'HttpError';
  }
}
