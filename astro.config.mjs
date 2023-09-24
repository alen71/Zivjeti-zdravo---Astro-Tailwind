import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  compressHTML: false,
  output: 'hybrid',
  adapter: netlify(),
  // adapter: nodejs({
  //   mode: 'middleware'
  // }),
  image: {
    domains: ['wp.zivjetizdravo.com'],
    remotePatterns: [
      {
        protocol: 'https'
      }
    ]
  }
})
