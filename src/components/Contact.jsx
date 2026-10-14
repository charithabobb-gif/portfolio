import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate sending
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-mesh-grid">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-15 pointer-events-none"
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channels</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Get in <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-secondary)' }}>
            Actively seeking AI/ML engineering, data science fresher, or software development opportunities. Let's discuss how I can contribute to your engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="p-8 rounded-3xl glass-panel border" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Direct Contact Details
              </h3>

              <div className="space-y-6">
                
                {/* Email Item */}
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl glass-panel group hover:scale-102 transition-all border"
                  style={{ borderColor: 'var(--border-color)' }}
                  id="contact-email-card"
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono opacity-60 uppercase tracking-wider block">Email Address</span>
                    <span className="text-sm sm:text-base font-bold group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone Item */}
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl glass-panel group hover:scale-102 transition-all border"
                  style={{ borderColor: 'var(--border-color)' }}
                  id="contact-phone-card"
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono opacity-60 uppercase tracking-wider block">Phone & WhatsApp</span>
                    <span className="text-sm sm:text-base font-bold group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {personalInfo.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div 
                  className="flex items-start gap-4 p-4 rounded-2xl glass-panel border"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--badge-bg)', color: 'var(--accent-primary)' }}
                  >
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono opacity-60 uppercase tracking-wider block">Current Base</span>
                    <span className="text-sm sm:text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Connectivity Card */}
            <div className="p-8 rounded-3xl glass-panel border" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider mb-4 opacity-75" style={{ color: 'var(--text-secondary)' }}>
                Professional Networks
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl glass-panel hover:scale-105 active:scale-95 transition-all text-xs font-bold"
                  style={{ color: 'var(--text-primary)' }}
                  id="contact-github-btn"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl glass-panel hover:scale-105 active:scale-95 transition-all text-xs font-bold"
                  style={{ color: 'var(--text-primary)' }}
                  id="contact-linkedin-btn"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border relative" style={{ borderColor: 'var(--border-color)' }}>
            
            <h3 className="text-2xl font-black mb-2 tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm opacity-70 mb-8 font-normal" style={{ color: 'var(--text-secondary)' }}>
              Fill out the form below and I will respond to your inquiry promptly.
            </p>

            {submitted ? (
              <div 
                className="p-8 rounded-2xl text-center border animate-in zoom-in-95 duration-300"
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  borderColor: 'rgba(16, 185, 129, 0.3)'
                }}
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm opacity-80 max-w-md mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. I have received your message and will get back to you shortly at your email address.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold glass-panel hover:opacity-100"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm glass-panel outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'focus:border-purple-400'
                      }`}
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: errors.name ? '#f43f5e' : 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      id="contact-form-name"
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-xs text-rose-400 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl text-sm glass-panel outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'focus:border-purple-400'
                      }`}
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: errors.email ? '#f43f5e' : 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      id="contact-form-email"
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-xs text-rose-400 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI/ML Engineering Role / Interview Invitation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm glass-panel outline-none focus:border-purple-400 transition-colors"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    id="contact-form-subject"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm glass-panel outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'focus:border-purple-400'
                    }`}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: errors.message ? '#f43f5e' : 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    id="contact-form-message"
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-xs text-rose-400 mt-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
                  style={{ background: 'var(--accent-gradient)' }}
                  id="contact-form-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
