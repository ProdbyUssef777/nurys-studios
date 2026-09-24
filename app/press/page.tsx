import type { Metadata } from 'next';
import { site } from '@/data/site';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press kit for NURYS STUDIOS — logos, bio and contact for media, blogs and radio.',
};

const assets = [
  { label: 'Logo — White (PNG)', href: '/img/brand/logo-white.png' },
  { label: 'Logo — Black (PNG)', href: '/img/brand/logo-black.png' },
];

const bioShort =
  'NURYS STUDIOS is an independent record label and creative collective from Morocco, building new sounds, styles and visual culture with an international vision.';

const bioLong = `NURYS STUDIOS is an independent record label and creative collective based in Morocco. Built by producers, artists, designers, photographers and filmmakers, NURYS connects music and visual culture under one identity.

The label is developing a roster of artists and producers — including 2MON666, Ussef777, SHXTGUN.WAV, Sultan Moussa (OVA) and 24SNAKE — alongside a creative circle handling direction, design, photography and film for every release.

NURYS STUDIOS is new. The creative work has already started.`;

export default function PressPage() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h1 className="font-display text-display-lg font-bold tracking-tightest">Press</h1>
          <p className="mt-6 text-base leading-relaxed text-bone/70 md:text-lg">{bioShort}</p>
        </Reveal>

        <Reveal>
          <section className="mt-20 border-t border-line pt-12">
            <h2 className="text-xs tracking-wide2 text-smoke">Full bio</h2>
            <p className="mt-6 whitespace-pre-line max-w-xl text-sm leading-relaxed text-bone/80">
              {bioLong}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 border-t border-line pt-12">
            <h2 className="text-xs tracking-wide2 text-smoke">Logo assets</h2>
            <div className="mt-6 flex flex-col gap-3">
              {assets.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  download
                  className="w-fit text-sm text-bone underline underline-offset-4 hover:text-bone/70"
                >
                  {a.label} ↓
                </a>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20 border-t border-line pt-12">
            <h2 className="text-xs tracking-wide2 text-smoke">Press contact</h2>
            <a
              href={`mailto:${site.email}?subject=Press inquiry`}
              className="mt-4 inline-block text-lg text-bone underline underline-offset-4 hover:text-bone/70"
            >
              {site.email}
            </a>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
