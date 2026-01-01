import React from 'react';
import { GitBranch, GraduationCap, Code, Briefcase } from 'lucide-react';
import { RevealOnScroll, GlitchText } from '../common';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

const ExperienceTimeline = () => {
    return (
        <section
            id="experience"
            className="py-24 md:py-32 relative"
            aria-labelledby="experience-heading"
        >
            <RevealOnScroll className="container px-4 mx-auto max-w-5xl">
                <h2
                    id="experience-heading"
                    className="text-3xl font-bold text-center mb-16 text-[var(--text-main)] flex items-center justify-center gap-3"
                >
                    <GitBranch className="w-8 h-8 text-violet-500" aria-hidden="true" />
                    <GlitchText text="Commit History" />
                </h2>

                <div
                    className="relative border-l-2 border-[var(--border-color)] ml-4 md:ml-10 space-y-12"
                    role="list"
                    aria-label="Professional experience timeline"
                >
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <article
                            key={index}
                            className="relative pl-8 md:pl-12 group"
                            role="listitem"
                        >
                            {/* Timeline Dot */}
                            <div
                                className={`absolute -left-[7px] top-2 w-3 h-3 rounded-full 
                           ${exp.current ? 'bg-green-500' : 'bg-violet-500'} 
                           group-hover:scale-150 
                           group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] 
                           transition-all duration-300 ring-4 ring-[var(--bg-main)]`}
                                aria-hidden="true"
                            />

                            {/* Current indicator pulse */}
                            {exp.current && (
                                <div
                                    className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-green-500 animate-ping"
                                    aria-hidden="true"
                                />
                            )}

                            <div
                                className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 md:p-8 
                           rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 
                           backdrop-blur-sm group-hover:translate-x-2 group-hover:border-violet-500/30"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)] tracking-tight flex items-center gap-2">
                                            {exp.type === 'work' ? (
                                                <Briefcase className="w-5 h-5 text-violet-400" aria-hidden="true" />
                                            ) : (
                                                <GraduationCap className="w-5 h-5 text-violet-400" aria-hidden="true" />
                                            )}
                                            {exp.role}
                                            {exp.current && (
                                                <span className="text-xs font-normal px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <div className="text-violet-400 font-mono text-sm mt-1">
                                            @ {exp.company}
                                        </div>
                                    </div>
                                    <time
                                        className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] 
                               px-3 py-1.5 rounded border border-[var(--border-color)] w-fit"
                                        dateTime={exp.date}
                                    >
                                        {exp.date}
                                    </time>
                                </div>

                                <p className="text-[var(--text-muted)] mb-6 leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                                    {exp.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-2.5 py-1 rounded bg-black/30 
                                 text-[var(--text-muted)] border border-[var(--border-color)] 
                                 flex items-center gap-1.5 hover:border-violet-500/30 
                                 transition-colors cursor-default"
                                            role="listitem"
                                        >
                                            <Code className="w-3 h-3" aria-hidden="true" />
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Timeline End Indicator */}
                <div className="relative ml-4 md:ml-10 mt-8 pl-8 md:pl-12">
                    <div
                        className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[var(--border-color)]"
                        aria-hidden="true"
                    />
                    <p className="text-sm text-[var(--text-muted)] font-mono italic">
            // More commits incoming...
                    </p>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default ExperienceTimeline;
