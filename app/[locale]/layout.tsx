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

export default async function LocaleLayout({ children, params}: { children: 
  React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const messages = await getMessages();

  if (!messages) notFound();

  return (
    <>
      <GDPRConsent />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
          <Header
            lang={locale as Locale}
            labels={localizedLabels[locale as Locale]}
            paths={localizedPaths[locale as Locale]}
          />
        </div>
        <main className="pt-20 p-6">{children}</main>
      </NextIntlClientProvider>
    </>
  );
}
