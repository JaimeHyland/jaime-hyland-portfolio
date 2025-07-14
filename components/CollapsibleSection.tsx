'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function CollapsibleSection({ title, children, defaultOpen }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? true);

  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
      >
        <h2 className="text-xl font-semibold border-t border-black bg-gray-300 pt-2 pb-2 pl-3 pr-3 flex items-center justify-between">
          {title}
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </h2>
      </button>

      {isOpen && <div className="px-2 pb-4 mt-2 mb-4">{children}</div>}
    </section>
  );
}
