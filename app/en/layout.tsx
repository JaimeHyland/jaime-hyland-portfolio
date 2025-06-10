
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';
import GDPRConsent from '../gdpr-consent';

export const metadata = {
  title: 'Jaime Hyland&apos;s portfolio',
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
        <Header 
        lang='en' 
        labels={{
          en: 'English',
          de: 'German',
          es: 'Spanish',
          home: 'Home',
          projects: 'Projects',
          cv: 'CV',
          contact: 'Contact' }} />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

<Header
  lang="en"
  labels={{
    home: 'Home',
    projects: 'Projects',
    cv: 'CV',
    contact: 'Contact',
    en: 'English',
    de: 'German',
    es: 'Spanish',
  }}
/>
