// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [svgr()]
  }
});
