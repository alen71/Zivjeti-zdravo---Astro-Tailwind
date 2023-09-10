import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import nodejs from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact({ compat: true })],
  compressHTML: false,
  output: 'server',
  adapter: nodejs({
    mode: 'middleware'
  }),
  image: {
    domains: ['wp.zivjetizdravo.com'],
    remotePatterns: [{ protocol: 'https' }]
  }
})
