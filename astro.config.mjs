import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samma.cl',
  vite: {
    plugins: [tailwindcss()],
  },
});
