"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Download, Menu, X, ChevronRight } from "lucide-react";
import { AppConfig } from "@/src/data/app";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50">
            <div className="max-w-205 mx-auto relative">
                <div className="max-sm:mx-4 bg-nav backdrop-blur rounded-xl px-4 h-14 flex items-center justify-between">
                    <Link
                        href="/"
                        className="relative font-bold text-lg sm:text-xl text-nav-text tracking-tight"
                    >
                        Ali Tarek
                    </Link>

                    <div className="flex items-center gap-6 sm:gap-8">
                        <div className="hidden sm:flex items-center gap-6 text-[15px] font-medium text-nav-muted">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-nav-text transition-colors relative group py-2"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="h-4 w-px bg-nav-divider hidden sm:block"></div>

                        <div className="flex items-center gap-4">
                            <a
                                href={AppConfig.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex text-nav-muted hover:text-nav-text transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="/documents/alitarek-cv.pdf"
                                download="alitarek-cv.pdf"
                                className="hidden sm:flex items-center gap-2 bg-primary text-primary-text hover:bg-primary/90 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                            >
                                <span>My CV</span>
                                <Download className="w-3.5 h-3.5" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setIsOpen((prev) => !prev)}
                                aria-expanded={isOpen}
                                aria-controls="mobile-nav"
                                aria-label="Toggle navigation menu"
                                className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-full  hover:bg-nav transition-colors bg-primary text-primary-text"
                            >
                                {isOpen ? (
                                    <X className="w-4 h-4" />
                                ) : (
                                    <Menu className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    id="mobile-nav"
                    className={`sm:hidden absolute left-4 right-4 top-16 origin-top transition-all duration-300 ease-out ${
                        isOpen
                            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                            : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
                    }`}
                >
                    <div className="rounded-xl bg-secondary backdrop-blur border border-nav-divider/10  p-4">
                        <div className="flex flex-col gap-1 text-[14px] font-medium text-nav-muted">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between rounded-lg px-0 py-2 transition-colors"
                                >
                                    <span>{item.label}</span>
                                    <span className="text-[14px] uppercase tracking-[2px] text-secondary-text/70">
                                        <ChevronRight className="w-5 h-5 shrink-0" />
                                    </span>
                                </Link>
                            ))}
                        </div>

                        <div className="h-px bg-nav-divider/10 my-3"></div>

                        <div className="flex items-center gap-3">
                            <a
                                href="#" // Replace with actual resume link
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-text hover:bg-primary/90 px-3 py-2 rounded-full text-[12px] font-medium transition-colors"
                            >
                                <span>My CV</span>
                                <Download className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href="https://github.com/sudoenvx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-10 w-10 rounded-full transition-colors bg-secondary text-secondary-text border"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
