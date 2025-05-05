
import { Helmet } from "react-helmet-async";

interface SeoHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export const SeoHead = ({
  title,
  description,
  keywords,
  canonicalUrl = "https://bhagwatimedical.shop",
  ogImage = "https://bhagwatimedical.shop/logo.png",
  ogType = "website"
}: SeoHeadProps) => {
  const localKeywords = "pharmacy itarsi, medical shop purani itarsi, old itarsi, dawai ki dukan itarsi, chemist shop itarsi, doctor purani itarsi, medicine delivery itarsi";
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}, ${localKeywords}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Meta Tags for Local SEO */}
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Itarsi, Purani Itarsi" />
      <meta name="geo.position" content="22.6077;77.7639" />
      <meta name="ICBM" content="22.6077, 77.7639" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Browser Hints for Performance */}
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
    </Helmet>
  );
};
