export const Footer = () => {
    return (
        <footer>
            <div className="max-w-205 bg-secondary mx-auto px-4 py-3 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[13px] text-secondary-text">
                    © {new Date().getFullYear()} Ali Tarek. All rights reserved.
                </div>

                <div className="flex items-center gap-1 text-[13px] text-text-secondary">
                    <a href="https://github.com/sudoenvx" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-text px-4 py-1 rounded-full hover:bg-primary/80 transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/sudoenvx" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-text px-4 py-1 rounded-full hover:bg-primary/80 transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com/sudoenvx" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-text px-4 py-1 rounded-full hover:bg-primary/80 transition-colors">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};
