import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/meta";


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  return generatePageMetadata("home", locale);
}
