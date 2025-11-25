import { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/meta";

export async function generateMetadata({ params }: { params: { locale: string } }) {
    const resolved = await params;
    console.log("[DEBUG] generateMetadata locale:", resolved.locale);

    return generatePageMetadata("projects", resolved.locale);
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}