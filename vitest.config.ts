import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

import { alias } from './aliases';

export default defineConfig({
  plugins: [react()],
  resolve: { alias },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});
