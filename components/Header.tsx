// components/Header.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { localizedPaths } from "@/lib/paths";
import { localizedLabels } from "@/lib/labels";
import { HeaderLink } from "../components/HeaderLink";

type HeaderProps = {
  lang: "en" | "es" | "de";
  labels: (typeof localizedLabels)["en"];
  paths: {
    home: string;
    cv: string;
    projects: string;
    contact: string;
  };
};

export default function Header({ lang, labels, paths }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [langOpen, setLangOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const pageKey =
    (Object.keys(paths) as (keyof typeof paths)[]).find(
      (key) => pathname === `/${lang}/${paths[key]}`
    ) ?? "home";

  const handleLanguageChange = (lng: "en" | "es" | "de") => {
    Cookies.set("NEXT_LOCALE", lng, { expires: 365 });

    const translatedPath = localizedPaths[lng][pageKey];
    const newPath = `/${lng}${translatedPath ? `/${translatedPath}` : ""}`;

    router.push(newPath);
    setNavOpen(false); // Close mobile nav after language change
  };

  const closeMenu = () => setNavOpen(false);

  return (
    <header className="border-b p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Left: Nav Menu (desktop) */}
        <nav className="hidden md:flex gap-4 text-lg text-gray-800">
          <HeaderLink href={`/${lang}/${paths.home}`} pageKey="home" currentKey={pageKey}>
            {labels?.home}
          </HeaderLink>
          <HeaderLink href={`/${lang}/${paths.cv}`} pageKey="cv" currentKey={pageKey}>
            {labels?.cv}
          </HeaderLink>
          <HeaderLink href={`/${lang}/${paths.projects}`} pageKey="projects" currentKey={pageKey}>
            {labels?.projects}
          </HeaderLink>
          <HeaderLink href={`/${lang}/${paths.contact}`} pageKey="contact" currentKey={pageKey}>
            {labels?.contact}
          </HeaderLink>
        </nav>

        {/* Left: Mobile burger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-gray-600 hover:text-gray-900"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Logo and site title */}
        <div>
          <HeaderLink href={`/${lang}/${paths.home}`}
          pageKey="home" 
          currentKey={pageKey}
          onClick={() => setNavOpen(false)}
          className="flex items-center gap-2">
            <img src="/images/bee-favicon.svg" alt="Bee icon" className="w-6 h-6 md:w-8 md:h-8" />
            {(pageKey === "projects" || pageKey === "contact") && (
              <span className="hidden md:inline whitespace-nowrap text-xl font-bold text-gray-800">
                Jaime Hyland
              </span>
            )}
          </HeaderLink>
        </div>

        {/* Right: Language selector */}
        <div className="flex items-center gap-2">
          {/* Desktop */}
          <div className="hidden md:flex gap-2 text-sm text-gray-600">
            {(["en", "es", "de"] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => handleLanguageChange(lng)}
                className={`transition-transform duration-200 transform hover:scale-105 ${
                  lang === lng ? "font-bold" : "font-normal"
                }`}
              >
                {labels?.[lng]}
              </button>
            ))}
          </div>

          {/* Mobile: Speech bubble */}
          <div className="relative flex md:hidden">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Select language"
            >
              <MessageCircle size={22} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white border shadow-md rounded-md flex flex-col py-1 text-sm z-50">
                {(["en", "es", "de"] as const).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => handleLanguageChange(lng)}
                    className={`px-4 py-2 text-left hover:bg-gray-100 ${
                      lang === lng ? "font-bold" : "font-normal"
                    }`}
                  >
                    {labels?.[lng]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {navOpen && (
        <div className="md:hidden absolute top-16 left-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-4 flex flex-col gap-2 text-lg text-gray-800 w-48 z-50">
          <HeaderLink href={`/${lang}/${paths.home}`} pageKey="home" currentKey={pageKey} onClick={closeMenu}>
            {labels?.home}
          </HeaderLink>
          <HeaderLink href={`/${lang}/${paths.cv}`} pageKey="cv" currentKey={pageKey} onClick={closeMenu}>
            {labels?.cv}
          </HeaderLink>
          <HeaderLink href={`/${lang}/${paths.projects}`} pageKey="projects" currentKey={pageKey} onClick={closeMenu}>
            {labels?.projects}
          </HeaderLink>
          <HeaderLink href={`/${lang}/${paths.contact}`} pageKey="contact" currentKey={pageKey} onClick={closeMenu}>
            {labels?.contact}
          </HeaderLink>
        </div>
      )}
    </header>
  );
}
