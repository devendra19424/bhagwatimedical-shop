
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Add mainFields to ensure proper module resolution
    mainFields: ['module', 'jsnext:main', 'jsnext', 'main'],
  },
  // Fix import handling of directories
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
          ui: ['@/components/ui/index'],
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
  server: {
    port: 8080,
    host: "::",
    // Optimize for low bandwidth areas
    hmr: {
      overlay: true,
    },
  },
}));
