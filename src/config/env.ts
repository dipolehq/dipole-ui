/**
 * Typed access to environment configuration.
 *
 * This module is the single source of truth for runtime config. Nothing else
 * should read `import.meta.env` directly — it keeps defaults centralized.
 *
 * Values fall back to sensible defaults so the app renders without a local
 * `.env`; override any of them via `VITE_*` variables (see `.env.example`).
 */

function readString(key: keyof ImportMetaEnv, fallback: string): string {
  const value = import.meta.env[key];
  return value === undefined || value === '' ? fallback : value;
}

export const env = {
  appName: readString('VITE_APP_NAME', 'Dipole'),
  api: {
    baseUrl: readString('VITE_API_BASE_URL', 'http://localhost:8080/api'),
    timeoutMs: Number(import.meta.env.VITE_API_TIMEOUT_MS ?? 15_000),
  },
} as const;

export type Env = typeof env;
