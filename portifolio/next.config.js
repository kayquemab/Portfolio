/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    turbo: true
  },
  trailingSlash: true
};

module.exports = nextConfig;
