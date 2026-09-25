// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Static output: Vercel deteksi Astro otomatis setelah repo di-import dari GitHub.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
