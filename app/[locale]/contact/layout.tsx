import { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/meta";
import SlugRedirector from "../SlugRedirector";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const resolved = await params;

  return generatePageMetadata("contact", resolved.locale);
}

type Locale = "en" | "es" | "de";

interface ContactLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function ContactLayout({ children, params }: ContactLayoutProps) {
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
