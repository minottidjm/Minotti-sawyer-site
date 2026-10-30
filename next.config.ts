import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so a stray lockfile in a parent folder is not picked up.
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // Friendly aliases for the new candidate page.
      { source: "/candidate", destination: "/candidates", permanent: true },
      { source: "/careers", destination: "/candidates", permanent: false },
    ];
  },
};

export default nextConfig;
