// ────────────────────────────────────────────────────────────
// MUSIC / RELEASES
// Add a new release by adding one object to this array.
// `type` drives the filter tabs on /music: 'single' | 'ep' |
// 'album' | 'production'.
//
// Streaming links are optional and empty by default — replace
// '' with a real URL once the release is live, and the button
// will appear automatically. Never invent a URL.
//
// `publishAt` (optional): ISO date-time. If set, the release
// stays hidden everywhere on the site until that moment, then
// appears automatically — no redeploy needed. Use this to line
// up a drop with its streaming release time. Leave it unset for
// releases that are already out.
//
// `draft` (optional): set true to hide a release everywhere on
// the site — useful for placeholders that don't have real
// artwork/credits/links yet. Flip to false (or remove) once ready.
// ────────────────────────────────────────────────────────────

export type ReleaseType = 'single' | 'ep' | 'album' | 'production';

export interface Release {
  slug: string;
  title: string;
  artist: string;
  year: number;
  type: ReleaseType;
  credits: string;
  cover: string;
  publishAt?: string;
  draft?: boolean;
  links: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    deezer?: string;
    iheart?: string;
  };
}

export const releases: Release[] = [
  {
    slug: 'low-key',
    title: 'LOW-KEY',
    artist: '2mon666 ft. Ussef777',
    year: 2026,
    type: 'single',
    credits: 'Produced by 2mon666, Ussef777 · Directed & DP: Abdel Ali Kafil',
    cover: '/img/journal/low-key-announcement.jpg',
    publishAt: '2026-09-25T00:00:00+01:00',
    links: {
      // Add the real links the moment they're live — they'll show up
      // automatically next to the release, no other change needed.
    },
  },
  {
    slug: '2gb',
    title: '2GB',
    artist: 'Ussef777 ft. 2MON666',
    year: 2026,
    type: 'single',
    credits: 'Produced by Ussef777 & 2mon666',
    cover: '/img/releases/2gb.jpg',
    links: {
      spotify: 'https://open.spotify.com/album/5zdfJc935sveuQ8Kjd9dDz',
      appleMusic: 'https://music.apple.com/us/album/2gb-feat-2mon666-single/6776856507',
      deezer: 'https://www.deezer.com/album/998685461',
      iheart: 'https://www.iheart.com/artist/id-41135763/albums/id-406979943',
    },
  },
  {
    slug: 'placeholder-single-02',
    title: 'Untitled Session 02',
    artist: '24SNAKE',
    year: 2026,
    type: 'single',
    credits: 'Produced by 2MON666',
    cover: '/img/releases/release-02.svg',
    draft: true,
    links: {},
  },
  {
    slug: 'placeholder-production-01',
    title: 'Untitled Production 01',
    artist: 'USSEF777',
    year: 2026,
    type: 'production',
    credits: 'Instrumental / Beat tape',
    cover: '/img/releases/release-03.svg',
    draft: true,
    links: {},
  },
];

// A release is live once its publishAt time has passed (or it has none),
// and it isn't marked as a draft.
export function isReleased(release: Release): boolean {
  if (release.draft) return false;
  return !release.publishAt || new Date(release.publishAt).getTime() <= Date.now();
}

// Filtered, publish-date-aware list — use this everywhere releases are
// rendered instead of importing `releases` directly.
export function visibleReleases(list: Release[] = releases): Release[] {
  return list.filter(isReleased);
}
