import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  Briefcase, 
  Leaf, 
  FileText, 
  ChevronDown,
  Terminal,
  ExternalLink,
  Flame
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ currentTheme, setTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const themes = [
    {
      id: 'cyberpunk',
      name: 'Cyberpunk AI',
      subtitle: 'Dark & Neon Accents',
      icon: Sparkles,
      color: 'bg-purple-500'
    },
    {
      id: 'corporate',
      name: 'Clean Corporate',
      subtitle: 'Crisp White & Navy',
      icon: Briefcase,
      color: 'bg-blue-600'
    },
    {
      id: 'nature',
      name: 'Emerald Tech',
      subtitle: 'Deep Green & Mint',
      icon: Leaf,
      color: 'bg-emerald-500'
    },
    {
      id: 'sunset',
      name: 'Sunset Crimson',
      subtitle: 'Rose, Amber & Gold',
      icon: Flame,
      color: 'bg-rose-500'
    }
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentThemeObj = themes.find(t => t.id === currentTheme) || themes[0];
  const CurrentThemeIcon = currentThemeObj.icon;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3.5 border-b shadow-lg backdrop-blur-xl' 
          : 'py-5 bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        borderColor: isScrolled ? 'var(--border-color)' : 'transparent',
        boxShadow: isScrolled ? 'var(--card-glow)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 no-underline text-inherit"
          >
            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center p-[2px] overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-cyan-400 to-pink-500 animate-rotate-border opacity-90" />
              <div 
                className="relative w-full h-full rounded-[10px] overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover rounded-[9px] group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Charitha Bobbili
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for Opportunities" />
              </div>
              <span className="text-[11px] font-mono tracking-wider uppercase opacity-75" style={{ color: 'var(--text-secondary)' }}>
                AI/ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full border glass-panel">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'shadow-sm' 
                      : 'hover:opacity-100 opacity-75'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--badge-bg)' : 'transparent',
                    color: isActive ? 'var(--badge-text)' : 'var(--text-secondary)',
                    border: isActive ? '1px solid var(--badge-border)' : '1px solid transparent'
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar: Theme Switcher + Socials + Resume */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold glass-panel cursor-pointer"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Toggle Theme Selector"
                id="theme-switcher-button"
              >
                <div className={`w-3 h-3 rounded-full ${currentThemeObj.color} shadow-sm animate-pulse`} />
                <CurrentThemeIcon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{currentThemeObj.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${themeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {themeDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setThemeDropdownOpen(false)} 
                  />
                  <div 
                    className="absolute right-0 mt-2 w-56 rounded-2xl p-2 glass-panel shadow-2xl z-50 border animate-in fade-in zoom-in-95 duration-200"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                  >
                    <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-muted opacity-60">
                      Select Theme
                    </div>
                    {themes.map((t) => {
                      const Icon = t.icon;
                      const isSelected = currentTheme === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => {
                            setTheme(t.id);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs transition-all ${
                            isSelected 
                              ? 'font-bold' 
                              : 'opacity-80 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'
                          }`}
                          style={{
                            backgroundColor: isSelected ? 'var(--badge-bg)' : 'transparent',
                            color: isSelected ? 'var(--badge-text)' : 'var(--text-primary)',
                            border: isSelected ? '1px solid var(--badge-border)' : '1px solid transparent'
                          }}
                        >
                          <div className={`w-4 h-4 rounded-full ${t.color} flex items-center justify-center p-0.5 text-white`}>
                            <Icon className="w-2.5 h-2.5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{t.name}</div>
                            <div className="text-[10px] opacity-60">{t.subtitle}</div>
                          </div>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 border-l pl-3" style={{ borderColor: 'var(--border-color)' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-panel transition-transform hover:scale-110"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="GitHub Profile"
                id="navbar-github-link"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-panel transition-transform hover:scale-110"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="LinkedIn Profile"
                id="navbar-linkedin-link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              style={{ background: 'var(--accent-gradient)' }}
              id="navbar-resume-btn"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Quick Mobile Theme Switcher */}
            <button
              onClick={() => {
                const nextTheme = currentTheme === 'cyberpunk' ? 'corporate' : currentTheme === 'corporate' ? 'nature' : 'cyberpunk';
                setTheme(nextTheme);
              }}
              className="p-2 rounded-xl glass-panel"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Cycle Theme"
            >
              <CurrentThemeIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="sm:hidden border-b glass-panel mt-3 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200"
          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex flex-col gap-1.5 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{ color: 'var(--text-primary)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Theme Selection */}
          <div className="pt-3 border-t mb-4" style={{ borderColor: 'var(--border-color)' }}>
            <span className="text-xs font-mono uppercase tracking-wider block mb-2 opacity-60">
              Active Theme: {currentThemeObj.name}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-xl text-xs ${
                    currentTheme === t.id ? 'font-bold border' : 'opacity-70'
                  }`}
                  style={{
                    backgroundColor: currentTheme === t.id ? 'var(--badge-bg)' : 'transparent',
                    borderColor: currentTheme === t.id ? 'var(--badge-border)' : 'transparent',
                    color: currentTheme === t.id ? 'var(--badge-text)' : 'var(--text-secondary)'
                  }}
                >
                  <div className={`w-3.5 h-3.5 rounded-full ${t.color}`} />
                  <span className="text-[10px]">{t.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white shadow-md"
              style={{ background: 'var(--accent-gradient)' }}
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel"
              style={{ color: 'var(--text-primary)' }}
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-panel"
              style={{ color: 'var(--text-primary)' }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
