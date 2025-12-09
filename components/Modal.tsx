import { ReactNode, useState, useRef } from "react";
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
    e.stopPropagation();
    if (isMaximized) {
      setSize(initialSize ?? {});
    } else {
      setSize({ width: "100vw", height: "100vh" });
    }
    setIsMaximized(!isMaximized);
  };

  return (
    // ✅ CHANGE: removed flex centering, use plain fixed container
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <DraggableWrapper draggable={draggable} bounds={undefined}>
        <div
          ref={modalRef}
          className="bg-white rounded shadow-lg flex flex-col relative min-h-0"
          style={{
            position: "fixed",
            top: "calc(50% + 300px)",
            left: "50%",
            transform: "translate(-50%, -50%)",

            width: size.width ?? "auto",
            height: size.height ?? "auto",
            maxWidth: "95vw",
            maxHeight: "95vh",
            minWidth: "200px",
            minHeight: "0",
            resize: resizable ? "both" : "none",
            overflow: "auto",
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
