import React from 'react';

export function ProjLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block text-[#3B5497] hover:text-[#1F3266] hover:underline transition duration-200 hover:scale-105 focus:outline-none focus:ring-1 focus:ring-[#1F3266]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}