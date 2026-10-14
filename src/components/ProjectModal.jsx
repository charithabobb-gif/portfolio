import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Terminal, 
  Copy, 
  Check,
  Cpu,
  Sparkles
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 glass-panel shadow-2xl z-10 border max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--border-hover)',
          color: 'var(--text-primary)'
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
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
              <span className="text-xs opacity-60 font-mono">• {project.highlight}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel hover:scale-105 active:scale-95 transition-transform"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 p-1 rounded-2xl glass-panel mb-6 border" style={{ borderColor: 'var(--border-color)' }}>
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'overview' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'overview' ? 'var(--badge-bg)' : 'transparent',
              color: activeTab === 'overview' ? 'var(--badge-text)' : 'var(--text-secondary)'
            }}
          >
            Overview & Features
          </button>

          <button
            onClick={() => setActiveTab('oop')}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'oop' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'oop' ? 'var(--badge-bg)' : 'transparent',
              color: activeTab === 'oop' ? 'var(--badge-text)' : 'var(--text-secondary)'
            }}
          >
            OOP & Architecture
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'code' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              backgroundColor: activeTab === 'code' ? 'var(--badge-bg)' : 'transparent',
              color: activeTab === 'code' ? 'var(--badge-text)' : 'var(--text-secondary)'
            }}
          >
            Code Preview
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider opacity-60 font-mono mb-2">
                Project Synopsis
              </h4>
              <p className="text-sm sm:text-base leading-relaxed opacity-90 font-normal">
                {project.fullDesc}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider opacity-60 font-mono mb-3">
                Key System Capabilities
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="opacity-85">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider opacity-60 font-mono mb-2">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-mono font-medium"
                    style={{
                      backgroundColor: 'var(--badge-bg)',
                      borderColor: 'var(--badge-border)',
                      color: 'var(--badge-text)',
                      border: '1px solid var(--badge-border)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: OOP Principles & Architecture */}
        {activeTab === 'oop' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <p className="text-xs sm:text-sm opacity-80 mb-2">
              Deep engineering execution adhering to clean architecture, SOLID principles, and OOP design:
            </p>

            <div className="space-y-3">
              {project.oopConcepts.map((item, idx) => {
                const [concept, ...explanation] = item.split(':');
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl glass-panel border"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm mb-1" style={{ color: 'var(--accent-primary)' }}>
                      <Layers className="w-4 h-4" />
                      <span>{concept}</span>
                    </div>
                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed pl-6">
                      {explanation.join(':')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Code Snippet */}
        {activeTab === 'code' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono opacity-60">Source Implementation Snippet</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono glass-panel hover:scale-105 transition-all"
                style={{ color: 'var(--text-primary)' }}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre 
              className="p-4 sm:p-5 rounded-2xl text-xs sm:text-sm font-mono overflow-x-auto border leading-relaxed"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Footer Action Links */}
        <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-105 active:scale-95"
              style={{ background: 'var(--accent-gradient)' }}
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold glass-panel hover:opacity-100 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              Close
            </button>
          </div>

          <span className="text-[11px] font-mono opacity-50">
            Authored by Bobbili Charitha
          </span>
        </div>

      </div>
    </div>
  );
}
