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
  loadingText: string;
  errorText: string;
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
    loadingText: "Loading ...",
    errorText: "Error while loading the file.",
    close: "Close",
    txtReassurance: "This plain-text (txt) file is safe and contains no executable code.",
    modalTxtDownloadDe: "TXT cv in German",
    modalTxtDownloadEn: "TXT cv in English",
    modalTxtDownloadEs: "TXT cv in Spanish",
    en: "English",
    es: "Spanish",
    de: "German"
  },
  es: {
    home: "Inicio",
    projects: "Proyectos",
    cv: "Currículum",
    contact: "Contacto",
    download: "Descargas",
    downloadTxtDe: "Currículum txt cv en alemán",
    downloadPdfDe: "Currículum pdf en alemán",
    downloadTxtEn: "Currículum txt en inglés",
    downloadPdfEn: "Currículum pdf en inglés",
    downloadTxtEs: "Currículum txt en español",
    downloadPdfEs: "Curriculum pdf en español",
    loadingText: "Cargando ...",
    errorText: "Error al cargar el fichero.",
    close: "Cerrar",
    txtReassurance: "Este archivo de texto plano (txt) es seguro y no contiene código ejecutable.",
    modalTxtDownloadDe: "Archivo txt en alemán",
    modalTxtDownloadEn: "Archivo txt en inglés",
    modalTxtDownloadEs: "Archivo txt en español",
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
    loadingText: "Lade ...",
    errorText: "Fehler beim Laden der Datei.",
    close: "Schließen",
    txtReassurance: "Diese Klartextdatei (txt) ist sicher und enthält keinen ausführbaren Code.",
    modalTxtDownloadDe: "TXT-Datei auf Deutsch",
    modalTxtDownloadEn: "TXT-Datei auf Englisch",
    modalTxtDownloadEs: "TXT-Datei auf Spanisch",
    en: "Englisch",
    es: "Spanisch",
    de: "Deutsch"
  }
} as const;
