'use client'
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

interface NavItemTypes {
    path: string;
    children: React.ReactNode;
    navClassName?: string;
}

const NavItem: React.FC<NavItemTypes> = ({ path, children, navClassName }) => {
    // navigation
    const pathname = usePathname();
    return (
        <Link href={path}>
            <li className={`${pathname == path ? 'bg-[#e7e9ec] text-primary' : "hover:bg-[#e7e9ec] hover:text-primary"} py-2 px-4 sm:px-8`}>
                {children}
            </li>
        </Link>
    )
}

export default NavItem;