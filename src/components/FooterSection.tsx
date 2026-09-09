import React, { useState } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface FooterSectionProps {
  onOpenContact?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const [activeModal, setActiveModal] = useState<null | 'privacy' | 'terms'>(null);
  const { scrollTo } = useSmoothScroll();

  // Actual businesses operated by Chosen
  const businesses = [
    { name: 'Tharun Kumar Media', href: 'https://tharunkumar.co/', external: true },
    { name: 'RiskIT', href: 'https://riskit.co.in/#apply', external: true },
  ];

  return (
    <footer id="footer" style={{ position: 'relative', width: '100%' }}>
      {/* Top Tier: Clean Multi-Column Corporate Layout (Exact Eternal Benchmark) */}
      <div
        style={{
          backgroundColor: '#090b10',
          borderTop: '1px solid rgba(255, 255, 255, 0.07)',
          padding: 'clamp(4.5rem, 8vh, 6.5rem) 0 clamp(4rem, 7vh, 5.5rem)',
        }}
      >
        <div
          className="container footer-grid-stage"
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5vw, 4.5rem)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr) minmax(0, 1.2fr)',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'flex-start',
          }}
        >
          {/* Left: Chosen Brand Identity (Logo Icon + 'chosen' Wordmark) */}
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#hero', { duration: 1.2 });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.9rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label="Chosen Homepage"
            >
              {/* Hexagonal Chosen Emblem with Green Center */}
              <svg 
                width="38" 
                height="38" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  flexShrink: 0,
                  display: 'block',
                  transform: 'translateY(4px)',
                }}
              >
                {/* Outer Hexagon */}
                <path 
                  d="M16 3L27 9.5V22.5L16 29L5 22.5V9.5L16 3Z" 
                  stroke="#ffffff" 
                  strokeWidth="2" 
                  strokeLinejoin="round"
                />
                {/* Internal Geometry Spokes */}
                <path 
                  d="M16 3V29M5 9.5L27 22.5M5 22.5L27 9.5" 
                  stroke="rgba(255, 255, 255, 0.35)" 
                  strokeWidth="1.2" 
                />
                {/* Mint Emerald Center */}
                <circle cx="16" cy="16" r="3.2" fill="#00e599" />
              </svg>

              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: '#ffffff',
                  lineHeight: 1,
                  display: 'inline-block',
                }}
              >
                chosen
              </span>
            </a>
          </div>

          {/* Column 1: Our businesses */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.98rem',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-0.01em',
                margin: '0 0 1.5rem',
                lineHeight: 1.2,
              }}
            >
              Our businesses
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              {businesses.map((b) => (
                <li key={b.name}>
                  <a
                    href={b.href}
                    target={b.external ? '_blank' : undefined}
                    rel={b.external ? 'noopener noreferrer' : undefined}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      color: 'rgba(255, 255, 255, 0.58)',
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'color 0.18s ease, transform 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#34d399';
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.58)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: More info (Consolidating About and Get in touch into single column) */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.98rem',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-0.01em',
                margin: '0 0 1.5rem',
                lineHeight: 1.2,
              }}
            >
              More info
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              {/* Founders link */}
              <li>
                <a
                  href="#founders"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#founders', { duration: 1.2 });
                  }}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    color: 'rgba(255, 255, 255, 0.58)',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'color 0.18s ease, transform 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#34d399';
                    e.currentTarget.style.transform = 'translateX(2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.58)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Founders
                </a>
              </li>

              {/* Contact link */}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      window.dispatchEvent(new CustomEvent('open-contact'));
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    color: 'rgba(255, 255, 255, 0.58)',
                    cursor: 'pointer',
                    display: 'inline-block',
                    transition: 'color 0.18s ease, transform 0.18s ease',
                    textAlign: 'left',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#34d399';
                    e.currentTarget.style.transform = 'translateX(2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.58)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Tier: Left-Aligned Copyright & Legal Links (Exact Eternal Benchmark) */}
      <div
        style={{
          backgroundColor: '#06070a',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '2.25rem 0',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5vw, 4.5rem)',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1.75rem, 3vw, 3rem)',
            flexWrap: 'wrap',
          }}
        >
          {/* © 2026 Chosen Ltd. */}
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.42)',
              letterSpacing: '-0.01em',
            }}
          >
            © 2026 Chosen Ltd.
          </span>

          {/* Privacy policy */}
          <button
            type="button"
            onClick={() => setActiveModal('privacy')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.42)',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              transition: 'color 0.18s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.42)')}
          >
            Privacy policy
          </button>

          {/* Terms */}
          <button
            type="button"
            onClick={() => setActiveModal('terms')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.42)',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              transition: 'color 0.18s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.42)')}
          >
            Terms
          </button>
        </div>
      </div>

      {/* Clean Interactive Modals for Legal / Direct Contact */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              backgroundColor: '#0e111a',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              maxWidth: '560px',
              width: '100%',
              padding: '2.5rem',
              color: '#ffffff',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {activeModal === 'privacy' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                    Privacy Policy
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.4rem', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    Chosen Ltd. values privacy and discretion. We do not sell, rent, or monetize personal data or correspondence.
                  </p>
                  <p>
                    Direct correspondence received through <code>contact@chosen.com</code> is used solely to evaluate potential partnerships, venture stewardship, or executive inquiries.
                  </p>
                  <p>
                    Any telemetry or analytical cookies used on this site are non-invasive and intended solely to maintain optimal system performance.
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '0.55rem 1.4rem',
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.5)', fontSize: '1.4rem', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.92rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>
                    All content on this website is for informational purposes regarding Chosen Ltd. and its operating holdings.
                  </p>
                  <p>
                    Nothing contained herein constitutes an offer to purchase or sell securities or a public solicitation of capital.
                  </p>
                  <p>
                    All brand assets, software trademarks, and portfolio identifiers are the exclusive property of Chosen Ltd. and their respective entities.
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '0.55rem 1.4rem',
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 840px) {
          .footer-grid-stage {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 520px) {
          .footer-grid-stage {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
