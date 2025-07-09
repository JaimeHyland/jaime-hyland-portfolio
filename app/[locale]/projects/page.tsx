'use client';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <p className="mb-6">{t('intro')}</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{t('section1.title')}</h2>
        <p className="mb-4">{t('section1.description')}</p>
        <ul className="space-y-4">
          <li><strong>{t('section1.projects.farming.name')}</strong> – {t('section1.projects.farming.desc')}</li>
          <li><strong>{t('section1.projects.acento.name')}</strong> – {t('section1.projects.acento.desc')}</li>
          <li><strong>{t('section1.projects.witch.name')}</strong> – {t('section1.projects.witch.desc')}</li>
          <li><strong>{t('section1.projects.family.name')}</strong> – {t('section1.projects.family.desc')}</li>
          <li><strong>{t('section1.projects.mellifera.name')}</strong> – {t('section1.projects.mellifera.desc')}</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{t('section2.title')}</h2>
        <p className="mb-4">{t('section2.description')}</p>
        <ul className="space-y-4">
          <li>
            <strong>{t('section2.projects.portfolio.name')}</strong>
            <p className="text-sm text-gray-600">{t('section2.projects.portfolio.desc')}</p>
          </li>
          <li>
            <strong>{t('section2.projects.language.name')}</strong>
            <p className="text-sm text-gray-600">{t('section2.projects.language.desc1')}</p>
            <p className="text-sm text-gray-600">{t('section2.projects.language.desc2')}</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">{t('section3.title')}</h2>
        <p className="mb-4">{t('section3.description')}</p>
        <ul className="space-y-6">
          <li>
            <strong>{t('section3.projects.techbuddy.name')}</strong><br />
            <em>{t('section3.projects.techbuddy.desc')}</em><br />
            <span className="text-sm text-gray-700">{t('section3.projects.techbuddy.role')}</span>
          </li>
          <li>
            <strong>{t('section3.projects.shegitsit.name')}</strong><br />
            <em>{t('section3.projects.shegitsit.desc')}</em><br />
            <span className="text-sm text-gray-700">{t('section3.projects.shegitsit.role')}</span>
          </li>
          <li>
            <strong>{t('section3.projects.sparksync.name')}</strong><br />
            <em>{t('section3.projects.sparksync.desc')}</em><br />
            <span className="text-sm text-gray-700">{t('section3.projects.sparksync.role')}</span>
          </li>
          <li>
            <strong>{t('section3.projects.co2nscious.name')}</strong><br />
            <em>{t('section3.projects.co2nscious.desc')}</em><br />
            <span className="text-sm text-gray-700">{t('section3.projects.co2nscious.role')}</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
