'use client';

import { useTranslations } from 'next-intl';
import { ProjLink } from '../../../components/ProjLink';
import { useEffect, useState } from 'react';


export function EmailDisplay() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userFirst = 'jaime';
    const userLast = 'hyland';
    const domainFirst = 'language';
    const domainLast = 'landscapes';
    const domainTLD = 'com'
    setEmail(`${userFirst}.${userLast}@${domainFirst}-${domainLast}.${domainTLD}`);
  }, []);

  return (
    <a href={`mailto:${email}`} className="underline text-blue-600 hover:text-blue-800">
      {email}
    </a>
  );
}

function MobileDisplay() {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const parts = ['+49', '177', '2570734'];
    setPhone(parts.join(' '));
  }, []);

  return <span>{phone}</span>;
}

function LandlineDisplay() {
  const [landline, setLandline] = useState('');

  useEffect(() => {
    const parts = ['+49', '30', '48628468'];
    setLandline(parts.join(' '));
  }, []);

  return <span>{landline}</span>;
}

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
