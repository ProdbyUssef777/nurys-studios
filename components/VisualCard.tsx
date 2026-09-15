import Image from 'next/image';
import type { Visual } from '@/data/visuals';

const aspect: Record<Visual['orientation'], string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
};

export default function VisualCard({ visual }: { visual: Visual }) {
  return (
    <figure className="group relative overflow-hidden bg-void">
      <div className={`relative ${aspect[visual.orientation]}`}>
        <Image
          src={visual.image}
          alt={visual.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
      </div>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-5 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm text-bone">{visual.title}</p>
        <p className="mt-0.5 text-xs text-smoke">{visual.credit}</p>
      </figcaption>
    </figure>
  );
}
