import { journalEntries } from '@/data/journal';
import { site } from '@/data/site';

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const items = journalEntries
    .map((entry) => {
      const url = `${site.url}/journal/${entry.slug}`;
      const summary = entry.excerpt.split('\n\n')[0];
      return `
    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(entry.date).toUTCString()}</pubDate>
      <description>${escapeXml(summary)}</description>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)} — Journal</title>
    <link>${site.url}/journal</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
