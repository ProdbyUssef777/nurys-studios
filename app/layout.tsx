import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col font-body">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
