
export const preloadImage = (src: string): void => {
  const img = new Image();
  img.src = src;
};

export const preloadAssets = (assets: string[]): void => {
  assets.forEach(asset => {
    if (asset.endsWith('.jpg') || asset.endsWith('.png') || asset.endsWith('.webp')) {
      preloadImage(asset);
    }
  });
};

// Add DNS prefetch for external resources
export const addDnsPrefetch = (domains: string[]): void => {
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Create a lightweight analytics function that won't slow down the site
export const sendPageview = (page: string): void => {
  setTimeout(() => {
    try {
      console.log(`Pageview: ${page}`);
      // In a real implementation, you would send this data to your analytics service
    } catch (e) {
      // Fail silently
    }
  }, 3000); // Delay analytics to prioritize page load
};
