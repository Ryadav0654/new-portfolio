import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com', 
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'pikbest.com',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
    ],
  },
};

export default nextConfig;
