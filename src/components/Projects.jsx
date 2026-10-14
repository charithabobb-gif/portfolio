import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Code2, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2,
  Brain
} from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Java OOP', label: 'Core Java & OOP' },
    { id: 'AI/ML', label: 'AI & Machine Learning' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (selectedFilter === 'all') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: 'var(--accent-secondary)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 glass-panel"
            style={{
              backgroundColor: 'var(--badge-bg)',
              borderColor: 'var(--badge-border)',
              color: 'var(--badge-text)'
            }}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Software & <span className="gradient-text">AI Projects</span>
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            Production-oriented systems developed with Core Java object-oriented principles, algorithmic rigor, and predictive machine learning models.
          </p>
        </div>

        {/* Project Category Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter.id 
                    ? 'shadow-md scale-102' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: selectedFilter === filter.id ? 'var(--badge-bg)' : 'transparent',
                  color: selectedFilter === filter.id ? 'var(--badge-text)' : 'var(--text-secondary)',
                  border: selectedFilter === filter.id ? '1px solid var(--badge-border)' : '1px solid transparent'
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 relative border overflow-hidden"
              style={{
                borderColor: 'var(--border-color)'
              }}
            >
              {/* Top Card Bar */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span 
                    className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full font-bold"
                    style={{
                      backgroundColor: 'var(--badge-bg)',
                      borderColor: 'var(--badge-border)',
                      color: 'var(--badge-text)',
                      border: '1px solid var(--badge-border)'
                    }}
                  >
                    {project.category}
                  </span>

                  <span className="text-[11px] font-mono opacity-60">
                    Project 0{index + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-black mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm leading-relaxed opacity-80 mb-6 font-normal line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t flex items-center justify-between gap-3" style={{ borderColor: 'var(--border-color)' }}>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5 cursor-pointer"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <span>Explore OOP Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl glass-panel hover:scale-110 transition-transform"
                    style={{ color: 'var(--text-primary)' }}
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal viewer */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </section>
  );
}
