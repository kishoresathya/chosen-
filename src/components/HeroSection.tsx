import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <section 
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'clamp(6.5rem, 11vh, 8.5rem)',
        paddingBottom: 0,
        overflow: 'hidden',
        backgroundColor: '#07080b',
      }}
    >
      {/* Cinematic Planetary Ring Cosmic Background infused with App Color Code */}
      <motion.div
        className="hero-cosmic-bg"
        style={{
          position: 'absolute',
          inset: '-4%',
          backgroundImage: 'url(/images/cosmic-ring-hero-wide.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 42%',
          opacity: 0.88,
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'contrast(1.08) brightness(0.96)',
          y: glowY,
        }}
      />

      {/* Atmospheric Edge Vignette & Scrim for Crisp Contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 32%, rgba(7, 8, 11, 0.32) 0%, rgba(7, 8, 11, 0.68) 58%, #07080b 100%), linear-gradient(180deg, rgba(7, 8, 11, 0.9) 0%, transparent 16%, transparent 72%, #07080b 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Subtle Ambient Mint Starlight Horizon Glow */}
      <div
        style={{
          position: 'absolute',
          left: '15%',
          right: '15%',
          top: '38%',
          height: '35%',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(52, 211, 153, 0.09) 0%, rgba(56, 189, 248, 0.05) 45%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Main Content Area: Centered, Elevated Hierarchy */}
      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem',
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div 
          style={{ 
            maxWidth: '960px', 
            margin: '0 auto', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            y: contentY,
            opacity: contentOpacity,
          }}
        >
          {/* Kicker Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.42rem 1.15rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(12, 16, 24, 0.75)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              backdropFilter: 'blur(12px)',
              marginBottom: '1.75rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#34d399',
                boxShadow: '0 0 10px #34d399',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                color: '#e2e8f0',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Private Software Holding Company
            </span>
          </motion.div>

          {/* Majestic Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
              fontWeight: 500,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 1.65rem',
              maxWidth: '920px',
              textWrap: 'balance',
              textShadow: '0 4px 32px rgba(0, 0, 0, 0.95), 0 0 60px rgba(0, 0, 0, 0.85)',
            }}
          >
            Chosen backs software companies{' '}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '1.08em',
                color: '#ffffff',
              }}
            >
              built to last,
            </span>{' '}
            not to exit.
          </motion.h1>

          {/* Clean Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.22rem)',
              lineHeight: 1.65,
              letterSpacing: '-0.012em',
              maxWidth: '56ch',
              margin: '0 auto 2.75rem',
              color: 'var(--text-secondary)',
              fontWeight: 400,
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.95)',
            }}
          >
            We&apos;re a small holding company. We put in capital, stay involved, and don&apos;t have a timeline to sell.
          </motion.p>

          {/* Centered Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: 'clamp(2.5rem, 6vh, 4rem)',
            }}
          >
            <motion.a 
              href="#portfolio" 
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                borderRadius: '9999px',
                padding: '0.85rem 2.1rem',
                fontSize: '0.92rem',
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.15), 0 0 30px rgba(52, 211, 153, 0.25)',
              }}
            >
              View Portfolio (2)
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#thesis" 
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                borderRadius: '9999px',
                padding: '0.85rem 2.1rem',
                fontSize: '0.92rem',
                background: 'rgba(12, 16, 24, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backdropFilter: 'blur(12px)',
              }}
            >
              Why We Invest
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-Bleed Continuous Marquee Ribbon (Structural Edge Anchor) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="marquee-container"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 2,
          padding: '1.15rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'linear-gradient(180deg, rgba(7, 8, 11, 0.55) 0%, rgba(7, 8, 11, 0.88) 100%)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div 
              key={i} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '3rem',
                paddingRight: '3rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: '#ffffff' }}>✦ Tharun Kumar (Personal Studio)</span>
              <span style={{ color: '#34d399' }}>✦ RiskIT (Cyber Security)</span>
              <span>✦ Active Pipeline</span>
              <span style={{ color: '#ffffff' }}>✦ Built to Last</span>
              <span style={{ color: '#38bdf8' }}>✦ No Fixed Timeline</span>
              <span>✦ We Help Build</span>
              <span style={{ color: '#34d399' }}>✦ Long-Term Compounding</span>
              <span>✦ Private Holding Company</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Responsive Styles for Mobile Positioning */}
      <style>{`
        @media (max-width: 640px) {
          .hero-cosmic-bg {
            background-image: url(/images/cosmic-ring-hero-mobile.jpg) !important;
            background-position: center 36% !important;
          }
        }
      `}</style>
    </section>
  );
};

