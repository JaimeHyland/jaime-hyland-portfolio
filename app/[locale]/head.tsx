import fs from "fs";
import path from "path";
import type { Metadata } from "next";

type HomeContent = {
  homeInline: {
    name: string;
    tagline: string;
    intro: string;
    keywords: string[];
  };
};

function getHomeContent(locale: string): HomeContent {
  try {
    const filePath = path.join(process.cwd(), "messages", `${locale}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch {
    const fallbackPath = path.join(process.cwd(), "messages", "en.json");
    const fallback = fs.readFileSync(fallbackPath, "utf8");
    return JSON.parse(fallback);
  }
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const homeContent = getHomeContent(locale).homeInline;
  const { name, tagline, intro, keywords } = homeContent;

  return {
    title: `${name} – ${tagline}`,
    description: intro,
    keywords,
    openGraph: {
      title: `${name} – ${tagline}`,
      description: intro,
      url: `https://jaime-hyland.com/${locale}`,
      siteName: "Jaime Hyland Portfolio",
      images: [
        {
          url: "https://jaime-hyland.com/images/small_photo.jpg",
          width: 512,
          height: 512,
          alt: name,
        },
      ],
      locale:
        locale === "en" ? "en_US" : locale === "de" ? "de_DE" : "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} – ${tagline}`,
      description: intro,
      images: ["https://jaime-hyland.com/images/small_photo.jpg"],
    },
  };
}
