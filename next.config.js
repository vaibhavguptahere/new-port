/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com'],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;