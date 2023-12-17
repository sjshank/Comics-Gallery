/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

const nextConfig = {
  distDir: "build",
  basePath: "/superheroes",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/superheroes",
        basePath: false,
        permanent: false,
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rawgit.com",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
