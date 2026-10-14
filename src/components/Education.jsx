import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const iconMap = {
    GraduationCap,
    Award,
    BookOpen
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-mesh-grid">
      
      {/* Background ambient light */}
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'var(--accent-primary)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest mb-3 glass-panel"
            style={{
              backgroundColor: 'var(--badge-bg)',
              borderColor: 'var(--badge-border)',
              color: 'var(--badge-text)'
            }}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Education & <span className="gradient-text">Academic Excellence</span>
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            A rigorous engineering path grounded in mathematical reasoning, computer science fundamentals, and artificial intelligence.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical Track Line */}
          <div 
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 rounded-full"
            style={{ background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), var(--accent-highlight))' }}
          />

          <div className="space-y-12 md:space-y-16">
            {educationData.map((item, index) => {
              const IconComponent = iconMap[item.icon] || GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Center Node (Desktop) */}
                  <div 
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl items-center justify-center glass-panel shadow-lg z-20 transition-transform hover:scale-125"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-hover)',
                      color: 'var(--accent-primary)'
                    }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Empty side for 50/50 balance on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Side (50% on desktop, 100% on mobile) */}
                  <div className="w-full md:w-1/2">
                    <div 
                      className="p-8 rounded-3xl glass-panel relative group hover:-translate-y-1.5 transition-all duration-300 border"
                      style={{
                        borderColor: 'var(--border-color)'
                      }}
                    >
                      {/* Mobile Node Badge */}
                      <div className="md:hidden flex items-center gap-3 mb-4">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold" style={{ color: 'var(--accent-primary)' }}>
                          Step 0{index + 1}
                        </span>
                      </div>

                      {/* Period & Location Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Institution Title */}
                      <h3 className="text-xl sm:text-2xl font-black mb-1.5 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {item.institution}
                      </h3>

                      {/* Degree / Branch */}
                      <div className="text-sm sm:text-base font-semibold mb-4" style={{ color: 'var(--accent-primary)' }}>
                        {item.degree}
                      </div>

                      {/* Score Highlight Pill */}
                      <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs font-black shadow-sm"
                        style={{
                          backgroundColor: 'var(--badge-bg)',
                          borderColor: 'var(--badge-border)',
                          color: 'var(--badge-text)',
                          border: '1px solid var(--badge-border)'
                        }}
                      >
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.score}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 pt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="opacity-80 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
