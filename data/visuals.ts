// ────────────────────────────────────────────────────────────
// VISUALS
// Add a new visual project by adding one object to this array.
// `category` drives the filter on /visuals: 'video' | 'photo' |
// 'film' | 'direction' | 'design'.
// `orientation` controls the grid card's aspect ratio.
// ────────────────────────────────────────────────────────────

export type VisualCategory = 'video' | 'photo' | 'film' | 'direction' | 'design';

export interface Visual {
  slug: string;
  title: string;
  credit: string;
  category: VisualCategory;
  orientation: 'portrait' | 'landscape' | 'square';
  image: string;
}

export const visuals: Visual[] = [
  {
    slug: 'anys-visual-01',
    title: 'Untitled Frame 01',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'landscape',
    image: '/img/visuals/anys-visual-01.jpg',
  },
  {
    slug: 'anys-visual-02',
    title: 'Untitled Frame 02',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'portrait',
    image: '/img/visuals/anys-visual-02.jpg',
  },
  {
    slug: 'anys-visual-03',
    title: 'Untitled Frame 03',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'landscape',
    image: '/img/visuals/anys-visual-03.jpg',
  },
  {
    slug: 'anys-visual-04',
    title: 'Untitled Frame 04',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'portrait',
    image: '/img/visuals/anys-visual-04.jpg',
  },
  {
    slug: 'anys-visual-05',
    title: 'Untitled Frame 05',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'portrait',
    image: '/img/visuals/anys-visual-05.jpg',
  },
  {
    slug: 'anys-visual-06',
    title: 'Untitled Frame 06',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'landscape',
    image: '/img/visuals/anys-visual-06.jpg',
  },
  {
    slug: 'anys-visual-07',
    title: 'Untitled Frame 07',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'landscape',
    image: '/img/visuals/anys-visual-07.jpg',
  },
  {
    slug: 'anys-visual-08',
    title: 'Untitled Frame 08',
    credit: 'Photography — ANYS',
    category: 'photo',
    orientation: 'portrait',
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
