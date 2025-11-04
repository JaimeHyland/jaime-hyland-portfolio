"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import GDPRConsent from "@/app/GDPRConsent";

export default function AnalyticsAndConsent() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check localStorage for stored consent
    const analyticsConsent = localStorage.getItem("analytics_consent");
    console.log("DEBUG: Entered AnalyticsAndConsent.useEffect");
    if (analyticsConsent === "accepted") {
      setConsentGiven(true);
    }

    // Watch for consent changes (in case user accepts later)
    const handleStorageChange = () => {
      const updatedConsent = localStorage.getItem("analytics_consent");
      setConsentGiven(updatedConsent === "accepted");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

return (
    <>
        <GDPRConsent />
        {consentGiven && (
            <>
                <Analytics />
                {console.log("Analytics component mounted")}
            </>
        )}
    </>
    );
}
