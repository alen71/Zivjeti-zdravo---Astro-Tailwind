import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'

import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  compressHTML: false,
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true
  }),
  image: {
    domains: ['wp.zivjetizdravo.com'],
    remotePatterns: [
      {
        protocol: 'https'
      }
    ]
  }
})
