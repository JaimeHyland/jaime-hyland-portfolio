"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";
import Modal from "./Modal";

interface TechsModalProps {
  open: boolean;
  title: string;
  description: React.ReactNode; // allow links or other elements
  onClose: () => void;
  draggable?: boolean; // optional
}

export default function TechsModal({
  open,
  title,
  description,
  onClose,
  draggable = true,
}: TechsModalProps) {
  const nodeRef = useRef(null);

  if (!open) return null;

  const content = (
    <div
      ref={nodeRef}
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-lg p-6 w-full max-w-md cursor-move"
    >
      <div className="modal-header cursor-move">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      </div>
      <div className="text-sm text-gray-700">{description}</div>
    </div>
  );

  return (
    <Modal onClose={onClose}>
      {draggable ? <Draggable nodeRef={nodeRef} handle=".modal-header">{content}</Draggable> : content}
    </Modal>
  );
}
