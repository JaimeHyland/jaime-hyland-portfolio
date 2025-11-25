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
  // async redirects() {

  // },

  // Rewrites for internal aliases if needed
  async rewrites() {
    return [
      // Spanish
      { source: "/curriculum", destination: "/es/cv" },
      { source: "/proyectos", destination: "/es/projects" },
      { source: "/contacto", destination: "/es/contact" },
      { source: "/aviso", destination: "/es/impressum" },
      { source: "/es/curriculum", destination: "/es/cv"  },
      { source: "/es/proyectos", destination: "/es/projects" },
      { source: "/es/contacto", destination: "/es/contact" },
      { source: "/es/aviso", destination: "/es/impressum" },
      { source: "/es/lebenslauf", destination: "/es/cv" },
      { source: "/es/projekte", destination: "/es/projects" },
      { source: "/es/kontakt", destination: "/es/contact" },
      { source: "/es/legal", destination: "/es/impressum" },

      // German
      { source: "/lebenslauf", destination: "/de/cv" },
      { source: "/projekte", destination: "/de/projects" },
      { source: "/kontakt", destination: "/de/contact" },
      { source: "/impressum", destination: "/de/impressum" },
      { source: "/de/lebenslauf", destination: "/de/cv"  },
      { source: "/de/projekte", destination: "/de/projects" },
      { source: "/de/kontakt", destination: "/de/contact" },
      { source: "/de/legal", destination: "/de/impressum" },
      { source: "/de/curriculum", destination: "/de/cv" },
      { source: "/de/proyectos", destination: "/de/projects" },
      { source: "/de/contacto", destination: "/de/contact" },
      { source: "/de/aviso", destination: "/de/impressum" },

      // English
      { source: "/cv", destination: "/en/cv" },
      { source: "/projects", destination: "/en/projects" },
      { source: "/contact", destination: "/en/contact" },
      { source: "/legal", destination: "/en/impressum" },
      { source: "/en/lebenslauf", destination: "/en/cv" },
      { source: "/en/projekte", destination: "/en/projects" },
      { source: "/en/kontakt", destination: "/en/contact" },
      { source: "/en/legal", destination: "/en/impressum" },
      { source: "/en/curriculum", destination: "/en/cv" },
      { source: "/en/proyectos", destination: "/en/projects" },
      { source: "/en/contacto", destination: "/en/contact" },
      { source: "/en/aviso", destination: "/en/impressum" },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
