import Link from 'next/link';
import { site } from '@/data/site';
import { artists } from '@/data/artists';
import { releases } from '@/data/releases';
import { visuals } from '@/data/visuals';
import Reveal from '@/components/Reveal';
import RosterMarquee from '@/components/RosterMarquee';
import ReleaseRow from '@/components/ReleaseRow';
import VisualCard from '@/components/VisualCard';

export default function HomePage() {
  const latestReleases = releases.slice(0, 3);
  const featuredVisuals = visuals.slice(0, 4);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="grain relative flex min-h-[92vh] flex-col justify-end overflow-hidden border-b border-line px-6 pb-14 pt-40 md:px-10 md:pb-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/img/hero-bg.svg"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
        >
          <source src="/video/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

        <div className="relative mx-auto w-full max-w-edge">
          <p className="text-xs tracking-wide2 text-smoke">{site.legalLine}</p>

          <h1 className="mt-6 font-display text-display-xl font-bold tracking-tightest">
            {site.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="text-sm text-bone/80 md:text-base">{site.direction}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="border border-bone px-6 py-3 text-xs tracking-wide2 transition-colors duration-300 ease-editorial hover:bg-bone hover:text-ink"
              >
                EXPLORE NURYS
              </Link>
              <Link
                href="/music"
                className="bg-bone px-6 py-3 text-xs tracking-wide2 text-ink transition-colors duration-300 ease-editorial hover:bg-transparent hover:text-bone hover:border hover:border-bone"
              >
                LISTEN NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────── */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-edge">
            <p className="max-w-3xl font-display text-display-md font-medium leading-[1.05] tracking-tightest text-balance">
              NURYS STUDIOS is an independent record label and creative collective based in
              Morocco.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-bone/70 md:text-lg">
              We build new worlds around music, visuals and culture — developing artists,
              sounds and creative ideas from Morocco with an international vision.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── CURRENT MOVEMENT ─────────────────────────────── */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-edge">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-display-md font-bold tracking-tightest">
                The Next Wave
              </h2>
              <Link href="/artists" className="text-sm text-bone/70 underline underline-offset-4 hover:text-bone">
                View full roster
              </Link>
            </div>
          </Reveal>

          <div className="mt-12">
            <RosterMarquee artists={artists} />
          </div>
        </div>
      </section>

      {/* ── MUSIC ────────────────────────────────────────── */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-edge">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-display-md font-bold tracking-tightest">
                Latest Releases
              </h2>
              <Link href="/music" className="text-sm text-bone/70 underline underline-offset-4 hover:text-bone">
                Full library
              </Link>
            </div>
          </Reveal>

          <div className="mt-8">
            {latestReleases.map((release) => (
              <ReleaseRow key={release.slug} release={release} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUALS ──────────────────────────────────────── */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-edge">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-display-md font-bold tracking-tightest">
                Visual Culture
              </h2>
              <Link href="/visuals" className="text-sm text-bone/70 underline underline-offset-4 hover:text-bone">
                Full gallery
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 items-start gap-4 md:grid-cols-4 md:gap-6">
            {featuredVisuals.map((visual) => (
              <VisualCard key={visual.slug} visual={visual} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATEMENT ────────────────────────────────────── */}
      <section className="border-b border-line px-6 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="mx-auto max-w-4xl text-center font-display text-display-lg font-bold leading-[0.95] tracking-tightest text-balance">
            The label is new.
            <br />
            The creative work has already started.
          </p>
        </Reveal>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-edge flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-display-md font-bold tracking-tightest">
            Build what&rsquo;s next.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-bone px-6 py-3 text-xs tracking-wide2 text-ink transition-colors duration-300 ease-editorial hover:bg-transparent hover:text-bone hover:border hover:border-bone"
            >
              WORK WITH NURYS
            </Link>
            <Link
              href="/contact"
              className="border border-bone px-6 py-3 text-xs tracking-wide2 transition-colors duration-300 ease-editorial hover:bg-bone hover:text-ink"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
