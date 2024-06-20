/** @type {import('next').NextConfig} */
module.exports = {
  // transpilePackages: ["@repo/ui"],
  reactStrictMode: false,
  //transpilePackages: ['ui'],
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
