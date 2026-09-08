import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { CompanyModal, type CompanyDetail } from './CompanyModal';

export const PortfolioSection: React.FC = () => {
  const [activeId, setActiveId] = useState<'tharun-kumar' | 'riskit'>('tharun-kumar');
  const [selectedModalCompany, setSelectedModalCompany] = useState<CompanyDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'STUDIO' | 'CYBER'>('ALL');

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  const portfolioData: Record<'tharun-kumar' | 'riskit', CompanyDetail> = {
    'tharun-kumar': {
      id: 'tharun-kumar',
      name: 'Tharun Kumar',
      category: 'Personal Studio',
      stage: 'Personal studio',
      logoSrc: '/logos/tharun-kumar.svg',
      logoAlt: 'Tharun Kumar',
      description:
        'A personal venture studio plus two active bets — one shipping, one still building.',
      fullThesis:
        'Tharun Kumar operates as our personal studio. We put capital into early software companies and stay involved without a timeline to sell.',
      governance: 'Founders run their company',
      capitalHorizon: 'No fixed exit timeline',
      headquarters: 'Independent',
      capabilities: ['Venture Studio', 'Software Engineering', 'Capital Allocation', 'Active Incubation'],
      href: 'https://tharunkumar.co/',
    },
    'riskit': {
      id: 'riskit',
      name: 'RiskIT',
      category: 'Cyber Security',
      stage: 'Cyber security',
      logoSrc: '/logos/riskit.svg',
      logoAlt: 'RiskIT',
      description:
        'Vulnerability mapping and protection for corporate networks.',
      fullThesis:
        'RiskIT builds security telemetry and vulnerability mitigation tools for businesses. We work with the team on core product engineering and distribution.',
      governance: 'Founders run their company',
      capitalHorizon: 'No fixed exit timeline',
      headquarters: 'Independent',
      capabilities: ['Cyber Security', 'Vulnerability Mapping', 'Telemetry', 'Cloud Infrastructure'],
      href: 'https://riskit.co.in/#apply',
    },
  };

  const activeCompany = portfolioData[activeId];

  // Number index mapping for huge typography
  const indexMap: Record<'tharun-kumar' | 'riskit', string> = {
    'tharun-kumar': '01',
    'riskit': '02',
  };

  const bottomColumns = [
    {
      num: '01',
      id: 'tharun-kumar' as const,
      title: 'THARUN KUMAR',
      sub: 'PERSONAL STUDIO',
    },
    {
      num: '02',
      id: 'riskit' as const,
      title: 'RISKIT',
      sub: 'CYBER SECURITY',
    },
  ];

  const handleFilterClick = (filter: 'ALL' | 'STUDIO' | 'CYBER') => {
    setActiveFilter(filter);
    if (filter === 'STUDIO') setActiveId('tharun-kumar');
    if (filter === 'CYBER') setActiveId('riskit');
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundColor: '#07080b',
        overflow: 'hidden',
        minHeight: '720px',
        padding: '5rem 0 4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Background Macro Engraved Money Eye with Parallax Optical Motion */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-6%',
          backgroundImage: 'url(/images/money-eye-widescreen.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 46%',
          opacity: 0.55,
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'contrast(1.15) brightness(0.9)',
          y: bgY,
          scale: bgScale,
        }}
      />

      {/* Atmospheric Vignette & Edge Blending into Pitch Black Canvas */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 50%, transparent 25%, rgba(7, 8, 11, 0.65) 60%, #07080b 100%), linear-gradient(180deg, #07080b 0%, transparent 18%, transparent 82%, #07080b 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1440px' }}>
        {/* TOP ROW: Tagline, Huge Number Index, Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              WHERE WE&apos;VE PUT OUR MONEY
              <span style={{ color: 'rgba(255, 255, 255, 0.25)', margin: '0 0.5rem' }}>/</span>
              TWO ACTIVE BETS
            </div>

            {/* Huge Bold Index Number (Exact from Reference "0°") */}
            <motion.div
              key={activeId}
              initial={{ opacity: 0.7, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(4rem, 7.5vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                color: '#ffffff',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.8)',
                marginBottom: '1rem',
              }}
            >
              {indexMap[activeId]}°
            </motion.div>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {(['ALL', 'STUDIO', 'CYBER'] as const).map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => handleFilterClick(filter)}
                    style={{
                      padding: '0.28rem 0.85rem',
                      borderRadius: '4px',
                      border: isActive ? '1px solid #34d399' : '1px solid rgba(255, 255, 255, 0.22)',
                      background: isActive ? 'rgba(52, 211, 153, 0.12)' : 'rgba(7, 8, 11, 0.4)',
                      color: isActive ? '#34d399' : '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      cursor: 'pointer',
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* CENTER STAGE: Active Company Editorial Info & Action Buttons */}
        <div
          style={{
            margin: '3.5rem 0 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            position: 'relative',
            zIndex: 15,
          }}
        >
          {/* Active Company Name & Pitch (Completely transparent over money eye) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              style={{ maxWidth: '620px' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-mint)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                {activeCompany.category}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  margin: '0 0 0.65rem',
                  textShadow: '0 2px 16px rgba(0, 0, 0, 0.7)',
                }}
              >
                {activeCompany.name}
              </h3>
              <p
                style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.55,
                  color: 'var(--text-secondary)',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                }}
              >
                {activeCompany.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={activeCompany.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.88rem',
                borderRadius: '9999px',
                background: '#ffffff',
                color: '#07080b',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              Visit {activeCompany.name} ↗
            </a>

            <button
              type="button"
              onClick={() => setSelectedModalCompany(activeCompany)}
              className="btn-secondary"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.88rem',
                borderRadius: '9999px',
                background: 'rgba(7, 8, 11, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              What We&apos;re Building
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Transparent Columns (Only the 2 invested ventures) */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {bottomColumns.map((col) => {
            const isSelected = col.id === activeId;

            return (
              <div
                key={col.num}
                onClick={() => setActiveId(col.id)}
                style={{
                  cursor: 'pointer',
                  padding: '0.75rem 1rem',
                  borderRadius: '6px',
                  background: isSelected ? 'rgba(52, 211, 153, 0.08)' : 'transparent',
                  border: isSelected ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: isSelected ? '#34d399' : 'rgba(255, 255, 255, 0.85)',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {col.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  {col.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: isSelected ? 'var(--accent-mint)' : 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginTop: '0.15rem',
                  }}
                >
                  {col.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Intelligence Brief Modal */}
      {selectedModalCompany && (
        <CompanyModal
          company={selectedModalCompany}
          onClose={() => setSelectedModalCompany(null)}
        />
      )}
    </section>
  );
};
