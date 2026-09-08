import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PrincipleCard {
  id: string;
  badge: string;
  stat: string;
  title: string;
  subtitle: string;
  desc: string;
  footerMetric: string;
  icon: (active: boolean) => React.ReactNode;
}

export const PrinciplesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 5 Core Principles — Plain, Simple, Human English (No AI/VC jargon)
  const principles: PrincipleCard[] = [
    {
      id: 'few-bets',
      badge: 'Focus',
      stat: '2 or 3 teams',
      title: 'Few teams',
      subtitle: 'No spreading thin',
      desc: "We only work with two or three companies at a time. That way, you get our full time and attention when you need it.",
      footerMetric: 'Max 3 teams at a time',
      icon: (active) => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.6)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        </svg>
      ),
    },
    {
      id: 'engineering-first',
      badge: 'Code',
      stat: 'We write code',
      title: 'Product first',
      subtitle: 'Build something real',
      desc: "If the product doesn't work well, nothing else matters. We sit down with you, write code, and fix problems.",
      footerMetric: 'We help build the software',
      icon: (active) => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.6)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      id: 'founders-run',
      badge: 'You',
      stat: '100% your calls',
      title: 'You stay in charge',
      subtitle: 'Your company, your calls',
      desc: "You make the choices. We don't take your board seats and we don't tell you how to run your daily work.",
      footerMetric: 'Zero board seats taken',
      icon: (active) => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.6)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      ),
    },
    {
      id: 'long-horizons',
      badge: 'Time',
      stat: 'No deadline',
      title: 'No rush to sell',
      subtitle: 'Here for the long run',
      desc: "We don't have a deadline to sell the business. If it makes good money and customers are happy, we stay.",
      footerMetric: 'No pressure to sell out',
      icon: (active) => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.6)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      id: 'real-profits',
      badge: 'Money',
      stat: 'Paying users',
      title: 'Real revenue first',
      subtitle: 'Cash over hype',
      desc: "We care about software that customers actually pay for, not raising endless funding or chasing online hype.",
      footerMetric: 'Paid by real customers',
      icon: (active) => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.6)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  const total = principles.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handlePrev();
      else handleNext();
    }
    touchStartX.current = null;
  };

  // Fluid responsive scale factors — unconstrained for large monitors
  const isUltrawide = windowWidth >= 1440;
  const isDesktop = windowWidth >= 1100 && windowWidth < 1440;
  const isSmallDesktop = windowWidth >= 880 && windowWidth < 1100;
  const isTablet = windowWidth >= 640 && windowWidth < 880;
  const isMobile = windowWidth < 640;

  const cardWidth = isUltrawide ? 350 : isDesktop ? 300 : isSmallDesktop ? 260 : isTablet ? 225 : 195;
  const cardHeight = isUltrawide ? 440 : isDesktop ? 390 : isSmallDesktop ? 350 : isTablet ? 320 : 290;
  const stageHeight = isUltrawide ? 520 : isDesktop ? 470 : isSmallDesktop ? 420 : isTablet ? 380 : 350;

  // 3D Inward Cylindrical Curve Transformation scaling dynamically across wide screens
  const get3DTransform = (offset: number) => {
    if (isUltrawide) {
      switch (offset) {
        case 0:
          return { x: 0, z: 0, rotateY: 0, scale: 1.05, opacity: 1, zIndex: 10 };
        case -1:
          return { x: -330, z: -90, rotateY: 25, scale: 0.92, opacity: 0.88, zIndex: 8 };
        case 1:
          return { x: 330, z: -90, rotateY: -25, scale: 0.92, opacity: 0.88, zIndex: 8 };
        case -2:
          return { x: -620, z: -210, rotateY: 44, scale: 0.80, opacity: 0.60, zIndex: 6 };
        case 2:
          return { x: 620, z: -210, rotateY: -44, scale: 0.80, opacity: 0.60, zIndex: 6 };
        default:
          return { x: 0, z: -350, rotateY: 0, scale: 0.5, opacity: 0, zIndex: 1 };
      }
    } else if (isDesktop) {
      switch (offset) {
        case 0:
          return { x: 0, z: 0, rotateY: 0, scale: 1.05, opacity: 1, zIndex: 10 };
        case -1:
          return { x: -270, z: -80, rotateY: 26, scale: 0.92, opacity: 0.86, zIndex: 8 };
        case 1:
          return { x: 270, z: -80, rotateY: -26, scale: 0.92, opacity: 0.86, zIndex: 8 };
        case -2:
          return { x: -510, z: -180, rotateY: 45, scale: 0.78, opacity: 0.58, zIndex: 6 };
        case 2:
          return { x: 510, z: -180, rotateY: -45, scale: 0.78, opacity: 0.58, zIndex: 6 };
        default:
          return { x: 0, z: -300, rotateY: 0, scale: 0.5, opacity: 0, zIndex: 1 };
      }
    } else if (isSmallDesktop) {
      switch (offset) {
        case 0:
          return { x: 0, z: 0, rotateY: 0, scale: 1.04, opacity: 1, zIndex: 10 };
        case -1:
          return { x: -215, z: -70, rotateY: 25, scale: 0.90, opacity: 0.85, zIndex: 8 };
        case 1:
          return { x: 215, z: -70, rotateY: -25, scale: 0.90, opacity: 0.85, zIndex: 8 };
        case -2:
          return { x: -400, z: -160, rotateY: 44, scale: 0.76, opacity: 0.55, zIndex: 6 };
        case 2:
          return { x: 400, z: -160, rotateY: -44, scale: 0.76, opacity: 0.55, zIndex: 6 };
        default:
          return { x: 0, z: -260, rotateY: 0, scale: 0.5, opacity: 0, zIndex: 1 };
      }
    } else if (isTablet) {
      switch (offset) {
        case 0:
          return { x: 0, z: 0, rotateY: 0, scale: 1.03, opacity: 1, zIndex: 10 };
        case -1:
          return { x: -160, z: -55, rotateY: 24, scale: 0.88, opacity: 0.82, zIndex: 8 };
        case 1:
          return { x: 160, z: -55, rotateY: -24, scale: 0.88, opacity: 0.82, zIndex: 8 };
        case -2:
          return { x: -295, z: -130, rotateY: 42, scale: 0.74, opacity: 0.52, zIndex: 6 };
        case 2:
          return { x: 295, z: -130, rotateY: -42, scale: 0.74, opacity: 0.52, zIndex: 6 };
        default:
          return { x: 0, z: -220, rotateY: 0, scale: 0.5, opacity: 0, zIndex: 1 };
      }
    } else {
      // Mobile (< 640px)
      switch (offset) {
        case 0:
          return { x: 0, z: 0, rotateY: 0, scale: 1.02, opacity: 1, zIndex: 10 };
        case -1:
          return { x: -108, z: -45, rotateY: 22, scale: 0.86, opacity: 0.80, zIndex: 8 };
        case 1:
          return { x: 108, z: -45, rotateY: -22, scale: 0.86, opacity: 0.80, zIndex: 8 };
        case -2:
          return { x: -198, z: -105, rotateY: 38, scale: 0.72, opacity: 0.48, zIndex: 6 };
        case 2:
          return { x: 198, z: -105, rotateY: -38, scale: 0.72, opacity: 0.48, zIndex: 6 };
        default:
          return { x: 0, z: -180, rotateY: 0, scale: 0.5, opacity: 0, zIndex: 1 };
      }
    }
  };

  return (
    <section
      id="principles"
      style={{
        padding: isUltrawide ? '7.5rem 0 6.5rem' : '6rem 0 5rem',
        position: 'relative',
        backgroundColor: 'var(--bg-app)',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: isUltrawide ? '1100px' : '750px',
          height: isUltrawide ? '550px' : '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1480px' }}>
        {/* Section Header — Simple, Direct, Human */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 0.85rem',
            }}
          >
            How we think
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.25vw, 1.18rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            Simple things that don&apos;t change, no matter who we talk to.
          </p>
        </div>

        {/* 3D Cylindrical Ring Stage — Fully Spanned Across Wide Displays */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            perspective: '1300px',
            perspectiveOrigin: '50% 48%',
            width: '100%',
            height: `${stageHeight}px`,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
          }}
        >
          {/* Navigation Chevron Left */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous principle"
            style={{
              position: 'absolute',
              left: isUltrawide ? '1rem' : isDesktop ? '1rem' : isMobile ? '0' : '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 35,
              width: isUltrawide ? '48px' : isMobile ? '36px' : '42px',
              height: isUltrawide ? '48px' : isMobile ? '36px' : '42px',
              borderRadius: '50%',
              background: 'rgba(13, 16, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.4)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(13, 16, 24, 0.85)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Navigation Chevron Right */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next principle"
            style={{
              position: 'absolute',
              right: isUltrawide ? '1rem' : isDesktop ? '1rem' : isMobile ? '0' : '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 35,
              width: isUltrawide ? '48px' : isMobile ? '36px' : '42px',
              height: isUltrawide ? '48px' : isMobile ? '36px' : '42px',
              borderRadius: '50%',
              background: 'rgba(13, 16, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.4)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(13, 16, 24, 0.85)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* 3D Cards Rendered on Inward Cylindrical Plane */}
          {principles.map((card, i) => {
            let offset = i - activeIndex;
            if (offset > 2) offset -= total;
            if (offset < -2) offset += total;

            const transform = get3DTransform(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveIndex(i)}
                animate={{
                  x: transform.x,
                  z: transform.z,
                  rotateY: transform.rotateY,
                  scale: transform.scale,
                  opacity: transform.opacity,
                  zIndex: transform.zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 24,
                  mass: 0.9,
                }}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  borderRadius: isUltrawide ? '24px' : isMobile ? '18px' : '22px',
                  background: isCenter
                    ? 'linear-gradient(180deg, rgba(16, 22, 32, 0.93) 0%, rgba(9, 12, 18, 0.98) 100%)'
                    : 'linear-gradient(180deg, rgba(13, 16, 24, 0.74) 0%, rgba(8, 10, 15, 0.92) 100%)',
                  border: isCenter
                    ? '1.5px solid rgba(52, 211, 153, 0.45)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isCenter
                    ? '0 28px 56px -12px rgba(0, 0, 0, 0.88), 0 0 36px rgba(52, 211, 153, 0.16)'
                    : '0 12px 28px -8px rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: isUltrawide ? '2rem 1.8rem' : isDesktop ? '1.75rem 1.5rem' : '1.3rem 1.1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: isCenter ? 'default' : 'pointer',
                  transformStyle: 'preserve-3d',
                  overflow: 'hidden',
                }}
              >
                {/* Ambient glow inside center card */}
                {isCenter && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-20%',
                      right: '-20%',
                      width: isUltrawide ? '190px' : '150px',
                      height: isUltrawide ? '190px' : '150px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(52, 211, 153, 0.18) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                {/* Top Row: Simple badge on left, short stat on right */}
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
                      fontSize: isUltrawide ? '0.86rem' : isDesktop ? '0.8rem' : '0.74rem',
                      fontWeight: 600,
                      color: isCenter ? '#34d399' : 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {card.badge}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: isUltrawide ? '0.82rem' : isDesktop ? '0.76rem' : '0.7rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {card.stat}
                  </span>
                </div>

                {/* Center Visual Emblem + Title + Plain English Desc */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2,
                    margin: 'auto 0',
                  }}
                >
                  {/* Circular Avatar / Emblem */}
                  <div
                    style={{
                      width: isUltrawide ? '72px' : isDesktop ? '64px' : isTablet ? '56px' : '48px',
                      height: isUltrawide ? '72px' : isDesktop ? '64px' : isTablet ? '56px' : '48px',
                      borderRadius: '50%',
                      background: isCenter ? 'rgba(52, 211, 153, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                      border: isCenter ? '1.5px solid rgba(52, 211, 153, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: isUltrawide ? '1.1rem' : '0.85rem',
                      boxShadow: isCenter ? '0 0 24px rgba(52, 211, 153, 0.16)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {card.icon(isCenter)}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: isUltrawide ? '1.42rem' : isDesktop ? '1.25rem' : isTablet ? '1.12rem' : '1.05rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    {card.title}
                  </h3>

                  <div
                    style={{
                      fontSize: isUltrawide ? '0.9rem' : isDesktop ? '0.82rem' : '0.75rem',
                      color: isCenter ? '#34d399' : 'var(--text-muted)',
                      fontWeight: 500,
                      marginBottom: isUltrawide ? '0.85rem' : '0.65rem',
                    }}
                  >
                    {card.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: isUltrawide ? '0.94rem' : isDesktop ? '0.86rem' : '0.76rem',
                      lineHeight: 1.6,
                      color: isCenter ? 'var(--text-secondary)' : 'var(--text-muted)',
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Footer Metric */}
                <div
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: isUltrawide ? '0.85rem' : '0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: isUltrawide ? '0.78rem' : isDesktop ? '0.72rem' : '0.66rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {card.footerMetric}
                  </span>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isCenter ? '#34d399' : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: isCenter ? '0 0 8px #34d399' : 'none',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Actions & Pagination */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: isUltrawide ? '3.5rem' : '2.5rem',
            gap: '1.25rem',
          }}
        >
          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#thesis"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                padding: '0.7rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              <span>How We Work</span>
            </a>

            <a
              href="#footer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: '#ffffff',
                color: '#07080b',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                padding: '0.7rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 255, 255, 0.15)';
              }}
            >
              <span>Talk With Us →</span>
            </a>
          </div>

          {/* Dots Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            {principles.map((p, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Jump to ${p.title}`}
                  style={{
                    border: 'none',
                    padding: 0,
                    width: isCurrent ? '26px' : '7px',
                    height: '7px',
                    borderRadius: '9999px',
                    backgroundColor: isCurrent ? '#34d399' : 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
