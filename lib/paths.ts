export const localizedPaths = {
  en: {
    home: "",
    projects: "projects",
    cv: "cv",
    contact: "contact",
    impressum: "legal"
  },
  es: {
    home: "",
    projects: "proyectos",
    cv: "curriculum",
    contact: "contacto",
    impressum: "aviso"
  },
  de: {
    home: "",
    projects: "projekte",
    cv: "lebenslauf",
    contact: "kontakt",
    impressum: "impressum"
  }
} as const;

export type Language = keyof typeof localizedPaths;
export type PageKey = keyof (typeof localizedPaths)["en"];
