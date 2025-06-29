
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,pdf}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/i\.postimg\.cc\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'certificate-images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
          {
            urlPattern: /^https:\/\/github\.com\/RidoanDev\.png/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'profile-images',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'profile.jpg', 'Resume.pdf'],
      manifest: {
        name: 'Md Ridoan Mahmud Zisan',
        short_name: 'Md Ridoan Mahmud Zisan',
        description: 'Portfolio of Md Ridoan Mahmud Zisan',
        theme_color: '#ffffff',
        display: 'browser', // Prevents app installation prompts
        icons: [
          {
            src: 'https://github.com/RidoanDev.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://github.com/RidoanDev.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 8080,
  },
  build: {
    sourcemap: true,
  },
});
