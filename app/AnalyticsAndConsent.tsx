"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import GDPRConsent from "@/app/GDPRConsent";
import { getAnalyticsConsent } from '@/lib/analyticsConsent';

export default function AnalyticsAndConsent() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check localStorage for stored consent
    const analyticsConsent = getAnalyticsConsent();
    console.log("DEBUG: Entered AnalyticsAndConsent.useEffect");
    if (analyticsConsent === "accepted") {
      setConsentGiven(true);
    }

    // Watch for consent changes (in case user accepts later)
    const handleStorageChange = () => {
      const updatedConsent = getAnalyticsConsent();;
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
