import type { Metadata } from 'next';
import Image from '@/components/BlurImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { releases, isReleased } from '@/data/releases';
import { site } from '@/data/site';
import StreamingLinks from '@/components/StreamingLinks';
import SpotifyPreview from '@/components/SpotifyPreview';
import Reveal from '@/components/Reveal';

export const revalidate = 300;

export function generateStaticParams() {
  return releases.filter((r) => !r.draft).map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const release = releases.find((r) => r.slug === params.slug && !r.draft);
  if (!release) return {};
  return {
    title: release.title,
    description: `${release.title} by ${release.artist} — ${release.credits}`,
    openGraph: { images: [release.cover] },
    twitter: { images: [release.cover] },
  };
}

export default function ReleasePage({ params }: { params: { slug: string } }) {
  const release = releases.find((r) => r.slug === params.slug && !r.draft);
  if (!release) notFound();

  const live = isReleased(release);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicRecording',
    name: release.title,
    byArtist: { '@type': 'MusicGroup', name: release.artist },
    datePublished: release.publishAt ?? `${release.year}`,
    url: `${site.url}/music/${release.slug}`,
    image: `${site.url}${release.cover}`,
    ...(release.links.spotify && {
      sameAs: [release.links.spotify, release.links.appleMusic, release.links.deezer].filter(
        Boolean
      ),
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
          <Link href="/music" className="text-xs text-smoke underline underline-offset-4 hover:text-bone">
            ← Music
          </Link>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
          <Reveal>
            <div className="relative aspect-square overflow-hidden bg-void">
              <Image
                src={release.cover}
                alt={release.title}
                fill
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal>
            <div>
              {!live && (
                <p className="text-xs tracking-wide2 text-rust">
                  OUT {new Date(release.publishAt!).toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: '2-digit',
                    month: '2-digit',
                  })}
                </p>
              )}
              <h1 className="mt-2 font-display text-display-md font-bold tracking-tightest">
                {release.title}
              </h1>
              <p className="mt-2 text-base text-bone/70">{release.artist}</p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-smoke">{release.credits}</p>

              <div className="mt-10">
                {live ? (
                  <>
                    <StreamingLinks links={release.links} />
                    {release.links.spotify && (
                      <div className="mt-6">
                        <SpotifyPreview spotifyUrl={release.links.spotify} />
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-smoke">
                    Not out yet —{' '}
                    <Link href="/journal" className="underline underline-offset-4 hover:text-bone">
                      read the announcement
                    </Link>
                    .
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
