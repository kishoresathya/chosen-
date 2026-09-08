import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CompanyDetail {
  id: string;
  name: string;
  category: string;
  stage: string;
  logoSrc?: string;
  logoAlt?: string;
  isPipeline?: boolean;
  description: string;
  fullThesis: string;
  governance: string;
  capitalHorizon: string;
  headquarters: string;
  capabilities: string[];
  href: string;
  metrics?: { label: string; value: string }[];
}

interface CompanyModalProps {
  company: CompanyDetail | null;
  onClose: () => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ company, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (company) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [company, onClose]);

  if (!company) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {company.logoSrc ? (
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '0.75rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={company.logoSrc} alt={company.logoAlt || company.name} style={{ height: '32px', width: 'auto' }} />
                </div>
              ) : (
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'rgba(52, 211, 153, 0.1)',
                    border: '1px solid rgba(52, 211, 153, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-mint)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1rem',
                  }}
                >
                  ✦
                </div>
              )}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {company.category}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-mint)',
                    }}
                  >
                    <span className="status-dot" style={{ width: 5, height: 5 }} />
                    {company.stage}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: 0,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {company.name}
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--text-secondary)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              ✕
            </button>
          </div>

          {/* Thesis & Description */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-mint)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.75rem',
              }}
            >
              About
            </h4>
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.65,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              {company.fullThesis || company.description}
            </p>
          </div>

          {/* Key Specifications */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
              padding: '1.5rem',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                Control
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                {company.governance || 'Founders run their company'}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                Timeline
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                {company.capitalHorizon || 'No fixed exit timeline'}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                Structure
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                {company.headquarters || 'Private Holding'}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.75rem',
              }}
            >
              Focus Areas
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {company.capabilities.map((cap, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Chosen • Private Holding Company
            </span>

            {company.href.startsWith('http') ? (
              <a
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  borderRadius: '9999px',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.88rem',
                }}
              >
                Visit Website ↗
              </a>
            ) : (
              <a
                href="#footer"
                onClick={onClose}
                className="btn-primary"
                style={{
                  borderRadius: '9999px',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.88rem',
                }}
              >
                Get in Touch →
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
