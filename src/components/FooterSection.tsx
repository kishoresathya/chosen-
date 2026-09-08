import React, { useState } from 'react';
import { ChosenLogo } from './ChosenLogo';

export const FooterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        backgroundColor: '#07080b',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '5rem 0 3rem',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow matching Chosen palette */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 1 }}>
        {/* Full-Bleed 2-Column Contact Stage — Perfectly Aligned */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            gap: '3.5rem',
            alignItems: 'stretch',
            marginBottom: '4.5rem',
          }}
          className="contact-stage"
        >
          {/* LEFT SIDE: Contact Form */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              maxWidth: '500px',
              width: '100%',
            }}
            className="contact-form-column"
          >
            <div>
              {/* CONTACT US Heading */}
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  margin: '0 0 0.4rem',
                  lineHeight: 1.1,
                }}
              >
                Contact Us
              </h2>

              {/* DROP A MESSAGE with underline indicator */}
              <div style={{ marginBottom: '2rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#34d399',
                    borderBottom: '2.5px solid #34d399',
                    paddingBottom: '4px',
                  }}
                >
                  Drop a message
                </span>
              </div>

              {/* Input Form Fields */}
              {submitted ? (
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: '14px',
                    background: 'rgba(52, 211, 153, 0.08)',
                    border: '1px solid rgba(52, 211, 153, 0.35)',
                  }}
                >
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 600 }}>
                    ✓ Message Sent to Tharun
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                    Thanks for reaching out. Tharun reads every note himself and will reply to <strong>{formData.email}</strong> within 2 days.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    style={{
                      marginTop: '1.25rem',
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#ffffff',
                      padding: '0.55rem 1.2rem',
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                    }}
                  >
                    Send another note
                  </button>
                </div>
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
                      padding: '0.85rem 1.15rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#34d399';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(52, 211, 153, 0.15)';
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
                      padding: '0.85rem 1.15rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#34d399';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(52, 211, 153, 0.15)';
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
                      padding: '0.85rem 1.15rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#34d399';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(52, 211, 153, 0.15)';
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
                      padding: '0.85rem 1.15rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#34d399';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(52, 211, 153, 0.15)';
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
                      padding: '0.85rem 1.15rem',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#34d399';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(52, 211, 153, 0.15)';
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
                      marginTop: '0.5rem',
                      width: '100%',
                      padding: '0.95rem',
                      borderRadius: '9999px',
                      background: '#34d399',
                      color: '#07080b',
                      border: 'none',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(52, 211, 153, 0.35)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#4ee4ac';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(52, 211, 153, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#34d399';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(52, 211, 153, 0.35)';
                    }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: 3D Rotary Dialer (Aligned with Form) + Email & Social Media Info */}
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
            {/* Open 3D Rotary Dialer with Floor Shadows — Aligned With Form Fields */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '620px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '1.5rem',
              }}
            >
              {/* Deep contact shadow on floor directly beneath the telephone base & cord */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '12%',
                  width: '74%',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 45%, transparent 75%)',
                  filter: 'blur(12px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              {/* Extended soft ambient ground shadow spreading leftward under the spiraling cord */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '8%',
                  left: '6%',
                  width: '84%',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at 42% 50%, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.35) 55%, transparent 80%)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Transparent PNG 3D Rotary Dialer: No bounding box, No border, No card! */}
              <img
                src="/images/contact-dialer-3d.png"
                alt="3D Rotary Dialer Phone and Message Bubble"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  background: 'transparent',
                  border: 'none',
                  borderRadius: 0,
                  boxShadow: 'none',
                  filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.8))',
                }}
              />
            </div>

            {/* Bottom Right Email & Social Media Coordinates (Aligned with Submit Button) */}
            <div
              style={{
                marginTop: '1.75rem',
                width: '100%',
                maxWidth: '580px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                textAlign: 'right',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {/* Email with Pin Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href="mailto:contact@chosen.com"
                  style={{
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.94rem',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#34d399')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  contact@chosen.com
                </a>
              </div>

              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '3px' }}>
                Replies within 2 days • Direct founder review
              </div>

              {/* Social Media Links Neatly Placed Below the Email */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  marginTop: '0.85rem',
                }}
              >
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Twitter"
                  style={{
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#34d399')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
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
                  style={{
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#34d399')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#34d399')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Legal & Navigation Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          {/* Logo & Copyright */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <ChosenLogo height={28} />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} Chosen. All rights reserved.
            </span>
          </div>

          {/* Legal Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="interactive-link"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              Privacy Policy &amp; Disclosures
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="interactive-link"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#0e111a',
              border: '1px solid var(--border-light)',
              borderRadius: '20px',
              maxWidth: '620px',
              width: '100%',
              padding: '2.5rem',
              color: 'var(--text-primary)',
              maxHeight: '85vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700 }}>
                Privacy Policy &amp; Regulatory Disclosures
              </h3>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <strong>Information Collection:</strong> Chosen collects correspondence and contact information provided voluntarily by founders and partners through direct contact.
              </p>
              <p>
                <strong>Confidentiality:</strong> Any product documentation, code repositories, or metrics submitted to Chosen are kept strictly confidential.
              </p>
              <p>
                <strong>Regulatory Notice:</strong> Content provided on this website is for informational purposes only and does not constitute an offer to buy or sell securities. Chosen operates as an independent private holding company.
              </p>
              <p>
                <strong>Inquiries:</strong> If you have any questions or privacy inquiries, contact us directly at <code>contact@chosen.com</code>.
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="btn-primary"
                style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}
              >
                Close Disclosures
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          .contact-stage {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
          }
          .contact-right-visual {
            order: -1;
          }
        }
      `}</style>
    </footer>
  );
};
