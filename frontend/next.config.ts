import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚠️ Retire a exportação estática
  // Modo padrão de servidor
  reactStrictMode: true,
  images: {
    unoptimized: false, // ← Habilita otimização (via servidor)
  },
};

export default nextConfig;
