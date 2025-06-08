
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import GDPRConsent from './gdpr-consent';

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
