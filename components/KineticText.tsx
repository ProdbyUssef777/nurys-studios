'use client';

import { useEffect, useState } from 'react';

export default function KineticText({
  text,
  baseDelay = 0,
  step = 60,
}: {
  text: string;
  baseDelay?: number;
  step?: number;
}) {
  const words = text.split(' ');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <span
            className="inline-block"
            style={{
              transform: visible ? 'translateY(0)' : 'translateY(115%)',
              opacity: visible ? 1 : 0,
              transition: `transform 0.75s cubic-bezier(0.22,1,0.36,1) ${
                baseDelay + i * step
              }ms, opacity 0.6s ease ${baseDelay + i * step}ms`,
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </>
  );
}
