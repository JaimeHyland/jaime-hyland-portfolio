import express from "express";
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";

const app = express();

const hostname = "https://jaime-hyland.com";

const locales = {
  en: {
    home: "/en/",
    cv: "/en/cv",
    contact: "/en/contact",
    projects: "/en/projects"
  },
  de: {
    home: "/de/",
    cv: "/de/lebenslauf",
    contact: "/de/kontakt",
    projects: "/de/projekte"
  },
  es: {
    home: "/es/",
    cv: "/es/cv",
    contact: "/es/contacto",
    projects: "/es/proyectos"
  }
};

const links = Object.values(locales).flatMap(localePages =>
  Object.values(localePages).map(path => ({
    url: path,
    changefreq: "monthly",
    priority: 0.7
  }))
);

app.get("/sitemap.xml", async (req, res) => {
  res.header("Content-Type", "application/xml");
  res.header("Content-Encoding", "gzip");

  const sitemapStream = new SitemapStream({ hostname });
  const pipeline = sitemapStream.pipe(createGzip());

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();

  const data = await streamToPromise(pipeline);
  res.send(data);
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *
Allow: /

Sitemap: ${hostname}/sitemap.xml`);
});

app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
