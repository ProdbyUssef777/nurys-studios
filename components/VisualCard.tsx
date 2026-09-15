import Image from 'next/image';
import type { Visual } from '@/data/visuals';

export default function VisualCard({ visual }: { visual: Visual }) {
  return (
    <div className="group relative">
      <figure
        className="relative origin-center overflow-hidden bg-void shadow-none transition-all duration-500 ease-editorial group-hover:z-20 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-black/60"
      >
        <div className="relative w-full" style={{ aspectRatio: visual.aspect }}>
          <Image
            src={visual.image}
            alt={visual.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-5 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-bone">{visual.title}</p>
          <p className="mt-0.5 text-xs text-smoke">{visual.credit}</p>
        </figcaption>
      </figure>
    </div>
  );
}
