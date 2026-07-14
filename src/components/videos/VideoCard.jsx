import { useState } from 'react';

// Click-to-play card: shows a poster image with a play button until clicked,
// so videos are never fetched/decoded until the user actually wants them.
export default function VideoCard({ title, description, src, poster }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="overflow-hidden border border-subtle/10 bg-surface">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            className="h-full w-full"
          >
            Tu navegador no soporta la reproducción de video.
          </video>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproducir: ${title}`}
            className="group relative block h-full w-full"
          >
            <img src={poster} alt={title} className="h-full w-full object-cover" loading="lazy" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/90 shadow-lg transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 text-bg-darker">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-2 text-sm text-text-muted">{description}</p>
      </div>
    </article>
  );
}
