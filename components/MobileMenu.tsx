'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { nav, site } from '@/data/site';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="relative z-50 flex h-9 w-9 flex-col items-end justify-center gap-[5px]"
      >
        <span className="h-px w-6 bg-bone transition-transform" />
        <span className="h-px w-4 bg-bone transition-transform" />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-24 transition-opacity duration-500 ease-editorial ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-6 top-6 text-sm tracking-wide2 text-bone/70"
        >
          CLOSE
        </button>

        <nav className="flex flex-1 flex-col justify-center gap-2">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-4xl font-medium leading-none tracking-tightest text-bone"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-between text-xs tracking-wide2 text-smoke">
          <span>{site.instagram.handle}</span>
          <span>{site.direction}</span>
        </div>
      </div>
    </div>
  );
}
