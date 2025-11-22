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
      { source: "/es/cv", destination: "/es/curriculum", permanent: true  },
      { source: "/es/projects", destination: "/es/proyectos", permanent: true  },
      { source: "/es/contact", destination: "/es/contacto", permanent: true  },
      { source: "/es/legal", destination: "/es/aviso", permanent: true  },
      { source: "/es/lebenslauf", destination: "/es/curriculum", permanent: true  },
      { source: "/es/projekte", destination: "/es/proyectos", permanent: true  },
      { source: "/es/kontakt", destination: "/es/contacto", permanent: true  },
      { source: "/aviso", destination: "/es/aviso", permanent: true  },

      // German
      { source: "/lebenslauf", destination: "/de/lebenslauf", permanent: true },
      { source: "/projekte", destination: "/de/projekte", permanent: true },
      { source: "/kontakt", destination: "/de/kontakt", permanent: true },
      { source: "/impressum", destination: "/de/impressum", permanent: true },
      { source: "/de/cv", destination: "/de/lebenslauf", permanent: true  },
      { source: "/de/projects", destination: "/de/projekte", permanent: true  },
      { source: "/de/contact", destination: "/de/kontakt", permanent: true  },
      { source: "/de/legal", destination: "/de/impressum", permanent: true  },
      { source: "/de/curriculum", destination: "/de/lebenslauf", permanent: true  },
      { source: "/de/proyectos", destination: "/de/projekte", permanent: true  },
      { source: "/de/contacto", destination: "/de/kontakt", permanent: true  },
      { source: "/de/aviso", destination: "/de/impressum", permanent: true  },

      // English
      { source: "/cv", destination: "/en/cv", permanent: true },
      { source: "/projects", destination: "/en/projects", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },
      { source: "/legal", destination: "/en/legal", permanent: true },
      { source: "/en/lebenslauf", destination: "/en/cv", permanent: true  },
      { source: "/en/projekte", destination: "/en/projects", permanent: true  },
      { source: "/en/kontakt", destination: "/en/contact", permanent: true  },
      { source: "/en/impressum", destination: "/en/legal", permanent: true  },
      { source: "/en/curriculum", destination: "/en/cv", permanent: true  },
      { source: "/en/proyectos", destination: "/en/projects", permanent: true  },
      { source: "/en/contacto", destination: "/en/contact", permanent: true  },
      { source: "/en/aviso", destination: "/en/legal", permanent: true  },
    ];
  },

  // Rewrites for internal aliases if needed
  // async rewrites() {
  //   return [
  //     {source: "/en/aviso", destination: "/en/legal"}
  //   ];
  // },
};

module.exports = withNextIntl(nextConfig);
