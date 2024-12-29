
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
                <h2 className="md:ml-32 text-2xl sm:text-4xl font-serif text-white py-2">Areeba.</h2>

                {/* MOBILE MENU */}
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    )}
                    <ul
                        className={
                            navbarOpen
                                ? "flex flex-col justify-center p-16 fixed top-20 right-0 opacity-95 bg-cyan-400 text-white rounded-lg transition-all duration-500 shadow-md"
                                : "flex flex-col justify-center p-14 fixed top-20 right-[-100%] bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
                        }
                    >
                        <li><Link href="/" className="text-2xl block py-2 px-4 hover:text-gray-800 hover:underline underline-offset-4">Home</Link></li>
                        <li><Link href="/about" className="text-2xl block py-2 px-4 hover:text-gray-800 hover:underline underline-offset-4">About</Link></li>
                        <li><Link href="/projects" className="text-2xl block py-2 px-4 hover:text-gray-800 hover:underline underline-offset-4">Projects</Link></li>
                        <li><Link href="/contact" className="text-2xl block py-2 px-4 hover:text-gray-800 hover:underline underline-offset-4">Contact</Link></li>
                    </ul>
                </div>

                {/* DESKTOP MENU */}
                <div className="menu hidden md:block md:w-auto">
                    <ul className="flex p-4 md:p-0 sd:flex-row md:space-x-8 mt-0 text-white mr-20">
                        <li><Link href="/" className="hover:text-cyan-500 hover:underline underline-offset-4">Home</Link></li>
                        <li><Link href="/about" className="hover:text-cyan-500 hover:underline underline-offset-4">About</Link></li>
                        <li><Link href="/projects" className="hover:text-cyan-500 hover:underline underline-offset-4">Projects</Link></li>
                        <li><Link href="/contact" className="hover:text-cyan-500 hover:underline underline-offset-4">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
