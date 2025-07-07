import messagesEn from '../../messages/en.json';
import messagesEs from '../../messages/es.json';
import messagesDe from '../../messages/de.json';
import { getLocale } from 'next-intl/server';

import {
  SiPython, SiDjango, SiPostgresql, SiMysql, SiGithub, SiGodaddy, SiHeroku,
  SiVercel, SiNextdotjs, SiTailwindcss, SiStripe, SiAmazonaws,
  SiBootstrap, SiFlask, SiJira, SiJupyter, SiHtml5, SiCss3, SiDart,
  SiFlutter, SiSwagger, SiDotnet,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import LearningSection from '@/components/LearningSection';


const messagesMap = {
  en: messagesEn,
  es: messagesEs,
  de: messagesDe
};

export default async function HomePage() {
  const locale = await getLocale();

  const messages = (messagesMap[locale as 'en' | 'es' | 'de'] || messagesEn) as {
    homeInline: any;
  };

  const rawLocale = await getLocale();
  console.log('🌍 Detected locale:', rawLocale);

  const {
    name,
    tagline,
    intro,
    techsTitle,
    buttonLabel,
    buttonText
  } = messages.homeInline;

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      {/* Hero / Intro */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{name}</h1>
        <p className="text-xl text-gray-700 mb-2">{tagline}</p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{intro}</p>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">{techsTitle}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-gray-800">
          <SiPython className="w-10 h-10" title="Python" />
          <SiDjango className="w-10 h-10" title="Django" />
          <SiPostgresql className="w-10 h-10" title="PostgreSQL" />
          <SiMysql className="w-10 h-10" title="MySQL" />
          <SiGithub className="w-10 h-10" title="GitHub" />
          <SiGodaddy className="w-10 h-10" title="GoDaddy" />
          <SiHeroku className="w-10 h-10" title="Heroku" />
          <SiVercel className="w-10 h-10" title="Vercel" />
          <SiNextdotjs className="w-10 h-10" title="Next.js" />
          <SiTailwindcss className="w-10 h-10" title="Tailwind CSS" />
          <SiStripe className="w-10 h-10" title="Stripe" />
          <SiAmazonaws className="w-10 h-10" title="AWS" />
          <div className="flex items-center justify-center w-10 h-10">
            <img src="/images/cloudinary_cloud.png" alt="Cloudinary" className="max-h-full max-w-full object-contain" title="Cloudinary" />
          </div>
          <SiBootstrap className="w-10 h-10" title="Bootstrap" />
          <SiFlask className="w-10 h-10" title="Flask" />
          <SiJira className="w-10 h-10" title="Jira" />
          <SiJupyter className="w-10 h-10" title="Jupyter" />
          <SiHtml5 className="w-10 h-10" title="HTML5" />
          <SiCss3 className="w-10 h-10" title="CSS3" />
          <FaJava className="w-10 h-10" title="Java Swing" />
          <SiDart className="w-10 h-10" title="Dart" />
          <SiFlutter className="w-10 h-10" title="Flutter" />
          <SiSwagger className="w-10 h-10" title="Swagger" />
          <SiDotnet className="w-10 h-10" title="Visual Basic .NET" />
        </div>
      </section>


      {/* Training / Education */}
      <LearningSection locale={locale} />

      {/* CTA */}
      <section className="text-center">
        <p className="text-lg text-gray-700 mb-4">{buttonLabel}</p>
        <a
          href="/en/contact"

          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          {buttonText}
        </a>
      </section>
    </main>
  );
}
