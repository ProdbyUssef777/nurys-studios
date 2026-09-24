import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';
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
    images: ['/img/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seoTitle,
    description: site.description,
    images: ['/img/og-default.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Read the saved theme before paint, so there's no flash of
            the wrong colors on load. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var t = localStorage.getItem('nurys-theme');
                if (t === 'light') {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col font-body">
        <CustomCursor />
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
