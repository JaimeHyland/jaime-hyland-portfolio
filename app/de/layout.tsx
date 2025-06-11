
import '../../globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';
import GDPRConsent from '../gdpr-consent';

export const metadata = {
  title: 'Jaime Hylands Portfolio',
  description: 'Meine Arbeit und Fähigkeiten präsentieren',
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
        <Header
          lang="en"
          labels={{
            home: 'Start',
            projects: 'Projekte',
            cv: 'Lebenslauf',
            contact: 'Kontakt',
            en: 'Englisch',
            de: 'Deutsch',
            es: 'Spanisch',
          }}
        />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
