'use client';

import Link from 'next/link';

type HeaderProps = {
  labels: {
    en: string;
    de: string;
    es: string;
  };
};

export default function Header({ labels }: HeaderProps) {
  return (
    <header className="p-4 bg-gray-100 border-b flex justify-between items-center">
      <h1 className="text-xl font-bold">Jaime Hyland</h1>
      <nav className="space-x-4">
        <Link href="/en">{labels.en}</Link>
        <Link href="/de">{labels.de}</Link>
        <Link href="/es">{labels.es}</Link>
      </nav>
    </header>
  );
}
