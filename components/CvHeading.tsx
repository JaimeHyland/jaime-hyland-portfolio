import React from 'react';

export function CvHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold border-t border-black bg-gray-300 px-2 pt-2 pb-4 mt-8 mb-4">
      {children}
    </h2>
  );
}