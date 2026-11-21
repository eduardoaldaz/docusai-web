export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/brand';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE.url}/`, changeFrequency: 'monthly', priority: 1 }];
}
