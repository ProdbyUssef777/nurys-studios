'use client';

import { useState } from 'react';

// Turns a normal open.spotify.com link into its embeddable form.
// e.g. https://open.spotify.com/album/XYZ -> https://open.spotify.com/embed/album/XYZ
function toEmbedUrl(spotifyUrl: string): string | null {
  try {
    const url = new URL(spotifyUrl);
    if (!url.hostname.includes('open.spotify.com')) return null;
    return `https://open.spotify.com${url.pathname.replace(
      /^\/(track|album|playlist|episode)\//,
      '/embed/$1/'
    )}?utm_source=generator&theme=0`;
  } catch {
    return null;
  }
}

export default function SpotifyPreview({ spotifyUrl }: { spotifyUrl: string }) {
  const [open, setOpen] = useState(false);
  const embedUrl = toEmbedUrl(spotifyUrl);
  if (!embedUrl) return null;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 flex items-center gap-2 text-xs tracking-wide text-bone/70 transition-colors duration-200 hover:text-bone"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M8 5v14l11-7z" />
        </svg>
        Play preview
      </button>
    );
  }

  return (
    <div className="mt-4 w-full max-w-md">
      <iframe
        src={embedUrl}
        width="100%"
        height="152"
        style={{ borderRadius: 4, border: 0 }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify player"
      />
    </div>
  );
}
