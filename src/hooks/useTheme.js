import { useState, useEffect, createContext, useContext } from 'react';

// Theme Context
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Theme colors configuration
const themes = {
    dark: {
        '--bg-main': '#050505',
        '--bg-secondary': '#0a0a0a',
        '--bg-card': 'rgba(255, 255, 255, 0.05)',
        '--bg-card-hover': 'rgba(255, 255, 255, 0.1)',
        '--text-main': '#ffffff',
        '--text-muted': '#9ca3af',
        '--border-color': 'rgba(255, 255, 255, 0.1)',
    },
    light: {
        '--bg-main': '#ffffff',
        '--bg-secondary': '#f9fafb',
        '--bg-card': 'rgba(0, 0, 0, 0.05)',
        '--bg-card-hover': 'rgba(0, 0, 0, 0.1)',
        '--text-main': '#111827',
        '--text-muted': '#4b5563',
        '--border-color': 'rgba(0, 0, 0, 0.1)',
    },
};

/**
 * Custom hook for theme management with localStorage persistence
 */
export const useThemeManager = () => {
    // Initialize from localStorage or default to dark
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('portfolio-theme');
            return saved ? saved === 'dark' : true; // Default to dark
        }
        return true;
    });

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    // Apply theme to CSS variables
    useEffect(() => {
        const root = document.documentElement;
        const theme = isDarkMode ? themes.dark : themes.light;

        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // Persist to localStorage
        localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');

        // Update color-scheme for native elements
        root.style.colorScheme = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return { isDarkMode, toggleTheme };
};
