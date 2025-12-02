"use client";

import React from "react";
import Modal from "./Modal";

interface EducationModalProps {
  open: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  draggable?: boolean;
}

export default function EducationModal({
  open,
  title,
  content,
  onClose,
  draggable = true,
}: EducationModalProps) {
  if (!open) return null;

  return (
    <Modal
      onClose={onClose}
      draggable={draggable}
      resizable={false}   // not resizable
      initialSize={{ width: "250px" }} // only width fixed; height adapts
    >
      <div className="p-4">
        <div className="modal-header cursor-move mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="text-sm text-gray-700">{content}</div>
      </div>

      <div style={{ height: "12px", backgroundColor: "white", flexShrink: 0 }} />
    </Modal>
  );
}
