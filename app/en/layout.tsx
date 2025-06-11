
import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';

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
    <>
      <Header 
        lang='en' 
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
        <main className="p-6">{children}</main>
      </>
  );
}
