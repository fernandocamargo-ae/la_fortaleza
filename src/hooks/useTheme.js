import { useEffect, useState } from 'react';

const STORAGE_KEY = 'lf-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
}

/**
 * Site-wide light/dark theme. Persists the user's choice in localStorage and
 * defaults to dark (the site's designed-first look) for new visitors.
 * Sets `data-theme` on <html>, which drives the CSS custom properties in
 * variables.css.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
