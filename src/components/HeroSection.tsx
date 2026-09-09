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

  // Exclusive ticker phrases as instructed by the user
  const tickerItems = [
    { text: '✦ RISKIT', color: '#34d399' },
    { text: '✦ ACTIVE PIPELINE', color: 'var(--text-muted)' },
    { text: '✦ BUILT TO LAST', color: '#ffffff' },
    { text: '✦ NO FIXED TIMELINE', color: '#38bdf8' },
    { text: '✦ WE HELP BUILD', color: 'var(--text-muted)' },
    { text: '✦ 100% SELF-FUNDED', color: '#34d399' },
    { text: '✦ FOUNDED & RUN BY CHOSEN', color: '#ffffff' },
    { text: '✦ LONG-TERM OWNERSHIP', color: '#38bdf8' },
    { text: '✦ ZERO OUTSIDE CAPITAL', color: '#34d399' },
    { text: '✦ CHENNAI, INDIA', color: 'var(--text-muted)' },
    { text: '✦ BUILDING SINCE DAY ONE', color: '#ffffff' },
    { text: '✦ FULLY OWNED', color: '#34d399' },
    { text: '✦ ONE COMPANY AT A TIME', color: 'var(--text-muted)' },
    { text: '✦ HANDS-ON, ALWAYS', color: '#ffffff' },
    { text: '✦ NO OUTSIDE FOUNDERS', color: '#38bdf8' },
    { text: '✦ IN-HOUSE, END TO END', color: '#34d399' },
  ];

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

      {/* Main Content Area: Centered, Grand Institutional Statement */}
      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div 
          style={{ 
            maxWidth: '1280px', 
            width: '100%',
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
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(12, 16, 24, 0.75)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              backdropFilter: 'blur(12px)',
              marginBottom: '2rem',
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
              The Parent Company
            </span>
          </motion.div>

          {/* Majestic Grand Headline: Centered & Extra Massive */}
          <motion.h1
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 'clamp(3.6rem, 7.8vw, 7rem)',
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              margin: '0 auto 2.2rem',
              maxWidth: '1240px',
              textWrap: 'balance',
              textAlign: 'center',
              textShadow: '0 4px 32px rgba(0, 0, 0, 0.95), 0 0 60px rgba(0, 0, 0, 0.85)',
            }}
          >
            Chosen isn&apos;t just a name.
            <br />
            It&apos;s a mission statement.
          </motion.h1>

          {/* Clean Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
              lineHeight: 1.6,
              letterSpacing: '-0.012em',
              maxWidth: '58ch',
              margin: '0 auto',
              color: 'var(--text-secondary)',
              fontWeight: 400,
              textAlign: 'center',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.95)',
            }}
          >
            Many companies, one name behind all of them — Chosen, from the very first day.
          </motion.p>
        </motion.div>
      </div>

      {/* Full-Bleed Continuous Marquee Ribbon (Running Only User Specified Names) */}
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
        <div className="marquee-track" style={{ animation: 'marquee-scroll 45s linear infinite' }}>
          {[...Array(2)].map((_, groupIdx) => (
            <div 
              key={groupIdx} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '3.25rem',
                paddingRight: '3.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {tickerItems.map((item, idx) => (
                <span key={idx} style={{ color: item.color }}>
                  {item.text}
                </span>
              ))}
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
