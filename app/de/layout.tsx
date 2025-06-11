
import { ReactNode } from 'react';
import Header from '@/components/Header';

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
    <>
      <Header
        lang="de"
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
    </>
  );
}
