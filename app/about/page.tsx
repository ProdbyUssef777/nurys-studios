import type { Metadata } from 'next';
import { site, principles } from '@/data/site';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description: site.description,
};

export default function AboutPage() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-edge">
        <Reveal>
          <h1 className="max-w-3xl font-display text-display-lg font-bold leading-[0.95] tracking-tightest text-balance">
            More than a label.
          </h1>
        </Reveal>

        <Reveal>
          <div className="mt-16 max-w-2xl space-y-6 text-base leading-relaxed text-bone/80 md:text-lg">
            <p>
              NURYS STUDIOS is an independent record label and creative collective from
              Morocco.
            </p>
            <p>
              Built by producers, artists, designers, photographers and filmmakers, NURYS
              connects music and visual culture under one identity.
            </p>
            <p>
              We are creating a platform where artists and creatives can experiment, evolve
              and build worlds around their work.
            </p>
            <p>
              Our ambition is to introduce new sounds, new styles and new creative movements
              to Morocco — then connect them with audiences beyond it.
            </p>
          </div>
        </Reveal>

        <div className="mt-28 grid gap-16 border-t border-line pt-16 md:grid-cols-3">
          <Reveal>
            <h2 className="text-xs tracking-wide2 text-smoke">Our Foundation</h2>
            <p className="mt-4 text-sm leading-relaxed text-bone/70">
              Although NURYS is newly established, its foundation is built around an active
              creative team already producing music and visual projects.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-xs tracking-wide2 text-smoke">Our Direction</h2>
            <p className="mt-4 font-display text-xl font-medium tracking-tightest">
              {site.direction}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="text-xs tracking-wide2 text-smoke">Our Principles</h2>
            <ul className="mt-4 space-y-2">
              {principles.map((p) => (
                <li key={p} className="text-sm text-bone/70">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
