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
    slug: 'low-key-release',
    title: '2mon666 & Ussef777 release "LOW-KEY"',
    excerpt:
      'MUSIC · SEPTEMBER 2026\n\n"LOW-KEY" takes us straight into the atmosphere of the L7OMA, where the noise of the street meets the noise inside your head.\n\nThe lyrics move between attraction, attachment, pressure and the people surrounding you, creating a constant tension between the outside world and your own thoughts. By the final section, the repeated "RASSI" brings everything back to one place: the mind.\n\nProduced by 2mon666 and Ussef777, with a cinematic visual direction by Abdel Ali Kafil, "LOW-KEY" brings music and visual culture together through the NURYS creative circle.\n\nProduced by: 2mon666, Ussef777\nDirected & DP: Abdel Ali Kafil\nWritten by: 2mon666\nLyrics & Color Grading: Anys El Haidi\nMix & Master: MIXEDBYFADE\n1st AD: BOUADDI Youssef\n2nd AD: Anys El Haidi\n\nNURYS STUDIOS ©',
    category: 'release',
    date: '2026-09-01',
    image: '/img/journal/low-key-announcement.jpg',
  },
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
