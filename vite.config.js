import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    allowedHosts: true,
  },
  server: {
    allowedHosts: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['images/**/*'],
      workbox: {
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/404\.html$/],
      },
      manifest: {
        name: 'Dior & I',
        short_name: 'Dior',
        description: 'Dior & I — Events, Community & More',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'icons/DnI-192x192-rounded.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/DnI-192x192-rounded.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/DnI-192x192-rounded.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
})
