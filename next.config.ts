import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/nocturne-fragrance",
  images: { unoptimized: true },
};

export default nextConfig;
