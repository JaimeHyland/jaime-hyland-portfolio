export const localizedPaths = {
  en: {
    home: '',
    projects: 'projects',
    cv: 'cv',
    contact: 'contact',
  },
  es: {
    home: '',
    projects: 'proyectos',
    cv: 'curriculum',
    contact: 'contacto',
  },
  de: {
    home: '',
    projects: 'projekte',
    cv: 'lebenslauf',
    contact: 'kontakt',
  },
} as const;

export type Language = keyof typeof localizedPaths;
export type PageKey = keyof typeof localizedPaths['en'];
