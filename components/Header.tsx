'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Cookies from 'js-cookie';
import { localizedPaths } from '@/lib/paths';
import { localizedLabels } from '@/lib/labels';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = useLocale() as keyof typeof localizedLabels;

  const paths = {
    home: '',
    cv: lang === 'es' ? 'curriculum' : lang === 'de' ? 'lebenslauf' : 'cv',
    projects: lang === 'es' ? 'proyectos' : lang === 'de' ? 'projekte' : 'projects',
    contact: lang === 'es' ? 'contacto' : lang === 'de' ? 'kontakt' : 'contact',
  };

  const labels = localizedLabels[lang]; // ✅ Safely grab localized labels

  const pageKey = Object.keys(paths).find(
    (key) => pathname === `/${lang}/${paths[key as keyof typeof paths]}`
  ) as keyof typeof paths || 'home';

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
