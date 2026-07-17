import type { NextConfig } from "next";

/**
 * Font Card Chinese fonts need a same-origin ZeoSeven proxy (Origin hotlink).
 * - Local `next dev`: no `output: export` → `middleware.ts` proxies `/zsft/*`.
 * - `npm run build` (Pages): `NEXT_OUTPUT=export` → static `out/`; middleware is off.
 *   Before deploy, add a Cloudflare Worker (or self-host fonts) for `/zsft`.
 */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
