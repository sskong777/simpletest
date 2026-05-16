import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/test",
  async redirects() {
    // basePath: false — 이 redirect들은 basePath 적용 안 받음 (옛 절대경로 캐치용)
    return [
      {
        source: "/",
        destination: "/test",
        permanent: true,
        basePath: false,
      },
      {
        source: "/about",
        destination: "/test/about",
        permanent: true,
        basePath: false,
      },
      {
        source: "/contact",
        destination: "/test/contact",
        permanent: true,
        basePath: false,
      },
      {
        source: "/privacy",
        destination: "/test/privacy",
        permanent: true,
        basePath: false,
      },
      {
        source: "/tests/:slug*",
        destination: "/test/tests/:slug*",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
