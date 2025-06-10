'use client';

import Link from 'next/link';

type HeaderProps = {
  labels: {
    en: string;
    de: string;
    es: string;
    cv: string;
    home: string;
    projects: string;
    contact: string;
  };
  lang:  'en' | 'de' | 'es'
};

export default function Header({ labels, lang }: HeaderProps) {
  return (
    <header className="p-4 bg-gray-100 border-b flex justify-between items-center">
      <h1 className="text-xl font-bold">Jaime Hyland</h1>
      <nav className="space-x-4">
        <Link href={`/${lang}`}>{labels.home}</Link>
        <Link href={`/${lang}/projects`}>{labels.projects}</Link>
        <Link href={`/${lang}/cv`}>{labels.cv}</Link>
        <Link href={`/${lang}/contact`}>{labels.contact}</Link>
      </nav>
    </header>
  );
}
