
"use client";

import { useState, useId, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function CollapsibleItem({
  title,
  children,
  defaultOpen = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <li className="border-b border-gray-200 py-2">
      <h3>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full text-left flex items-center justify-between gap-3 py-2 px-2 font-semibold hover:bg-gray-50"
        >
          {title}
          {isOpen ? (
            <ChevronUp size={18} className="shrink-0" />
          ) : (
            <ChevronDown size={18} className="shrink-0" />
          )}
        </button>
      </h3>

      <div id={contentId} hidden={!isOpen} className="px-2 pb-3">
        {children}
      </div>
    </li>
  );
}
