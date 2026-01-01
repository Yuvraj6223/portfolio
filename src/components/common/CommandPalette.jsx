import React, { useState, useEffect, useRef } from 'react';
import { Search, Layout, Code, GitBranch, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { BIO_DATA } from '../../data/portfolioData';

const CommandPalette = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const options = [
        {
            icon: <Layout className="w-4 h-4" />,
            label: "Go to Projects",
            action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            icon: <Code className="w-4 h-4" />,
            label: "View Technical Skills",
            action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            icon: <GitBranch className="w-4 h-4" />,
            label: "View Experience",
            action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            icon: <Mail className="w-4 h-4" />,
            label: "Contact Me",
            action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            icon: <Github className="w-4 h-4" />,
            label: "View GitHub",
            action: () => window.open(BIO_DATA.social.github, '_blank')
        },
        {
            icon: <Linkedin className="w-4 h-4" />,
            label: "View LinkedIn",
            action: () => window.open(BIO_DATA.social.linkedin, '_blank')
        },
        {
            icon: <FileText className="w-4 h-4" />,
            label: "Download Resume",
            action: () => {
                const link = document.createElement('a');
                link.href = BIO_DATA.resumeUrl;
                link.download = 'Yuvraj_VA_Resume.pdf';
                link.click();
            }
        },
    ];

    const filtered = options.filter(opt =>
        opt.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery("");
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex(prev => (prev + 1) % filtered.length);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (filtered[selectedIndex]) {
                        filtered[selectedIndex].action();
                        onClose();
                    }
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filtered, selectedIndex, onClose]);

    // Reset selected index when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
        >
            <div
                className="w-full max-w-xl bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden animate-scale-up"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center px-4 py-3 border-b border-[var(--border-color)]">
                    <Search className="w-5 h-5 text-[var(--text-muted)] mr-3" aria-hidden="true" />
                    <input
                        ref={inputRef}
                        className="flex-1 bg-transparent text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none text-lg"
                        placeholder="Type a command or search..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        aria-label="Search commands"
                    />
                    <kbd className="text-xs text-[var(--text-muted)] border border-[var(--border-color)] px-1.5 py-0.5 rounded">
                        ESC
                    </kbd>
                </div>

                <div className="py-2 max-h-[60vh] overflow-y-auto">
                    <div className="px-4 py-2 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                        Quick Actions
                    </div>

                    {filtered.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => { opt.action(); onClose(); }}
                            onMouseEnter={() => setSelectedIndex(i)}
                            className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors group
                         ${i === selectedIndex
                                    ? 'bg-violet-500/20 text-violet-400'
                                    : 'text-[var(--text-main)] hover:bg-[var(--bg-card)]'}`}
                        >
                            <span className={`p-1 rounded transition-colors
                              ${i === selectedIndex
                                    ? 'bg-violet-500/30 text-violet-400'
                                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] group-hover:text-violet-400'}`}>
                                {opt.icon}
                            </span>
                            <span>{opt.label}</span>
                            {i === selectedIndex && (
                                <kbd className="ml-auto text-xs text-[var(--text-muted)] bg-[var(--bg-card)] px-2 py-0.5 rounded">
                                    Enter
                                </kbd>
                            )}
                        </button>
                    ))}

                    {filtered.length === 0 && (
                        <div className="px-4 py-4 text-center text-[var(--text-muted)]">
                            No commands found.
                        </div>
                    )}
                </div>

                <div className="px-4 py-2 border-t border-[var(--border-color)] flex justify-between text-xs text-[var(--text-muted)]">
                    <span>↑↓ Navigate</span>
                    <span>↵ Select</span>
                    <span>Esc Close</span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
