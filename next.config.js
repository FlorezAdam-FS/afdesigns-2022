/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["cdn-images-1.medium.com", "afalldigital.com"],
  },
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
