import { notFound } from "next/navigation";
import type { JSX } from "react";
import CV from "@/app/[locale]/cv/page";
import Projects from "@/app/[locale]/projects/page";
import Contact from "@/app/[locale]/contact/page";
import Impressum from "@/app/[locale]/impressum/page";

type PageProps = {
  params: {
    locale: string;
    page: string;
  };
};

interface PageParams {
  params: Promise<{ locale: string; page: string }>;
}

export default async function PageRouter({ params }: PageParams): Promise<JSX.Element> {
  const { locale, page } = await params;

  const canonicalRoutes: Record<string, Record<string, JSX.Element>> = {
    en: {
      cv: <CV />,
      projects: <Projects />,
      contact: <Contact />,
      legal: <Impressum />
    },
    es: {
      curriculum: <CV />,
      proyectos: <Projects />,
      contacto: <Contact />,
      aviso: <Impressum />
    },
    de: {
      lebenslauf: <CV />,
      projekte: <Projects />,
      kontakt: <Contact />,
      impressum: <Impressum />
    }
  };

  const pageComponent = canonicalRoutes[locale]?.[page];
  if (!pageComponent) return notFound();

  return pageComponent;
}
