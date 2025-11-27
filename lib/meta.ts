import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export type PageInline = {
  title?: string;
  tagline?: string;
  description?: string;
  keywords: string[];
  imageUrl?: string;
};

export function getPageContent(page: string, locale: string): { pageInline: PageInline } {
    let filePath: string;

    if (page === "home") {
        filePath = path.join(process.cwd(), "messages", `${locale}.json`);
    } else {
        filePath = path.join(process.cwd(), "messages", page, `${locale}.json`);
    }

    try {
        const fileContents = fs.readFileSync(filePath, "utf8");
        return JSON.parse(fileContents);
    } catch {
        const fallbackPath =
        page === "home"
            ? path.join(process.cwd(), "messages", "en.json")
            : path.join(process.cwd(), "messages", page, "en.json");

        const fallback = fs.readFileSync(fallbackPath, "utf8");
        return JSON.parse(fallback);
    }
}

export function generatePageMetadata(page: string, locale: string): Metadata {
  const pageContent = getPageContent(page, locale ).pageInline;
  const { title, tagline, description, keywords } = pageContent;

  const fullTitle = tagline ? `${title} – ${tagline}` : title;
  const ogImage = pageContent.imageUrl || "/images/small_photo.jpg";
  const pathSuffix = page === "home" ? "" : `/${page}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || [],
    openGraph: {
      title: fullTitle,
      description,
      url: `https://jaime-hyland.com/${locale}${pathSuffix}`,
      siteName: "Jaime Hyland Portfolio",
      images: [
        { url: ogImage, width: 512, height: 512, alt: title },
      ],
      locale: locale === "en" ? "en_US" : locale === "de" ? "de_DE" : "es_ES",
      type: "website",
    },
    alternates: {
        canonical: `https://jaime-hyland.com/${locale}${pathSuffix}`,
        languages: {
            en: `/en${pathSuffix}`,
            de: `/de${pathSuffix}`,
            es: `/es${pathSuffix}`,
        },
    },
    metadataBase: new URL("https://jaime-hyland.com"),
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
  };
}
