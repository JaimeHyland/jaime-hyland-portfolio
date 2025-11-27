"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { getAnalyticsConsent, setAnalyticsConsent as saveAnalyticsConsent } from '@/lib/analyticsConsent';
import Modal from "./Modal";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [analyticsConsent, setAnalyticsConsentState] = useState<string | null>(null);
  const [tempConsent, setTempConsent] = useState<string | null>(null);

  // Initialize consent from localStorage
  useEffect(() => {
    setAnalyticsConsentState(getAnalyticsConsent());
  }, []);

  const openPrivacyModal = () => {
    setTempConsent(analyticsConsent);
    setShowPrivacyModal(true);
  };

  const closePrivacyModal = () => setShowPrivacyModal(false);

  const consentChanged = tempConsent !== analyticsConsent;

  const getConsentMessage = () => {
    if (!consentChanged) {
      return tempConsent === 'accepted' ? t("analyticsAllowed") : t("analyticsNotAllowed");
    }
    return tempConsent === 'accepted' ? t("willAllow") : t("willNotAllow");
  };

  return (
    <>
      {/* Footer */}
      <footer className="mt-auto border-t py-8 text-center text-sm text-gray-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)] border-gray-200">
        <div className="space-x-4">
          <Link
            href={`/${locale}/impressum`}
            className="underline font-semibold hover:text-gray-900 transition-colors duration-150"
          >
            {t("impressum")}
          </Link>
          <button
            onClick={openPrivacyModal}
            className="px-3 py-1 bg-slate-600 text-white rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 transition-colors duration-150"
          >
            {t("managePrivacySettings")}
          </button>
        </div>
        <p className="mt-2">{t("copyright")}</p>
      </footer>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <Modal onClose={closePrivacyModal}>
          <h2 className="text-xl font-semibold mb-4">{t("managePrivacySettings")}</h2>
          <p className="mb-6">{getConsentMessage()}</p>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowConfirmDialog(true)}
              className={`px-4 py-2 rounded transform transition-transform duration-150 hover:scale-105 ${
                tempConsent === "accepted"
                  ? "bg-red-400 text-white hover:bg-red-500"
                  : "bg-green-400 text-white hover:bg-green-500"
              }`}
            >
              {tempConsent === "accepted"
                ? t("prohibitDataCollection")
                : t("allowDataCollection")}
            </button>
          </div>
        </Modal>
      )}

      {/* Confirm Modal */}
      {showConfirmDialog && (
        <Modal onClose={() => setShowConfirmDialog(false)} showClose={false}>
          <h2 className="text-xl font-semibold mb-4">{t("confirmConsentChange")}</h2>
          <p className="mb-6">
            {tempConsent === "accepted"
              ? t("confirmProhibitMessage")
              : t("confirmAllowMessage")}
          </p>

          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowConfirmDialog(false)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              {t("cancel")}
            </button>

            <button
              onClick={() => {
                const newConsent = tempConsent === 'accepted' ? 'rejected' : 'accepted';
                saveAnalyticsConsent(newConsent);
                setAnalyticsConsentState(newConsent);
                setTempConsent(newConsent);
                setShowConfirmDialog(false);
                setShowPrivacyModal(false);
              }}
              className={`px-4 py-2 rounded ${
                tempConsent === "accepted"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-green-500 text-white hover:bg-green-600"
              } transition-colors`}
            >
              {t("confirm")}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
