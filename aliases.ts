import { fileURLToPath, URL } from 'node:url';

/**
 * Single source of truth for module path aliases, shared by `vite.config.ts`
 * and `vitest.config.ts` so dev, build, and test resolution can never drift.
 *
 * These must be mirrored in `tsconfig.app.json` under `compilerOptions.paths`
 * for the TypeScript language server and `tsc` to agree.
 */
const ALIAS_DIRS = {
  '@': 'src',
  '@app': 'src/app',
  '@pages': 'src/pages',
  '@features': 'src/features',
  '@components': 'src/components',
  '@config': 'src/config',
  '@constants': 'src/constants',
  '@utils': 'src/utils',
  '@styles': 'src/styles',
  '@assets': 'src/assets',
} as const;

export const alias: Record<string, string> = Object.fromEntries(
  Object.entries(ALIAS_DIRS).map(([key, dir]) => [
    key,
    fileURLToPath(new URL(`./${dir}`, import.meta.url)),
  ]),
);
