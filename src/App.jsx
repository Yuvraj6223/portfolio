import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Code } from "lucide-react";

// Hooks
import { ThemeContext, useThemeManager } from "./hooks/useTheme";

// Components
import NeuralBackground from "./components/common/NeuralBackground";
import CommandPalette from "./components/common/CommandPalette";
import {
  Hero,
  TechnicalSkills,
  ExperienceTimeline,
  Projects,
  Contact,
  AIAssistant,
  SystemMonitor,
  Navbar,
} from "./components/sections";

// Data
import { BIO_DATA } from "./data/portfolioData";

// ============================================
// Main App Component
// ============================================
const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeManager();

  const cursorRef = useRef(null);
  const trailerRef = useRef(null);

  // ============================================
  // SEO Meta Tags
  // ============================================
  useEffect(() => {
    document.title = `${BIO_DATA.name} | ${BIO_DATA.role} Portfolio`;

    const updateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', `Portfolio of ${BIO_DATA.name}, a ${BIO_DATA.role} specializing in Java Grails, Spring Boot, and GenAI. View projects and experience.`);
    updateMeta('keywords', 'Generative AI, Software Engineer, Java Grails, Spring Boot, React, Portfolio, Yuvraj V A, Bangalore, AI Engineer, System Design');
    updateMeta('author', BIO_DATA.name);

    // Open Graph tags
    updateMeta('og:title', `${BIO_DATA.name} | ${BIO_DATA.role}`, true);
    updateMeta('og:description', `${BIO_DATA.summary}`, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:url', window.location.href, true);
    updateMeta('og:image', '/og-image.png', true); // Add your OG image

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', `${BIO_DATA.name} | ${BIO_DATA.role}`);
    updateMeta('twitter:description', BIO_DATA.summary);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin);

  }, []);

  // ============================================
  // Custom Cursor (Desktop Only)
  // ============================================
  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const cursor = cursorRef.current;
    const trailer = trailerRef.current;

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor) {
        cursor.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
      if (trailer) {
        trailer.animate(
          { transform: `translate3d(${x - 16}px, ${y - 16}px, 0)` },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // ============================================
  // Keyboard Shortcuts
  // ============================================
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Command/Ctrl + K for command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdKOpen(prev => !prev);
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsCmdKOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ============================================
  // Scroll Progress Bar
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ============================================
  // Global Styles
  // ============================================
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'portfolio-global-styles';
    style.innerHTML = `
      :root { 
        color-scheme: ${isDarkMode ? 'dark' : 'light'}; 
      }
      
      @media (hover: hover) {
        * { cursor: none !important; }
      }
      
      body { 
        background-color: var(--bg-main); 
        color: var(--text-main); 
        font-family: 'Inter', system-ui, -apple-system, sans-serif; 
        overflow-x: hidden; 
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      
      /* Custom Scrollbar */
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: var(--bg-main); }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 3px; }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
      
      /* Animations */
      @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      
      .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
      .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      .animate-fade-in-down { animation: fadeInDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      
      /* Glitch Effect */
      @keyframes glitch-1 { 
        0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 2px); } 
        20% { clip-path: inset(60% 0 1% 0); transform: translate(2px, -1px); } 
        40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 1px); }
        60% { clip-path: inset(25% 0 58% 0); transform: translate(1px, -2px); }
        80% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 1px); }
        100% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 2px); } 
      }
      @keyframes glitch-2 { 
        0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -2px); } 
        20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); } 
        40% { clip-path: inset(28% 0 55% 0); transform: translate(1px, -1px); }
        60% { clip-path: inset(73% 0 12% 0); transform: translate(-1px, 2px); }
        80% { clip-path: inset(35% 0 47% 0); transform: translate(2px, -1px); }
        100% { clip-path: inset(60% 0 10% 0); transform: translate(-2px, -2px); } 
      }
      .animate-glitch-1 { animation: glitch-1 0.3s infinite linear alternate-reverse; }
      .animate-glitch-2 { animation: glitch-2 0.3s infinite linear alternate-reverse; }
      
      /* Screen reader only utility */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
      
      /* Focus visible for accessibility */
      :focus-visible {
        outline: 2px solid rgb(139, 92, 246);
        outline-offset: 2px;
      }
    `;

    // Remove old styles if they exist
    const existingStyle = document.getElementById('portfolio-global-styles');
    if (existingStyle) existingStyle.remove();

    document.head.appendChild(style);
    return () => style.remove();
  }, [isDarkMode]);

  // ============================================
  // Render
  // ============================================
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-violet-500/30 transition-colors duration-300 relative">

        {/* Neural Background - Single Instance */}
        <NeuralBackground />

        {/* Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 z-50 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />

        {/* Custom Cursor (Desktop Only) */}
        <div
          ref={cursorRef}
          className="fixed w-2 h-2 bg-violet-500 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
          aria-hidden="true"
        />
        <div
          ref={trailerRef}
          className="fixed w-8 h-8 border border-violet-500/50 rounded-full pointer-events-none z-[9998] hidden md:block"
          aria-hidden="true"
        />

        {/* Navigation */}
        <Navbar onOpenCommandPalette={() => setIsCmdKOpen(true)} />

        {/* Main Content */}
        <main id="main-content">
          <Hero />
          <TechnicalSkills />
          <ExperienceTimeline />
          <Projects />
          <Contact />
        </main>

        {/* Floating UI Elements */}
        <SystemMonitor />
        <AIAssistant />

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-[var(--text-muted)] bg-[var(--bg-secondary)] font-mono relative z-10">
          <div className="container mx-auto px-4">
            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-4">
              <a
                href={BIO_DATA.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={BIO_DATA.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={BIO_DATA.social.email}
                className="hover:text-violet-400 transition-colors"
                aria-label="Email"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex justify-center gap-4 mb-4 text-[var(--text-muted)]/60">
              <span>React 18</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Vite</span>
            </div>

            <p className="text-[var(--text-muted)]/60">
              Designed & Engineered by {BIO_DATA.name} © {new Date().getFullYear()}
            </p>
          </div>
        </footer>

        {/* Command Palette */}
        <CommandPalette
          isOpen={isCmdKOpen}
          onClose={() => setIsCmdKOpen(false)}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;