import { ReactNode, useState, useRef, useEffect } from "react";
import DraggableWrapper from "./DraggableWrapper";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
  resizable?: boolean;
  maximizable?: boolean;
  draggable?: boolean;
  initialSize?: { width: string; height: string };
}

export default function Modal({
  children,
  onClose,
  resizable = false,
  maximizable = false,
  draggable = false,
  initialSize = { width: "30%", height: "70%" },
}: ModalProps) {
  const [size, setSize] = useState(initialSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

  useEffect(() => {
  const updateBounds = () => {
    const w = modalRef.current?.offsetWidth || 0;
    const h = modalRef.current?.offsetHeight || 0;
    setBounds({
      left: 0,
      top: 0,
      right: window.innerWidth - w,
      bottom: window.innerHeight - h,
    });
  };

  updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent backdrop click
    if (isMaximized) {
      setSize(initialSize);
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
      <DraggableWrapper draggable={draggable} bounds={bounds}>
        <div
          className="bg-white rounded shadow-lg flex flex-col relative"
          style={{
            width: size.width,
            height: size.height,
            maxWidth: "95vw",
            maxHeight: "95vh",
            minWidth: "200px",       
            minHeight: "150px",
            resize: resizable ? "both" : "none", 
            overflow: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top-right controls */}
          <div className="absolute top-2 right-2 flex gap-2 z-10">
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

          <div className="modal-header cursor-move p-2 border-b flex-shrink-0" />
          <div ref={modalRef} className="flex flex-col h-full min-h-0">
            {children}
          </div>
        </div>
      </DraggableWrapper>
    </div>
  );
}
