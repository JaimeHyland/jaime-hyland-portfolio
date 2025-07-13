'use client';

import { useTranslations } from 'next-intl';
import { ProjLink } from '../../../components/ProjLink';
import { useEffect, useState } from 'react';
import { EmailDisplay, MobileDisplay, LandlineDisplay } from '../../../components/ContactInfo';


export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t('heading')}</h1>
      <p className="mb-2">{t('intro')}</p>
      <ul className="space-y-1">
        <li>
          <strong>{t('emailLabel')}:</strong> <EmailDisplay />
        </li>
        <li>
          <strong>{t('landlineLabel')}:</strong> <LandlineDisplay />
        </li>
        <li>
          <strong>{t('mobileLabel')}:</strong> <MobileDisplay />
        </li>
        <li>
          <strong>{t('addressLabel')}:</strong><br />
          {t('addressLine1')}<br />
          {t('addressLine2')}
        </li>
        <li>
          <strong>{t('websiteLabel')}:</strong>{' '}
          <ProjLink href={t('websiteURL')}>{t('websiteText')}</ProjLink>
        </li>
        <li>
          <strong>{t('linkedinLabel')}:</strong>{' '}
          <ProjLink href={t('linkedinURL')}>{t('linkedinName')}</ProjLink>
        </li>
      </ul>
    </div>
  );
}
