"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function GDPRConsent() {
  const t = useTranslations(); // load translations
  const [visible, setVisible] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    const analytics = localStorage.getItem("analytics-consent") === "accepted";

    if (!consent) setVisible(true);
    if (analytics) setAnalyticsConsent(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("analytics-consent", "accepted");
    setAnalyticsConsent(true);
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("analytics-consent", "rejected");
    setAnalyticsConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 text-sm flex flex-col md:flex-row justify-between items-start md:items-center z-50">
      <p className="mb-2 md:mb-0 flex-1">{t("gdprConsent_message")}</p>
      <div className="flex flex-wrap gap-2">
        <button className="bg-green-600 px-3 py-1 rounded" onClick={accept}>
          {t("gdprConsent_acceptAll")}
        </button>
        <button className="bg-red-600 px-3 py-1 rounded" onClick={reject}>
          {t("gdprConsent_reject")}
        </button>
      </div>
    </div>
  );
}
