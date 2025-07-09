'use client';

import { useTranslations } from 'next-intl';


export default function CVPage() {
  const t = useTranslations();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{t('heading')}</h1>
      <p className="text-lg italic">{t('subtitle')}</p>
      <p className="text-sm text-gray-600">{t('contact')}</p>

      <section>
        <h2 className="text-xl font-semibold">{t('profile.heading')}</h2>
        <p>{t('profile.text')}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t('technologies.heading')}</h2>
        <ul className="list-disc list-inside">
          <li><strong>{t('technologies.programming')}</strong></li>
          <li><strong>{t('technologies.databases')}</strong></li>
          <li><strong>{t('technologies.deployment')}</strong></li>
          <li><strong>{t('technologies.frameworks')}</strong></li>
          <li><strong>{t('technologies.tools')}</strong></li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t('education.heading')}</h2>
        <ul className="list-disc list-inside">
          {t.raw('education.items').map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t('portfolio.heading')}</h2>
        <ul className="list-disc list-inside">
          {t.raw('portfolio.items').map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t('experience.heading')}</h2>
        <p className="whitespace-pre-line">{t('experience.text')}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t('languages.heading')}</h2>
        <p>{t('languages.fluent')}</p>
        <p>{t('languages.rusty')}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">{t('hobbies.heading')}</h2>
        <p>{t('hobbies.line1')}</p>
        <p>{t('hobbies.line2')}</p>
      </section>
    </div>
  );
}
