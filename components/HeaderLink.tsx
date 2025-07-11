'use client';

import Link from 'next/link';

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  pageKey: string;
  currentKey: string;
}

export function HeaderLink({ href, children, pageKey, currentKey }: HeaderLinkProps) {
  const isActive = pageKey === currentKey;

  return (
    <Link
      href={href}
      className={`transition-transform duration-200 transform hover:scale-105 ${ isActive ? 'font-bold' : ''
      }`}
    >
      {children}
    </Link>
  );
}
