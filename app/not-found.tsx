import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-32 text-center md:px-10">
      <p className="font-display text-display-xl font-bold tracking-tightest text-bone/20">
        404
      </p>
      <h1 className="mt-4 font-display text-display-md font-bold tracking-tightest">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/70">
        The link might be broken, or the page has moved. Let&rsquo;s get you back to something
        real.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-bone px-6 py-3 text-xs tracking-wide2 text-ink transition-colors duration-300 ease-editorial hover:bg-transparent hover:text-bone hover:border hover:border-bone"
        >
          BACK HOME
        </Link>
        <Link
          href="/music"
          className="border border-bone px-6 py-3 text-xs tracking-wide2 transition-colors duration-300 ease-editorial hover:bg-bone hover:text-ink"
        >
          LISTEN TO MUSIC
        </Link>
      </div>
    </div>
  );
}
