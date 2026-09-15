import type { Metadata } from 'next';
import Image from 'next/image';
import { journalEntries, journalCategoryLabels } from '@/data/journal';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'News, releases and behind-the-scenes from NURYS STUDIOS.',
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
              <div className="relative aspect-[3/2] overflow-hidden bg-void">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
                />
              </div>
              <p className="mt-5 text-xs tracking-wide2 text-smoke">
                {journalCategoryLabels[entry.category]} ·{' '}
                {new Date(entry.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tightest">
                {entry.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-bone/70">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
