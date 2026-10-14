import React, { useState } from 'react';
import { 
  Code2, 
  Brain, 
  Users, 
  Terminal, 
  Coffee, 
  Layers, 
  Code, 
  Palette, 
  Cpu, 
  FileSpreadsheet, 
  Network, 
  Sparkles, 
  Clock, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    Coffee,
    Layers,
    Code,
    Palette,
    Terminal,
    Brain,
    FileSpreadsheet,
    Cpu,
    Network,
    Sparkles,
    Users,
    Clock
  };

  const filteredSkills = skillsData.skills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-mesh-grid">
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
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Technical <span className="gradient-text">Skills & Competencies</span>
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            A structured matrix spanning Machine Learning theory, Data Preprocessing pipelines, and Enterprise Java Object-Oriented systems.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel w-full md:w-auto">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'shadow-sm' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: activeCategory === cat.id ? 'var(--badge-bg)' : 'transparent',
                  color: activeCategory === cat.id ? 'var(--badge-text)' : 'var(--text-secondary)',
                  border: activeCategory === cat.id ? '1px solid var(--badge-border)' : '1px solid transparent'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50" style={{ color: 'var(--text-primary)' }} />
            <input
              type="text"
              placeholder="Search skills, tools, concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm glass-panel outline-none focus:border-purple-400 transition-colors"
              style={{
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs opacity-60 hover:opacity-100"
                style={{ color: 'var(--text-primary)' }}
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl glass-panel group hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-110"
                      style={{ 
                        backgroundColor: 'var(--badge-bg)', 
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--badge-border)'
                      }}
                    >
                      <IconComponent className="w-full h-full" />
                    </div>

                    <span 
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold"
                      style={{
                        backgroundColor: 'var(--badge-bg)',
                        color: 'var(--badge-text)',
                        border: '1px solid var(--badge-border)'
                      }}
                    >
                      {skill.category === 'aiml' ? 'AI / ML' : skill.category === 'programming' ? 'Core Dev' : 'Soft Skill'}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed opacity-80 mb-5 font-normal" style={{ color: 'var(--text-secondary)' }}>
                    {skill.desc}
                  </p>
                </div>

                {/* Level Progress Meter */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5 opacity-75" style={{ color: 'var(--text-secondary)' }}>
                    <span>Proficiency</span>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--border-color)' }}>
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        background: 'var(--accent-gradient)'
                      }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl glass-panel">
            <p className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              No matching skills found for "{searchQuery}"
            </p>
            <p className="text-xs opacity-70 mb-4" style={{ color: 'var(--text-secondary)' }}>
              Try searching for terms like "Java", "Neural", "Model", or "Data".
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white"
              style={{ background: 'var(--accent-gradient)' }}
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
