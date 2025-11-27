"use client";

import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import Modal from "./Modal";

interface CVTxtModalProps {
  filePath: string;
  labels: {
    downloadTxt: string;
    close: string;
    txtReassurance: string;
    errorText: string;
    loadingText: string;
    buttonDownload: string;
  };
  isMobile?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function CVTxtModal({ filePath, labels, isMobile = false, onOpen, onClose }: CVTxtModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [txtContent, setTxtContent] = useState("");
  const nodeRef = useRef(null);

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
      <button
        onClick={() => setIsOpen(true)}
        className={`hover:bg-gray-100 rounded transform hover:scale-105 transition text-left text-sm whitespace-nowrap ${
          isMobile ? "px-2 w-full" : "px-4 py-1"
        }`}
      >
        {labels.downloadTxt}
      </button>

      {isOpen && (
        <Modal onClose={handleClose} showClose={false}>
          <Draggable nodeRef={nodeRef} handle=".modal-header" cancel="">
            <div
              ref={nodeRef}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="modal-header cursor-move flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">{labels.downloadTxt}</h2>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-auto p-4 bg-gray-50">
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {txtContent || labels.loadingText}
                </pre>
                <p className="mt-2 text-xs text-gray-500">{labels.txtReassurance}</p>
              </div>

              {/* Footer with Download + Close */}
              <div className="flex justify-end p-4 border-t gap-2">
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
          </Draggable>
        </Modal>
      )}
    </>
  );
}
