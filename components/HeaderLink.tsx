"use client";

import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  pageKey: string;
  currentKey: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; // optional callback (e.g. to close mobile menu)
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // call optional parent handler (closing mobile menu, etc.)
    if (onClick) onClick(e);
    // don't prevent default — let Next.js handle navigation
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`transform hover:scale-105 ${isActive ? "font-bold" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
