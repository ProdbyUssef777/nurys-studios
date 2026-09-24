import type { Metadata } from 'next';
import { visibleReleases } from '@/data/releases';
import MusicLibrary from '@/components/MusicLibrary';
import Reveal from '@/components/Reveal';

// Re-check every 5 minutes so scheduled releases (see `publishAt` in
// data/releases.ts) go live on their own, without a redeploy.
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Music',
  description: 'Releases and productions from the NURYS collective.',
  openGraph: { images: ['/img/releases/2gb.jpg'] },
  twitter: { images: ['/img/releases/2gb.jpg'] },
};

export default function MusicPage() {
  const releases = visibleReleases();

  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-edge">
        <Reveal>
          <h1 className="font-display text-display-lg font-bold tracking-tightest">Music</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
            Sound without boundaries.
          </p>
        </Reveal>

        <div className="mt-16">
          <MusicLibrary releases={releases} />
        </div>
      </div>
    </div>
  );
}
