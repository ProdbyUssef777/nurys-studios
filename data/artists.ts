// ────────────────────────────────────────────────────────────
// ARTISTS / COLLECTIVE
// Add a new person by adding one object to this array — every
// page (Home, Artists, roster filters) reads from here.
//
// `category` controls where they're grouped on /artists:
//   'artist' | 'producer' | 'creative' | 'engineer'
// A person can hold more than one role in `roles`, but only
// one `category` for grouping purposes.
//
// `image` should point to a file in /public/img/artists/.
// Drop a real photo in there with the matching filename and
// it will replace the placeholder automatically.
// ────────────────────────────────────────────────────────────

export type ArtistCategory = 'artist' | 'producer' | 'creative' | 'engineer';

export interface Artist {
  slug: string;
  name: string;
  roles: string[];
  category: ArtistCategory;
  bio: string;
  image: string;
  // Optional extra photos shown on the artist's profile section on
  // /artists, below the main image. Add paths the same way as `image`.
  gallery?: string[];
  social?: {
    instagram?: string;
  };
}

export const artists: Artist[] = [
  {
    slug: 'ussef777',
    name: 'USSEF777',
    roles: ['Music Producer'],
    category: 'producer',
    bio: 'Foundational producer of the NURYS collective, shaping the label’s early sonic identity.',
    image: '/img/artists/ussef777.jpg',
    social: { instagram: '@ussef.beat777' },
  },
  {
    slug: '2mon666',
    name: '2MON666',
    roles: ['Music Producer', 'Artist'],
    category: 'producer',
    bio: 'Producer and artist working across production and performance for the NURYS movement.',
    image: '/img/artists/2mon666.jpg',
    social: { instagram: '@2mon666' },
  },
  {
    slug: 'shxtgunwav',
    name: 'SHXTGUN.WAV',
    roles: ['Music Producer'],
    category: 'producer',
    bio: 'Producer bringing a new sonic direction to the NURYS roster.',
    image: '/img/artists/shxtgunwav.jpg',
    social: { instagram: '@shxtgun.wav' },
  },
  {
    slug: 'anys',
    name: 'ANYS',
    roles: ['Designer', 'Photographer', 'Audiovisual', 'Filmmaker'],
    category: 'creative',
    bio: 'Multidisciplinary creative shaping the visual language of NURYS across design, photography and film.',
    image: '/img/artists/anys.jpg',
    social: { instagram: '@anysthereal_' },
  },
  {
    slug: '24snake',
    name: '24SNAKE',
    roles: ['Artist', 'Rapper'],
    category: 'artist',
    bio: 'Artist and rapper bringing new lyrical direction to the NURYS roster.',
    image: '/img/artists/24snake.jpg',
    gallery: [
      '/img/artists/24snake-gallery/24snake-01.jpg',
      '/img/artists/24snake-gallery/24snake-02.jpg',
      '/img/artists/24snake-gallery/24snake-03.jpg',
      '/img/artists/24snake-gallery/24snake-04.jpg',
      '/img/artists/24snake-gallery/24snake-05.jpg',
      '/img/artists/24snake-gallery/24snake-06.jpg',
      '/img/artists/24snake-gallery/24snake-07.jpg',
    ],
    social: { instagram: '@24.snake' },
  },
  {
    slug: 'sultanmoussa',
    name: 'SULTAN MOUSSA ( OVA )',
    roles: ['Artist', 'Rapper'],
    category: 'artist',
    bio: 'is an Egyptian artist bringing a distinctive energy to the region’s evolving underground scene. His sound blends raw emotion, modern trap influences, and experimental textures, creating a style that feels personal, direct, and unapologetic..',
    image: '/img/artists/sultanmoussa.jpg',
    social: { instagram: '@sultanmoussax' },
  }
  {
    slug: 'vali',
    name: 'VALI',
    roles: ['Video Editor', 'Filmmaker'],
    category: 'creative',
    bio: 'Video editor and filmmaker building the visual world around NURYS releases.',
    image: '/img/artists/vali.jpg',
    social: { instagram: '@valinnoff' },
  },
  {
    slug: 'mixedbyfade',
    name: 'MIXEDBYFADE',
    roles: ['Sound Engineer'],
    category: 'engineer',
    bio: 'Sound engineer shaping the final mix and low end across the NURYS catalogue.',
    image: '/img/artists/mixedbyfade.jpg',
    social: { instagram: '@mixedbyfade' },
  },
];

export const categoryLabels: Record<ArtistCategory, string> = {
  artist: 'Artists',
  producer: 'Producers',
  creative: 'Creatives',
  engineer: 'Sound Engineers',
};
