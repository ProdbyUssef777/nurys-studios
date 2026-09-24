'use client';

import { useEffect, useRef, useState } from 'react';

// Headline that rises in letter by letter (each line is masked, so the
// letters slide up from underneath it). Starts when it scrolls into view —
// in the hero that means immediately on load.
export default function KineticText({
  lines,
  as: Tag = 'h2',
  className = '',
  stagger = 0.028,
  lineDelay = 0.14,
}: {
  lines: readonly string[];
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  stagger?: number;
  lineDelay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  let n = 0;
  return (
    <Tag
      ref={ref as any}
      aria-label={lines.join(' ')}
      className={`kinetic ${inView ? 'is-in' : ''} ${className}`}
    >
      {lines.map((line, li) => (
        <span key={li} className="k-line" aria-hidden="true">
          {line.split(' ').map((word, wi, arr) => (
            <span key={wi} className="k-word">
              {Array.from(word).map((ch, ci) => {
                const delay = (li * lineDelay + n++ * stagger).toFixed(3);
                return (
                  <span key={ci} className="k-char" style={{ transitionDelay: `${delay}s` }}>
                    {ch}
                  </span>
                );
              })}
              {wi < arr.length - 1 ? ' ' : ''}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
