import type { Artist } from '@/data/artists';
import ArtistCard from './ArtistCard';

export default function RosterMarquee({ artists }: { artists: Artist[] }) {
  // Duplicate the track so the loop is seamless (animates from 0 to -50%).
  const track = [...artists, ...artists];

  return (
    <div className="marquee-wrapper overflow-hidden">
      <div className="animate-marquee flex w-max gap-4 md:gap-6">
        {track.map((artist, i) => (
          <div key={`${artist.slug}-${i}`} className="w-[200px] shrink-0 sm:w-[240px] md:w-[260px]">
            <ArtistCard artist={artist} />
          </div>
        ))}
      </div>
    </div>
  );
}
