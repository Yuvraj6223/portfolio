import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import { Button, Magnetic } from '../common';
import { useTheme } from '../../hooks/useTheme';

const Navbar = ({ onOpenCommandPalette }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const navLinks = [
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className="fixed top-0 inset-x-0 z-40 px-4 md:px-6 py-4 flex justify-between items-center 
                 bg-[var(--bg-card)] backdrop-blur-md border-b border-[var(--border-color)] transition-all duration-300"
            role="navigation"
            aria-label="Main navigation"
        >
            {/* Logo */}
            <div
                className="font-mono font-bold tracking-tighter text-xl flex items-center gap-2 cursor-pointer text-[var(--text-main)]"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                role="button"
                tabIndex={0}
                aria-label="Scroll to top"
                onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <div className="w-3 h-3 bg-violet-500 rounded-sm" aria-hidden="true" />
                DEV<span className="text-violet-500">.LOG</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
                {/* Nav Links */}
                <div className="flex items-center gap-4 text-sm font-mono text-[var(--text-muted)]">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className="hover:text-violet-400 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <div className="w-px h-6 bg-[var(--border-color)]" aria-hidden="true" />

                {/* Search Button */}
                <button
                    onClick={onOpenCommandPalette}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-card)] rounded border border-[var(--border-color)] 
                     hover:bg-[var(--bg-card-hover)] hover:border-violet-500/30 transition-colors text-[var(--text-muted)]"
                    aria-label="Open command palette"
                >
                    <Search className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs">Search</span>
                    <kbd className="text-[10px] bg-[var(--bg-card-hover)] px-1.5 py-0.5 rounded">⌘K</kbd>
                </button>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-[var(--bg-card-hover)] transition-colors"
                    aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                    {isDarkMode ? (
                        <Sun className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                    ) : (
                        <Moon className="w-5 h-5 text-violet-600" aria-hidden="true" />
                    )}
                </button>

                {/* CTA Button */}
                <Magnetic>
                    <Button
                        variant="primary"
                        className="h-9 px-5 text-xs"
                        onClick={() => handleNavClick('#contact')}
                    >
                        Connect
                    </Button>
                </Magnetic>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-[var(--bg-card-hover)] transition-colors"
                    aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                    {isDarkMode ? (
                        <Sun className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                    ) : (
                        <Moon className="w-5 h-5 text-violet-600" aria-hidden="true" />
                    )}
                </button>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-lg hover:bg-[var(--bg-card-hover)] transition-colors"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-[var(--text-main)]" />
                    ) : (
                        <Menu className="w-6 h-6 text-[var(--text-main)]" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="absolute top-full left-0 right-0 bg-[var(--bg-main)] border-b border-[var(--border-color)] 
                     md:hidden animate-fade-in shadow-2xl"
                    role="menu"
                >
                    <div className="flex flex-col p-4 gap-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="w-full text-left px-4 py-3 rounded-lg text-[var(--text-main)] 
                           hover:bg-[var(--bg-card)] transition-colors font-mono"
                                role="menuitem"
                            >
                                {link.label}
                            </button>
                        ))}

                        <div className="h-px bg-[var(--border-color)] my-2" aria-hidden="true" />

                        <button
                            onClick={onOpenCommandPalette}
                            className="w-full text-left px-4 py-3 rounded-lg text-[var(--text-muted)] 
                         hover:bg-[var(--bg-card)] transition-colors font-mono flex items-center gap-2"
                            role="menuitem"
                        >
                            <Search className="w-4 h-4" aria-hidden="true" />
                            Quick Actions
                            <kbd className="ml-auto text-[10px] bg-[var(--bg-card)] px-2 py-1 rounded">⌘K</kbd>
                        </button>

                        <Button
                            variant="primary"
                            className="w-full mt-2"
                            onClick={() => handleNavClick('#contact')}
                        >
                            Connect
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
