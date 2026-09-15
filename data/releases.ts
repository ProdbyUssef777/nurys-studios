// ────────────────────────────────────────────────────────────
// MUSIC / RELEASES
// Add a new release by adding one object to this array.
// `type` drives the filter tabs on /music: 'single' | 'ep' |
// 'album' | 'production'.
//
// Streaming links are optional and empty by default — replace
// '' with a real URL once the release is live, and the button
// will appear automatically. Never invent a URL.
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
  links: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
  };
}

export const releases: Release[] = [
  {
    slug: 'placeholder-single-01',
    title: 'Untitled Session 01',
    artist: '2MON666',
    year: 2026,
    type: 'single',
    credits: 'Produced by USSEF777',
    cover: '/img/releases/release-01.svg',
    links: {},
  },
  {
    slug: 'placeholder-single-02',
    title: 'Untitled Session 02',
    artist: '24SNAKE',
    year: 2026,
    type: 'single',
    credits: 'Produced by 2MON666',
    cover: '/img/releases/release-02.svg',
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
    links: {},
  },
];
