// components/HeaderLink.tsx

import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface HeaderLinkProps extends LinkProps {
  pageKey: string;
  currentKey: string;
  children: ReactNode;
  onClick?: () => void; // optional click handler
}

export function HeaderLink({ href, pageKey, currentKey, children, onClick, ...props }: HeaderLinkProps) {
  const handleClick = () => {
    if (onClick) onClick(); // close menu or other actions
  };

  return (
    <Link href={href} {...props} onClick={handleClick} className={`transition-colors ${pageKey === currentKey ? 'font-bold text-blue-600' : 'font-normal text-gray-800 hover:text-gray-600'}`}>
      {children}
    </Link>
  );
}
