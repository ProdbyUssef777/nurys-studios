import Link from 'next/link';
import Image from 'next/image';
import { nav, site } from '@/data/site';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import Magnetic from './Magnetic';

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-edge items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="relative h-9 w-9 shrink-0 md:h-10 md:w-10">
          <Image
            src={site.logo.white}
            alt={site.name}
            fill
            className="logo-dark object-contain"
            priority
          />
          <Image
            src={site.logo.black}
            alt={site.name}
            fill
            className="logo-light object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-bone/80 transition-colors duration-200 hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <ThemeToggle />
          <div className="hidden md:block">
            <Magnetic strength={0.25}>
            <Link
              href="/music"
              className="border border-bone px-5 py-2 text-xs tracking-wide2 text-bone transition-colors duration-300 ease-editorial hover:bg-bone hover:text-ink"
            >
              LISTEN
            </Link>
            </Magnetic>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
