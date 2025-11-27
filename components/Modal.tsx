import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;        // called when × or overlay is clicked
  showClose?: boolean;   // optional close button at bottom
}

export default function Modal({ children, onClose, showClose = false }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded w-full max-w-md relative ${showClose ? "shadow-lg" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Always-present × button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg font-bold"
        >
          &times;
        </button>

        {children}

        {/* Optional footer close button */}
        {showClose && (
          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

