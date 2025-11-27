import { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/meta";
import SlugRedirector from "../SlugRedirector";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const resolved = await params;

  return generatePageMetadata("impressum", resolved.locale);
}

type Locale = "en" | "es" | "de";

interface ImpressumLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function ImpressumLayout({ children, params }: ImpressumLayoutProps) {
  const resolved = await params;
  const locale = resolved.locale;
  const typedLocale: Locale = ["en", "es", "de"].includes(locale) 
    ? (locale as Locale) 
    : "en"; // fallback

  return (
    <>
      <SlugRedirector locale={typedLocale} />
      {children}
    </>
  );
}
