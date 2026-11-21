/**
 * Product identity, copied from packages/shared/src/brand.ts in the docusai-app repo. Keep both in sync.
 */
export const BRAND = {
  name: 'DocusAI',
  /** Two-tone wordmark, like Fac|Servis. */
  wordmark: ['Docus', 'AI'] as const,
  tagline: 'Captura, revisa, contabiliza.',
  /** Umbrella company. */
  parent: { name: 'Servis Digital', url: 'https://servisdigital.com' } as { name: string; url: string } | null,
  /** Sibling product shown as part of the family. */
  family: [{ name: 'FacServis', url: 'https://facservis.com' }],
} as const;

/** Public site settings. Contact channels are the same as servisdigital.com. */
export const SITE = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docusai.servisdigital.com').replace(/\/$/, ''),
  email: 'hola@servisdigital.com',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null,
  whatsapp: {
    ES: process.env.NEXT_PUBLIC_WHATSAPP_ES || null,
    EC: process.env.NEXT_PUBLIC_WHATSAPP_EC || null,
  },
};

export function whatsappLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
