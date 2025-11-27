import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  showClose?: boolean;
}

export default function Modal({ children, onClose, showClose = true}: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {showClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
          >
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
