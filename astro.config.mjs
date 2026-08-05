// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://publifix.github.io',
  base: '/el-legado-barberia',
  vite: {
    plugins: [tailwindcss()],
  },
});
