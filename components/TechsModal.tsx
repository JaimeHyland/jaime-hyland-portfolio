"use client";

import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

interface TechsModalProps {
  open: boolean;
  title: string;
  description: React.ReactNode;
  onClose: () => void;
  draggable?: boolean;
  resizable?: boolean;
}

export default function TechsModal({
  open,
  title,
  description,
  onClose,
  draggable = true,
  resizable = true,
}: TechsModalProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [contentMaxHeight, setContentMaxHeight] = useState<number>(0);


  const headerHeight = 32;
  const footerHeight = 12;
  const padding = 16;

  const updateMaxHeight = () => {
    const modalHeight = modalContentRef.current?.offsetHeight ?? 0;
    setContentMaxHeight(modalHeight - headerHeight - footerHeight - padding);
  };

  useEffect(() => {
  updateMaxHeight();

  const observer = new ResizeObserver(() => updateMaxHeight());
  if (modalContentRef.current?.parentElement) {
    observer.observe(modalContentRef.current.parentElement);
  }

  window.addEventListener("resize", updateMaxHeight);
  return () => {
    observer.disconnect();
    window.removeEventListener("resize", updateMaxHeight);
  };
}, []);



  if (!open) return null;

  return (
    <Modal
      onClose={onClose}
      draggable={draggable}
      resizable={resizable}
      initialSize={{ width: "250px", height: "150px" }}

    >
      <div 
        ref={modalContentRef} 
        className="overflow-y-auto p-4"
        style={{ maxHeight: `${contentMaxHeight}px` }} 
      >
        <div className="modal-header cursor-move mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="text-sm text-gray-700">{description}</div>
      </div>

      <div style={{ height: "12px", backgroundColor: "white", flexShrink: 0 }} />
    </Modal>
  );
}
