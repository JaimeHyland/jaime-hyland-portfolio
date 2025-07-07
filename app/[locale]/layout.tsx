import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';
import { localizedPaths } from '@/lib/paths';
import { localizedLabels } from '@/lib/labels';
import '@/app/globals.css';
import GDPRConsent from '@/app/gdpr-consent';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }, { locale: 'de' }];
}

type Locale = 'en' | 'es' | 'de';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();
  if (!messages) notFound();

  return (
    <html lang={locale as string}>
      <body className="font-sans bg-white text-gray-800">
        <GDPRConsent />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header
            lang={locale}
            labels={localizedLabels[locale] as (typeof localizedLabels)[keyof typeof localizedLabels]}
            paths={localizedPaths[locale]}
          />
          <main className="p-6">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
