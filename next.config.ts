import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.deliveryhero.io",
      },
    ],
  },
};

export default nextConfig;
