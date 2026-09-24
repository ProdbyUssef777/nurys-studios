import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { journalEntries, journalCategoryLabels } from '@/data/journal';
import { site } from '@/data/site';
import Reveal from '@/components/Reveal';

export const revalidate = 300;

export function generateStaticParams() {
  return journalEntries.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = journalEntries.find((e) => e.slug === params.slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt.split('\n\n')[0],
    openGraph: { images: [entry.image] },
    twitter: { images: [entry.image] },
  };
}

export default function JournalEntryPage({ params }: { params: { slug: string } }) {
  const entry = journalEntries.find((e) => e.slug === params.slug);
  if (!entry) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: entry.title,
    datePublished: entry.date,
    image: `${site.url}${entry.image}`,
    url: `${site.url}/journal/${entry.slug}`,
    publisher: { '@type': 'Organization', name: site.name, url: site.url },
    articleBody: entry.excerpt,
  };

  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Link href="/journal" className="text-xs text-smoke underline underline-offset-4 hover:text-bone">
            ← Journal
          </Link>
        </Reveal>

        <Reveal>
          <div className="relative mt-8 aspect-[2/3] max-w-md overflow-hidden bg-void">
            <Image src={entry.image} alt={entry.title} fill className="object-contain" priority />
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-xs tracking-wide2 text-smoke">
            {journalCategoryLabels[entry.category]} ·{' '}
            {new Date(entry.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          <h1 className="mt-3 font-display text-display-md font-bold tracking-tightest">
            {entry.title}
          </h1>
          <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-bone/80">
            {entry.excerpt}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
