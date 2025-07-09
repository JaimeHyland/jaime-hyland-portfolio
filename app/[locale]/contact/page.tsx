'use client';

import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t('heading')}</h1>
      <p className="mb-2">{t('intro')}</p>
      <ul className="space-y-1">
        <li>
          <strong>{t('emailLabel')}:</strong> {t('email')}
        </li>
        <li>
          <strong>{t('landlineLabel')}:</strong> {t('landline')}
        </li>
        <li>
          <strong>{t('mobileLabel')}:</strong> {t('mobile')}
        </li>
        <li>
          <strong>{t('addressLabel')}:</strong><br />
          {t('addressLine1')}<br />
          {t('addressLine2')}
        </li>
        <li>
          <strong>{t('websiteLabel')}:</strong>{' '}
          <a
            href={t('websiteURL')}
            className="text-blue-600 underline"
          >
            {t('websiteText')}
          </a>
        </li>
        <li>
          <strong>{t('linkedinLabel')}:</strong>{' '}
          <a
            href={t('linkedinURL')}
            className="text-blue-600 underline"
            target="_blank"
          >
            {t('linkedinText')}
          </a>
        </li>
      </ul>
    </div>
  );
}
