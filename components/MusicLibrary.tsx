'use client';

import { useState } from 'react';
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
  const [query, setQuery] = useState('');

  const visible = releases
    .filter((r) => active === 'all' || r.type === active)
    .filter((r) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return r.title.toLowerCase().includes(q) || r.artist.toLowerCase().includes(q);
    });

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
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

        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or artist…"
            aria-label="Search releases"
            className="w-full border-b border-line bg-transparent py-1.5 text-sm text-bone placeholder:text-smoke focus:border-bone focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-smoke hover:text-bone"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-sm text-smoke">
          {query ? `Nothing matches "${query}".` : 'Nothing in this category yet — check back soon.'}
        </p>
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
