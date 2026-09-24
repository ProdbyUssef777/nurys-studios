import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { site } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    title: site.seoTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    images: ['/img/hero-bg.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seoTitle,
    description: site.description,
    images: ['/img/hero-bg.svg'],
  },
};

// Runs before hydration so the saved theme applies before first paint —
// otherwise the page would flash dark then switch to light on load.
const themeInitScript = `(function(){try{var t=localStorage.getItem('nurys-theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`;

// Re-check every 5 minutes so the announcement bar (which reads the
// LOW-KEY release's publishAt) flips over automatically at go-live time.
export const revalidate = 300;

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}${site.logo.white}`,
  description: site.description,
  sameAs: [site.instagram.url],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`.kinetic .k-char{transform:none!important}.img-pending{opacity:1!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-body">
        <AnnouncementBar />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}
