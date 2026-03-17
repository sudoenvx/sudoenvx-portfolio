export const Footer = () => {
    return (
        <footer>
            <div className="max-w-205 bg-secondary mx-auto px-4 py-3 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[13px] text-secondary-text">
                    © {new Date().getFullYear()} sudoenvx. All rights reserved.
                </div>

                <div className="flex items-center gap-2 text-[13px] text-secondary-text">
                    <span className="hidden sm:inline">Open for collaborations</span>
                    <span className="hidden sm:inline">•</span>
                    <a href="mailto:sudoenvx@gmail.com" className="bg-primary text-primary-text px-4 py-1 rounded-full hover:bg-primary/80 transition-colors">
                        sudoenvx@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};
