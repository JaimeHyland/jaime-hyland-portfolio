// components/Header.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState, useRef } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { localizedPaths } from "@/lib/paths";
import { localizedLabels } from "@/lib/labels";
import { HeaderLink } from "../components/HeaderLink";
import { CVTxtModal } from "./CVTxtModal";


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

    const [desktopDownloadsOpen, setDesktopDownloadsOpen] = useState(false);
    const [mobileDownloadsOpen, setMobileDownloadsOpen] = useState(false);

    const desktopDownloadRef = useRef<HTMLDivElement>(null);
    const desktopDownloadToggleRef = useRef<HTMLSpanElement>(null);

    const mobileNavRef = useRef<HTMLDivElement>(null);
    const mobileDownloadRef = useRef<HTMLDivElement>(null);
    const mobileToggleRef = useRef<HTMLButtonElement>(null);
    

    useEffect(() => {
    function handleClickOutsideMenus(e: PointerEvent) {
      const target = e.target as HTMLElement;

      // ------------------------------------
      // 1️ Desktop Downloads submenu
      // ------------------------------------
      if (
        desktopDownloadRef.current &&
        desktopDownloadToggleRef.current &&
        !desktopDownloadRef.current.contains(target) &&
        !desktopDownloadToggleRef.current.contains(target)
      ) {
        setDesktopDownloadsOpen(false);
      }

      // ------------------------------------
      // 2️ Mobile main nav menu and Downloads submenu
      // ------------------------------------
      if (
        navOpen &&
        mobileNavRef.current &&
        mobileToggleRef.current &&
        !mobileNavRef.current.contains(target) &&
        !mobileToggleRef.current.contains(target)
      ) {
        setNavOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutsideMenus);
    return () => document.removeEventListener("pointerdown", handleClickOutsideMenus);
  }, [navOpen, desktopDownloadsOpen]);

  const pageKey =
    (Object.keys(paths) as (keyof typeof paths)[]).find(
      (key) => pathname === `/${lang}/${paths[key]}`
    ) ?? "home";

  const handleLanguageChange = (lng: "en" | "es" | "de") => {
    Cookies.set("NEXT_LOCALE", lng, { expires: 365 });
    const translatedPath = localizedPaths[lng][pageKey];
    const newPath = `/${lng}${translatedPath ? `/${translatedPath}` : ""}`;
    router.push(newPath);
    setNavOpen(false);
  };


  const closeMenu = () => setNavOpen(false);


  return (
    <header className="border-b p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
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

          <div className="relative" ref={desktopDownloadRef}>
            <span
              ref={desktopDownloadToggleRef}
              onClick={() => setDesktopDownloadsOpen(!desktopDownloadsOpen)}
              className="inline-block cursor-pointer transform transition duration-200 hover:scale-105">
              {labels.downloads}
            </span>
            {desktopDownloadsOpen && (
              <div 
                className="absolute left-0 mt-2 bg-white border shadow-md rounded-md flex flex-col py-1 text-sm w-56 z-50"
              >
                <a
                    href="/files/JaimeHyland_CV_de_DE_HR_FullStack_20251107.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 transform hover:scale-105 rounded transition text-sm"
                    onClick={() => setDesktopDownloadsOpen(false)}
                  >
                  {labels.downloadPdfDe}
                </a>
                <CVTxtModal
                  filePath="/files/JaimeHyland_CV_de_DE_ATS_FullStack_20251107.txt"
                  labels={{
                    downloadTxt: labels.downloadTxtDe,
                    close: labels.close,
                    txtReassurance: labels.txtReassurance,
                    errorText: labels.errorText,
                    loadingText: labels.loadingText, 
                    buttonDownload: labels.buttonDownload
                  }}
                  onClose={() => setDesktopDownloadsOpen(false)}
                />
                <a
                  href="/files/JaimeHyland_CV_en_GB_HR_FullStack_20251107.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 transform hover:scale-105 hover:bg-gray-100 rounded transition text-sm"
                  onClick={() => setDesktopDownloadsOpen(false)}
                >
                  {labels.downloadPdfEn}
                </a>
                <CVTxtModal
                  filePath="/files/JaimeHyland_CV_en_GB_ATS_FullStack_20251107.txt"
                  labels={{
                    downloadTxt: labels.downloadTxtEn,
                    close: labels.close,
                    txtReassurance: labels.txtReassurance,
                    errorText: labels.errorText,
                    loadingText: labels.loadingText, 
                    buttonDownload: labels.buttonDownload
                  }}
                  onClose={() => setDesktopDownloadsOpen(false)}
                />
                <a
                  href="/files/JaimeHyland_CV_es_ES_HR_FullStack_20251107.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 transform hover:scale-105 hover:bg-gray-100 rounded transition text-sm"
                  onClick={() => setDesktopDownloadsOpen(false)}
                >
                  {labels.downloadPdfEs}
                </a>
                <CVTxtModal
                  filePath="/files/JaimeHyland_CV_es_ES_ATS_FullStack_20251107.txt"
                  labels={{
                    downloadTxt: labels.downloadTxtEs,
                    close: labels.close,
                    txtReassurance: labels.txtReassurance,
                    errorText: labels.errorText,
                    loadingText: labels.loadingText, 
                    buttonDownload: labels.buttonDownload
                  }}
                  onClose={() => setDesktopDownloadsOpen(false)}
                />
            </div>
            )}
          </div>
        </nav>

        {/* Left: Mobile burger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            ref={mobileToggleRef}
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
        <div 
          ref={mobileNavRef}
          className="md:hidden absolute top-16 left-4 bg-white border border-gray-200 shadow-lg rounded-lg p-4 flex flex-col gap-2 text-lg text-gray-800 w-72 z-50"
          // onClick={(e) => e.stopPropagation()}
        >
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

          <div className="relative" ref={mobileDownloadRef}>

            <HeaderLink
              href="#"
              pageKey="download"
              currentKey={pageKey}
              className={`text-left w-full transform hover:scale-105 transition ${
                mobileDownloadsOpen ? "font-medium" : "font-normal"
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileDownloadsOpen((prev) => !prev);
              }}
            >
              {labels.downloads}
            </HeaderLink>
            
            {mobileDownloadsOpen && (
              <div
                className="absolute left-2 top-full mt-1 bg-white border shadow-md rounded-md flex flex-col py-1 text-sm w-56 z-50"
              >
                <a
                  href="/files/JaimeHyland_CV_de_DE_HR_FullStack_20251107.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 transform hover:scale-105 hover:bg-gray-100 rounded transition text-sm"
                  onClick={() => setMobileDownloadsOpen(false)}
                >
                  {labels.downloadPdfDe}
                </a>

                <div className="pl-2">
                  <CVTxtModal
                    filePath="/files/JaimeHyland_CV_de_DE_ATS_FullStack_20251107.txt"
                    labels={{
                      downloadTxt: labels.modalTxtDownloadDe,
                      close: labels.close,
                      txtReassurance: labels.txtReassurance,
                      errorText: labels.errorText,
                      loadingText: labels.loadingText,
                      buttonDownload: labels.buttonDownload,
                    }}
                    isMobile={true}
                    onClose={() => setMobileDownloadsOpen(false)}
                  />
                </div>

                <a
                  href="/files/JaimeHyland_CV_en_GB_HR_FullStack_20251107.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 transform hover:scale-105 hover:bg-gray-100 rounded transition text-sm"
                  onClick={() => setMobileDownloadsOpen(false)}
                >
                  {labels.downloadPdfEn}
                </a>

                <div className="pl-2">
                  <CVTxtModal
                    filePath="/files/JaimeHyland_CV_en_GB_ATS_FullStack_20251107.txt"
                    labels={{
                      downloadTxt: labels.modalTxtDownloadEn,
                      close: labels.close,
                      txtReassurance: labels.txtReassurance,
                      errorText: labels.errorText,
                      loadingText: labels.loadingText,
                      buttonDownload: labels.buttonDownload,
                    }}
                    isMobile={true}
                    onClose={() => setMobileDownloadsOpen(false)}
                  />
                </div>

                <a
                  href="/files/JaimeHyland_CV_es_ES_HR_FullStack_20251107.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 transform hover:scale-105 hover:bg-gray-100 rounded transition text-sm"
                  onClick={() => setMobileDownloadsOpen(false)}
                >
                  {labels.downloadPdfEs}
                </a>

                <div className="pl-2">
                  <CVTxtModal
                    filePath="/files/JaimeHyland_CV_es_ES_ATS_FullStack_20251107.txt"
                    labels={{
                      downloadTxt: labels.modalTxtDownloadEs,
                      close: labels.close,
                      txtReassurance: labels.txtReassurance,
                      errorText: labels.errorText,
                      loadingText: labels.loadingText,
                      buttonDownload: labels.buttonDownload,
                    }}
                    isMobile={true}
                    onClose={() => setMobileDownloadsOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
