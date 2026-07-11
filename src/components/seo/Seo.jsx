import { useEffect } from 'react';
import { SITE_URL } from '../../utils/constants';

const BRAND = 'Servicios y Ventas La Fortaleza';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function upsert(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr, key, content) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute('content', content);
}

function setCanonical(href) {
  const el = upsert('link[rel="canonical"]', () => {
    const l = document.createElement('link');
    l.setAttribute('rel', 'canonical');
    return l;
  });
  el.setAttribute('href', href);
}

/**
 * Per-page SEO: updates document title, meta description, canonical, robots,
 * and Open Graph / Twitter tags by mutating existing <head> tags (so it doesn't
 * duplicate the defaults declared in index.html). Renders nothing.
 */
export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BRAND}` : BRAND;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setCanonical(url);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', BRAND);
    setMeta('property', 'og:locale', 'es_GT');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [title, description, path, image, noindex]);

  return null;
}
