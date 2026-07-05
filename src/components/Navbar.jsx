import { useState } from "react";
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../useTheme';

const NAV_LINKS = ["Projects", "Skills", "Education", "Contacts"];

function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, toggle } = useTheme();

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto h-14 px-6 flex item-center justify-between">
                <span onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}
                className="font-mono text-lg text-primary uppercase cursor-pointer tracking-widest flex items-center">
                    AK
                </span>
                <nav className="hidden md:flex items-center gap-8 ">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            className="font-mono text-base tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            {link}
                        </button>
                    )) }
                </nav>
                 <button
                    onClick={toggle}
                    aria-label="Toggle theme"
                    className="hidden md:flex items-center p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                </div>
                <div className="md:hidden flex items-center justify-start gap-4">
                    <button
                        className="font-mono text-xs tracking-widest uppercase text-muted-foreground pl-4"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? "Close" : "Menu"}
                    </button>
                    
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    </div>

            {open &&
                <div className="md:hidden border-t border-border px-6 pt-4 pb-6 flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            className="font-mono text-base text-right tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            {link}
                        </button>
                        ))}
            </div> }
        </header>
    );
}

export default Navbar;