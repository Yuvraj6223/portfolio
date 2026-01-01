import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

/**
 * Neural Network Background Animation
 * Optimized with scroll-awareness to reduce battery drain
 */
const NeuralBackground = () => {
    const canvasRef = useRef(null);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationId;

        // Reduce particle count on mobile for performance
        const isMobile = width < 768;
        const particleCount = isMobile
            ? Math.min(Math.floor(width * 0.03), 40)
            : Math.min(Math.floor(width * 0.05), 80);
        const connectionDistance = isMobile ? 100 : 150;
        const particles = [];

        // Scroll state for performance optimization
        let isScrolling = false;
        let scrollTimeout;
        let isTabVisible = true;

        const handleScroll = () => {
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 150);
        };

        const handleVisibilityChange = () => {
            isTabVisible = !document.hidden;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Resize handler with debounce
        let resizeTimeout;
        const resize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            }, 100);
        };
        window.addEventListener('resize', resize, { passive: true });

        // Initial size
        canvas.width = width;
        canvas.height = height;

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Keep in bounds
                this.x = Math.max(0, Math.min(width, this.x));
                this.y = Math.max(0, Math.min(height, this.y));
            }

            draw() {
                ctx.fillStyle = isDarkMode ? 'rgba(139, 92, 246, 0.6)' : 'rgba(124, 58, 237, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation Loop
        const animate = () => {
            // Skip animation if scrolling or tab not visible
            if (!isScrolling && isTabVisible) {
                ctx.clearRect(0, 0, width, height);

                // Update and draw particles
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });

                // Draw connections (optimized with distance check first)
                const connectionColor = isDarkMode
                    ? 'rgba(139, 92, 246,'
                    : 'rgba(124, 58, 237,';

                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distSq = dx * dx + dy * dy;
                        const maxDistSq = connectionDistance * connectionDistance;

                        if (distSq < maxDistSq) {
                            const distance = Math.sqrt(distSq);
                            const opacity = 0.15 * (1 - distance / connectionDistance);
                            ctx.strokeStyle = `${connectionColor}${opacity})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationId);
            clearTimeout(scrollTimeout);
            clearTimeout(resizeTimeout);
        };
    }, [isDarkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 opacity-40 pointer-events-none"
            aria-hidden="true"
        />
    );
};

export default NeuralBackground;
