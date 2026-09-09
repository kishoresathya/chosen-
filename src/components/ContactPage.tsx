import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {
  onNavigateHome?: (sectionId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#07080b',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(5.5rem, 11vh, 7.5rem)',
        paddingBottom: 'clamp(2.5rem, 5vh, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Ambient Radial Lighting Glow */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '12%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 153, 0.07) 0%, rgba(16, 185, 129, 0.02) 50%, transparent 72%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container contact-page-container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1220px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="contact-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN: Form & Header */}
          <div style={{ maxWidth: '520px', width: '100%' }}>
            {/* CONTACT US Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '0.03em',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: '0 0 0.35rem',
                lineHeight: 1.1,
              }}
            >
              Contact Us
            </h1>

            {/* DROP A MESSAGE with green underline */}
            <div style={{ marginBottom: '2.2rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#00e599',
                  borderBottom: '2.5px solid #00e599',
                  paddingBottom: '4px',
                }}
              >
                Drop a message
              </span>
            </div>

            {/* Submitted Feedback or Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '2.25rem',
                  borderRadius: '14px',
                  background: 'rgba(0, 229, 153, 0.08)',
                  border: '1px solid rgba(0, 229, 153, 0.35)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#00e599', fontSize: '1.4rem', fontWeight: 'bold' }}>✓</span>
                  <h2 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                    Message Dispatched
                  </h2>
                </div>
                <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                  Thanks for reaching out. Tharun reads every note directly and will get back to <strong>{formData.email}</strong> within 2 days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  style={{
                    marginTop: '1.5rem',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    padding: '0.6rem 1.4rem',
                    borderRadius: '9999px',
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00e599';
                    e.currentTarget.style.color = '#00e599';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  Send another note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* Full Name* */}
                <input
                  type="text"
                  required
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.88rem 1.15rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00e599';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 229, 153, 0.18)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                {/* Email* */}
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.88rem 1.15rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00e599';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 229, 153, 0.18)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                {/* Phone* */}
                <input
                  type="text"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.88rem 1.15rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00e599';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 229, 153, 0.18)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                {/* Subject* */}
                <input
                  type="text"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.88rem 1.15rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00e599';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 229, 153, 0.18)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                {/* Message* */}
                <textarea
                  required
                  rows={4}
                  placeholder="Message*"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.88rem 1.15rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '110px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#00e599';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 229, 153, 0.18)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />

                {/* SUBMIT Button */}
                <button
                  type="submit"
                  style={{
                    marginTop: '0.6rem',
                    width: '100%',
                    padding: '0.95rem 1.5rem',
                    borderRadius: '9999px',
                    background: '#00e599',
                    color: '#07080b',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.94rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    boxShadow: '0 10px 28px -2px rgba(0, 229, 153, 0.55), 0 0 16px rgba(0, 229, 153, 0.35)',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#22f5a8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 14px 34px rgba(0, 229, 153, 0.7), 0 0 20px rgba(0, 229, 153, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#00e599';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 28px -2px rgba(0, 229, 153, 0.55), 0 0 16px rgba(0, 229, 153, 0.35)';
                  }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: 3D Rotary Dialer Graphic & Coordinates */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
            }}
            className="contact-right-visual"
          >
            {/* 3D Rotary Dialer Graphic with Seamless Floor Shadow */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Floor contact shadow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '6%',
                  left: '12%',
                  width: '76%',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 75%)',
                  filter: 'blur(12px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              <img
                src="/images/contact-dialer-3d.png"
                alt="3D Rotary Dialer Telephone with Message Bubble"
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  height: 'auto',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.75))',
                }}
              />
            </div>

            {/* Coordinates & Social Media Links (Right Aligned under phone) */}
            <div
              style={{
                marginTop: '1.75rem',
                width: '100%',
                maxWidth: '480px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Email with Target/Pin Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00e599"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
                <a
                  href="mailto:contact@chosen.com"
                  style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00e599')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  contact@chosen.com
                </a>
              </div>

              {/* Response SLA Note */}
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.52)',
                  fontSize: '0.84rem',
                  marginTop: '5px',
                  letterSpacing: '-0.01em',
                }}
              >
                Replies within 2 days • Direct founder review
              </div>

              {/* Social Media Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginTop: '0.95rem',
                }}
              >
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Twitter"
                  style={{ color: 'rgba(255, 255, 255, 0.65)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00e599')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{ color: 'rgba(255, 255, 255, 0.65)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00e599')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: 'rgba(255, 255, 255, 0.65)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#00e599')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .contact-right-visual {
            order: -1;
            align-items: center !important;
          }
          .contact-right-visual > div:last-child {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};
