"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";
import Modal from "./Modal";

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
    <Modal onClose={onClose}>
      <Draggable nodeRef={nodeRef} handle=".modal-header">
        <div
          ref={nodeRef}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg p-6 w-full max-w-md cursor-move"
        >
          {/* Header for dragging */}
          <div className="modal-header cursor-move">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
          </div>

          {/* Content */}
          <div className="text-sm text-gray-700 space-y-2">{content}</div>
        </div>
      </Draggable>
    </Modal>
  );
}
