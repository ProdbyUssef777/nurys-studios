'use client';

import { useEffect, useRef } from 'react';

// A small dot that trails the mouse and grows over links / buttons.
// Only mounts on devices with a real hover-capable pointer, so touch
// screens and no-JS visitors keep the normal behaviour.
const INTERACTIVE = 'a, button, [role="button"], summary, label[for], [data-cursor]';
const NATIVE = 'input, textarea, select, [contenteditable="true"]';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const dot = dotRef.current;
    if (!dot || !fine.matches) return;

    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let raf = 0;
    let shown = false;

    const tick = () => {
      // Ease toward the pointer for the trailing feel (instant if reduced motion).
      const k = reduce.matches ? 1 : 0.22;
      cx += (x - cx) * k;
      cy += (y - cy) * k;
      dot.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        cx = x;
        cy = y;
        shown = true;
        dot.classList.add('is-visible');
      }
      const target = e.target as Element | null;
      const native = !!target?.closest?.(NATIVE);
      dot.classList.toggle('is-native', native);
      dot.classList.toggle('is-hover', !native && !!target?.closest?.(INTERACTIVE));
    };

    const onLeave = () => {
      shown = false;
      dot.classList.remove('is-visible');
    };
    const onDown = () => dot.classList.add('is-down');
    const onUp = () => dot.classList.remove('is-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
