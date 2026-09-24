import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { artists } from '@/data/artists';
import { releases } from '@/data/releases';
import { journalEntries } from '@/data/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/artists',
    '/music',
    '/visuals',
    '/about',
    '/contact',
    '/journal',
    '/press',
    '/privacy',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));

  const artistEntries: MetadataRoute.Sitemap = artists.map((a) => ({
    url: `${site.url}/artists/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const releaseEntries: MetadataRoute.Sitemap = releases
    .filter((r) => !r.draft)
    .map((r) => ({
      url: `${site.url}/music/${r.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  const journalEntriesMap: MetadataRoute.Sitemap = journalEntries.map((e) => ({
    url: `${site.url}/journal/${e.slug}`,
    lastModified: new Date(e.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...artistEntries, ...releaseEntries, ...journalEntriesMap];
}
