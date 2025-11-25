import { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/meta";

export async function generateMetadata({ params }: { params: { locale: string } }) {
    const resolved = await params;
    console.log("[DEBUG] generateMetadata locale:", resolved.locale);

    return generatePageMetadata("contact", resolved.locale);
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}