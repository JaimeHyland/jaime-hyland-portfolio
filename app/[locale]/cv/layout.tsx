import { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/meta";
import SlugRedirector from "../SlugRedirector";

export async function generateMetadata({ params }: { params: { locale: string } }) {
    const resolved = await params;

    return generatePageMetadata("cv", resolved.locale);
}

type Locale = "en" | "es" | "de";

interface CVLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function CVLayout({ children, params }: CVLayoutProps) {
  const resolved = await params;
  const locale = resolved.locale;
  const typedLocale: Locale = ["en", "es", "de"].includes(locale) 
    ? (locale as Locale) 
    : "en"; //fallback

  return (
    <>
      {/* Client-side URL normalization */}
      <SlugRedirector locale={typedLocale} />

      {/* Page content */}
      {children}
    </>
  );
}