/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['images.unsplash.com', 'randomuser.me'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Don't unoptimize images in production
    unoptimized: false,
  },
  // For ease of deployment
  output: 'standalone',
  // Disable ESLint during production builds for faster builds
  eslint: {
    // Only run ESLint in development, not during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 