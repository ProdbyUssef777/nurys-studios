'use client';

import { useState } from 'react';
import type { Visual, VisualCategory } from '@/data/visuals';
import { visualCategoryLabels } from '@/data/visuals';
import VisualCard from './VisualCard';
import Lightbox from './Lightbox';

const filters: { label: string; value: VisualCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  ...(Object.entries(visualCategoryLabels) as [VisualCategory, string][]).map(
    ([value, label]) => ({ label, value })
  ),
];

export default function VisualGallery({ visuals }: { visuals: Visual[] }) {
  const [active, setActive] = useState<VisualCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const visible = active === 'all' ? visuals : visuals.filter((v) => v.category === active);

  // Only photos/designs without an external url open in the lightbox —
  // items with a url (music videos) keep opening that link instead.
  const lightboxable = visible.filter((v) => !v.url);

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

      <div className="mt-10 grid grid-cols-2 items-start gap-4 md:grid-cols-3 md:gap-6">
        {visible.map((visual) => (
          <VisualCard
            key={visual.slug}
            visual={visual}
            onClick={
              visual.url
                ? undefined
                : () => setLightboxIndex(lightboxable.findIndex((v) => v.slug === visual.slug))
            }
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxable}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
