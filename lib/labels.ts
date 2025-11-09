export type LabelSet = {
  home: string;
  projects: string;
  cv: string;
  contact: string;
  download: string;
  downloadTxtDe: string;
  downloadPdfDe: string;
  downloadTxtEn: string;
  downloadPdfEn: string;
  downloadTxtEs: string;
  downloadPdfEs: string;
  close: string;
  txtReassurance: string;
  modalTxtDownloadDe: string;
  modalTxtDownloadEn: string;
  modalTxtDownloadEs: string;
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
    download: "Downloads",
    downloadTxtDe: "txt cv in German",
    downloadPdfDe: "pdf cv in German",
    downloadTxtEn: "TXT cv in English",
    downloadPdfEn: "PDF cv in English",
    downloadTxtEs: "TXT cv in Spanish",
    downloadPdfEs: "PDF cv in Spanish",
    close: "Close",
    txtReassurance: "This plain-text (txt) file is safe and contains no executable code.",
    modalTxtDownloadDe: "Download txt cv in German",
    modalTxtDownloadEn: "Download txt cv in English",
    modalTxtDownloadEs: "Download txt cv in Spanish",
    en: "English",
    es: "Spanish",
    de: "German"
  },
  es: {
    home: "Inicio",
    projects: "Proyectos",
    cv: "Currículum",
    contact: "Contacto",
    download: "Descargos",
    downloadTxtDe: "Currículum txt cv en alemán",
    downloadPdfDe: "Currículum pdf en alemán",
    downloadTxtEn: "Currículum txt en inglés",
    downloadPdfEn: "Currículum pdf en inglés",
    downloadTxtEs: "Currículum txt en español",
    downloadPdfEs: "Curriculum pdf en español",
    close: "Cerrar",
    txtReassurance: "Este archivo de texto plano (txt) es seguro y no contiene código ejecutable.",
    modalTxtDownloadDe: "Descargar archivo txt en alemán",
    modalTxtDownloadEn: "Descargar archivo txt en inglés",
    modalTxtDownloadEs: "Descargar archivo txt en español",
    en: "inglés",
    es: "español",
    de: "alemán"
  },
  de: {
    home: "Start",
    projects: "Projekte",
    cv: "Lebenslauf",
    contact: "Kontakt",
    download: "Downloads",
    downloadTxtDe: "TXT-Lebenslauf auf Deutsch",
    downloadPdfDe: "PDF-Lebenslauf auf Deutsch",
    downloadTxtEn: "TXT-Lebenslauf auf Englisch",
    downloadPdfEn: "PDF-Lebenslauf auf Englisch",
    downloadTxtEs: "TXT-Lebenslauf auf Spanisch",
    downloadPdfEs: "PDF-Lebenslauf auf Spanisch",
    close: "Close",
    txtReassurance: "Diese Klartextdatei (txt) ist sicher und enthält keinen ausführbaren Code.",
    modalTxtDownloadDe: "TXT-Datei auf Deutsch herunterladen",
    modalTxtDownloadEn: "TXT-Datei auf Englisch herunterladen",
    modalTxtDownloadEs: "TXT-Datei auf Spanisch herunterladen",
    en: "Englisch",
    es: "Spanisch",
    de: "Deutsch"
  }
} as const;
