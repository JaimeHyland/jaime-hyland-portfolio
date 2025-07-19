'use client';
import { useTranslations, useLocale } from 'next-intl';
import { ProjLink } from '../../../components/ProjLink';
import { BadgeDisplay } from '../../../components/BadgeDisplay';
import { CollapsibleSection } from '../../../components/CollapsibleSection';

export default function ProjectsPage() {
  const t = useTranslations();
  const locale = useLocale();

  const anchors = t.raw('portfolioAnchors') as Record<string, string>;

  const urls = [
    `/${locale}/projects#${anchors.ciAssessment}`,
    `/${locale}/projects#${anchors.independent}`,
    `/${locale}/projects#${anchors.hackathons}`
  ];


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <p className="mb-6">{t('projIntro')}</p>

      <CollapsibleSection
        id="ci-assessment"
        title={t('section1.title')}
      >
        <p className="mb-4">{t('section1.description')}</p>
        <ul className="space-y-4">
          <li>
            <strong>
              <ProjLink href={t('section1.projects.farming.siteURL')}>
                {t('section1.projects.farming.name')}
              </ProjLink>              
            </strong> – {t('section1.projects.farming.desc')}
              <br />
              <ProjLink href={t('section1.projects.farming.codebaseURL')}>
                {t('section1.projects.farming.codebaseText')}
              </ProjLink>
          </li>
          <li>
            <strong>
              <ProjLink href={t('section1.projects.acento.siteURL')}>
                {t('section1.projects.acento.name')}
              </ProjLink>            
            </strong> – {t('section1.projects.acento.desc')}
            <br />
            <ProjLink href={t('section1.projects.acento.codebaseURL')}>
              {t('section1.projects.acento.codebaseText')}
            </ProjLink> 
          </li>
          <li>
            <strong>
              <ProjLink href={t('section1.projects.witch.siteURL')}>
                {t('section1.projects.witch.name')}
              </ProjLink>
            </strong> – {t('section1.projects.witch.desc')}
            <br />
            <ProjLink href={t('section1.projects.witch.codebaseURL')}>
                {t('section1.projects.witch.codebaseText')}
              </ProjLink>
          </li>
          <li>
            <strong>
              <ProjLink href={t('section1.projects.family.siteURL')}>
                {t('section1.projects.family.name')}
              </ProjLink> 
            </strong> – {t('section1.projects.family.desc')}
            <br />
            <ProjLink href={t('section1.projects.family.codebaseURL')}>
              {t('section1.projects.family.codebaseText')}
            </ProjLink> 
          </li>
          <li>
            <strong>
              <ProjLink href={t('section1.projects.mellifera.siteURL')}>
                {t('section1.projects.mellifera.name')}
              </ProjLink>
            </strong>
            <p>{t('section1.projects.mellifera.desc')}</p>
            <ProjLink href={t('section1.projects.mellifera.codebaseURL')}>
              {t('section1.projects.mellifera.codebaseText')}
            </ProjLink>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection
        id="independent"
        title={t('section2.title')}
      >
        <p className="mb-4">{t('section2.description')}</p>
        <ul className="space-y-4">
          <li>
            <strong>
              <ProjLink href={t('section2.projects.portfolio.siteURL')}>
                {t('section2.projects.portfolio.name')}
              </ProjLink>
            </strong>
            <p>{t('section2.projects.portfolio.desc')}</p>
            <ProjLink href={t('section2.projects.portfolio.codebaseURL')}>
              {t('section2.projects.portfolio.codebaseText')}
            </ProjLink>
          </li>
          <li>
            <strong>
              <ProjLink href={t('section2.projects.language.siteURL')}>
                {t('section2.projects.language.name')}
              </ProjLink>
            </strong>
            <p className="mb-4">{t('section2.projects.language.desc1')}</p>
            <p>{t('section2.projects.language.desc2')}</p>
            <ProjLink href={t('section2.projects.language.codebaseURL')}>
              {t('section2.projects.language.codebaseText')}
            </ProjLink>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection
        id="hackathons"
        title={t('section3.title')}
      >
        <p className="mb-4">{t('section3.description1')}</p>
        <p className="mb-4">{t('section3.description2')}</p>
        <ul className="space-y-6">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <strong>
                <ProjLink href={t('section3.projects.techbuddy.siteURL')}>
                  {t('section3.projects.techbuddy.name')}
                </ProjLink>
              </strong>
              <br />
              <em>{t('section3.projects.techbuddy.desc')}</em>
              <br />
              <span className="mb-4">{t('section3.projects.techbuddy.role')}</span>
              <br />
              <ProjLink href={t('section3.projects.techbuddy.codebaseURL')}>
                {t('section3.projects.techbuddy.codebaseText')}
              </ProjLink>
            </div>
            <div className="flex space-x-2 ml-4">
              <BadgeDisplay
                badgePaths={['/images/May-2025-Hackathon-2nd.png']}
                altTexts={[t('badges.may2025_2nd')]}
              />
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className='flex-grow'>
              <strong>
                <ProjLink href={t('section3.projects.shegitsit.siteURL')}>
                  {t('section3.projects.shegitsit.name')}
                </ProjLink>
              </strong>
              <br />
              <em>{t('section3.projects.shegitsit.desc')}</em>
              <br />
              <span className="mb-4">{t('section3.projects.shegitsit.role')}</span>
              <br />
              <ProjLink href={t('section3.projects.shegitsit.codebaseURL')}>
                {t('section3.projects.shegitsit.codebaseText')}
              </ProjLink>
            </div>
              <BadgeDisplay
                badgePaths={[
                  '/images/March-2025-Hackathon-3rd.png',
                  '/images/March-hackathon-peoples-choice.png'
                ]}
                altTexts={[t('badges.march2025_3rd'), t('badges.march2025_people')]}
              />
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <strong>
                <ProjLink href={t('section3.projects.sparksync.siteURL')}>
                  {t('section3.projects.sparksync.name')}
                </ProjLink>
              </strong>
              <br />
              <em>{t('section3.projects.sparksync.desc')}</em>
              <br />
              <span className="mb-4">{t('section3.projects.sparksync.role')}</span>
              <br />
              <ProjLink href={t('section3.projects.sparksync.codebaseURL')}>
                {t('section3.projects.sparksync.codebaseText')}
              </ProjLink>
            </div>
            <div className="flex space-x-2 ml-4">
              <BadgeDisplay
                badgePaths={['/images/February_2025_Hackathon_2nd.png']}
                altTexts={[t('badges.feb2025_2nd')]}
              />
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <strong>
                {t('section3.projects.co2nscious.name')}
              </strong>
              <br />
              <em>{t('section3.projects.co2nscious.desc')}</em><br />
              <span className="mb-4">{t('section3.projects.co2nscious.role')}</span>
              <br />
              <ProjLink href={t('section3.projects.co2nscious.codebaseURL')}>
                {t('section3.projects.co2nscious.codebaseText')}
              </ProjLink>
            </div>
          </li>
        </ul>
      </CollapsibleSection>
    </div>
  );
}
