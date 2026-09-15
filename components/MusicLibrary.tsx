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
  const visible = active === 'all' ? releases : releases.filter((r) => r.type === active);

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-6">
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
