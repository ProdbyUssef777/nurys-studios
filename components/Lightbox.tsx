'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { Visual } from '@/data/visuals';

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: Visual[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const visual = items[index];

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length);
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!visual) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ink/97 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={visual.title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center text-2xl text-bone/70 hover:text-bone"
      >
        ✕
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + items.length) % items.length);
            }}
            aria-label="Previous"
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-bone/60 hover:text-bone md:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % items.length);
            }}
            aria-label="Next"
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-bone/60 hover:text-bone md:right-6"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative m-auto flex max-h-[80vh] w-full max-w-4xl flex-col items-center px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full"
          style={{ aspectRatio: visual.aspect, maxHeight: '75vh' }}
        >
          <Image
            src={visual.image}
            alt={visual.title}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-bone">{visual.title}</p>
          <p className="mt-1 text-xs text-smoke">{visual.credit}</p>
        </div>
      </div>
    </div>
  );
}
