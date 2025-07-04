const withNextIntl = require('next-intl/plugin')('./app/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do NOT put an i18n field here!
};

module.exports = withNextIntl(nextConfig);
