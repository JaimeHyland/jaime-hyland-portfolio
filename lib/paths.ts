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

interface GetAnchorProps {
  t: ReturnType<typeof import("next-intl").useTranslations>; 
  locale: Language;
  key: string; // anchor key string
}

export function getAnchor({t, locale, key}: GetAnchorProps) {
  return `/${locale}/${localizedPaths[locale].projects}#${t(`portfolioAnchors.${key}`)}`;
}
