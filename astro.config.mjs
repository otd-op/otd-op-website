// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://otd-op.org',
  adapter: cloudflare(),
  output: 'static',
  integrations: [sitemap()],
});
