'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localizedPaths, type Language, type PageKey } from '@/lib/paths';

type HeaderProps = {
  labels: {
    en: string;
    de: string;
    es: string;
    home: string;
    cv: string;
    projects: string;
    contact: string;
  };
  paths: {
    home: string;
    cv: string;
    projects: string;
    contact: string;
  };
  lang: Language;
};

// Helper to get the page key from the current path
function getCurrentPageKey(pathname: string, lang: Language): PageKey {
  const segment = pathname.split('/')[2] || ''; // skip lang code
  const langPaths = localizedPaths[lang];

  const match = Object.entries(langPaths).find(([_, path]) => path === segment);
  return (match?.[0] as PageKey) || 'home';
}

export default function Header({ labels, paths, lang }: HeaderProps) {
  const pathname = usePathname();
  const pageKey = getCurrentPageKey(pathname, lang);

  const isActiveLink = (href: string) => {
    const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const cleanHref = href.endsWith('/') ? href.slice(0, -1) : href;
    return cleanPath === cleanHref;
  };

  return (
    <header className="p-4 bg-gray-100 border-b flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
      {/* Left: Site title */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-xl font-bold">Jaime Hyland</h1>
      </div>

      {/* Center: Main navigation */}
      <nav className="flex flex-wrap gap-4 items-center justify-center">
        <Link
          href={`/${lang}`}
          className={isActiveLink(`/${lang}`) ? 'font-bold' : 'font-normal'}
        >
          {labels.home}
        </Link>
        <Link
          href={`/${lang}/${paths.projects}`}
          className={isActiveLink(`/${lang}/${paths.projects}`) ? 'font-bold' : 'font-normal'}
        >
          {labels.projects}
        </Link>
        <Link
          href={`/${lang}/${paths.cv}`}
          className={isActiveLink(`/${lang}/${paths.cv}`) ? 'font-bold' : 'font-normal'}
        >
          {labels.cv}
        </Link>
        <Link
          href={`/${lang}/${paths.contact}`}
          className={isActiveLink(`/${lang}/${paths.contact}`) ? 'font-bold' : 'font-normal'}
        >
          {labels.contact}
        </Link>
      </nav>

      {/* Right: Language switcher (go to same page in selected language) */}
      <div className="flex gap-2 justify-center md:justify-end text-sm text-gray-600">
        {(['en', 'es', 'de'] as const).map((lng) => {
          const translatedPath = localizedPaths[lng][pageKey];
          return (
            <Link
              key={lng}
              href={`/${lng}${translatedPath ? `/${translatedPath}` : ''}`}
              className={lang === lng ? 'font-bold' : 'font-normal'}
            >
              {labels[lng]}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
