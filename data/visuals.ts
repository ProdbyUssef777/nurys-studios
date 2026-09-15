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
    slug: 'visual-01',
    title: 'Untitled Frame 01',
    credit: 'Direction — ANYS',
    category: 'photo',
    orientation: 'portrait',
    image: '/img/visuals/visual-01.svg',
  },
  {
    slug: 'visual-02',
    title: 'Untitled Frame 02',
    credit: 'Film — VALI',
    category: 'video',
    orientation: 'landscape',
    image: '/img/visuals/visual-02.svg',
  },
  {
    slug: 'visual-03',
    title: 'Untitled Frame 03',
    credit: 'Art Direction — ANYS',
    category: 'direction',
    orientation: 'square',
    image: '/img/visuals/visual-03.svg',
  },
  {
    slug: 'visual-04',
    title: 'Untitled Frame 04',
    credit: 'Design — ANYS',
    category: 'design',
    orientation: 'portrait',
    image: '/img/visuals/visual-04.svg',
  },
  {
    slug: 'visual-05',
    title: 'Untitled Frame 05',
    credit: 'Film — VALI',
    category: 'film',
    orientation: 'landscape',
    image: '/img/visuals/visual-05.svg',
  },
];

export const visualCategoryLabels: Record<VisualCategory, string> = {
  video: 'Music Videos',
  photo: 'Photography',
  film: 'Film',
  direction: 'Art Direction',
  design: 'Design',
};
