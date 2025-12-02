"use client";

import React from "react";
import Modal from "./Modal";

interface TechsModalProps {
  open: boolean;
  title: string;
  description: React.ReactNode;
  onClose: () => void;
  draggable?: boolean;
}

export default function TechsModal({
  open,
  title,
  description,
  onClose,
  draggable = true,
}: TechsModalProps) {
  if (!open) return null;

  return (
    <Modal
      onClose={onClose}
      draggable={draggable}
      resizable={false}         // not resizable
      initialSize={{ width: "250px" }} // only width fixed; height adapts
    >
      <div className="p-4">
        <div className="modal-header cursor-move mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="text-sm text-gray-700">{description}</div>
      </div>

      <div style={{ height: "12px", backgroundColor: "white", flexShrink: 0 }} />
    </Modal>
  );
}
