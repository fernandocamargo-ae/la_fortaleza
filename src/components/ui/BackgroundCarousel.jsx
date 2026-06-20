import { useEffect, useState } from 'react';

/**
 * Cross-fading image carousel. Fills its nearest `relative` parent (use a sized
 * framed box for a gallery, or a full section for a background). Auto-advances,
 * pausing under reduced motion (shows the first image). Optional clickable dots.
 */
export default function BackgroundCarousel({
  images,
  interval = 5000,
  className = '',
  overlayClassName = 'bg-gradient-to-r from-bg-darker via-bg-darker/95 to-bg-darker/75',
  showDots = false,
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
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden={!showDots}>
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

      {showDots && images.length > 1 && (
        <div className="pointer-events-auto absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Ver imagen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-brand-orange' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
