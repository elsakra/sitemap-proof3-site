import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://sitemap-proof3-site.vercel.app';
export default defineConfig({
  site,
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static'
});