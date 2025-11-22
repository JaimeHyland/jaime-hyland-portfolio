const withNextIntl = require("next-intl/plugin")("./app/i18n/request.ts", {
  messages: {
    path: "./messages",
    locales: ["en", "es", "de"],
    format: "folder",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // REDIRECTS: fix mis-crawled / wrong-locale URLs
  async redirects() {
    return [
      // Spanish
      { source: "/curriculum", destination: "/es/curriculum", permanent: true },
      { source: "/proyectos", destination: "/es/proyectos", permanent: true },
      { source: "/contacto", destination: "/es/contacto", permanent: true },
      { source: "/aviso", destination: "/es/aviso", permanent: true },

      // German
      { source: "/lebenslauf", destination: "/de/lebenslauf", permanent: true },
      { source: "/projekte", destination: "/de/projekte", permanent: true },
      { source: "/kontakt", destination: "/de/kontakt", permanent: true },
      { source: "/impressum", destination: "/de/impressum", permanent: true },

      // English
      { source: "/cv", destination: "/en/cv", permanent: true },
      { source: "/projects", destination: "/en/projects", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },
      { source: "/legal", destination: "/en/legal", permanent: true },
    ];
  },

  // Optional: rewrites for internal aliases if needed
  async rewrites() {
    return [
      // Spanish internal aliases
      { source: "/es/cv", destination: "/es/curriculum" },
      { source: "/es/projects", destination: "/es/proyectos" },
      { source: "/es/contact", destination: "/es/contacto" },
      { source: "/es/legal", destination: "/es/aviso" },
      { source: "/es/lebenslauf", destination: "/es/curriculum" },
      { source: "/es/projekte", destination: "/es/proyectos" },
      { source: "/es/kontakt", destination: "/es/contacto" },
      { source: "/aviso", destination: "/es/aviso" },

      // German internal aliases
      { source: "/de/cv", destination: "/de/lebenslauf" },
      { source: "/de/projects", destination: "/de/projekte" },
      { source: "/de/contact", destination: "/de/kontakt" },
      { source: "/de/legal", destination: "/de/impressum" },
      { source: "/de/curriculum", destination: "/de/lebenslauf" },
      { source: "/de/proyectos", destination: "/de/projekte" },
      { source: "/de/contacto", destination: "/de/kontakt" },
      { source: "/de/aviso", destination: "/de/impressum" },


      // English internal aliases
      { source: "/en/lebenslauf", destination: "/en/cv" },
      { source: "/en/projekte", destination: "/en/projects" },
      { source: "/en/kontakt", destination: "/en/contact" },
      { source: "/en/impressum", destination: "/en/legal" },
      { source: "/en/curriculum", destination: "/en/cv" },
      { source: "/en/proyectos", destination: "/en/projects" },
      { source: "/en/contacto", destination: "/en/contact" },
      { source: "/en/aviso", destination: "/en/legal" },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
