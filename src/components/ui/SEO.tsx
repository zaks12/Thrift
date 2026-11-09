import { useEffect } from 'react';
import { brand } from '@/config/brand';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export function SEO({ title, description, ogImage }: SEOProps) {
  const fullTitle = title
    ? `${title} | ${brand.name}`
    : `MAISON THRIFT | Curated Pre-Loved Women's Fashion`;

  const desc = description || brand.description;
  const image = ogImage || brand.socialImage;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', desc);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', brand.name, 'property');
    setMeta('og:image', image, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', image);
  }, [fullTitle, desc, image]);

  return null;
}
