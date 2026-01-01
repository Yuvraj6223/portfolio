import React, { useState, useEffect, useRef } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ArrowDown,
    Terminal,
    Download,
    ExternalLink
} from 'lucide-react';
import { Button, Magnetic, GlitchText } from '../common';
import NeuralBackground from '../common/NeuralBackground';
import { BIO_DATA } from '../../data/portfolioData';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleResumeClick = () => {
        // Create a download link for the resume
        const link = document.createElement('a');
        link.href = BIO_DATA.resumeUrl;
        link.download = 'Yuvraj_VA_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden px-4 pt-20 w-full"
            aria-label="Hero section"
        >
            {/* Skip to main content link for accessibility */}
            <a
                href="#skills"
                className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded"
            >
                Skip to main content
            </a>

            {/* Status Indicators */}
            <div className="absolute top-24 left-6 hidden md:block">
                <div className={`flex items-center gap-3 px-4 py-2 bg-[var(--bg-card)] backdrop-blur-md rounded-full border border-[var(--border-color)] transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                    <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
                        AVAILABLE FOR WORK
                    </span>
                </div>
            </div>

            <div className={`absolute top-24 right-6 hidden md:block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="text-[10px] font-mono text-[var(--text-muted)] text-right">
                    <div>LOC: Bangalore, IN</div>
                    <div>STATUS: ONLINE</div>
                </div>
            </div>

            <div className="text-center space-y-6 max-w-4xl z-10 flex flex-col items-center justify-center w-full">
                {/* Profile Picture */}
                <div className={`relative group transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" aria-hidden="true" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center overflow-hidden">
                        <img
                            src="/pimage_webp.webp"
                            alt={`${BIO_DATA.name} profile photo`}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            loading="eager"
                        />

                        {/* Code Overlay Effect */}
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center overflow-hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300" aria-hidden="true">
                            <div className="text-[8px] font-mono text-green-500 leading-3 whitespace-pre-wrap opacity-50 p-2 text-left">
                                {`const dev = {\n  name: "${BIO_DATA.name}",\n  role: "GenAI Engineer",\n  status: "building"\n};`}
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-violet-500/20 mix-blend-overlay pointer-events-none" aria-hidden="true" />
                    </div>

                    {/* Decorative Rings */}
                    <div className="absolute -inset-4 border border-violet-500/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" aria-hidden="true" />
                    <div className="absolute -inset-4 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none scale-110" aria-hidden="true" />
                </div>

                {/* Command Hint */}
                <div
                    className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-violet-300 bg-violet-950/30 rounded border border-violet-500/30 backdrop-blur-sm cursor-help transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    title="Press Command+K or Ctrl+K to open the command palette"
                >
                    <Terminal className="w-3 h-3" aria-hidden="true" />
                    <span className="tracking-wider">⌘ / Ctrl + K — Quick Actions</span>
                </div>

                {/* Name & Title */}
                <div className={`flex flex-col items-center justify-center font-bold tracking-tight text-[var(--text-main)] w-full text-center transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl mb-2 text-center w-full flex justify-center">
                        <GlitchText text={BIO_DATA.name.toUpperCase()} autoGlitch />
                    </h1>
                    <div className="flex flex-col gap-1">
                        <span className="text-center text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-wide w-full">
                            {BIO_DATA.role.toUpperCase()}
                        </span>
                        <span className="text-center text-lg md:text-xl text-[var(--text-muted)] font-medium tracking-wide w-full">
                            Backend & LLM Applications
                        </span>
                    </div>
                </div>

                {/* Summary */}
                <div className={`space-y-4 max-w-2xl mx-auto px-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed text-center">
                        {BIO_DATA.summary}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]/80 font-mono">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                        Backend & AI Engineer • API & LLM-focused Projects
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className={`flex flex-wrap justify-center gap-4 pt-2 w-full transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Magnetic>
                        <Button
                            variant="primary"
                            onClick={scrollToProjects}
                            aria-label="View my projects"
                        >
                            <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                            View Work
                        </Button>
                    </Magnetic>
                    <Magnetic>
                        <Button
                            variant="outline"
                            onClick={handleResumeClick}
                            aria-label="Download my resume"
                        >
                            <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                            Resume
                        </Button>
                    </Magnetic>
                </div>

                {/* Social Links */}
                <div className={`flex justify-center gap-8 pt-6 text-[var(--text-muted)] w-full transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <a
                        href={BIO_DATA.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--text-main)] transition-colors hover:scale-110 transform duration-200"
                        aria-label="Visit my GitHub profile"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href={BIO_DATA.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--text-main)] transition-colors hover:scale-110 transform duration-200"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={BIO_DATA.social.email}
                        className="hover:text-[var(--text-main)] transition-colors hover:scale-110 transform duration-200"
                        aria-label="Send me an email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className={`pt-8 transition-all duration-700 delay-800 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[var(--text-muted)] hover:text-violet-400 transition-colors animate-bounce"
                        aria-label="Scroll to skills section"
                    >
                        <ArrowDown className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
