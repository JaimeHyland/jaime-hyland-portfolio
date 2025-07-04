'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { localizedPaths } from '@/lib/paths';

interface HeaderProps {
  lang: 'en' | 'es' | 'de';
  labels: Record<'en' | 'es' | 'de', string>;
  paths: {
    home: string;
    projects: string;
    cv: string;
    contact: string;
  };
}

export default function Header({ lang, labels, paths }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Determine the current page key by checking which path matches
  const pageKey = Object.keys(paths).find(
    (key) => pathname === `/${lang}/${paths[key as keyof typeof paths]}`
  ) as keyof typeof paths || 'home';

  const handleLanguageChange = (lng: 'en' | 'es' | 'de') => {
    Cookies.set('NEXT_LOCALE', lng, { expires: 365 });

    const translatedPath = localizedPaths[lng][pageKey];
    const newPath = `/${lng}${translatedPath ? `/${translatedPath}` : ''}`;

    console.log(`DEBUG[Language Switch] Navigating to path: ${newPath}`);

    router.push(newPath);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Jaime Hyland</h1>

      <div className="flex gap-2 justify-center md:justify-end text-sm text-gray-600">
        {(['en', 'es', 'de'] as const).map((lng) => (
          <button
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            className={lang === lng ? 'font-bold' : 'font-normal'}
          >
            {labels[lng]}
          </button>
        ))}
      </div>
    </header>
  );
}
