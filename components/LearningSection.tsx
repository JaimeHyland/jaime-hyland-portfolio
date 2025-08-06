"use client";

import { useState } from "react";
import EducationModal from "./EducationModal";
import { useTranslations } from "next-intl";
import { ProjLink } from "../components/ProjLink";

import messagesEn from "../messages/en.json";
import messagesEs from "../messages/es.json";
import messagesDe from "../messages/de.json";

const messagesMap = {
  en: messagesEn,
  es: messagesEs,
  de: messagesDe
};

interface InstitutionProps {
  title: string;
  img: string;
  alt: string;
  content: React.ReactNode;
}

export default function LearningSection({ locale }: { locale: string }) {
  const messages = (messagesMap[locale as "en" | "es" | "de"] || messagesEn) as { homeInline: any };

  const { educationTitle } = messages.homeInline;

  const t = useTranslations("learningSection");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<InstitutionProps>({
    title: "",
    img: "",
    alt: "",
    content: null
  });

  const handleClick = (institution: InstitutionProps) => {
    setModalContent(institution);
    setModalOpen(true);
  };

  const institutions = [
    {
      title: "FÁS",
      img: "/images/Logo-fas_s2.png",
      alt: "FÁS",
      content: t.rich("fasModalContent", {
        link: (children) => (
          <a
            href="https://www.solas.ie/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("trinityModalTitle"),
      img: "/images/Trinity_shield.png",
      alt: "Trinity College Dublin",
      content: t.rich("trinityModalContent", {
        link: (children) => (
          <a
            href="https://www.tcd.ie/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("codeInstituteModalTitle"),
      img: "/images/code_institute.png",
      alt: "Code Institute",
      content: t.rich("codeInstituteModalContent", {
        link: (children) => (
          <a
            href="https://codeinstitute.net/de/full-stack-software-development-diploma/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("khanModalTitle"),
      img: "/images/khan-academy-solid.png",
      alt: "Khan Academy",
      content: t.rich("khanModalContent", {
        link: (children) => (
          <a
            href="https://www.khanacademy.org/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("codefinityModalTitle"),
      img: "/images/codefinity_bw.png",
      alt: "Codefinity",
      content: t.rich("codefinityModalContent", {
        link: (children) => (
          <a
            href="https://www.codefinity.com/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("brilliantModalTitle"),
      img: "/images/brilliant_bw.png",
      alt: "Brilliant",
      content: t.rich("brilliantModalContent", {
        link: (children) => (
          <a
            href="https://brilliant.org/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("kodekloudModalTitle"),
      img: "/images/kodekloud_bw.png",
      alt: "KodeKloud",
      content: t.rich("kodekloudModalContent", {
        link: (children) => (
          <a
            href="https://kodekloud.com/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("leetcodeModalTitle"),
      img: "/images/leetcode.png",
      alt: "LeetCode",
      content: t.rich("leetcodeModalContent", {
        link: (children) => (
          <a
            href="https://leetcode.com/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("linkedinModalTitle"),
      img: "/images/linkedin-learning.png",
      alt: "LinkedIn Learning",
      content: t.rich("linkedinModalContent", {
        link: (children) => (
          <a
            href="https://www.linkedin.com/learning/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    },
    {
      title: t("freecodecampModalTitle"),
      img: "/images/freecodecamp-icon.svg",
      alt: "freecodecamp",
      content: t.rich("freecodecampModalContent", {
        link: (children) => (
          <a
            href="https://www.freecodecamp.org/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )
      })
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-center mb-6">{educationTitle}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {institutions.map((inst, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-28 w-full cursor-pointer"
            title={inst.alt}
            onClick={() => handleClick(inst)}
          >
            <img src={inst.img} alt={inst.alt} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
      <EducationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </section>
  );
}
