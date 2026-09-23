import { ImageResponse } from 'next/og';
import { releases } from '@/data/releases';
import { site } from '@/data/site';

export const runtime = 'edge';
export const alt = 'NURYS STUDIOS release';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image({ params }: { params: { slug: string } }) {
  const release = releases.find((item) => item.slug === params.slug);
  const cover = release
    ? new URL(release.cover, site.url).toString()
    : new URL('/img/hero-bg.svg', site.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a0a0a',
          color: '#f2f0e9',
          position: 'relative',
          fontFamily: 'Arial',
        }}
      >
        <img
          src={cover}
          width="630"
          height="630"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '70px',
            gap: '18px',
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 5 }}>NURYS STUDIOS</div>
          <div style={{ fontSize: 64, fontWeight: 700 }}>{release?.title ?? 'NURYS'}</div>
          <div style={{ fontSize: 28, opacity: 0.7 }}>{release?.artist ?? 'NEW SOUNDS. NEW STYLES. NEW MOVEMENT.'}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
