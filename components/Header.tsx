'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { localizedPaths } from '@/lib/paths';
import { localizedLabels } from '@/lib/labels';


type HeaderProps = {
  lang: 'en' | 'es' | 'de';
  labels: (typeof localizedLabels)['en']; // Same structure for all
  paths: {
    home: string;
    cv: string;
    projects: string;
    contact: string;
  };
};

export default function Header({ lang, labels, paths }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const pageKey = (Object.keys(paths) as (keyof typeof paths)[]).find(
    (key) => pathname === `/${lang}/${paths[key]}`
  ) ?? 'home';

  const handleLanguageChange = (lng: 'en' | 'es' | 'de') => {
    Cookies.set('NEXT_LOCALE', lng, { expires: 365 });

    const translatedPath = localizedPaths[lng][pageKey];
    const newPath = `/${lng}${translatedPath ? `/${translatedPath}` : ''}`;

    router.push(newPath);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Jaime Hyland</h1>

      <nav className="flex gap-4 text-lg text-gray-800">
        <Link href={`/${lang}/${paths.home}`} className={pageKey === 'home' ? 'font-bold' : ''}>
          {labels?.home}
        </Link>
        <Link href={`/${lang}/${paths.cv}`} className={pageKey === 'cv' ? 'font-bold' : ''}>
          {labels?.cv}
        </Link>
        <Link href={`/${lang}/${paths.projects}`} className={pageKey === 'projects' ? 'font-bold' : ''}>
          {labels?.projects}
        </Link>
        <Link href={`/${lang}/${paths.contact}`} className={pageKey === 'contact' ? 'font-bold' : ''}>
          {labels?.contact}
        </Link>
      </nav>

      <div className="flex gap-2 justify-center md:justify-end text-sm text-gray-600">
        {(['en', 'es', 'de'] as const).map((lng) => (
          <button
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            className={lang === lng ? 'font-bold' : 'font-normal'}
          >
            {labels?.[lng]}
          </button>
        ))}
      </div>
    </header>
  );
}
