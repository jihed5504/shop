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
};

module.exports = nextConfig; 