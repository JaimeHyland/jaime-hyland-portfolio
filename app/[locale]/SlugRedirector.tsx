"use client"; // Mark as Client Component

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Locale = "en" | "es" | "de";

// Map canonical slugs for each locale
const canonicalSlugs: Record<Locale, Record<string, string>> = {
  en: {
    cv: "cv",
    projects: "projects",
    contact: "contact",
    legal: "legal",
    impressum: "legal",
  },
  es: {
    cv: "curriculum",
    projects: "proyectos",
    contact: "contacto",
    impressum: "aviso",
  },
  de: {
    cv: "lebenslauf",
    projects: "projekte",
    contact: "kontakt",
    impressum: "impressum",
  },
};

interface SlugRedirectorProps {
  locale: Locale;
}

export default function SlugRedirector({ locale }: SlugRedirectorProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pathname) return;

    const pathParts = pathname.split("/").filter(Boolean); // remove empty
    if (pathParts[0] !== locale) return; // only normalize current locale

    const page = pathParts[1];
    const canonical = canonicalSlugs[locale][page];

    // Redirect only if the current page slug differs from the canonical slug
    if (canonical && canonical !== page) {
      const newPath = `/${locale}/${canonical}`;
      router.replace(newPath);
    }
  }, [pathname, locale, router]);

  return null; // doesn't render anything
}
