import React from 'react';
import {
    Server,
    BrainCircuit,
    Layout,
    Database,
    Cloud,
    BarChart3,
    CheckCircle2,
    GitBranch
} from 'lucide-react';
import { RevealOnScroll, TiltCard, GlitchText } from '../common';
import { TECHNICAL_SKILLS_DATA } from '../../data/portfolioData';

// Icon mapping
const iconMap = {
    Server: Server,
    BrainCircuit: BrainCircuit,
    Layout: Layout,
    Database: Database,
    Cloud: Cloud,
    BarChart3: BarChart3,
    CheckCircle2: CheckCircle2,
    GitBranch: GitBranch,
};

const TechnicalSkills = () => {
    return (
        <section
            id="skills"
            className="py-24 relative"
            aria-labelledby="skills-heading"
        >
            <RevealOnScroll className="container px-4 mx-auto max-w-6xl relative z-10">
                <h2 id="skills-heading" className="text-3xl md:text-5xl font-bold text-center mb-16 text-[var(--text-main)]">
                    <GlitchText text="Technical Skills" />
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    role="list"
                    aria-label="Technical skills categories"
                >
                    {TECHNICAL_SKILLS_DATA.map((skill, index) => {
                        const IconComponent = iconMap[skill.iconName] || Server;

                        return (
                            <TiltCard key={index} className="h-full">
                                <article
                                    className="h-full p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] 
                             hover:border-violet-500/30 transition-all duration-300 group 
                             hover:bg-[var(--bg-card-hover)] flex flex-col"
                                    role="listitem"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div
                                            className="p-2.5 rounded-lg bg-black/40 text-violet-400 border border-violet-500/20 
                                 group-hover:scale-110 transition-transform duration-300 
                                 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                            aria-hidden="true"
                                        >
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[var(--text-main)] tracking-wide">
                                            {skill.category}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-[var(--text-muted)] mb-4">
                                        {skill.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto" role="list" aria-label={`${skill.category} technologies`}>
                                        {skill.skills.map((item, i) => (
                                            <span
                                                key={i}
                                                className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/30 
                                   text-[var(--text-muted)] border border-[var(--border-color)] 
                                   group-hover:text-violet-300 group-hover:border-violet-500/30 
                                   transition-colors"
                                                role="listitem"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </TiltCard>
                        );
                    })}
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default TechnicalSkills;
