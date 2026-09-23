// ────────────────────────────────────────────────────────────
// VISUALS
// Add a new visual project by adding one object to this array.
// `category` drives the filter on /visuals: 'video' | 'photo' |
// 'film' | 'direction' | 'design'.
// `aspect` is the image's true width/height ratio — used so the
// card's shape always matches the photo, with no cropping.
// ────────────────────────────────────────────────────────────

export type VisualCategory = 'video' | 'photo' | 'film' | 'direction' | 'design';

export interface Visual {
  slug: string;
  title: string;
  credit: string;
  category: VisualCategory;
  // Exact width/height ratio of the source image (e.g. 1280/960).
  // Drives the card's shape so nothing gets cropped or stretched.
  aspect: number;
  image: string;
  // Optional external link (e.g. YouTube) — set for music videos so
  // the thumbnail opens the video in a new tab. Leave unset for
  // plain photos.
  url?: string;
}

export const visuals: Visual[] = [
  {
    slug: '2gb-music-video',
    title: '2GB (Music Video)',
    credit: 'Ussef777 ft. 2MON666',
    category: 'video',
    aspect: 1.7778,
    image: '/img/visuals/2gb-music-video.jpg',
    url: 'https://www.youtube.com/watch?v=reB1cd11etU',
  },
  {
    slug: 'anys-visual-02',
    title: 'Dark Ocean Waves',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.7500,
    image: '/img/visuals/anys-visual-02.jpg',
  },
  {
    slug: 'anys-visual-04',
    title: 'Blue Crescent Moon',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.6664,
    image: '/img/visuals/anys-visual-04.jpg',
  },
  {
    slug: 'anys-visual-05',
    title: 'Sunset Street Lamps',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.7500,
    image: '/img/visuals/anys-visual-05.jpg',
  },
  {
    slug: 'anys-visual-08',
    title: 'Golden Ocean',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.7492,
    image: '/img/visuals/anys-visual-08.jpg',
  },
  {
    slug: 'anys-visual-celestial-gaze',
    title: 'Celestial Gaze',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.5625,
    image: '/img/visuals/anys-visual-celestial-gaze.jpg',
  },
  {
    slug: 'anys-visual-midnight-pulse',
    title: 'Midnight Pulse',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.5626,
    image: '/img/visuals/anys-visual-midnight-pulse.jpg',
  },
  {
    slug: 'anys-visual-star-shadow-vintage',
    title: 'Star Shadow Vintage',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.5625,
    image: '/img/visuals/anys-visual-star-shadow-vintage.jpg',
  },
  {
    slug: 'lowkey-poster-silhouette',
    title: 'LOW-KEY — Silhouette',
    credit: 'Design — ANYS',
    category: 'design',
    aspect: 1,
    image: '/img/visuals/lowkey-poster-silhouette.jpg',
  },
  {
    slug: 'lowkey-poster-lx-mark',
    title: 'LOW-KEY — LX Mark',
    credit: 'Design — ANYS',
    category: 'design',
    aspect: 1,
    image: '/img/visuals/lowkey-poster-lx-mark.jpg',
  },
  {
    slug: 'lowkey-poster-reaching-light',
    title: 'LOW-KEY — Reaching Light',
    credit: 'Design — ANYS',
    category: 'design',
    aspect: 1,
    image: '/img/visuals/lowkey-poster-reaching-light.jpg',
  },
  {
    slug: 'lowkey-poster-same-city',
    title: 'LOW-KEY — Same City',
    credit: 'Design — ANYS',
    category: 'design',
    aspect: 1,
    image: '/img/visuals/lowkey-poster-same-city.jpg',
  },
];

export const visualCategoryLabels: Record<VisualCategory, string> = {
  video: 'Music Videos',
  photo: 'Photography',
  film: 'Film',
  direction: 'Art Direction',
  design: 'Design',
};
