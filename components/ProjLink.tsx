import React from "react";

interface ProjLinkProps {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
}

export function ProjLink({ href, children, newTab = true }: ProjLinkProps ) {
  return (
    <a
      href={href}
      className="inline-block text-[#3B5497] hover:text-[#1F3266] hover:underline transition duration-200 hover:scale-[1.02] focus:outline-none focus:ring-1 focus:ring-[#1F3266]"
      {...(newTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})
      }
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
