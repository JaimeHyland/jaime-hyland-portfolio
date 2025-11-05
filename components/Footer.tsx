// components/Footer.tsx
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { getAnalyticsConsent, setAnalyticsConsent as saveAnalyticsConsent } from '@/lib/analyticsConsent';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [analyticsConsent, setAnalyticsConsentState] = useState<string | null>(null);
  const [tempConsent, setTempConsent] = useState<string | null>(null);

  // Initialize consent from localStorage
  useEffect(() => {
    const storedConsent = getAnalyticsConsent();
    setAnalyticsConsentState(storedConsent);
  }, []);

  const openPrivacyModal = () => {
    setTempConsent(analyticsConsent);
    setShowPrivacyModal(true);
  };

  const closePrivacyModal = () => setShowPrivacyModal(false);

  const toggleConsent = () => {
    setTempConsent(prev => prev === 'accepted' ? 'rejected' : 'accepted');
  };

  const saveConsent = () => {
    if (tempConsent === 'accepted' || tempConsent === 'rejected') {
      saveAnalyticsConsent(tempConsent);
      setAnalyticsConsentState(tempConsent);
    }
    closePrivacyModal();
  };

  const consentChanged = tempConsent !== analyticsConsent;

  const getConsentMessage = () => {
    if (!consentChanged) {
      return tempConsent === 'accepted' ? t("analyticsAllowed") : t("analyticsNotAllowed");
    }
    return tempConsent === 'accepted' ? t("willAllow") : t("willNotAllow");
  };

  return (
    <>
      <footer className="mt-16 border-t border-gray-200 py-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
        <div className="space-x-4">
          <Link
            href={`/${locale}/impressum`}
            className="underline hover:text-gray-900 dark:hover:text-gray-200"
          >
            {t("impressum")}
          </Link>
          <button
            onClick={openPrivacyModal}
            className="underline hover:text-gray-900 dark:hover:text-gray-200"
          >
            {t("managePrivacySettings")}
          </button>
        </div>
        <p className="mt-2">{t("copyright")}</p>
      </footer>

      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg max-w-md w-full relative">
            {/* Close X */}
            <button
              onClick={closePrivacyModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-lg font-bold"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-xl font-semibold mb-4">{t("managePrivacySettings")}</h2>

            <p className="mb-4">{getConsentMessage()}</p>

            <button
              onClick={toggleConsent}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded transform transition-transform duration-150 hover:scale-105"
            >
              {tempConsent === "accepted" ? t("prohibitDataCollection") : t("allowDataCollection")}
            </button>

            <div className="flex justify-end space-x-2">
              <button
                onClick={closePrivacyModal}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded transform transition-transform duration-150 hover:scale-105"
              >
                {t("cancel")}
              </button>

              <button
                onClick={saveConsent}
                className={`px-4 py-2 rounded transform transition-transform duration-150 hover:scale-105 ${consentChanged ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
                disabled={!consentChanged}
              >
                {t("save")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
