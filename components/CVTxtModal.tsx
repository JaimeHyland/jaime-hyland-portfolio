import { useState, useEffect } from "react";
import Modal from "./Modal";
import CopySuccessModal from "./CopySuccessModal";

interface CVTxtModalProps {
  filePath: string;
  labels: {
    downloadTxt: string;
    close: string;
    txtReassurance: string;
    errorText: string;
    loadingText: string;
    buttonDownload: string;
    buttonCopy: string;
    copySuccessTitle: string;
    copySuccessMessage: string;
  };
  isMobile?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function CVTxtModal({
  filePath,
  labels,
  isMobile = false,
  onOpen,
  onClose,
}: CVTxtModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [txtContent, setTxtContent] = useState("");

  useEffect(() => {
    if (isOpen) {
      fetch(filePath)
        .then((res) => res.text())
        .then(setTxtContent)
        .catch(() => setTxtContent(labels.errorText));
    }
  }, [isOpen, filePath]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const downloadTxt = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    fetch(filePath)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filePath.split("/").pop()!;
        link.click();
      });
  };
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`hover:bg-gray-100 rounded transform hover:scale-105 transition text-left text-sm whitespace-nowrap ${
          isMobile ? "px-2 w-full" : "px-4 py-1"
        }`}
      >
        {labels.downloadTxt}
      </button>

      {isOpen && (
        <Modal
          onClose={handleClose}
          resizable={!isMobile}
          maximizable={isMobile}
          draggable={!isMobile}
          initialSize={{
            width: isMobile ? "80%" : "33vw",
            height: "400px",
          }}
        >
          <div className="flex flex-col h-full min-h-0">
            {/* Header */}
            <div className="flex-shrink-0 px-4 py-2 border-b">
              <h2 className="text-lg font-bold">{labels.downloadTxt}</h2>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-auto p-4 min-h-0">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {txtContent || labels.loadingText}
              </pre>
            </div>

            {/* Footer */}
            <p className="mt-2 text-xs text-gray-500 p-4">{labels.txtReassurance}</p>
            <div className="flex-shrink-0 flex justify-end p-4 border-t gap-2 bg-gray-50">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(txtContent)
                  .then(() => {
                    setShowCopySuccess(true);
                    setTimeout(() => setShowCopySuccess(false), 1500);
                  })
                  .catch(() => {
                    console.error("Failed to copy to clipboard");
                  });
                }}
                className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {labels.buttonCopy}
              </button>
              <button
                onClick={downloadTxt}
                className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {labels.buttonDownload}
              </button>
              <button
                onClick={handleClose}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                {labels.close}
              </button>
            </div>
          </div>
          <div
          className="resize-handle w-5 h-5 bg-transparent absolute bottom-0 right-0 cursor-se-resize"
        />
        </Modal>
      )}
      {showCopySuccess && (
        <CopySuccessModal
          open={showCopySuccess}
          onClose={() => setShowCopySuccess(false)}
          title={labels.copySuccessTitle}
          message={labels.copySuccessTitle}
        />
      )}
    </>
  );
}
