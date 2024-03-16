import { defineConfig } from 'astro/config'
import nodejs from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  compressHTML: false,
  output: 'server',
  adapter: nodejs({
    mode: 'standalone'
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
