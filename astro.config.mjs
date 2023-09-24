import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import nodejs from '@astrojs/node'
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  compressHTML: false,
  output: 'hybrid',
  // adapter: netlify({
  //   edgeMiddleware: true,
  //   functionPerRoute: true,
  // }),
  adapter: nodejs({
    mode: 'middleware'
  }),
  // image: {
  //   domains: ['wp.zivjetizdravo.com'],
  //   remotePatterns: [{
  //     protocol: 'https'
  //   }]
  // }
});