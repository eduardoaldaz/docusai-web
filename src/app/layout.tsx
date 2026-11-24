import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Bricolage_Grotesque, Figtree, JetBrains_Mono } from 'next/font/google';
import { BRAND, SITE } from '@/lib/brand';
import './globals.css';

// Same type family as FacServis: Figtree for text, Bricolage Grotesque for the wordmark and titles.
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-bricolage', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-face', display: 'swap' });

const description =
  'DocusAI lee las facturas de proveedor, las valida con las reglas fiscales españolas y las exporta a tu programa contable o ERP. Sin plantillas.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${BRAND.name} — ${BRAND.tagline}`, template: `%s · ${BRAND.name}` },
  description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'es_ES', siteName: BRAND.name, url: '/', title: `${BRAND.name} — ${BRAND.tagline}`, description },
};

export const viewport: Viewport = { themeColor: '#150e38' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${figtree.variable} ${bricolage.variable} ${mono.variable}`}>
      <body>
        {children}
        {/* Cloudflare Web Analytics: cookieless, aggregate visit stats. Public beacon token. */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={JSON.stringify({ token: '7d29efa941ad4cbd88f4613bd44bf50c' })}
          />
        )}
      </body>
    </html>
  );
}
