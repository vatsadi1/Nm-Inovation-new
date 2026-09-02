import { useEffect } from 'react';

/**
 * Reusable SEO and Structured Data Component
 * Dynamically injects title, meta tags, OpenGraph, Twitter tags, and JSON-LD schemas
 */
export function SEO({
  title,
  description = 'We build, automate, and grow modern businesses. Digital systems that connect your website, customers, sales, marketing, and operations.',
  canonical,
  ogType = 'website',
  ogImage = 'https://nminovation.com/favicon-32x32.png',
  structuredData
}) {
  const fullTitle = title 
    ? `${title} | Nm Energy And Innovation Pvt Ltd`
    : 'Nm Energy And Innovation Pvt Ltd | We Build, Automate and Grow Modern Businesses';

  const canonicalUrl = canonical 
    ? `https://nminovation.com${canonical}` 
    : window.location.href;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMetaTag = (attr, key, content) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    updateMetaTag('name', 'description', description);

    // OpenGraph
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', ogImage);

    // Twitter
    updateMetaTag('property', 'twitter:title', fullTitle);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:url', canonicalUrl);
    updateMetaTag('property', 'twitter:image', ogImage);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // JSON-LD Structured Data
    const scriptId = 'nminovation-jsonld-schema';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://nminovation.com/#organization',
          'name': 'Nm Energy And Innovation Pvt Ltd',
          'url': 'https://nminovation.com/',
          'logo': 'https://nminovation.com/favicon-32x32.png',
          'description': 'Engineers of end-to-end digital business operating systems, CRM/ERP backbones, and autonomous AI workflows.',
          'sameAs': [
            'https://linkedin.com',
            'https://x.com',
            'https://github.com'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://nminovation.com/#website',
          'url': 'https://nminovation.com/',
          'name': 'Nm Energy And Innovation Pvt Ltd',
          'publisher': { '@id': 'https://nminovation.com/#organization' }
        },
        ...(structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [])
      ]
    };

    scriptTag.text = JSON.stringify(defaultSchema);

    // Cleanup on unmount
    return () => {
      // Keep title update persistent across route transitions
    };
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
}
