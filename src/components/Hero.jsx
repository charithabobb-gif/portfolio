import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Brain, 
  Cpu, 
  Code2, 
  Sparkles,
  CheckCircle2,
  Database,
  Terminal,
  Layers,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import BackgroundCanvas from './BackgroundCanvas';

export default function Hero({ theme, onOpenResume }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = personalInfo.typingWords;

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[wordIndex];

      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, wordIndex, words]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-mesh-grid"
    >
      {/* Interactive Constellation Node Canvas */}
      <BackgroundCanvas theme={theme} />

      {/* Dynamic Background Glow Blobs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-25 animate-pulse-glow"
        style={{ background: 'var(--accent-gradient)' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[380px] h-[380px] rounded-full blur-[130px] pointer-events-none opacity-20"
        style={{ background: 'var(--accent-secondary)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text, Typing, CTAs & Socials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Greeting Status Badge */}
            <div 
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold mb-6 glass-panel animate-in fade-in slide-in-from-top-4 duration-500"
              style={{
                backgroundColor: 'var(--badge-bg)',
                borderColor: 'var(--badge-border)',
                color: 'var(--badge-text)'
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for AI/ML & Software Roles</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Fresher 2026
              </span>
            </div>

            {/* Main Name Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-4">
              Hi, I'm{' '}
              <span className="gradient-text drop-shadow-sm">
                Bobbili Charitha
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold min-h-[44px] flex items-center justify-center lg:justify-start mb-6" style={{ color: 'var(--text-primary)' }}>
              <Terminal className="w-6 h-6 mr-2 text-cyan-400 inline" />
              <span>{currentText}</span>
              <span className="blinking-cursor" />
            </div>

            {/* Short Summary */}
            <p 
              className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
              style={{ color: 'var(--text-secondary)' }}
            >
              "{personalInfo.summary}"
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                style={{ background: 'var(--accent-gradient)' }}
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold glass-panel transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                style={{ color: 'var(--text-primary)' }}
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Proof & Direct Channels */}
            <div className="flex items-center gap-4 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
              <span className="opacity-70">Connect:</span>
              <div className="flex items-center gap-2">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-xl glass-panel hover:scale-110 transition-transform flex items-center gap-1.5"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">github.com/{personalInfo.githubHandle}</span>
                </a>

                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-xl glass-panel hover:scale-110 transition-transform flex items-center gap-1.5"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">linkedin.com/in/{personalInfo.linkedinHandle}</span>
                </a>

                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-xl glass-panel hover:scale-110 transition-transform flex items-center gap-1.5"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Intelligence Card + Circular Profile Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Ambient Multi-layer Glow */}
            <div 
              className="absolute w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] rounded-full blur-[80px] opacity-35 pointer-events-none"
              style={{ background: 'var(--accent-gradient)' }}
            />

            {/* Main Interactive Showcase Glass Card */}
            <div 
              className="w-full max-w-md rounded-3xl glass-panel p-6 sm:p-7 relative border shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10"
              style={{ borderColor: 'var(--border-color)' }}
            >
              {/* Terminal Window Header (macOS style dots + status) */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                
                <span 
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-full flex items-center gap-1.5 font-bold"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Profile</span>
                </span>
              </div>

              {/* Centered Circle Profile Image with Rotating Animated Border */}
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="relative group">
                  
                  {/* Outer Rotating Glowing Gradient Ring */}
                  <div 
                    className="absolute -inset-2.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-rotate-border"
                    style={{ background: 'var(--accent-gradient)' }}
                  />

                  {/* Inner Secondary Border */}
                  <div 
                    className="absolute -inset-1 rounded-full p-[2px]"
                    style={{ background: 'var(--border-color)' }}
                  />

                  {/* Main Circle Image */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 shadow-2xl glass-panel p-1">
                    <img
                      src={personalInfo.profileImage}
                      alt="Bobbili Charitha - AI/ML Engineering Fresher"
                      className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: '50% 20%' }}
                      id="hero-profile-avatar"
                      loading="eager"
                    />
                  </div>

                  {/* Floating Orbiting Badges */}
                  <div 
                    className="absolute -top-2 -right-3 px-3 py-1 rounded-full glass-panel shadow-md flex items-center gap-1.5 text-[11px] font-mono animate-float-slow"
                    style={{
                      backgroundColor: 'var(--badge-bg)',
                      borderColor: 'var(--badge-border)',
                      color: 'var(--badge-text)',
                      border: '1px solid var(--badge-border)'
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>CGPA 8.51</span>
                  </div>

                  <div 
                    className="absolute -bottom-1 -left-2 px-3 py-1 rounded-full glass-panel shadow-md flex items-center gap-1.5 text-[11px] font-mono animate-float-slow"
                    style={{
                      backgroundColor: 'var(--badge-bg)',
                      borderColor: 'var(--badge-border)',
                      color: 'var(--badge-text)',
                      border: '1px solid var(--badge-border)',
                      animationDelay: '2s'
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>AI & ML 2026</span>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <h3 className="font-extrabold text-base tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {personalInfo.name}
                  </h3>
                  <p className="text-[11px] font-mono opacity-65" style={{ color: 'var(--text-secondary)' }}>
                    B.Tech CSE (AI & ML) • TKR College
                  </p>
                </div>
              </div>

              {/* Stack / Competency Micro-Cards */}
              <div className="space-y-2.5">
                
                <div 
                  className="flex items-center justify-between p-3 rounded-2xl glass-panel border transition-all hover:scale-101"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                    >
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                        Machine Learning & Neural Nets
                      </div>
                      <div className="text-[10px] font-mono opacity-60" style={{ color: 'var(--text-secondary)' }}>
                        Predictive Pipelines & Feature Scaling
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                    AI/ML
                  </span>
                </div>

                <div 
                  className="flex items-center justify-between p-3 rounded-2xl glass-panel border transition-all hover:scale-101"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                    >
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                        Core & Advanced Java
                      </div>
                      <div className="text-[10px] font-mono opacity-60" style={{ color: 'var(--text-secondary)' }}>
                        OOP Architecture & Enterprise Systems
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                    Java
                  </span>
                </div>

                <div 
                  className="flex items-center justify-between p-3 rounded-2xl glass-panel border transition-all hover:scale-101"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                    >
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                        Deloitte & Salesforce Certified
                      </div>
                      <div className="text-[10px] font-mono opacity-60" style={{ color: 'var(--text-secondary)' }}>
                        Cybersecurity Assessment & Workflows
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                    Verified
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Hero Stats Strip */}
        <div className="mt-16 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ borderColor: 'var(--border-color)' }}>
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl glass-panel text-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
                {stat.label}
              </div>
              <div className="text-[11px] opacity-65 font-mono mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
