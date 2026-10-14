import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  Shield, 
  Cloud 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'var(--accent-secondary)' }}
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
            <Award className="w-3.5 h-3.5" />
            <span>Industry Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Certifications & <span className="gradient-text">Recognitions</span>
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            Industry-aligned simulations and certifications validating enterprise cybersecurity analysis and cloud process workflows.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => {
            const isDeloitte = cert.issuer.toLowerCase().includes('deloitte');

            return (
              <div 
                key={index}
                className="p-8 sm:p-10 rounded-3xl glass-panel relative group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div>
                  {/* Issuer & Status Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 shadow-md"
                        style={{
                          backgroundColor: 'var(--badge-bg)',
                          borderColor: 'var(--badge-border)',
                          border: '1px solid var(--badge-border)',
                          color: 'var(--accent-primary)'
                        }}
                      >
                        {isDeloitte ? <Shield className="w-6 h-6" /> : <Cloud className="w-6 h-6" />}
                      </div>

                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: 'var(--accent-primary)' }}>
                          {cert.issuer}
                        </span>
                        <span className="text-[11px] font-mono opacity-60" style={{ color: 'var(--text-secondary)' }}>
                          {cert.issuedDate}
                        </span>
                      </div>
                    </div>

                    <span 
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        color: '#10b981',
                        border: '1px solid rgba(16, 185, 129, 0.3)'
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed opacity-80 mb-6 font-normal" style={{ color: 'var(--text-secondary)' }}>
                    {cert.description}
                  </p>

                  {/* Skills Tagged */}
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider block mb-2 opacity-60" style={{ color: 'var(--text-secondary)' }}>
                      Competencies Covered:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-3 py-1 rounded-xl text-xs font-mono font-medium"
                          style={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Credential Tag */}
                <div className="pt-4 border-t flex items-center justify-between text-xs font-mono opacity-70" style={{ borderColor: 'var(--border-color)' }}>
                  <span>Professional Simulation</span>
                  <span className="group-hover:translate-x-1 transition-transform">Accredited →</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
