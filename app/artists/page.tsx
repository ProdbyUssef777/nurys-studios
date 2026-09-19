import type { Metadata } from 'next';
import Image from 'next/image';
import { artists, categoryLabels, type ArtistCategory } from '@/data/artists';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Artists',
  description: 'The current NURYS collective — artists, producers and creatives.',
};

const order: ArtistCategory[] = ['artist', 'producer', 'engineer', 'creative'];

export default function ArtistsPage() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-edge">
        <Reveal>
          <h1 className="font-display text-display-lg font-bold tracking-tightest">Roster</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
            The current NURYS collective — the foundation the label is built around.
          </p>
        </Reveal>

        {order.map((category) => {
          const group = artists.filter((a) => a.category === category);
          if (group.length === 0) return null;
          return (
            <section key={category} className="mt-24 border-t border-line pt-12 first:mt-16">
              <h2 className="text-xs tracking-wide2 text-smoke">{categoryLabels[category]}</h2>

              <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-2">
                {group.map((artist) => (
                  <div key={artist.slug} id={artist.slug} className="grid grid-cols-[minmax(0,140px)_1fr] gap-6 scroll-mt-32 md:grid-cols-[minmax(0,180px)_1fr]">
                    <div className="group relative aspect-[4/5] overflow-hidden bg-void">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        sizes="180px"
                        className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tightest md:text-3xl">
                        {artist.name}
                      </h3>
                      <p className="mt-1 text-sm text-bone/70">{artist.roles.join(' / ')}</p>
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-smoke">
                        {artist.bio}
                      </p>

                      {artist.social?.instagram && (
                        <a
                          href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-xs text-bone/70 underline underline-offset-4 transition-colors hover:text-bone"
                        >
                          {artist.social.instagram}
                        </a>
                      )}

                      {artist.gallery && artist.gallery.length > 0 && (
                        <div className="mt-6 grid grid-cols-3 gap-2 max-w-sm">
                          {artist.gallery.map((src) => (
                            <div key={src} className="relative aspect-square overflow-hidden bg-void">
                              <Image
                                src={src}
                                alt={`${artist.name} — photo`}
                                fill
                                sizes="120px"
                                className="object-cover transition-transform duration-700 ease-editorial hover:scale-110"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
