import React from 'react';
import { Activity, Cpu, Zap } from 'lucide-react';
import { usePerformanceMetrics } from '../../hooks/usePerformanceMetrics';

/**
 * System Monitor Widget
 * Displays REAL performance metrics using the Performance API
 */
const SystemMonitor = () => {
    const metrics = usePerformanceMetrics();

    return (
        <div
            className="fixed bottom-6 left-6 hidden xl:flex flex-col gap-2 z-40 pointer-events-none font-mono text-[10px]"
            aria-label="System performance metrics"
            role="status"
        >
            <div className={`flex items-center gap-2 ${metrics.fps >= 55 ? 'text-green-400/70' : metrics.fps >= 30 ? 'text-yellow-400/70' : 'text-red-400/70'}`}>
                <Activity className="w-3 h-3" aria-hidden="true" />
                <span>FPS: {metrics.fps}</span>
            </div>

            {metrics.memory > 0 && (
                <div className={`flex items-center gap-2 ${metrics.memory < 50 ? 'text-green-400/70' : metrics.memory < 80 ? 'text-yellow-400/70' : 'text-red-400/70'}`}>
                    <Cpu className="w-3 h-3" aria-hidden="true" />
                    <span>MEM: {metrics.memory}%</span>
                </div>
            )}

            <div className="flex items-center gap-2 text-violet-400/50">
                <Zap className="w-3 h-3" aria-hidden="true" />
                <span>REACT: 18.x</span>
            </div>
        </div>
    );
};

export default SystemMonitor;
