import Image from 'next/image';
import type { Visual } from '@/data/visuals';

export default function VisualCard({ visual }: { visual: Visual }) {
  const Wrapper = visual.url ? 'a' : 'div';
  const wrapperProps = visual.url
    ? { href: visual.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <div className="group relative">
      <Wrapper {...wrapperProps} className="block">
        <figure className="relative origin-center overflow-hidden bg-void shadow-none transition-all duration-500 ease-editorial group-hover:z-20 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-black/60">
          <div className="relative w-full" style={{ aspectRatio: visual.aspect }}>
            <Image
              src={visual.image}
              alt={visual.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            {visual.url && (
              <div className="absolute inset-0 flex items-center justify-center bg-ink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bone/90">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 text-ink">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-5 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-bone">{visual.title}</p>
            <p className="mt-0.5 text-xs text-smoke">{visual.credit}</p>
          </figcaption>
        </figure>
      </Wrapper>
    </div>
  );
}
