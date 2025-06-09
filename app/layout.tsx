
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';
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
        <Header labels={{ en: 'English', de: 'German', es: 'Spanish' }} />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
