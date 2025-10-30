// components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer({ locale }: { locale: string }) {
  const translations: Record<string, { impressum: string; copyright: string }> = {
    en: {
      impressum: "Legal disclosure",
      copyright: "© 2025 Jaime Hyland. All rights reserved.",
    },
    de: {
      impressum: "Impressum",
      copyright: "© 2025 Jaime Hyland. Alle Rechte vorbehalten.",
    },
    es: {
      impressum: "Aviso legal",
      copyright: "© 2025 Jaime Hyland. Todos los derechos reservados.",
    },
  };

  const t = translations[locale] || translations.en;

  return (
    <footer className="mt-16 border-t border-gray-200 py-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
      <div className="space-x-4">
        <Link
          href={`/${locale}/impressum`}
          className="underline hover:text-gray-900 dark:hover:text-gray-200"
        >
          {t.impressum}
        </Link>
      </div>
      <p className="mt-2">{t.copyright}</p>
    </footer>
  );
}
