/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  compiler: {
    styledComponents: true,
  },
  i18n,
};

module.exports = nextConfig;
