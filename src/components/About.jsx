import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  BrainCircuit, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  BookOpen, 
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    BrainCircuit: BrainCircuit
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div 
        className="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'var(--accent-primary)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            About <span className="gradient-text">Bobbili Charitha</span>
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            AI/ML Engineering candidate at TKR College of Engineering and Technology, combining analytical rigor with structured software engineering.
          </p>
        </div>

        {/* Top Bio & Academic Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Bio Text (8 cols) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl glass-panel relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Engineering Foundation & Focus
                  </h3>
                  <span className="text-xs font-mono opacity-70" style={{ color: 'var(--text-secondary)' }}>
                    TKR College of Engineering & Technology • 2022 – 2026
                  </span>
                </div>
              </div>

              <p className="text-base sm:text-lg leading-relaxed mb-6 font-normal" style={{ color: 'var(--text-secondary)' }}>
                {personalInfo.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Specialized AI/ML Curriculum</h4>
                    <p className="text-xs opacity-75 mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      In-depth focus on Neural Networks, Machine Learning, and Data Preprocessing algorithms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Solid Object-Oriented Java</h4>
                    <p className="text-xs opacity-75 mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      Hands-on mastery of Core & Advanced Java principles with practical enterprise management systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href={`tel:${personalInfo.phone}`} className="hover:underline">{personalInfo.phoneFormatted}</a>
              </div>
            </div>
          </div>

          {/* Side Academic Milestone Card (4 cols) */}
          <div className="lg:col-span-4 p-8 rounded-3xl glass-panel flex flex-col justify-between" style={{ borderColor: 'var(--border-hover)' }}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider opacity-70" style={{ color: 'var(--text-secondary)' }}>
                  Academic Track Record
                </span>
                <Award className="w-5 h-5 text-amber-400" />
              </div>

              <div className="space-y-5">
                <div className="p-4 rounded-2xl glass-panel border" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>B.Tech CSM (AI & ML)</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-full font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30">
                      8.51 CGPA
                    </span>
                  </div>
                  <div className="text-[11px] opacity-70" style={{ color: 'var(--text-secondary)' }}>
                    TKR College of Engineering and Technology
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Intermediate (MPC)</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      98.6%
                    </span>
                  </div>
                  <div className="text-[11px] opacity-70" style={{ color: 'var(--text-secondary)' }}>
                    Sri Chaitanya Junior Kalashala
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border" style={{ borderColor: 'var(--border-color)' }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>SSC Board</span>
                    <span className="text-xs font-black px-2 py-0.5 rounded-full font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      95.0%
                    </span>
                  </div>
                  <div className="text-[11px] opacity-70" style={{ color: 'var(--text-secondary)' }}>
                    Sri Chaitanya Techno, Kodad
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-center">
              <span className="text-[11px] font-mono opacity-65" style={{ color: 'var(--text-secondary)' }}>
                Demonstrated consistency in logical and analytical benchmarks
              </span>
            </div>
          </div>

        </div>

        {/* Visual Cards: Key Strengths (Requested in Prompt) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Core Engineering <span className="gradient-text">Strengths</span>
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider opacity-60 mt-1" style={{ color: 'var(--text-secondary)' }}>
              Key traits that drive results in software and AI projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalInfo.strengths.map((strength, index) => {
              const IconComponent = iconMap[strength.icon] || Zap;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-3xl glass-panel relative group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Icon */}
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-md" style={{ backgroundColor: 'var(--badge-bg)', borderColor: 'var(--badge-border)' }}>
                      <IconComponent className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    </div>

                    <h4 className="text-lg font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
                      {strength.title}
                    </h4>

                    <p className="text-sm leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
                      {strength.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono opacity-60" style={{ borderColor: 'var(--border-color)' }}>
                    <span>Pillar 0{index + 1}</span>
                    <span className="group-hover:translate-x-1 transition-transform">Verified Skill →</span>
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
