import { ReactNode, useState, useRef, useEffect } from "react";
import DraggableWrapper from "./DraggableWrapper";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
  resizable?: boolean;
  maximizable?: boolean;
  draggable?: boolean;
  initialSize?: { width?: string; height?: string };
}

export default function Modal({
  children,
  onClose,
  resizable = false,
  maximizable = false,
  draggable = false,
  initialSize,
}: ModalProps) {
  const [size, setSize] = useState(initialSize ?? {});
  const [isMaximized, setIsMaximized] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  
  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent backdrop click
    if (isMaximized) {
      setSize(initialSize ?? {});
    } else {
      setSize({ width: "100vw", height: "100vh" });
    }
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <DraggableWrapper draggable={draggable} bounds={undefined}>
        <div
          ref={modalRef}
          className="bg-white rounded shadow-lg flex flex-col relative min-h-0"
          style={{
            width: size.width ?? "auto",
            height: size.height ?? "auto",
            maxWidth: "95vw",
            maxHeight: "95vh",
            minWidth: "200px",
            minHeight: "0",
            resize: resizable ? "both" : "none",
            overflow: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top-right controls */}
          <div className="absolute top-2 right-2 flex gap-2 z-10 min-h-0">
            {maximizable && (
              <button
                onClick={handleMaximize}
                className="text-gray-500 hover:text-gray-800 text-lg font-bold"
              >
                {isMaximized ? "🗗" : "⬜"}
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 text-lg font-bold"
            >
              &times;
            </button>
          </div>

          {/* Drag handle */}
          <div className="modal-header cursor-move p-2 border-b flex-shrink-0 bg-slate-600" />

          {/* Content */}
          <div className="flex-1 min-h-0 relative">{children}</div>
        </div>
      </DraggableWrapper>
    </div>
  );
}
