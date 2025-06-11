
import '../../globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';
import GDPRConsent from '../gdpr-consent';

export const metadata = {
  title: 'El portafolios de Jaime Hyland',
  description: 'Mostrando mi trabajo y mis habilidades',
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
            home: 'Inicio',
            projects: 'Proyectos',
            cv: 'Curriculum',
            contact: 'Contactos',
            en: 'inglés',
            de: 'alemán',
            es: 'español',
          }}
        />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
