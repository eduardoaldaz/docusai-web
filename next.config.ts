import type { NextConfig } from 'next';

// Static export: the landing is plain HTML/CSS/JS served by GitHub Pages (see .github/workflows/pages.yml).
// The product itself (panel, API, worker) lives in the docusai-app repo and is deployed separately.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
