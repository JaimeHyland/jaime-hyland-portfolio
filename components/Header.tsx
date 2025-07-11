'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { localizedPaths } from '@/lib/paths';
import { localizedLabels } from '@/lib/labels';
import { HeaderLink } from '../components/HeaderLink';


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
        <HeaderLink href={`/${lang}/${paths.home}`} pageKey="home" currentKey={pageKey}>
          {labels?.home}
        </HeaderLink>
        <HeaderLink href={`/${lang}/${paths.cv}`} pageKey="cv" currentKey={pageKey}>
          {labels?.cv}
        </HeaderLink>
        <HeaderLink href={`/${lang}/${paths.projects}`} pageKey="projects" currentKey={pageKey}>
          {labels?.projects}
        </HeaderLink>
        <HeaderLink href={`/${lang}/${paths.contact}`} pageKey="contact" currentKey={pageKey}>
          {labels?.contact}
        </HeaderLink>
      </nav>
      <div className="flex gap-2 justify-center md:justify-end text-sm text-gray-600">
        {(['en', 'es', 'de'] as const).map((lng) => (
          <button
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            className={`transition-transform duration-200 transform hover:scale-105 ${
              lang === lng ? 'font-bold' : 'font-normal'
            }`}
          >
            {labels?.[lng]}
          </button>
        ))}
      </div>
    </header>
  );
}
