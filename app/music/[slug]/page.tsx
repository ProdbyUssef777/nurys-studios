import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { releases } from '@/data/releases';
import StreamingLinks from '@/components/StreamingLinks';

function getSpotifyEmbed(url?: string) {
  if (!url) return null;
  const match = url.match(/open\.spotify\.com\/(track|album|playlist)\/([^?]+)/);
  if (!match) return null;
  return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator`;
}

export function generateStaticParams() {
  return releases.map((release) => ({ slug: release.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const release = releases.find((item) => item.slug === params.slug);
  if (!release) return {};
  return {
    title: release.title,
    description: `${release.title} — ${release.artist}. ${release.credits}`,
    openGraph: {
      title: `${release.title} — ${release.artist}`,
      description: release.credits,
      type: 'music.song',
      images: [release.cover],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${release.title} — ${release.artist}`,
      description: release.credits,
      images: [release.cover],
    },
  };
}

export default function ReleasePage({ params }: { params: { slug: string } }) {
  const release = releases.find((item) => item.slug === params.slug);
  if (!release) notFound();

  const spotifyEmbed = getSpotifyEmbed(release.links.spotify);

  return (
    <div className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-edge">
        <Link href="/music" className="text-xs tracking-wide2 text-smoke hover:text-bone">
          ← BACK TO MUSIC
        </Link>

        <div className="mt-10 grid gap-12 md:grid-cols-[minmax(280px,420px)_1fr] md:items-start">
          <div className="relative aspect-square overflow-hidden bg-void">
            <Image
              src={release.cover}
              alt={`${release.title} artwork`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs tracking-wide2 text-smoke">
              {release.type.toUpperCase()} · {release.year}
            </p>
            <h1 className="mt-3 font-display text-display-lg font-bold tracking-tightest">
              {release.title}
            </h1>
            <p className="mt-3 text-base text-bone/70">{release.artist}</p>
            <p className="mt-3 text-sm text-smoke">{release.credits}</p>

            {spotifyEmbed && (
              <div className="mt-10 overflow-hidden border border-line">
                <iframe
                  src={spotifyEmbed}
                  title={`${release.title} on Spotify`}
                  width="100%"
                  height="152"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="block"
                />
              </div>
            )}

            <div className="mt-8">
              <StreamingLinks links={release.links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
