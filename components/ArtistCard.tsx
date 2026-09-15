import Image from 'next/image';
import Link from 'next/link';
import type { Artist } from '@/data/artists';

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link href={`/artists#${artist.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-void">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100">
          <p className="text-xs tracking-wide2 text-bone">{artist.roles.join(' / ')}</p>
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-line pt-3">
        <h3 className="font-display text-xl font-semibold tracking-tightest">{artist.name}</h3>
        <span className="text-xs text-smoke">{artist.roles[0]}</span>
      </div>
    </Link>
  );
}
