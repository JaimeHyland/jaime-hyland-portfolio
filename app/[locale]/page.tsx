import messagesEn from "../../messages/en.json";
import messagesEs from "../../messages/es.json";
import messagesDe from "../../messages/de.json";
import { getLocale } from "next-intl/server";

import { generateMetadata as headMetadata } from "./head";

import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiGodaddy,
  SiHeroku,
  SiVercel,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiStripe,
  SiAmazonaws,
  SiBootstrap,
  SiFlask,
  SiJira,
  SiJupyter,
  SiHtml5,
  SiCss3,
  SiDart,
  SiFlutter,
  SiSwagger,
  SiDotnet,
  SiNodedotjs,
  SiReact,
  SiVisualstudiocode,
  SiCplusplus,
  SiVisualstudio,
  SiAndroidstudio,
  SiEclipseide,
  SiGit
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import LearningSection from "@/components/LearningSection";

const messagesMap = {
  en: messagesEn,
  es: messagesEs,
  de: messagesDe
};


// --- Generate Metadata for Next.js ---
export async function generateMetadata() {
  const locale = await getLocale();
  return await headMetadata({ params: { locale } });
}

export default async function HomePage() {
  const locale = await getLocale();

  const messages = (messagesMap[locale as "en" | "es" | "de"] || messagesEn) as {
    homeInline: any;
  };

  const rawLocale = await getLocale();

  const { name, tagline, intro, techsTitle, buttonLabel, buttonText } = messages.homeInline;

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <section className="mb-16 flex flex-col sm:flex-row items-start">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img
            src="/images/small_photo.jpg"
            alt="Jaime Hyland"
            className="w-48 h-48 rounded-full"
          />
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-xl text-gray-700 mb-2">{tagline}</p>
          <p className="text-lg text-gray-600 max-w-2xl">{intro}</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">{techsTitle}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-gray-800">
          {/* Languages */}
          <SiPython className="w-10 h-10" title="Python" />
          <SiTypescript className="w-10 h-10" title="TypeScript" />
          <SiDart className="w-10 h-10" title="Dart" />
          <FaJava className="w-10 h-10" title="Java Swing" />
          <SiCplusplus className="w-10 h-10" title="C++" />
          <SiDotnet className="w-10 h-10" title="Visual Basic .NET" />
          <SiHtml5 className="w-10 h-10" title="HTML5" />
          <SiCss3 className="w-10 h-10" title="CSS3" />

          {/* Frameworks & Libraries */}
          <SiDjango className="w-10 h-10" title="Django" />
          <SiFlask className="w-10 h-10" title="Flask" />
          <SiReact className="w-10 h-10" title="React" />
          <SiNextdotjs className="w-10 h-10" title="Next.js" />
          <SiFlutter className="w-10 h-10" title="Flutter" />
          <SiBootstrap className="w-10 h-10" title="Bootstrap" />
          <SiTailwindcss className="w-10 h-10" title="Tailwind CSS" />

          {/* Databases */}
          <SiPostgresql className="w-10 h-10" title="PostgreSQL" />
          <SiMysql className="w-10 h-10" title="MySQL" />

          {/* Deployment / Hosting */}
          <SiHeroku className="w-10 h-10" title="Heroku" />
          <SiVercel className="w-10 h-10" title="Vercel" />
          <SiGodaddy className="w-10 h-10" title="GoDaddy" />
          <SiAmazonaws className="w-10 h-10" title="AWS" />
          <div className="flex items-center justify-center w-10 h-10">
            <img
              src="/images/cloudinary_cloud.png"
              alt="Cloudinary"
              className="max-h-full max-w-full object-contain"
              title="Cloudinary"
            />
          </div>

          {/* Payments and APIs */}
          <SiStripe className="w-10 h-10" title="Stripe" />
          <SiSwagger className="w-10 h-10" title="Swagger" />

          {/* Tools, IDEs & Dev Workflow */}
          <SiVisualstudiocode className="w-10 h-10" title="Visual Studio Code" />
          <SiAndroidstudio className="w-10 h-10" title="Android Studio" />
          <SiEclipseide className="w-10 h-10" title="Eclipse" />
          <SiGithub className="w-10 h-10" title="GitHub" />
          <SiGit className="w-10 h-10" title="Git" />
          <SiJira className="w-10 h-10" title="Jira" />
          <SiJupyter className="w-10 h-10" title="Jupyter" />

          {/* Runtime Environment */}
          <SiNodedotjs className="w-10 h-10" title="Node.js" />
          {/* Translation/Localization */}
          <SiNodedotjs className="w-10 h-10" title="Node.js" />
        </div>
      </section>

      {/* Training / Education */}
      <LearningSection locale={locale} />

      {/* CTA */}
      <section className="text-center">
        <p className="text-lg text-gray-700 mb-4">{buttonLabel}</p>
        <a
          href={`/${locale}/contact`}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          {buttonText}
        </a>
      </section>
    </main>
  );
}
