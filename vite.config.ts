import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import { alias } from './aliases';

// https://vitejs.dev/config/
// Aliases are defined once in ./aliases.ts and shared with vitest.config.ts.
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: { alias },
});
