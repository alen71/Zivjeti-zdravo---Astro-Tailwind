import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import nodejs from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  compressHTML: false,
  output: 'server',
  adapter: nodejs({
    mode: 'middleware'
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
