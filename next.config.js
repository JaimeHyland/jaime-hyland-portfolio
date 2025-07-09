const withNextIntl = require('next-intl/plugin')(
  './app/i18n/request.ts', // your intl config file
  {
    messages: {
      path: './messages',
      locales: ['en', 'es', 'de'],
      format: 'folder',
    },
  }
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Spanish rewrites
      { source: '/es/curriculum', destination: '/es/cv' },
      { source: '/es/proyectos', destination: '/es/projects' },
      { source: '/es/contacto', destination: '/es/contact' },

      // German rewrites
      { source: '/de/lebenslauf', destination: '/de/cv' },
      { source: '/de/projekte', destination: '/de/projects' },
      { source: '/de/kontakt', destination: '/de/contact' },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
