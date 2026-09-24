import type { Metadata } from 'next';
import { visuals } from '@/data/visuals';
import VisualGallery from '@/components/VisualGallery';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Visuals',
  description: 'Music videos, photography, film, art direction and design from NURYS.',
  openGraph: { images: ['/img/visuals/anys-visual-02.jpg'] },
  twitter: { images: ['/img/visuals/anys-visual-02.jpg'] },
};

export default function VisualsPage() {
  return (
    <div className="px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-edge">
        <Reveal>
          <h1 className="font-display text-display-lg font-bold tracking-tightest">Visuals</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
            Every sound has a world around it.
          </p>
        </Reveal>

        <div className="mt-16">
          <VisualGallery visuals={visuals} />
        </div>
      </div>
    </div>
  );
}
