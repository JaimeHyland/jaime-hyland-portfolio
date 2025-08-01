import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (params) => {
  const locale = await params.requestLocale;

  if (!locale) {
    throw new Error('Locale is undefined in getRequestConfig.');
  }

  const base = (await import(`../../messages/${locale}.json`)).default;
  const cv = (await import(`../../messages/cv/${locale}.json`)).default;
  const projects = (await import(`../../messages/projects/${locale}.json`)).default;
  const contact = (await import(`../../messages/contact/${locale}.json`)).default;

  return {
    locale,
    messages: {
      ...base,
      ...cv,
      ...projects,
      ...contact,
    },
  };
});
