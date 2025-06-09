
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import GDPRConsent from './gdpr-consent';

export const metadata = {
  title: 'Jaime Hyland',
  description: 'Showcasing my work and skills',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        <GDPRConsent />
        <header className="p-4 bg-gray-100 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold">Jaime Hyland</h1>
          <nav className="space-x-4">
            <Link href="/en">English</Link>
            <Link href="/de">Deutsch</Link>
            <Link href="/es">Español</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
