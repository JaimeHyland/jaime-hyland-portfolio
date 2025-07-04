// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import GDPRConsent from './gdpr-consent';

export const metadata = {
  title: 'Jaime Hyland Portfolio',
  description: 'Multilingual CV and project showcase',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

interface LayoutProps {
  children: ReactNode;
  params: { lang: string };
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="font-sans bg-white text-gray-800">
        <GDPRConsent />
        {children}
      </body>
    </html>
  );
}
