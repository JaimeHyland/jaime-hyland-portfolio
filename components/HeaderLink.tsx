// components/HeaderLink.tsx
"use client";

import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  pageKey: string;
  currentKey: string;
  className?: string;
  onClick?: () => void; // optional callback (e.g. to close mobile menu)
}

export function HeaderLink({
  href,
  children,
  pageKey,
  currentKey,
  className = "",
  onClick,
}: HeaderLinkProps) {
  const isActive = pageKey === currentKey;

  const handleClick = () => {
    // call optional parent handler (closing mobile menu, etc.)
    if (onClick) onClick();
    // don't prevent default — let Next.js handle navigation
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`transition-transform duration-200 transform hover:scale-105 ${
        isActive ? "font-bold" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
