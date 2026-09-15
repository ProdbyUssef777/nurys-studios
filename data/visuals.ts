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
}

export const visuals: Visual[] = [
  {
    slug: 'anys-visual-01',
    title: 'Untitled Frame 01',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 1.3333,
    image: '/img/visuals/anys-visual-01.jpg',
  },
  {
    slug: 'anys-visual-02',
    title: 'Untitled Frame 02',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.7500,
    image: '/img/visuals/anys-visual-02.jpg',
  },
  {
    slug: 'anys-visual-03',
    title: 'Untitled Frame 03',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 1.3347,
    image: '/img/visuals/anys-visual-03.jpg',
  },
  {
    slug: 'anys-visual-04',
    title: 'Untitled Frame 04',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.6664,
    image: '/img/visuals/anys-visual-04.jpg',
  },
  {
    slug: 'anys-visual-05',
    title: 'Untitled Frame 05',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.7500,
    image: '/img/visuals/anys-visual-05.jpg',
  },
  {
    slug: 'anys-visual-06',
    title: 'Untitled Frame 06',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 1.3347,
    image: '/img/visuals/anys-visual-06.jpg',
  },
  {
    slug: 'anys-visual-07',
    title: 'Untitled Frame 07',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 1.3333,
    image: '/img/visuals/anys-visual-07.jpg',
  },
  {
    slug: 'anys-visual-08',
    title: 'Untitled Frame 08',
    credit: 'Photography — ANYS',
    category: 'photo',
    aspect: 0.7492,
    image: '/img/visuals/anys-visual-08.jpg',
  },
];

export const visualCategoryLabels: Record<VisualCategory, string> = {
  video: 'Music Videos',
  photo: 'Photography',
  film: 'Film',
  direction: 'Art Direction',
  design: 'Design',
};
