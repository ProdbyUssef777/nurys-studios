// ────────────────────────────────────────────────────────────
// SITE SETTINGS
// Global brand text, links, and contact details.
// Change the email, Instagram handle, or tagline here — it
// updates everywhere on the site automatically.
// ────────────────────────────────────────────────────────────

export const site = {
  name: 'NURYS STUDIOS',
  shortName: 'NURYS',
  tagline: ['NEW SOUNDS.', 'NEW STYLES.', 'NEW MOVEMENT.'],
  direction: 'Morocco → Africa → Worldwide',
  legalLine: 'Independent Record Label & Creative Collective',
  copyright: `© ${new Date().getFullYear()} NURYS STUDIOS`,

  // ── Logo ─────────────────────────────────────────────────
  // White version shows on the site's dark background (nav, footer).
  // Black version is kept for anywhere a light background is used.
  logo: {
    white: '/img/brand/logo-white.png',
    black: '/img/brand/logo-black.png',
  },

  description:
    'NURYS STUDIOS is an independent record label and creative collective from Morocco focused on new sounds, new styles and new creative movements.',

  // ── Contact ──────────────────────────────────────────────
  // Replace with the real inbox before launch.
  email: 'nurysstudios@gmail.com',
  instagram: {
    handle: '@nurys.studio',
    url: 'https://instagram.com/nurys.studio',
  },

  // Leave empty until real platform pages exist — buttons for
  // empty values are hidden automatically by <StreamingLinks />.
  spotify: '',
  appleMusic: '',
  youtube: '',

  // ── Site metadata / SEO ──────────────────────────────────
  url: 'https://nurys.studio',
  seoTitle: 'NURYS STUDIOS — Independent Record Label & Creative Collective',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Artists', href: '/artists' },
  { label: 'Music', href: '/music' },
  { label: 'Visuals', href: '/visuals' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const contactChannels = [
  'Artists',
  'Producers',
  'Directors',
  'Designers',
  'Collaborators',
  'Brands',
  'Industry Partners',
] as const;

export const principles = [
  'Originality',
  'Identity',
  'Experimentation',
  'Collaboration',
  'Evolution',
] as const;
