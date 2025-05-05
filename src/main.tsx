
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadAssets, addDnsPrefetch } from './utils/performance.ts'
import { productImages } from '@/translations'

// Preload critical images
preloadAssets([
  productImages.painKillers.image,
  productImages.vitamins.image,
  productImages.thermometer.image
]);

// Add DNS prefetch for external domains
addDnsPrefetch([
  'https://images.unsplash.com',
  'https://fonts.googleapis.com'
]);

// Create app with React 18 createRoot API
const root = createRoot(document.getElementById("root")!);

// Mount app with concurrent mode
root.render(<App />);

// Remove unused event listeners and optimize first input delay
window.addEventListener('load', () => {
  // Use requestIdleCallback for non-critical operations
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      const stylesheet = document.getElementById('splash-stylesheet');
      if (stylesheet) {
        stylesheet.remove();
      }
    });
  } else {
    setTimeout(() => {
      const stylesheet = document.getElementById('splash-stylesheet');
      if (stylesheet) {
        stylesheet.remove();
      }
    }, 0);
  }
});
