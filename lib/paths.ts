import { LanguageKey, AnchorKey, PageKey } from "./keys";


// For getPagePath
export interface GetPagePathProps {
  t: (key: string, values?: Record<string, any>) => string;
  key: PageKey;
}

export function getPagePath(t: (key: string, values?: Record<string, any>) => string, key: PageKey) {
  return t(`pages.${key}`);
}

export interface GetAnchorProps {
  t: ReturnType<typeof import("next-intl").useTranslations>;
  locale: LanguageKey;
  key: AnchorKey;
}

export function getAnchor({ t, locale, key }: GetAnchorProps) {
  return `/${locale}/${getPagePath(t, "projects")}#${t(`portfolioAnchors.${key}`)}`;
}
