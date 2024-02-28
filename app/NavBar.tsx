'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classnames from 'classnames';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li>
            <Link
              key={link.href}
              href={link.href}
              className={classnames({
                'text-zinc-50': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-100 transition-colors': true,
              })}
              //   className={`${
              //     link.href === currentPath ? 'text-zinc-50' : 'text-zinc-500'
              //   } hover:text-zinc-100 transition-colors`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
