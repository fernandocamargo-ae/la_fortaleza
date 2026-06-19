import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is in the viewport, toggling as it enters and
 * leaves so reveal animations can replay on every scroll pass.
 * Returns [ref, inView].
 */
export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
