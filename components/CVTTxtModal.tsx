"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface CVTxtModalProps {
  lang: "en" | "de" | "es";
  labels: {
    downloadTxtDe: string;
    downloadTxtEn: string;
    downloadTxtEs: string;
    close: string;
    txtReassurance: string;
  };
}

export function CVTxtModal({ lang, labels }: CVTxtModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [txtContent, setTxtContent] = useState<string>("");

  const filePath =
    lang === "de"
      ? "/files/JaimeHyland_CV_de_DE_ATS_FullStack_20251107.txt"
      : lang === "es"
      ? "/files/JaimeHyland_CV_es_ES_ATS_FullStack_20251107.txt"
      : "/files/JaimeHyland_CV_en_GB_ATS_FullStack_20251107.txt";

  useEffect(() => {
    if (isOpen) {
      fetch(filePath)
        .then((res) => res.text())
        .then(setTxtContent)
        .catch(() => setTxtContent("Fehler beim Laden der Datei."));
    }
  }, [isOpen, filePath]);

  const downloadTxt = () => {
    fetch(filePath)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filePath.split("/").pop()!;
        link.click();
      });
  };

  return (
    <>
      {/* Trigger button example: could be inside your menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="hover:underline text-sm font-medium"
      >
        {labels.downloadTxt}
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">{labels.downloadTxt}</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Modal body */}
            <div className="flex-1 overflow-auto p-4 bg-gray-50">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {txtContent || "Lade..."}
              </pre>
              <p className="mt-2 text-xs text-gray-500">{labels.txtReassurance}</p>
            </div>

            {/* Modal footer */}
            <div className="flex justify-end p-4 border-t gap-2">
              <button
                onClick={downloadTxt}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {labels.downloadTxt}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                {labels.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
