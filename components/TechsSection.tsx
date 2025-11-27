"use client";

import { useEffect, useState } from "react";
import TechsIcon from "./TechsIcon";
import  TechsModal  from "./TechsModal";
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

interface TechsItem {
  Icon?: IconType;
  imgSrc?: string;
  title: string;
  description: string;
}

interface TechsSectionProps {
  locale: string;
}

interface ModalState {
  open: boolean;
  title: string;
  description: string;
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

export default function TechsSection({ locale }: TechsSectionProps) {
  const messages = messagesMap[locale as "en" | "es" | "de"] || messagesEn;
  const techsSection = messages.techsSection;

  const [modal, setModal] = useState<ModalState>({
    open: false,
    title: "",
    description: ""
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ title: string; description: string }>;
      setModal({ open: true, ...customEvent.detail });
    };
    window.addEventListener("techModal-open", handler);
    return () => window.removeEventListener("techModal-open", handler);
  }, []);

  const techItems: TechsItem[] = Object.keys(techsSection.items).map((key) => {
    const techKey = key as keyof typeof techsSection.items;
    return {
      Icon: iconMap[techKey],
      title: techsSection.items[techKey].title,
      description: techsSection.items[techKey].description
    };
  });

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-center mb-8">{techsSection.heading}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center text-gray-800">
        {techItems.map((item, i) => (
          <TechsIcon key={i} {...item} />
        ))}
      </div>

      {/* Modal now inherits from reusable Modal component */}
      <TechsModal
        open={modal.open}
        title={modal.title}
        description={modal.description}
        onClose={() => setModal({ open: false, title: "", description: "" })}
      />
    </section>
  );
}
