/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'], // Add your image domains here
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
  },
  reactStrictMode: true,
  optimizeFonts: true,
  performance: {
    hints: false,
  },
};

module.exports = nextConfig;