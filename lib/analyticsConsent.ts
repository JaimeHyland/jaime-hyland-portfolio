export type AnalyticsConsentValue = 'accepted' | 'rejected';

const CONSENT_KEY = 'analytics_consent';

export function setAnalyticsConsent(value: AnalyticsConsentValue) {
  localStorage.setItem(CONSENT_KEY, value);
}

export function getAnalyticsConsent(): AnalyticsConsentValue | null {
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}
