import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Md Ridoan Mahmud Zisan',
        short_name: 'Md Ridoan Mahmud Zisan',
        description: 'Portfolio of Md Ridoan Mahmud Zisan',
        theme_color: '#ffffff',
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
          {
            src: 'https://github.com/RidoanDev.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
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
