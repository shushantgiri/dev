import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
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
};

export default nextConfig;