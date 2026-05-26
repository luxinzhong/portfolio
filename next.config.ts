import type { NextConfig } from "next";

// The site is served from https://luxinzhong.github.io/portfolio/, so in
// production it must live under the `/portfolio` base path. Locally
// (`next dev`) it stays at the root. `output: "export"` emits a fully static
// site into `out/` that GitHub Pages can serve directly.
const repoName = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
