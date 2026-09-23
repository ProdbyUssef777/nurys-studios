import Image from 'next/image';
import Link from 'next/link';
import type { Release } from '@/data/releases';
import StreamingLinks from './StreamingLinks';

const typeLabels: Record<Release['type'], string> = {
  single: 'Single',
  ep: 'EP',
  album: 'Album',
  production: 'Production',
};

export default function ReleaseRow({ release }: { release: Release }) {
  return (
    <div className="group grid grid-cols-[80px_1fr] items-center gap-5 border-b border-line py-6 md:grid-cols-[110px_1fr_auto] md:gap-8 md:py-8">
      <div className="relative aspect-square w-full overflow-hidden bg-void">
        <Image
          src={release.cover}
          alt={`${release.title} artwork`}
          fill
          sizes="120px"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs tracking-wide2 text-smoke">
          {typeLabels[release.type]} · {release.year}
        </p>
        <h3 className="mt-1 truncate font-display text-2xl font-semibold tracking-tightest md:text-3xl">
          <Link href={`/music/${release.slug}`} className="hover:opacity-70 transition-opacity">
            {release.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-bone/70">{release.artist}</p>
        <p className="mt-1 text-xs text-smoke">{release.credits}</p>
        <div className="mt-3 md:hidden">
          <StreamingLinks links={release.links} />
        </div>
      </div>

      <div className="col-span-2 hidden md:col-span-1 md:block">
        <StreamingLinks links={release.links} />
      </div>
    </div>
  );
}
