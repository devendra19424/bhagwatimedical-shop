
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Enable fast refresh for better developer experience
      fastRefresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    // Optimize for low bandwidth areas
    hmr: {
      overlay: true,
    },
  },
  // Optimize build settings
  build: {
    // Target older browsers for better compatibility in areas with older devices
    target: 'es2015',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code from app code
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@/components/ui'],
        },
      },
    },
    // Optimize asset inlining
    assetsInlineLimit: 4096,
    // Enable minification
    minify: true,
    // Enable source maps in production for easier debugging
    sourcemap: true,
  },
  base: './',
});
