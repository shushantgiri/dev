import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Required for GitHub Pages — generates static HTML/CSS/JS in /out
    output: 'export',

    images: {
        // Next's Image Optimization needs a server, which GitHub Pages
        // doesn't have — so images are served as-is, unoptimized.
        unoptimized: true,

        // Local /public SVG icons are blocked by Next's image optimizer
        // unless explicitly allowed.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",

        // Lets tech-stack icons be loaded straight from a CDN link
        // (devicon on GitHub) instead of needing local files.
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/devicons/devicon/**',
            },
        ],
    },

    // Ensures routes export as /about/index.html instead of /about.html
    // — needed for GitHub Pages to correctly serve nested routes.
    trailingSlash: true,
};

export default nextConfig;