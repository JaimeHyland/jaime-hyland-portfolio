import React from 'react';

interface EducationModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function EducationModal({ open, onClose, title, content }: EducationModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="text-sm text-gray-700 space-y-2">{content}</div>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
}
