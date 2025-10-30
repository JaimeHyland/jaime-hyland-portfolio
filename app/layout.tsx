import "./globals.css";
import { ReactNode } from "react";
import GDPRConsent from "./gdpr-consent";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// export async function generateMetadata() {
//   return {
//     title: "Jaime Hyland Portfolio",
//     description: "Multilingual CV and project showcase",
//     icons: {
//       icon: "/favicon.ico",
//       shortcut: "/favicon-32x32.png",
//       apple: "/apple-touch-icon.png"
//     }
//   };
// }

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body className="font-sans bg-white text-gray-800">
        <GDPRConsent />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  );
}
