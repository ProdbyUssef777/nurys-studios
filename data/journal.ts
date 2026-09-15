// ────────────────────────────────────────────────────────────
// JOURNAL / NEWS
// Add a new entry by adding one object to this array.
// `category`: 'release' | 'announcement' | 'behind-the-scenes' |
// 'visual' | 'news'
// ────────────────────────────────────────────────────────────

export type JournalCategory =
  | 'release'
  | 'announcement'
  | 'behind-the-scenes'
  | 'visual'
  | 'news';

export interface JournalEntry {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  date: string; // ISO format, e.g. '2026-01-14'
  image: string;
}

export const journalEntries: JournalEntry[] = [
  {
    slug: 'nurys-studios-launch',
    title: 'NURYS STUDIOS begins.',
    excerpt:
      'An independent record label and creative collective opens its doors in Morocco, with an active foundation already producing music and visual work.',
    category: 'announcement',
    date: '2026-01-14',
    image: '/img/journal/journal-01.svg',
  },
];

export const journalCategoryLabels: Record<JournalCategory, string> = {
  release: 'New Releases',
  announcement: 'Artist Announcements',
  'behind-the-scenes': 'Behind the Scenes',
  visual: 'Visual Projects',
  news: 'NURYS News',
};
