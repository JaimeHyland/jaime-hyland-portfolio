import { getLocale } from "next-intl/server";
import messagesEn from "../../messages/en.json";
import messagesEs from "../../messages/es.json";
import messagesDe from "../../messages/de.json";

import TechSection from "@/components/TechSection";
import LearningSection from "@/components/LearningSection";

import { generateMetadata as headMetadata } from "./head";

const messagesMap = {
  en: messagesEn,
  es: messagesEs,
  de: messagesDe
};


export async function generateMetadata() {
  const locale = await getLocale();
  return await headMetadata({ params: { locale } });
}

export default async function HomePage() {
  const locale = await getLocale();

  const messages = (messagesMap[locale as "en" | "es" | "de"] || messagesEn) as {
    homeInline: {
      name: string;
      tagline: string;
      intro: string;
      techsTitle: string;
      buttonLabel: string;
      buttonText: string;
    };
  };

  const { name, tagline, intro, techsTitle, buttonLabel, buttonText } = messages.homeInline;

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      {/* Hero / Intro Section */}
      <section className="mb-16 flex flex-col sm:flex-row items-start">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img src="/images/small_photo.jpg" alt="Jaime Hyland" className="w-48 h-48 rounded-full" />
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{name}</h1>
          <p className="text-xl text-gray-700 mb-2">{tagline}</p>
          <p className="text-lg text-gray-600 max-w-2xl">{intro}</p>
        </div>
      </section>

      {/* Tech Section */}
      <TechSection techsTitle={techsTitle} />

      {/* Learning / Education */}
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
