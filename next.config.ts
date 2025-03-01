import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    domains: ["i.pinimg.com"], // ✅ Allow external images from Pinterest
  },
};

export default nextConfig;
