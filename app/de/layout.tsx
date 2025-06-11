
import { ReactNode } from 'react';
import Header from '@/components/Header';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header
          lang='de'
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
