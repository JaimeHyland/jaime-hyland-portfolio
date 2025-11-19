"use client";

import { useEffect, useState } from "react";
import TechIcon from "./TechIcon";
import TechModal from "./TechModal";

import { IconType } from "react-icons";

import {
  SiPython, SiTypescript, SiDart, SiCplusplus, SiDotnet,
  SiHtml5, SiCss3, SiDjango, SiFlask, SiReact, SiNextdotjs,
  SiFlutter, SiBootstrap, SiTailwindcss, SiPostgresql, SiMysql,
  SiHeroku, SiVercel, SiGodaddy, SiAmazonaws, SiStripe, SiSwagger,
  SiVisualstudiocode, SiAndroidstudio, SiEclipseide, SiGithub,
  SiGit, SiJira, SiJupyter, SiNodedotjs
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import messagesEn from "../messages/en.json";
import messagesEs from "../messages/es.json";
import messagesDe from "../messages/de.json";

const messagesMap = {
  en: messagesEn,
  es: messagesEs,
  de: messagesDe
};

interface TechItem {
  Icon?: IconType;
  imgSrc?: string;
  title: string;
  description: string;
}

interface TechSectionProps {
  locale: string;
}

const iconMap: Record<string, IconType> = {
  python: SiPython,
  typescript: SiTypescript,
  dart: SiDart,
  java: FaJava,
  cpp: SiCplusplus,
  dotnet: SiDotnet,
  html5: SiHtml5,
  css3: SiCss3,
  django: SiDjango,
  flask: SiFlask,
  react: SiReact,
  nextjs: SiNextdotjs,
  flutter: SiFlutter,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  heroku: SiHeroku,
  vercel: SiVercel,
  godaddy: SiGodaddy,
  aws: SiAmazonaws,
  stripe: SiStripe,
  swagger: SiSwagger,
  vscode: SiVisualstudiocode,
  androidStudio: SiAndroidstudio,
  eclipse: SiEclipseide,
  github: SiGithub,
  git: SiGit,
  jira: SiJira,
  jupyter: SiJupyter,
  nodejs: SiNodedotjs
};

export default function TechSection({ locale }: TechSectionProps ) {
  const messages = messagesMap[locale as "en" | "es" | "de"] || messagesEn;
  const techSection = messages.techSection;

  const [modal, setModal] = useState({ open: false, title: "", description: "" });



  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ title: string; description: string }>;
      setModal({ open: true, ...customEvent.detail });
    };
    window.addEventListener("techModal-open", handler);
    return () => window.removeEventListener("techModal-open", handler);
  }, []);

  const techItems: TechItem[] = Object.keys(techSection.items).map((key) => {
    const techKey = key as keyof typeof techSection.items;
    return {
      Icon: iconMap[techKey],
      title: techSection.items[techKey].title,
      description: techSection.items[techKey].description
    };
  });

return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-center mb-8">{techSection.heading}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-gray-800">
        {techItems.map((item, i) => (
          <TechIcon key={i} {...item} />
        ))}
      </div>

      <TechModal
        open={modal.open}
        title={modal.title}
        description={modal.description}
        onClose={() => setModal({ open: false, title: "", description: "" })}
      />
    </section>
  );
}
