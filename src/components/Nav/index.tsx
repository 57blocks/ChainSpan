'use client'

import React from "react";
import {
    Navbar,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import UserConnection from "../UserConnection";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from '@/../public/images/logo.svg'
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export function StickyNavbar() {
    const pathname = usePathname()
    const [openNav, setOpenNav] = React.useState(false);
    const checkScreenWidth = () => window.innerWidth >= 960 && setOpenNav(false)
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            checkScreenWidth,
        );
        return () => {
            window.removeEventListener(
                "resize",
                checkScreenWidth,
            );
        }
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 text-capstackGray text-base ">
            <li className={`${pathname === '/' && 'text-capstackBlue'} hover:text-capstackBlue`}>
                <Link href="/" className="py-4">
                    Points Farming
                </Link>
            </li>
            {/* <li className={`${pathname === '/strategy' && 'text-capstackBlue'} hover:text-capstackBlue`}>
                <Link href="/strategy" className="py-4">
                    Strategy Custody
                </Link>
            </li> */}
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-12 lg:py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center lg:gap-16">
                    <Image width={200} height={200} src={Logo.src} alt="logo-chain-span" />
                    <div className="mr-4 hidden lg:block">{navList}</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-x-1">
                        <DynamicWidget />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
            </Collapse>
        </Navbar>
    );
}