"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";

interface EducationModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function EducationModal({ open, onClose, title, content }: EducationModalProps) {
  const nodeRef = useRef(null);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <Draggable nodeRef={nodeRef} handle=".modal-header" cancel=".modal-close">
        <div
          ref={nodeRef}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative cursor-move"
        >
          <div className="modal-header cursor-move">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
          </div>
          <div className="text-sm text-gray-700 space-y-2">{content}</div>
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>
      </Draggable>
    </div>
  );
}
