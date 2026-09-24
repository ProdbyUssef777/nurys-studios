import type { Metadata } from 'next';
import { site } from '@/data/site';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h1 className="font-display text-display-lg font-bold tracking-tightest">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xs text-smoke">Last updated: September 2026</p>
        </Reveal>

        <Reveal>
          <div className="mt-16 space-y-10 text-sm leading-relaxed text-bone/80">
            <div>
              <h2 className="text-xs tracking-wide2 text-smoke">What we collect</h2>
              <p className="mt-3">
                When you use the contact form or newsletter signup on this site, your email
                app opens with a pre-filled message addressed to us — we only receive what you
                choose to send. We don&rsquo;t run our own server or database that stores this
                information.
              </p>
            </div>

            <div>
              <h2 className="text-xs tracking-wide2 text-smoke">Analytics</h2>
              <p className="mt-3">
                This site uses Vercel Analytics to understand overall traffic — which pages get
                visited, roughly where from, and on what kind of device. This is aggregated and
                anonymized; it doesn&rsquo;t identify you personally, and no cookies are used
                for this.
              </p>
            </div>

            <div>
              <h2 className="text-xs tracking-wide2 text-smoke">Embedded content</h2>
              <p className="mt-3">
                Some release pages embed a Spotify player. When you press play, Spotify may set
                its own cookies and collect data according to{' '}
                <a
                  href="https://www.spotify.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-bone"
                >
                  Spotify&rsquo;s privacy policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xs tracking-wide2 text-smoke">Contact</h2>
              <p className="mt-3">
                Questions about this policy or your data? Write to{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="underline underline-offset-4 hover:text-bone"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
