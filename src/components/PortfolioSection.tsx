import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PortfolioCompany {
  id: string;
  index: string;
  badge: string;
  name: string;
  subtitle: string;
  description: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

export const PortfolioSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>('riskit');

  const companies: PortfolioCompany[] = [
    {
      id: 'riskit',
      index: '01',
      badge: 'Fitness & Money',
      name: 'RiskIT',
      subtitle: 'Fitness & Financial Accountability App',
      description: 'A fitness and money platform that ties real financial stakes and rewards to daily workouts, personal health goals, and physical discipline.',
      href: 'https://riskit.co.in/#apply',
      icon: (active) => (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : '#ffffff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Fitness activity pulse line with high-intensity peak */}
          <path d="M2 12h4l3-8 4 16 3-8h6" />
        </svg>
      ),
    },
    {
      id: 'tharunkumar-media',
      index: '02',
      badge: 'Media Company',
      name: 'Tharun Kumar Media',
      subtitle: 'Personal Venture Studio & Digital Media',
      description: 'Founded and led by Tharun Kumar to build, produce, and steward software and media ventures from the ground up.',
      href: 'https://tharunkumar.co/',
      icon: (active) => (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : '#ffffff'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" fill={active ? '#34d399' : 'none'} />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="portfolio"
      style={{
        padding: 'clamp(5.5rem, 9vh, 7.5rem) 0 clamp(4.5rem, 8vh, 6.5rem)',
        position: 'relative',
        backgroundColor: '#07080b',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(600px, 60vw, 950px)',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, rgba(16, 185, 129, 0.03) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {/* Section Header: Our Portfolio */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 1.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.12,
              margin: '0 0 0.75rem',
            }}
          >
            Our Portfolio
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            Companies founded, operated, and backed by Chosen.
          </p>
        </div>

        {/* Center Infinity Symbol Pill Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.35rem 1.15rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 20, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.25rem',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            ∞
          </div>
        </div>

        {/* The 2 Cards Stage (RiskIT & Tharun Kumar Media) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 'clamp(1.75rem, 3.5vw, 3rem)',
            flexWrap: 'wrap',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {companies.map((c) => {
            const isActive = activeCard === c.id;

            return (
              <motion.div
                key={c.id}
                onClick={() => setActiveCard(c.id)}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  flex: '1 1 380px',
                  maxWidth: '450px',
                  minHeight: '480px',
                  borderRadius: '24px',
                  background: isActive
                    ? 'linear-gradient(180deg, rgba(16, 22, 32, 0.95) 0%, rgba(9, 12, 18, 0.98) 100%)'
                    : 'linear-gradient(180deg, rgba(13, 16, 24, 0.75) 0%, rgba(8, 10, 15, 0.92) 100%)',
                  border: isActive
                    ? '1.5px solid rgba(52, 211, 153, 0.5)'
                    : '1px solid rgba(255, 255, 255, 0.09)',
                  boxShadow: isActive
                    ? '0 28px 56px -12px rgba(0, 0, 0, 0.88), 0 0 40px rgba(52, 211, 153, 0.16)'
                    : '0 16px 36px -8px rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: 'clamp(2rem, 3.5vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Ambient glow inside active card */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-20%',
                      right: '-20%',
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                {/* Top Row: Category Badge & Index Indicator */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: isActive ? '#34d399' : 'rgba(255, 255, 255, 0.65)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {c.badge}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {c.index}
                    </span>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? '#34d399' : 'rgba(255, 255, 255, 0.25)',
                        boxShadow: isActive ? '0 0 10px #34d399' : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Center Emblem Visual */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    margin: '2.5rem 0',
                  }}
                >
                  <div
                    style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      background: isActive ? 'rgba(52, 211, 153, 0.09)' : 'rgba(255, 255, 255, 0.03)',
                      border: isActive ? '1.5px solid rgba(52, 211, 153, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isActive ? '0 0 30px rgba(52, 211, 153, 0.18)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {c.icon(isActive)}
                  </div>
                </div>

                {/* Bottom Content: Name, Subtitle, Description & Direct Link */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      margin: '0 0 0.4rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {c.name}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.94rem',
                      color: isActive ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-muted)',
                      fontWeight: 500,
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {c.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: 1.6,
                      margin: '0 0 1.5rem',
                    }}
                  >
                    {c.description}
                  </p>

                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#34d399',
                      textDecoration: 'none',
                      transition: 'transform 0.2s ease, opacity 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(3px)';
                      e.currentTarget.style.opacity = '0.85';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    Visit Website
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
