import type { Metadata } from 'next';
import Image from '@/components/BlurImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artists } from '@/data/artists';
import { visibleReleases } from '@/data/releases';
import { visuals } from '@/data/visuals';
import { site } from '@/data/site';
import Reveal from '@/components/Reveal';
import ReleaseRow from '@/components/ReleaseRow';
import VisualCard from '@/components/VisualCard';

export const revalidate = 300;

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

function baseName(name: string) {
  // "SULTAN MOUSSA (OVA)" -> "SULTAN MOUSSA" — strips a parenthetical
  // alias so matching against release/visual credit strings is looser.
  return name.replace(/\(.*?\)/g, '').trim().toLowerCase();
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const artist = artists.find((a) => a.slug === params.slug);
  if (!artist) return {};
  return {
    title: artist.name,
    description: artist.bio,
    openGraph: { images: [artist.image] },
    twitter: { images: [artist.image] },
  };
}

export default function ArtistPage({ params }: { params: { slug: string } }) {
  const artist = artists.find((a) => a.slug === params.slug);
  if (!artist) notFound();

  const name = baseName(artist.name);
  const artistReleases = visibleReleases().filter((r) => r.artist.toLowerCase().includes(name));
  const artistVisuals = visuals.filter((v) => v.credit.toLowerCase().includes(name));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name,
    description: artist.bio,
    image: `${site.url}${artist.image}`,
    url: `${site.url}/artists/${artist.slug}`,
    memberOf: { '@type': 'Organization', name: site.name, url: site.url },
    ...(artist.social?.instagram && {
      sameAs: [`https://instagram.com/${artist.social.instagram.replace('@', '')}`],
    }),
  };

  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-edge">
        <Reveal>
          <Link href="/artists" className="text-xs text-smoke underline underline-offset-4 hover:text-bone">
            ← Roster
          </Link>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-void">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h1 className="font-display text-display-md font-bold tracking-tightest">
                {artist.name}
              </h1>
              <p className="mt-2 text-sm text-bone/70">{artist.roles.join(' / ')}</p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/80">{artist.bio}</p>

              {artist.social?.instagram && (
                <a
                  href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-bone underline underline-offset-4 hover:text-bone/70"
                >
                  {artist.social.instagram} ↗
                </a>
              )}

              {artist.gallery && artist.gallery.length > 0 && (
                <div className="mt-10 grid grid-cols-3 gap-2 max-w-md">
                  {artist.gallery.map((src) => (
                    <div key={src} className="relative aspect-square overflow-hidden bg-void">
                      <Image
                        src={src}
                        alt={`${artist.name} — photo`}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-700 ease-editorial hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {artistReleases.length > 0 && (
          <section className="mt-24 border-t border-line pt-12">
            <h2 className="text-xs tracking-wide2 text-smoke">Releases</h2>
            <div className="mt-8">
              {artistReleases.map((release) => (
                <ReleaseRow key={release.slug} release={release} />
              ))}
            </div>
          </section>
        )}

        {artistVisuals.length > 0 && (
          <section className="mt-24 border-t border-line pt-12">
            <h2 className="text-xs tracking-wide2 text-smoke">Visual Work</h2>
            <div className="mt-8 grid grid-cols-2 items-start gap-4 md:grid-cols-4 md:gap-6">
              {artistVisuals.map((visual) => (
                <VisualCard key={visual.slug} visual={visual} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
