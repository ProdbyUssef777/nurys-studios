import type { Metadata } from 'next';
import { site, contactChannels } from '@/data/site';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with NURYS STUDIOS.',
};

export default function ContactPage() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-edge">
        <Reveal>
          <h1 className="max-w-3xl font-display text-display-lg font-bold leading-[0.95] tracking-tightest text-balance">
            Let&rsquo;s build what&rsquo;s next.
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {contactChannels.map((c) => (
                  <span
                    key={c}
                    className="border border-line px-3 py-1 text-xs text-bone/70"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-14 space-y-6">
                <div>
                  <p className="text-xs tracking-wide2 text-smoke">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-lg text-bone underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-wide2 text-smoke">Instagram</p>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg text-bone underline underline-offset-4"
                  >
                    {site.instagram.handle}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
