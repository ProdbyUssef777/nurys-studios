# NURYS STUDIOS

Independent record label & creative collective — website.
Built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS.

---

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Change the logo

- Text wordmark: `public/img/logo.svg` (used implicitly via the "NURYS"
  text in `components/Nav.tsx` and `components/Footer.tsx`).
- Favicon: `app/icon.svg`.
- To use a real logo image instead of text, drop your file in
  `public/img/` and swap the `<Link>` text in `components/Nav.tsx`
  for an `<Image>` tag pointing at it.

## 4. Add / edit artists

Edit `data/artists.ts`. Each entry is one object in the `artists`
array:

```ts
{
  slug: 'new-artist',
  name: 'NEW ARTIST',
  roles: ['Producer'],
  category: 'producer', // 'artist' | 'producer' | 'creative'
  bio: 'One or two sentences.',
  image: '/img/artists/new-artist.jpg',
}
```

Drop the photo in `public/img/artists/` with the matching filename.
The Home page, `/artists` roster, and any future artist-detail pages
all read from this one file.

## 5. Add / edit releases

Edit `data/releases.ts`. Each entry is one object in the `releases`
array — `type` controls which filter tab it appears under on
`/music` (`single`, `ep`, `album`, `production`). Leave `links`
fields empty until a release is actually live; the streaming
buttons only appear once a real URL is added.

## 6. Change Instagram / email

Both live in `data/site.ts`:

```ts
email: 'hello@nurys.studio',
instagram: { handle: '@nuryslab', url: 'https://instagram.com/nuryslab' },
```

Everything else — the footer, the contact page, metadata — pulls
from this file automatically.

## 7. Add images

- Artist photos → `public/img/artists/`
- Release covers → `public/img/releases/`
- Visual / gallery work → `public/img/visuals/`
- Journal entry covers → `public/img/journal/`

All current images are generated abstract monochrome placeholders
(SVG) so the site can be reviewed and deployed before real assets
are ready. Replace a placeholder by adding a real file with the
same name (or update the `image` / `cover` path in the matching
`data/*.ts` file) — `next/image` handles JPG, PNG, WebP and SVG.

## 8. Deploy

The project is a standard Next.js app, so it deploys anywhere that
supports Next.js:

**Vercel (recommended, zero config)**
```bash
npm i -g vercel
vercel
```

**Any Node host**
```bash
npm run build
npm run start
```

Before launch, also update `data/site.ts` → `url` to the real
production domain (used for SEO metadata, Open Graph tags, and the
sitemap).

---

## Project structure

```
app/                Routes (App Router) — one folder per page
  page.tsx           Home
  artists/page.tsx
  music/page.tsx
  visuals/page.tsx
  about/page.tsx
  contact/page.tsx
  journal/page.tsx
  layout.tsx         Root layout, global metadata
  globals.css
  sitemap.ts
  robots.ts
components/          Reusable UI building blocks
data/                Centralized content — edit these, not the pages
public/img/          Images, including placeholder assets
scripts/             Placeholder-image generator (not needed at runtime)
```

## Content rules already built in

- Nowhere on the site claims NURYS is a Universal Music, Sony, or
  Virgin Music label — the copy consistently uses "Independent
  Record Label & Creative Collective."
- No invented streaming figures, press logos, or fake partnerships
  appear anywhere.
- Streaming links only render once a real URL is added to
  `data/releases.ts` or `data/site.ts`.


## New site features

- Artist + release-type filtering on `/music`
- Dedicated release pages at `/music/[slug]`
- Spotify embedded previews when a Spotify link exists
- Dynamic release Open Graph image route
- Contact form feedback states
- Footer newsletter UI + `/api/newsletter` webhook endpoint
- Vercel Analytics integration

### One-time setup

1. Run `npm install` after pulling the updated project.
2. In Vercel, add `NEWSLETTER_WEBHOOK_URL` in Project Settings → Environment Variables.
3. Deploy. Shared release URLs now use release artwork in social previews.
