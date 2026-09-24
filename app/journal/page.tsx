import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { journalEntries, journalCategoryLabels } from '@/data/journal';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'News, releases and behind-the-scenes from NURYS STUDIOS.',
  openGraph: { images: ['/img/journal/low-key-announcement.jpg'] },
  twitter: { images: ['/img/journal/low-key-announcement.jpg'] },
};

export default function JournalPage() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-edge">
        <Reveal>
          <h1 className="font-display text-display-lg font-bold tracking-tightest">Journal</h1>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {journalEntries.map((entry) => (
            <article key={entry.slug} className="group">
              <Link href={`/journal/${entry.slug}`}>
                <div className="relative aspect-[2/3] overflow-hidden bg-void">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                </div>
              </Link>
              <p className="mt-5 text-xs tracking-wide2 text-smoke">
                {journalCategoryLabels[entry.category]} ·{' '}
                {new Date(entry.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <Link href={`/journal/${entry.slug}`}>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tightest transition-colors hover:text-bone/70">
                  {entry.title}
                </h2>
              </Link>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-bone/70">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
