'use client';

import { useTranslations, useLocale } from 'next-intl';
import React from 'react';
import { CvHeading } from '../../../components/CvHeading';
import { ProjLink } from '../../../components/ProjLink';
import { useEffect, useState } from 'react';


function PhoneDisplay() {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const parts = ['+49', '177', '2570734'];
    setPhone(parts.join(' '));
  }, []);

  return <span>{phone}</span>;
}

export default function CVPage() {
  const t = useTranslations();
  const educationItems = t.raw('education.items');
  const locale = useLocale();

  const urls = [
    `/${locale}/projects#ci-assessment`,
    `/${locale}/projects#independent`,
    `/${locale}/projects#hackathons`
  ];

  const rawItems = t.raw('portfolio.items') as string[];

  const richItems = rawItems.map((_, i) =>
    t.rich(`portfolio.items.${i}`, {
      link: (chunks) => (
        <ProjLink href={urls[i]}>
          {chunks}
        </ProjLink>
      )
    })
  );


  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{t('cvOwner')}</h1>
        <p className="text-lg italic"><ProjLink href={t('emailURL')}>{t('emailText')}</ProjLink> | <ProjLink href={t('githubURL')}>{t('githubText')}</ProjLink> | <ProjLink href={t('linkedinURL')}>{t('linkedinText')}</ProjLink></p>
      </div>
      <section>
        <CvHeading>{t('summary.title')}</CvHeading>
        <p>{t('summary.text')}</p>
      </section>

      <section>
        <CvHeading>{t('technologies.heading')}</CvHeading>
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          <div className="font-semibold">{t('technologies.programmingPt')}</div>
          <div>{t('technologies.programmingText')}</div>
          <div className="font-semibold">{t('technologies.databasesPt')}</div>
          <div>{t('technologies.databasesText')}</div>
          <div className="font-semibold">{t('technologies.deploymentPt')}</div>
          <div>{t('technologies.deploymentText')}</div>
          <div className="font-semibold">{t('technologies.versionControlPt')}</div>
          <div>{t('technologies.versionControlText')}</div>
          <div className="font-semibold">{t('technologies.frameworksPt')}</div>
          <div>{t('technologies.frameworksText')}</div>
          <div className="font-semibold">{t('technologies.xlationPt')}</div>
          <div>{t('technologies.xlationText')}</div>
          <div className="font-semibold">{t('technologies.singlesourcePt')}</div>
          <div>{t('technologies.singlesourceText')}</div>
        </div>
      </section>

      <section>
        <CvHeading>{t('education.heading')}</CvHeading>
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          {educationItems.map((item: { period: string; text: string }, i: number) => (
            <React.Fragment key={i}>
              <div className="font-semibold">{item.period}</div>
              <div>{item.text}</div>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
        <CvHeading>{t('portfolio.heading')}</CvHeading>
        <p>{t('portfolio.intro')}</p>
        <ul className="list-disc list-outside pl-6">
          {richItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <CvHeading>{t('workExperience.heading')}</CvHeading>
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          {t.raw('workExperience.items').map((
            item: {
              period: string;
              text: string;
              blurbTitle?: string;
              blurb1?: string;
              blurb2?: string;
            },
            i: number
          ) => (
            <React.Fragment key={i}>
              <div className="font-semibold">{item.period}</div>
              <div>{item.text}</div>

              {/* Blurb content: shown in a single full-width row */}
              {(item.blurbTitle || item.blurb1 || item.blurb2) && (
                <div className="col-span-2 space-y-1 pl-24 my-4">
                  {item.blurbTitle && <div><em>{item.blurbTitle}</em></div>}
                  <ul className="list-disc list-outside pl-6 space-y-1">
                    {item.blurb1 && <li>{item.blurb1}</li>}
                    {item.blurb2 && <li>{item.blurb2}</li>}
                  </ul>
                </div>
              )}          
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
        <CvHeading>{t('workRelevantSkills.heading')}</CvHeading>
        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          <div className="font-semibold">{t('workRelevantSkills.languagesPt')}</div>
          <div>{t('workRelevantSkills.languagesText')}</div>

          <div className="font-semibold">{t('workRelevantSkills.mgtPt')}</div>
          <div>{t('workRelevantSkills.mgtText')}</div>

          <div className="font-semibold">{t('workRelevantSkills.xlationPt')}</div>
          <div>{t('workRelevantSkills.xlationText')}</div>

          <div className="font-semibold">{t('workRelevantSkills.docuPt')}</div>
          <div>{t('workRelevantSkills.docuText')}</div>
        </div>
      </section>


      <section>
        <CvHeading>{t('hobbies.heading')}</CvHeading>
        <ul className="list-disc list-outside pl-6">
          <li key="line1">{t('hobbies.line1')}</li>
          <li key="line2">{t('hobbies.line2')}</li>
        </ul>
      </section>
    </div>
  );
}
