"use client";
import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 text-sm flex justify-between items-center z-50">
      <p>We use cookies to remember your language preference. No tracking or analytics is used.</p>
      <div className="space-x-2">
        <button className="bg-green-600 px-3 py-1 rounded" onClick={accept}>
          Accept
        </button>
        <button className="bg-red-600 px-3 py-1 rounded" onClick={reject}>
          Reject
        </button>
      </div>
    </div>
  );
}
