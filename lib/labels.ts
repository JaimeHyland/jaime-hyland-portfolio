export type LabelSet = {
  home: string;
  projects: string;
  cv: string;
  contact: string;
  en: string;
  es: string;
  de: string;
};

export const localizedLabels: Record<"en" | "es" | "de", LabelSet> = {
  en: {
    home: "Home",
    projects: "Projects",
    cv: "CV",
    contact: "Contact",
    en: "English",
    es: "Spanish",
    de: "German"
  },
  es: {
    home: "Inicio",
    projects: "Proyectos",
    cv: "Currículum",
    contact: "Contacto",
    en: "inglés",
    es: "español",
    de: "alemán"
  },
  de: {
    home: "Start",
    projects: "Projekte",
    cv: "Lebenslauf",
    contact: "Kontakt",
    en: "Englisch",
    es: "Spanisch",
    de: "Deutsch"
  }
} as const;
