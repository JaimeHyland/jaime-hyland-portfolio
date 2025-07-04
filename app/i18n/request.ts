import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale) {
    throw new Error('Locale is undefined in getRequestConfig.');
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,    // locale is now always a string
    messages,
  };
});
