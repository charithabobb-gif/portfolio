import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Heart, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer 
      className="border-t py-14 relative z-10"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b" style={{ borderColor: 'var(--border-color)' }}>
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-3 mb-2 no-underline group">
              <div className="relative w-8 h-8 rounded-lg flex items-center justify-center p-[1.5px] overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-cyan-400 to-pink-500 opacity-90" />
                <div 
                  className="relative w-full h-full rounded-[6px] overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  <img 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 20%' }}
                  />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Bobbili Charitha
              </span>
            </a>
            <p className="text-xs font-mono max-w-sm opacity-70" style={{ color: 'var(--text-secondary)' }}>
              AI/ML Engineering Fresher • TKR College of Engineering & Technology
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:underline transition-colors hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel hover:scale-110 transition-transform"
              style={{ color: 'var(--text-primary)' }}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel hover:scale-110 transition-transform"
              style={{ color: 'var(--text-primary)' }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl glass-panel hover:scale-110 transition-transform"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-rose-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-panel hover:scale-110 transition-transform ml-2"
              style={{ color: 'var(--accent-primary)', borderColor: 'var(--border-hover)' }}
              title="Back to Top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-60" style={{ color: 'var(--text-secondary)' }}>
          <div>
            © {new Date().getFullYear()} Bobbili Charitha. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Built with React, Tailwind & Neural Precision</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
