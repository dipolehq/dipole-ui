/**
 * Shared, cross-feature domain types and generic utility types.
 * Feature-owned types live inside each feature's `types/` folder.
 */

/** Discriminated result type for operations that can fail without throwing. */
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

/** Standard shape for paginated API responses. */
export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

/** Makes every property of T optional and deeply so. */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
