'use client';

import { useMemo, useState } from 'react';
import type { Release, ReleaseType } from '@/data/releases';
import ReleaseRow from './ReleaseRow';

const filters: { label: string; value: ReleaseType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Singles', value: 'single' },
  { label: 'EPs', value: 'ep' },
  { label: 'Albums', value: 'album' },
  { label: 'Productions', value: 'production' },
];

export default function MusicLibrary({ releases }: { releases: Release[] }) {
  const [active, setActive] = useState<ReleaseType | 'all'>('all');
  const [artist, setArtist] = useState('all');

  const artists = useMemo(
    () => Array.from(new Set(releases.map((release) => release.artist))).sort(),
    [releases]
  );

  const visible = releases.filter(
    (release) =>
      (active === 'all' || release.type === active) &&
      (artist === 'all' || release.artist === artist)
  );

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                active === f.value ? 'text-bone' : 'text-smoke hover:text-bone/70'
              }`}
              aria-pressed={active === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 text-xs tracking-wide2 text-smoke">
          ARTIST
          <select
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="border border-line bg-ink px-3 py-2 text-xs text-bone outline-none"
            aria-label="Filter releases by artist"
          >
            <option value="all">All artists</option>
            {artists.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-sm text-smoke">Nothing in this category yet — check back soon.</p>
      ) : (
        <div>
          {visible.map((release) => (
            <ReleaseRow key={release.slug} release={release} />
          ))}
        </div>
      )}
    </div>
  );
}
