import { useEffect, useState } from 'react';

/**
 * Decorative background carousel: cross-fades through a set of images behind
 * its parent's content. Place inside a `relative` container; the foreground
 * content should sit above it (e.g. with `relative z-10`). An overlay keeps
 * text readable. Auto-advance pauses under reduced-motion (shows first image).
 */
export default function BackgroundCarousel({
  images,
  interval = 5000,
  className = '',
  overlayClassName = 'bg-gradient-to-r from-bg-darker via-bg-darker/95 to-bg-darker/75',
}) {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduced || images.length <= 1) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [reduced, images.length, interval]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
