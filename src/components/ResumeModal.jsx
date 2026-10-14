import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo, educationData, projectsData, certificationsData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Download PDF
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Bobbili_Charitha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl rounded-3xl p-6 sm:p-10 glass-panel shadow-2xl z-10 border max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-hover)',
          color: 'var(--text-primary)'
        }}
      >
        {/* Header Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider block opacity-60">
              Interactive Resume Document
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight gradient-text">
              {personalInfo.name}
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              style={{ background: 'var(--accent-gradient)' }}
              id="resume-modal-download-btn"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl glass-panel hover:scale-105 transition-transform"
              style={{ color: 'var(--text-primary)' }}
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl glass-panel hover:scale-105 transition-transform"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Formatted Resume Container */}
        <div 
          className="p-6 sm:p-8 rounded-2xl border space-y-8 print:p-0 print:border-none"
          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
        >
          {/* Header Contact Block */}
          <div className="text-center pb-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              BOBBILI CHARITHA
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono opacity-80" style={{ color: 'var(--text-secondary)' }}>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {personalInfo.phone}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {personalInfo.email}</span>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" /> github.com/{personalInfo.githubHandle}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-blue-400" /> linkedin.com/in/{personalInfo.linkedinHandle}
              </a>
            </div>
          </div>

          {/* Section: Profile */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
              <span>Profile</span>
              <span className="flex-1 h-px bg-current opacity-25" />
            </h3>
            <p className="text-sm leading-relaxed opacity-90 font-normal">
              {personalInfo.summary}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
              <span>Technical Skills</span>
              <span className="flex-1 h-px bg-current opacity-25" />
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <span className="font-bold min-w-44">Programming Languages:</span>
                <span className="opacity-85 font-mono">Core Java, Advanced Java, HTML, CSS, JavaScript</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <span className="font-bold min-w-44">Core Competencies:</span>
                <span className="opacity-85 font-mono">Machine Learning Concepts, Data Preprocessing, Model Development, Neural Networks</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <span className="font-bold min-w-44">Soft Skills:</span>
                <span className="opacity-85">Problem Solving, Teamwork and Collaboration, Time Management</span>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
              <span>Projects</span>
              <span className="flex-1 h-px bg-current opacity-25" />
            </h3>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs sm:text-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </span>
                    <span className="font-mono text-[11px] opacity-60">[{project.category}]</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 opacity-85 leading-relaxed">
                    <li>{project.shortDesc}</li>
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
              <span>Education</span>
              <span className="flex-1 h-px bg-current opacity-25" />
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <div className="font-bold text-sm sm:text-base">{edu.institution}</div>
                    <div className="opacity-80 italic">{edu.degree}</div>
                    <div className="text-[11px] font-mono mt-0.5 opacity-60">{edu.location}</div>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                      {edu.score}
                    </span>
                    <div className="text-[11px] font-mono opacity-60 mt-1">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
              <span>Certifications</span>
              <span className="flex-1 h-px bg-current opacity-25" />
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm opacity-90">
              {certificationsData.map((cert, cIdx) => (
                <li key={cIdx}>
                  <strong className="font-bold">{cert.title}</strong> — {cert.issuer}
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Strengths */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
              <span>Strengths</span>
              <span className="flex-1 h-px bg-current opacity-25" />
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm opacity-90">
              <li>Ability to quickly learn and adapt to new technologies.</li>
              <li>Ability to work under pressure and meet deadlines with strong problem-solving and collaboration skills.</li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold glass-panel hover:opacity-100"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
