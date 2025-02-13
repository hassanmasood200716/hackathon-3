import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true  // Disables ESLint errors from breaking the build
  }
};

export default nextConfig;
