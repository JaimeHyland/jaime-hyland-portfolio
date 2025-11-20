"use client";

import { useTranslations, useLocale } from "next-intl";
import React from "react";
import { ProjLink } from "../../../components/ProjLink";
import { CollapsibleSection } from "../../../components/CollapsibleSection";

export default function CVPage() {
  const t = useTranslations();
  const educationItems = t.raw("education.items");
  const locale = useLocale();

  const urls = [
    `/${locale}/projects#ci-assessment`,
    `/${locale}/projects#independent`,
    `/${locale}/projects#hackathons`
  ];

  const rawItems = t.raw("portfolio.items") as string[];

  const richItems = rawItems.map((_, i) =>
    t.rich(`portfolio.items.${i}`, {
      link: (chunks) => <ProjLink href={urls[i]}>{chunks}</ProjLink>
    })
  );
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div
        className="flex flex-col md:flex-row items-center
                gap-12 md:gap-18 lg:gap-24"
      >
        <div className="flex-shrink-0">
          <img
            src="/images/small_photo.jpg"
            alt="Jaime Hyland only a few short years ago."
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
        </div>
        <div
          className="
          md:flex md:flex-col md:justify-center text-left inline-block"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold">{t("cvOwner")}</h1>
            <p className="text-lg italic whitespace-nowrap mt-2">
              <ProjLink href={t("emailURL")}>{t("emailText")}</ProjLink> |{" "}
              <ProjLink href={t("githubURL")}>{t("githubText")}</ProjLink> |{" "}
              <ProjLink href={t("linkedinURL")}>{t("linkedinText")}</ProjLink>
            </p>
          </div>
        </div>
      </div>

      <CollapsibleSection title={t("summary.title")}>
        <p>{t("summary.text")}</p>
      </CollapsibleSection>

      <CollapsibleSection title={t("technologies.heading")}>
        <div className="grid grid-cols-[35%,1fr] md:grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("technologies.programmingPt")}</div>
          <div>{t("technologies.programmingText")}</div>
          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("technologies.databasesPt")}</div>
          <div>{t("technologies.databasesText")}</div>
          <div lang={locale} className="font-semibold break-words">{t("technologies.deploymentPt")}</div>
          <div>{t("technologies.deploymentText")}</div>
          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("technologies.versionControlPt")}</div>
          <div>{t("technologies.versionControlText")}</div>
          <div lang={locale} className="font-semibold break-words hyphens-auto">
            {t("technologies.frameworksPt")}
            /<wbr />
            {t("technologies.librariesPt")}:
          </div>
          <div>{t("technologies.frameworksText")}</div>
          <div lang={locale} className="font-semibold break-words hyphens-auto">
            <span className="block md:hidden">{t("technologies.xlationPtMobile")}</span>
            <span className="hidden md:block">{t("technologies.xlationPtDesktop")}</span>
          </div>
          <div>{t("technologies.xlationText")}</div>
          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("technologies.singlesourcePt")}</div>
          <div>{t("technologies.singlesourceText")}</div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title={t("education.heading")}>
        <div className="grid grid-cols-[25%,1fr] md:grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          {educationItems.map((item: { period: string; text: string }, i: number) => (
            <React.Fragment key={i}>
              <div lang={locale} className="font-semibold break-words hyphens-auto">{item.period}</div>
              <div>{item.text}</div>
            </React.Fragment>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title={t("portfolio.heading")}>
        <p>{t("portfolio.intro")}</p>
        <ul className="list-disc list-outside pl-6">
          {richItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CollapsibleSection>

      <CollapsibleSection id="germany-experience" title={t("workExperienceGermany.heading")}>
        <div className="grid grid-cols-[25%,1fr] md:grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          {t.raw("workExperienceGermany.items").map(
            (
              item: {
                period: string;
                text: string;
                blurbTitle?: string;
                blurb1?: string;
                blurb2?: string;
              },
              i: number
            ) => (
              <React.Fragment key={i}>
                <div lang={locale} className="font-semibold break-words hyphens-auto">{item.period}</div>
                <div>{item.text}</div>

                {/* Blurb content: shown in a single full-width row */}
                {(item.blurbTitle || item.blurb1 || item.blurb2) && (
                  <div lang={locale} className="col-span-2 space-y-1 pl-10 my-4 break-words hyphens-auto">
                    {item.blurbTitle && (
                      <div>
                        <em>{item.blurbTitle}</em>
                      </div>
                    )}
                    <ul lang={locale} className="list-disc list-outside pl-6 space-y-1 break-words hyphens-auto">
                      {item.blurb1 && <li>{item.blurb1}</li>}
                      {item.blurb2 && <li>{item.blurb2}</li>}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="ireland-experience"
        title={t("workExperienceIreland.heading")}
        defaultOpen={false}
      >
        <div className="grid grid-cols-[25%,1fr] md:grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          {t.raw("workExperienceIreland.items").map(
            (
              item: {
                period: string;
                text: string;
                blurbTitle?: string;
                blurb1?: string;
                blurb2?: string;
              },
              i: number
            ) => (
              <React.Fragment key={i}>
                <div lang={locale} className="font-semibold break-words hyphens-auto">{item.period}</div>
                <div>{item.text}</div>

                {/* Blurb content: shown in a single full-width row */}
                {(item.blurbTitle || item.blurb1 || item.blurb2) && (
                  <div className="col-span-2 space-y-1 pl-10 my-4">
                    {item.blurbTitle && (
                      <div>
                        <em>{item.blurbTitle}</em>
                      </div>
                    )}
                    <ul className="list-disc list-outside pl-6 space-y-1">
                      {item.blurb1 && <li>{item.blurb1}</li>}
                      {item.blurb2 && <li>{item.blurb2}</li>}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        id="spain-experience"
        title={t("workExperienceSpain.heading")}
        defaultOpen={false}
      >
        <div className="grid grid-cols-[25%,1fr] md:grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          {t.raw("workExperienceSpain.items").map(
            (
              item: {
                period: string;
                text: string;
                blurbTitle?: string;
                blurb1?: string;
                blurb2?: string;
              },
              i: number
            ) => (
              <React.Fragment key={i}>
                <div className="font-semibold break-words hyphens-auto">{item.period}</div>
                <div>{item.text}</div>

                {/* Blurb content: shown in a single full-width row */}
                {(item.blurbTitle || item.blurb1 || item.blurb2) && (
                  <div lang={locale} className="col-span-2 space-y-1 pl-10 my-4 break-words hyphens-auto">
                    {item.blurbTitle && (
                      <div>
                        <em>{item.blurbTitle}</em>
                      </div>
                    )}
                    <ul lang={locale} className="list-disc list-outside pl-6 space-y-1 break-words hyphens-auto">
                      {item.blurb1 && <li>{item.blurb1}</li>}
                      {item.blurb2 && <li>{item.blurb2}</li>}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </CollapsibleSection>

      <CollapsibleSection id="seasonalWork" title={t("seasonalWork.heading")} defaultOpen={false}>
        <div className="grid grid-cols-[40%,1fr] md:grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          {t.raw("seasonalWork.items").map(
            (
              item: {
                period: string;
                text: string;
                blurbTitle?: string;
                blurb1?: string;
                blurb2?: string;
              },
              i: number
            ) => (
              <React.Fragment key={i}>
                <div className="font-semibold break-words hyphens-auto">{item.period}</div>
                <div>{item.text}</div>

                {/* Blurb content: shown in a single full-width row */}
                {(item.blurbTitle || item.blurb1 || item.blurb2) && (
                  <div className="col-span-2 space-y-1 pl-10 my-4 break-words hyphens-auto">
                    {item.blurbTitle && (
                      <div>
                        <em>{item.blurbTitle}</em>
                      </div>
                    )}
                    <ul className="list-disc list-outside pl-6 space-y-1 break-words hyphens-auto">
                      {item.blurb1 && <li>{item.blurb1}</li>}
                      {item.blurb2 && <li>{item.blurb2}</li>}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title={t("workRelevantSkills.heading")}>
        <div className="grid grid-cols-[25%,1fr] md:grid-cols-[auto,1fr] gap-x-4 gap-y-2">
          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("workRelevantSkills.languagesPt")}</div>
          
          <div>{t("workRelevantSkills.languagesText")}</div>

          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("workRelevantSkills.mgtPt")}</div>
          <div>{t("workRelevantSkills.mgtText")}</div>

          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("workRelevantSkills.xlationPt")}</div>
          <div>{t("workRelevantSkills.xlationText")}</div>

          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("workRelevantSkills.l10nPt")}</div>
          <div>{t("workRelevantSkills.l10nText")}</div>

          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("workRelevantSkills.docuPt")}</div>
          <div>{t("workRelevantSkills.docuText")}</div>

          <div lang={locale} className="font-semibold break-words hyphens-auto">{t("workRelevantSkills.accountancyPt")}</div>
          <div>{t("workRelevantSkills.accountancyText")}</div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title={t("hobbies.heading")}>
        <ul className="list-disc list-outside pl-6">
          <li key="line1">{t("hobbies.line1")}</li>
          <li key="line2">
            {t.rich("hobbies.line2", {
              link: (chunks) => (
                <ProjLink href="https://www.youtube.com/watch?v=hdQ3FHiF_uM&t=96s">
                  {chunks}
                </ProjLink>
              )
            })}
          </li>
        </ul>
      </CollapsibleSection>
    </div>
  );
}
