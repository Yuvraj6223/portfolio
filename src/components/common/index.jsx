import React, { useRef, useState, useEffect } from 'react';

// ============================================
// Button Component
// ============================================
export const Button = ({
    children,
    className = "",
    variant = "primary",
    disabled = false,
    ...props
}) => {
    const variants = {
        primary: `bg-violet-600 text-white hover:bg-violet-700 shadow-[0_0_30px_rgba(139,92,246,0.3)] 
              border border-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed`,
        outline: `border border-[var(--border-color)] bg-transparent hover:bg-[var(--bg-card-hover)] 
              text-[var(--text-main)] hover:border-violet-500 disabled:opacity-50 disabled:cursor-not-allowed`,
        success: `bg-green-600 text-white hover:bg-green-700 shadow-[0_0_30px_rgba(34,197,94,0.3)] 
              border border-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed`,
    };

    return (
        <button
            className={`inline-flex items-center justify-center rounded-lg text-sm font-medium 
                  transition-all h-11 px-8 relative overflow-hidden group 
                  ${variants[variant]} ${className}`}
            disabled={disabled}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'primary' && !disabled && (
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 
                        bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        transition-transform duration-500 skew-x-12" />
            )}
        </button>
    );
};

// ============================================
// Input Component
// ============================================
export const Input = ({ className = "", ...props }) => (
    <div className="relative group w-full">
        <input
            className={`flex h-11 w-full rounded-md border border-[var(--border-color)] 
                  bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-main)] 
                  focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500
                  transition-all focus:bg-[var(--bg-card-hover)] 
                  placeholder:text-[var(--text-muted)]
                  ${className}`}
            {...props}
        />
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
    </div>
);

// ============================================
// Magnetic Button Wrapper
// ============================================
export const Magnetic = ({ children, className = "", strength = 0.2 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
        >
            {children}
        </div>
    );
};

// ============================================
// Reveal On Scroll Component
// ============================================
export const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform 
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
                  ${className}`}
        >
            {children}
        </div>
    );
};

// ============================================
// Tilt Card Component
// ============================================
export const TiltCard = ({ children, className = "", onClick, disabled = false }) => {
    const ref = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!ref.current || disabled) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPct = (x / rect.width) - 0.5;
        const yPct = (y / rect.height) - 0.5;
        setRotation({ x: yPct * -10, y: xPct * 10 });
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovering(true)}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, 1)`,
                transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
            className={`transform-gpu relative transition-all duration-200 ${onClick ? 'cursor-pointer' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

// ============================================
// Glitch Text Effect
// ============================================
export const GlitchText = ({ text, className = "", autoGlitch = false }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        if (!autoGlitch) return;

        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 5000 + Math.random() * 3000);

        return () => clearInterval(interval);
    }, [autoGlitch]);

    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <span
                className={`absolute top-0 left-0 -z-10 w-full h-full text-violet-500 
                    ${isGlitching ? 'opacity-70 animate-glitch-1' : 'opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1'}`}
            >
                {text}
            </span>
            <span
                className={`absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 
                    ${isGlitching ? 'opacity-70 animate-glitch-2' : 'opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2'}`}
            >
                {text}
            </span>
        </div>
    );
};

// ============================================
// Loading Spinner
// ============================================
export const Spinner = ({ size = "md", className = "" }) => {
    const sizes = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
    };

    return (
        <div
            className={`animate-spin rounded-full border-2 border-violet-500 
                  border-t-transparent ${sizes[size]} ${className}`}
        />
    );
};

// ============================================
// Skeleton Loader
// ============================================
export const Skeleton = ({ className = "", variant = "rect" }) => {
    const variants = {
        rect: "rounded-lg",
        circle: "rounded-full",
        text: "rounded h-4",
    };

    return (
        <div
            className={`animate-pulse bg-[var(--bg-card-hover)] ${variants[variant]} ${className}`}
        />
    );
};
