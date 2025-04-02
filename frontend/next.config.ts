import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ← Isso desativa os erros do ESLint no build
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
