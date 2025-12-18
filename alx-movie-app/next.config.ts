import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // next.config.js

  images: {
    domains: ["m.media-amazon.com"], // ✅ allow Amazon media CDN
  },
};

export default nextConfig;
