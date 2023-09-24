import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  compressHTML: false,
  output: 'hybrid',
  adapter: netlify({
    edgeMiddleware: true
  }),
  // adapter: nodejs({
  //   mode: 'middleware'
  // }),
  image: {
    domains: ['wp.zivjetizdravo.com'],
    remotePatterns: [{
      protocol: 'https'
    }]
  }
});