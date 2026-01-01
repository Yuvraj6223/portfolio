import React, { useState } from 'react';
import { ArrowDown, ExternalLink, Github, X, CheckCircle2, Lightbulb } from 'lucide-react';
import { RevealOnScroll, TiltCard, Button, Magnetic, GlitchText } from '../common';
import { PROJECTS_DATA } from '../../data/portfolioData';

// ============================================
// Project Modal Component
// ============================================
const ProjectModal = ({ project, onClose }) => {
    const [activeTab, setActiveTab] = useState('overview');

    if (!project) return null;

    const tabs = ['overview', 'architecture', 'insights'];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative w-full max-w-5xl bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden animate-scale-up flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt=""
                            className="w-full h-full object-cover opacity-60"
                            onError={(e) => {
                                if (project.fallbackImage) {
                                    e.target.src = project.fallbackImage;
                                }
                            }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} mix-blend-multiply opacity-80`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
                    </div>

                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                        <div className="flex gap-2 mb-3">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md rounded border border-white/20 text-white shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 id="modal-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {project.title}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-md z-50 border border-white/10"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[var(--border-color)] px-4 md:px-8 bg-[var(--bg-secondary)] overflow-x-auto" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            role="tab"
                            aria-selected={activeTab === tab}
                            aria-controls={`panel-${tab}`}
                            className={`px-4 md:px-6 py-4 text-sm font-medium tracking-wide uppercase transition-colors relative whitespace-nowrap 
                         ${activeTab === tab ? 'text-violet-400' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-[var(--bg-main)]">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div
                            id="panel-overview"
                            role="tabpanel"
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
                        >
                            <div className="md:col-span-2 space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-4">Engineering Case Study</h3>
                                    <p className="text-[var(--text-muted)] leading-relaxed text-lg">{project.fullDesc}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] hover:border-red-500/30 transition-colors">
                                        <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <X className="w-4 h-4" aria-hidden="true" />
                                            The Problem
                                        </h4>
                                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] hover:border-green-500/30 transition-colors">
                                        <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                            The Solution
                                        </h4>
                                        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)]">
                                    <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1.5 text-xs font-mono bg-black/40 rounded-md text-gray-300 border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Magnetic>
                                        {project.link !== "#" ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                                <Button variant="primary" className="w-full text-xs">
                                                    <ExternalLink className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                                                    View Deployment
                                                </Button>
                                            </a>
                                        ) : (
                                            <Button variant="primary" className="w-full text-xs" disabled>
                                                <ExternalLink className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                                                Deployment Private/In-Dev
                                            </Button>
                                        )}
                                    </Magnetic>

                                    {project.github && project.github !== "#" ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button variant="outline" className="w-full text-xs">
                                                <Github className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                                                View Source Code
                                            </Button>
                                        </a>
                                    ) : (
                                        <Button variant="outline" className="w-full text-xs" disabled>
                                            <Github className="w-3.5 h-3.5 mr-2" aria-hidden="true" />
                                            Source Private
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Architecture Tab */}
                    {activeTab === 'architecture' && (
                        <div id="panel-architecture" role="tabpanel" className="animate-fade-in space-y-8">
                            <div className="p-8 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] flex flex-wrap justify-center items-center gap-4">
                                {project.architecture.map((node, i) => (
                                    <React.Fragment key={i}>
                                        {node === "→" ? (
                                            <ArrowDown className="w-5 h-5 text-gray-600 -rotate-90" aria-hidden="true" />
                                        ) : (
                                            <div className="px-6 py-4 bg-[var(--bg-secondary)] border border-violet-500/30 rounded-lg text-violet-400 font-mono text-sm shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                                                {node}
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <p className="text-center text-[var(--text-muted)] text-sm italic">
                                High-level data flow diagram illustrating the system architecture.
                            </p>
                        </div>
                    )}

                    {/* Insights Tab */}
                    {activeTab === 'insights' && (
                        <div id="panel-insights" role="tabpanel" className="animate-fade-in space-y-6">
                            <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] leading-relaxed text-[var(--text-muted)] space-y-4">
                                <div className="flex items-center gap-2 mb-4 text-violet-400 font-mono text-sm border-b border-[var(--border-color)] pb-2">
                                    <Lightbulb className="w-4 h-4" aria-hidden="true" />
                                    <span>SYSTEM ARCHITECTURAL INSIGHTS</span>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-[var(--text-main)] font-semibold mb-1">Core Architecture</h4>
                                        <p className="text-sm">{project.architecture.join(" ")}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-[var(--text-main)] font-semibold mb-1">Technology Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map(s => (
                                                <span key={s} className="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded border border-[var(--border-color)]">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[var(--text-main)] font-semibold mb-1">Key Technical Challenge</h4>
                                        <p className="text-sm italic border-l-2 border-violet-500 pl-3">"{project.problem}"</p>
                                    </div>

                                    <div>
                                        <h4 className="text-[var(--text-main)] font-semibold mb-1">Engineered Solution</h4>
                                        <p className="text-sm">{project.solution}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-[var(--text-main)] font-semibold mb-1">Business Impact</h4>
                                        <p className="text-sm text-green-400">{project.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ============================================
// Projects Section Component
// ============================================
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section
                id="projects"
                className="py-24 md:py-32 px-4 relative"
                aria-labelledby="projects-heading"
            >
                <RevealOnScroll className="container mx-auto max-w-6xl">
                    <h2 id="projects-heading" className="text-3xl md:text-5xl font-bold text-center mb-20 text-[var(--text-main)]">
                        <GlitchText text="Featured Projects" />
                    </h2>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        role="list"
                        aria-label="Project showcase"
                    >
                        {PROJECTS_DATA.map((project, index) => (
                            <TiltCard
                                key={index}
                                onClick={() => setSelectedProject(project)}
                                className="h-full"
                            >
                                <article
                                    className="h-full group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] 
                             hover:border-violet-500/50 transition-all duration-500 flex flex-col 
                             shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                                    role="listitem"
                                >
                                    {/* Header Image */}
                                    <div className="h-48 w-full relative overflow-hidden bg-black">
                                        <img
                                            src={project.fallbackImage || project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                                            loading="lazy"
                                        />

                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur rounded-full border border-white/10 text-[10px] font-mono shadow-lg">
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full animate-pulse 
                                   ${project.status === 'Development' ? 'bg-yellow-500' :
                                                        project.status === 'Prototype' ? 'bg-blue-500' : 'bg-green-500'}`}
                                                aria-hidden="true"
                                            />
                                            <span className={
                                                project.status === 'Development' ? 'text-yellow-400' :
                                                    project.status === 'Prototype' ? 'text-blue-400' : 'text-green-400'
                                            }>
                                                {project.status.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col relative">
                                        <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)] group-hover:text-violet-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-[var(--text-muted)] mb-8 leading-relaxed flex-1">
                                            {project.shortDesc}
                                        </p>

                                        <div className="space-y-4 mt-auto">
                                            <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] group-hover:border-violet-500/20 transition-colors">
                                                <div className="text-[10px] uppercase text-[var(--text-muted)] font-bold mb-1 tracking-wider">Impact</div>
                                                <div className="text-xs text-violet-300 font-mono font-medium">{project.impact}</div>
                                            </div>

                                            <Button
                                                variant="outline"
                                                className="w-full text-xs h-10 group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                                            >
                                                Inspect Architecture
                                                <ArrowDown className="w-3 h-3 ml-2 -rotate-90" aria-hidden="true" />
                                            </Button>
                                        </div>
                                    </div>
                                </article>
                            </TiltCard>
                        ))}
                    </div>
                </RevealOnScroll>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
};

export default Projects;
