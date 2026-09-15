'use client';

import { useState } from 'react';
import type { Visual, VisualCategory } from '@/data/visuals';
import { visualCategoryLabels } from '@/data/visuals';
import VisualCard from './VisualCard';

const filters: { label: string; value: VisualCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  ...(Object.entries(visualCategoryLabels) as [VisualCategory, string][]).map(
    ([value, label]) => ({ label, value })
  ),
];

export default function VisualGallery({ visuals }: { visuals: Visual[] }) {
  const [active, setActive] = useState<VisualCategory | 'all'>('all');
  const visible = active === 'all' ? visuals : visuals.filter((v) => v.category === active);

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

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {visible.map((visual) => (
          <VisualCard key={visual.slug} visual={visual} />
        ))}
      </div>
    </div>
  );
}
