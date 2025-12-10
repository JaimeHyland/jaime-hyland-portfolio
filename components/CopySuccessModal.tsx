"use client";

import React from "react";
import Modal from "./Modal";

interface CopySuccessModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string; 
}

export default function CopySuccessModal({ open, onClose }: CopySuccessModalProps) {
  if (!open) return null;

  return (
    <Modal
      onClose={onClose}
      draggable={false}
      resizable={false}
      initialSize={{ width: "220px"}}
    >
      <div className="p-4 flex flex-col items-center justify-center text-center">
        <div className="modal-header cursor-move mb-2 select-none">
          <h3 className="text-lg font-semibold">Copied!</h3>
        </div>
        <div className="text-sm text-gray-700">The text has been copied to your clipboard.</div>
      </div>
    </Modal>
  );
}
