"use client";

import "./globals.css";
import { ReactNode } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";



interface LayoutProps {
  children: ReactNode
}

export default function RootLayout( { children } : LayoutProps) {

  return (
    <html>
      <body className="font-sans bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
