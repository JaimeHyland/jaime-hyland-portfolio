// app/sitemap.ts
import type { MetadataRoute } from 'next'

const hostname = 'https://jaime-hyland.com'

const locales = {
  en: { home: '/en/', cv: '/en/cv', contact: '/en/contact', projects: '/en/projects', impressum: '/en/legal' },
  de: { home: '/de/', cv: '/de/lebenslauf', contact: '/de/kontakt', projects: '/de/projekte', impressum: '/en/impressum' },
  es: { home: '/es/', cv: '/es/curriculum', contact: '/es/contacto', projects: '/es/proyectos', impressum: '/en/aviso' },
}

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(locales).flatMap(localePages =>
    Object.values(localePages).map(path => ({
      url: `${hostname}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  )
}
