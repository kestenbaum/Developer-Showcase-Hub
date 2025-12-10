"use client"
import React from 'react';
import Link from "next/link";
import { useStoreMenu } from "@/app/store/use-store-menu";

const Header = () => {
    const menu = useStoreMenu(state => state.headerMenu);
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <header className="bg-gray-100 border-b border-gray-200 shadow-[0_4px_14px_rgba(0,0,0,0.08)] sticky top-0 w-full">
            <div className="max-w-5xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        className="rounded-md text-gray-950 font-semibold tracking-tight"
                        href="/"
                    >Developer Showcase</Link>

                    <menu className="hidden md:flex gap-6 text-gray-900 font-medium">
                        {menu && menu.map(item =>
                            <Link
                                key={item.id}
                                className="flex gap-4 text-gray-600 font-medium"
                                href={item.link}
                                onClick={() => {setOpen(false)}}
                            >
                                {item.text}
                            </Link>)}
                    </menu>

                    <button
                        className="md:hidden text-gray-900 focus:outline-none z-50"
                        onClick={() => {setOpen(!open)}}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div className="fixed top-0 w-full py-3.5 bg-gray-100 border-gray-200 shadow-[0_4px_14px_rgba(0,0,0,0.08)] z-40 flex flex-col items-center justify-center space-y-6 md:hidden">
                    <menu className="flex flex-col gap-4 text-gray-900 font-medium">
                        {menu && menu.map(item =>
                            <Link
                                key={item.id}
                                className="flex gap-4 text-gray-600 font-medium"
                                href={item.link}
                                onClick={() => {setOpen(false)}}
                            >
                                {item.text}
                            </Link>)}
                    </menu>
                </div>
            )}

        </header>
    );
};

export default Header;