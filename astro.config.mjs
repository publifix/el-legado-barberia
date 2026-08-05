// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://publifix.github.io',
  base: '/el-legado-barberia',
  integrations: [icon(), sitemap()],
  image: {
    domains: [],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
