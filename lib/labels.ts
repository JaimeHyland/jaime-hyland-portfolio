export type LabelSet = {
  home: string;
  projects: string;
  cv: string;
  contact: string;
  download: string;
  downloadTxt: string;
  downloadPdf: string;
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
    download: "Download documents",
    downloadTxt: "txt cv",
    downloadPdf: "pdf cv",
    en: "English",
    es: "Spanish",
    de: "German"
  },
  es: {
    home: "Inicio",
    projects: "Proyectos",
    cv: "Currículum",
    contact: "Contacto",
    download: "Descargar ficheros",
    downloadTxt: "Curriculum TXT",
    downloadPdf: "Curriculum PDF",
    en: "inglés",
    es: "español",
    de: "alemán"
  },
  de: {
    home: "Start",
    projects: "Projekte",
    cv: "Lebenslauf",
    contact: "Kontakt",
    download: "Dokus herunterladen",
    downloadTxt: "TXT-Lebenslauf",
    downloadPdf: "PDF-Lebenslauf",
    en: "Englisch",
    es: "Spanisch",
    de: "Deutsch"
  }
} as const;
