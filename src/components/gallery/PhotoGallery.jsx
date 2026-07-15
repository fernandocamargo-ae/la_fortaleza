import { useCallback, useEffect, useState } from 'react';
import Reveal from '../ui/Reveal';
import { GALLERY_PHOTOS } from '../../data/gallery';

// Grilla de miniaturas que abre un lightbox (foto grande, navegación con
// flechas/teclado) al hacer clic. El overlay del lightbox se mantiene oscuro
// a propósito en ambos temas (es un visor de fotos, no contenido del sitio).
export default function PhotoGallery() {
  const [index, setIndex] = useState(null);
  const total = GALLERY_PHOTOS.length;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? null : (i - 1 + total) % total)), [total]);
  const next = useCallback(() => setIndex((i) => (i === null ? null : (i + 1) % total)), [total]);

  useEffect(() => {
    if (index === null) return undefined;
    function onKey(e) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {GALLERY_PHOTOS.map((photo, i) => (
          <Reveal key={photo.thumb} delay={(i % 10) * 40}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver foto ${i + 1} en grande`}
              className="group block aspect-square w-full overflow-hidden bg-surface"
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Foto anterior"
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition-colors hover:border-brand-orange hover:text-brand-orange sm:left-6"
          >
            ‹
          </button>

          <img
            src={GALLERY_PHOTOS[index].full}
            alt={GALLERY_PHOTOS[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Foto siguiente"
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition-colors hover:border-brand-orange hover:text-brand-orange sm:right-6"
          >
            ›
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {index + 1} / {total}
          </p>
        </div>
      )}
    </>
  );
}
