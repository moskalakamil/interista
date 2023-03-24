/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n,
};

const { withSuperjson } = require("next-superjson");

module.exports = withSuperjson()(nextConfig);
