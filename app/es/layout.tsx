
import { ReactNode, useEffect, useState } from 'react';
import Header from '@/components/Header';

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
    <>
      <Header
        lang="es"
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
    </>
  );
}
