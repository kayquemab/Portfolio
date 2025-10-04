/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',       // gera build standalone para Netlify
  experimental: {
    turbo: true               // mantém o turbopack experimental
  },
  trailingSlash: true         // adiciona barra no final das URLs para evitar 404
};

module.exports = nextConfig;
