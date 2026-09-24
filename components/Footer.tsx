import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/data/site';
import NewsletterForm from './NewsletterForm';

const socials = [
  { label: 'Instagram', href: site.instagram.url },
  ...(site.spotify ? [{ label: 'Spotify', href: site.spotify }] : []),
  ...(site.appleMusic ? [{ label: 'Apple Music', href: site.appleMusic }] : []),
  ...(site.youtube ? [{ label: 'YouTube', href: site.youtube }] : []),
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-edge px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="relative h-10 w-10">
              <Image
                src={site.logo.white}
                alt={site.name}
                fill
                className="logo-dark object-contain"
              />
              <Image
                src={site.logo.black}
                alt={site.name}
                fill
                className="logo-light object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
              {site.tagline.join(' ')}
            </p>
            <p className="mt-6 text-sm text-bone/80">{site.direction}</p>
          </div>

          <div className="flex flex-col items-start gap-8 md:items-end">
            <NewsletterForm />
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/journal"
                className="text-sm text-bone/80 transition-colors hover:text-bone"
              >
                Journal
              </Link>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bone/80 transition-colors hover:text-bone"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-smoke md:flex-row md:items-center md:justify-between">
          <p>{site.copyright}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/press" className="transition-colors hover:text-bone">
              Press
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-bone">
              Privacy
            </Link>
            <a href="/journal/rss.xml" className="transition-colors hover:text-bone">
              RSS
            </a>
            <p>{site.legalLine}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
