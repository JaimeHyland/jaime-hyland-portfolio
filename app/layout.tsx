
import './globals.css';
import GDPRConsent from './gdpr-consent';
import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jaime Hyland Portfolio',
  description: 'Multilingual CV and project showcase',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
    children
}: {
    children: ReactNode
}) {
  return (
    <html lang="en">  # default to english
      <body className="font-sans bg-white text-gray-800">
        <GDPRConsent />
        {children}
      </body>
    </html>
  );
}
