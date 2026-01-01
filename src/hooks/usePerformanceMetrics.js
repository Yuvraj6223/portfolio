import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for REAL performance metrics using the Performance API
 * No more fake random numbers!
 */
export const usePerformanceMetrics = () => {
    const [metrics, setMetrics] = useState({
        fps: 0,
        memory: 0,
        loadTime: 0,
    });

    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());

    useEffect(() => {
        let animationId;

        // Calculate real FPS
        const measureFPS = () => {
            frameCount.current++;
            const now = performance.now();
            const delta = now - lastTime.current;

            if (delta >= 1000) {
                const fps = Math.round((frameCount.current * 1000) / delta);
                frameCount.current = 0;
                lastTime.current = now;

                // Get memory if available (Chrome only)
                let memory = 0;
                if (performance.memory) {
                    memory = Math.round(
                        (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100
                    );
                }

                // Get page load time
                const loadTime = Math.round(performance.now());

                setMetrics({ fps, memory, loadTime });
            }

            animationId = requestAnimationFrame(measureFPS);
        };

        animationId = requestAnimationFrame(measureFPS);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return metrics;
};
