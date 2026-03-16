import Link from "next/link";
import { Github, Download } from "lucide-react";
export const Navbar = () => {
    return (
        <nav className="fixed top-4 left-0 right-0 z-50">
            <div className="max-w-205 mx-auto">
                <div className="max-sm:mx-4 bg-nav backdrop-blur rounded-xl px-4 h-14 flex items-center justify-between">
                    <Link
                        href="/"
                        className="relative font-bold text-lg sm:text-xl text-nav-text tracking-tight"
                    >
                        Ali Tarek
                    </Link>

                    <div className="flex items-center gap-6 sm:gap-8">
                        <div className="hidden sm:flex items-center gap-6 text-[15px] font-medium text-nav-muted">
                            <Link
                                href="/"
                                className="hover:text-nav-text transition-colors relative group py-2"
                            >
                                Home
                            </Link>
                            <Link
                                href="/projects"
                                className="hover:text-nav-text transition-colors relative group py-2"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="hover:text-nav-text transition-colors relative group py-2"
                            >
                                Contact
                            </Link>
                        </div>

                        <div className="h-4 w-px bg-nav-divider hidden sm:block"></div>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/sudoenvx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-nav-muted hover:text-nav-text transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="#" // Replace with actual resume link
                                className="hidden sm:flex items-center gap-2 bg-primary text-primary-text hover:bg-primary/90 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                            >
                                <span>My CV</span>
                                <Download className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
