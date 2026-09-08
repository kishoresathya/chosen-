import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface WorkCard {
  id: string;
  tag: string;
  cardTitle: string;
  cardSnippet: string;
  headline: string;
  desc: string;
  icon: (active: boolean) => React.ReactNode;
}

export const WhatWeDoSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );
  const touchStartX = useRef<number | null>(null);

  // Resize listener for fluid responsive arc calculations across all screen widths
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simple, normal human English — easy to read and understand
  const cards: WorkCard[] = [
    {
      id: 'timeline',
      tag: 'Timeline',
      cardTitle: 'No rush to sell',
      cardSnippet: 'No fund deadline',
      headline: 'No rush to sell',
      desc: "We don't have a deadline to sell. If a company makes good money and keeps growing, we stay with it for the long haul.",
      icon: (active) => (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.5)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      id: 'building',
      tag: 'Engineering',
      cardTitle: 'We help build',
      cardSnippet: 'Writing code together',
      headline: 'We help write code',
      desc: "We are software engineers ourselves. We sit with you, write code, and help launch real products.",
      icon: (active) => (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.5)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      id: 'control',
      tag: 'Ownership',
      cardTitle: 'You stay in charge',
      cardSnippet: 'Your company, your calls',
      headline: 'You run the company',
      desc: "You make the calls. We don't take your board seats or tell you how to run your day-to-day work.",
      icon: (active) => (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.5)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      ),
    },
    {
      id: 'focus',
      tag: 'Focus',
      cardTitle: 'Just 2 or 3 bets',
      cardSnippet: 'Real attention, no rushing',
      headline: 'Only 2 or 3 companies',
      desc: "We don't back dozens of companies hoping one makes it. We only work with a few so we can actually give you our full time.",
      icon: (active) => (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.5)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      ),
    },
    {
      id: 'revenue',
      tag: 'Revenue',
      cardTitle: 'Real profits first',
      cardSnippet: 'Real money, not hype',
      headline: 'Real money first',
      desc: "We focus on building software that customers pay for, instead of chasing hype or endless fundraising rounds.",
      icon: (active) => (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={active ? '#34d399' : 'rgba(255, 255, 255, 0.5)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="12" y1="8" x2="12" y2="16" />
        </svg>
      ),
    },
  ];

  const total = cards.length;
  const activeCard = cards[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Touch swipe support for mobile
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

  // Multi-tier responsive measurements — fully utilizing huge space on large monitors without limitation
  const isUltrawide = windowWidth >= 1440;
  const isDesktop = windowWidth >= 1100 && windowWidth < 1440;
  const isSmallDesktop = windowWidth >= 880 && windowWidth < 1100;
  const isTablet = windowWidth >= 640 && windowWidth < 880;
  const isMobile = windowWidth < 640;

  const cardWidth = isUltrawide ? 310 : isDesktop ? 265 : isSmallDesktop ? 225 : isTablet ? 190 : 155;
  const cardHeight = isUltrawide ? 390 : isDesktop ? 340 : isSmallDesktop ? 295 : isTablet ? 260 : 215;
  const arcContainerHeight = isUltrawide ? 470 : isDesktop ? 420 : isSmallDesktop ? 370 : isTablet ? 330 : 280;

  // Compute position, rotation, scale, and zIndex for slot offset in [-2, -1, 0, 1, 2]
  const getSlotTransform = (offset: number) => {
    if (isUltrawide) {
      switch (offset) {
        case 0:
          return { x: 0, y: 0, rotate: 0, scale: 1.06, zIndex: 10, opacity: 1 };
        case -1:
          return { x: -245, y: 28, rotate: -9, scale: 0.93, zIndex: 8, opacity: 0.88 };
        case 1:
          return { x: 245, y: 28, rotate: 9, scale: 0.93, zIndex: 8, opacity: 0.88 };
        case -2:
          return { x: -470, y: 74, rotate: -18, scale: 0.82, zIndex: 6, opacity: 0.65 };
        case 2:
          return { x: 470, y: 74, rotate: 18, scale: 0.82, zIndex: 6, opacity: 0.65 };
        default:
          return { x: 0, y: 120, rotate: 0, scale: 0.5, zIndex: 1, opacity: 0 };
      }
    } else if (isDesktop) {
      switch (offset) {
        case 0:
          return { x: 0, y: 0, rotate: 0, scale: 1.05, zIndex: 10, opacity: 1 };
        case -1:
          return { x: -205, y: 24, rotate: -9.5, scale: 0.92, zIndex: 8, opacity: 0.86 };
        case 1:
          return { x: 205, y: 24, rotate: 9.5, scale: 0.92, zIndex: 8, opacity: 0.86 };
        case -2:
          return { x: -395, y: 66, rotate: -19, scale: 0.80, zIndex: 6, opacity: 0.62 };
        case 2:
          return { x: 395, y: 66, rotate: 19, scale: 0.80, zIndex: 6, opacity: 0.62 };
        default:
          return { x: 0, y: 100, rotate: 0, scale: 0.5, zIndex: 1, opacity: 0 };
      }
    } else if (isSmallDesktop) {
      switch (offset) {
        case 0:
          return { x: 0, y: 0, rotate: 0, scale: 1.04, zIndex: 10, opacity: 1 };
        case -1:
          return { x: -165, y: 22, rotate: -9, scale: 0.90, zIndex: 8, opacity: 0.85 };
        case 1:
          return { x: 165, y: 22, rotate: 9, scale: 0.90, zIndex: 8, opacity: 0.85 };
        case -2:
          return { x: -315, y: 58, rotate: -18, scale: 0.78, zIndex: 6, opacity: 0.60 };
        case 2:
          return { x: 315, y: 58, rotate: 18, scale: 0.78, zIndex: 6, opacity: 0.60 };
        default:
          return { x: 0, y: 80, rotate: 0, scale: 0.5, zIndex: 1, opacity: 0 };
      }
    } else if (isTablet) {
      switch (offset) {
        case 0:
          return { x: 0, y: 0, rotate: 0, scale: 1.03, zIndex: 10, opacity: 1 };
        case -1:
          return { x: -125, y: 18, rotate: -8.5, scale: 0.88, zIndex: 8, opacity: 0.82 };
        case 1:
          return { x: 125, y: 18, rotate: 8.5, scale: 0.88, zIndex: 8, opacity: 0.82 };
        case -2:
          return { x: -235, y: 48, rotate: -17, scale: 0.76, zIndex: 6, opacity: 0.55 };
        case 2:
          return { x: 235, y: 48, rotate: 17, scale: 0.76, zIndex: 6, opacity: 0.55 };
        default:
          return { x: 0, y: 70, rotate: 0, scale: 0.5, zIndex: 1, opacity: 0 };
      }
    } else {
      // Mobile (< 640px)
      switch (offset) {
        case 0:
          return { x: 0, y: 0, rotate: 0, scale: 1.02, zIndex: 10, opacity: 1 };
        case -1:
          return { x: -78, y: 14, rotate: -8, scale: 0.86, zIndex: 8, opacity: 0.80 };
        case 1:
          return { x: 78, y: 14, rotate: 8, scale: 0.86, zIndex: 8, opacity: 0.80 };
        case -2:
          return { x: -145, y: 36, rotate: -16, scale: 0.72, zIndex: 6, opacity: 0.50 };
        case 2:
          return { x: 145, y: 36, rotate: 16, scale: 0.72, zIndex: 6, opacity: 0.50 };
        default:
          return { x: 0, y: 60, rotate: 0, scale: 0.5, zIndex: 1, opacity: 0 };
      }
    }
  };

  return (
    <section
      id="thesis"
      style={{
        padding: isUltrawide ? '6.5rem 0 5.5rem' : '5rem 0 4rem',
        position: 'relative',
        backgroundColor: 'var(--bg-app)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1440px' }}>
        {/* Section Header - Plain, Normal English */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.75rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 0.75rem',
            }}
          >
            How we work
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.15rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            A few simple rules we follow with every company we back.
          </p>
        </div>

        {/* Minimalist Aperture Icon at Top Center */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: isUltrawide ? '3rem' : '2.25rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.45rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" />
              <circle cx="21" cy="7" r="5.5" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" />
              <line x1="12.5" y1="7" x2="15.5" y2="7" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* The 5-Card Fanned Arc Deck — Expanded for Full Screen Width */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: isUltrawide ? '1400px' : isDesktop ? '1200px' : '100%',
            margin: '0 auto',
            height: `${arcContainerHeight}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            userSelect: 'none',
          }}
        >
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous card"
            style={{
              position: 'absolute',
              left: isUltrawide ? '1rem' : isDesktop ? '0.75rem' : isTablet ? '0.25rem' : '-0.25rem',
              top: '42%',
              transform: 'translateY(-50%)',
              zIndex: 35,
              width: isUltrawide ? '46px' : isMobile ? '36px' : '42px',
              height: isUltrawide ? '46px' : isMobile ? '36px' : '42px',
              borderRadius: '50%',
              background: 'rgba(13, 16, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next card"
            style={{
              position: 'absolute',
              right: isUltrawide ? '1rem' : isDesktop ? '0.75rem' : isTablet ? '0.25rem' : '-0.25rem',
              top: '42%',
              transform: 'translateY(-50%)',
              zIndex: 35,
              width: isUltrawide ? '46px' : isMobile ? '36px' : '42px',
              height: isUltrawide ? '46px' : isMobile ? '36px' : '42px',
              borderRadius: '50%',
              background: 'rgba(13, 16, 24, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards Rendered in Radial Arc Layout */}
          {cards.map((card, i) => {
            let offset = i - activeIndex;
            if (offset > 2) offset -= total;
            if (offset < -2) offset += total;

            const transform = getSlotTransform(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveIndex(i)}
                animate={{
                  x: transform.x,
                  y: transform.y,
                  rotate: transform.rotate,
                  scale: transform.scale,
                  opacity: transform.opacity,
                  zIndex: transform.zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 25,
                  mass: 0.85,
                }}
                whileHover={
                  !isCenter
                    ? {
                        scale: transform.scale * 1.04,
                        opacity: Math.min(1, transform.opacity + 0.15),
                        transition: { duration: 0.2 },
                      }
                    : undefined
                }
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  borderRadius: isUltrawide ? '24px' : isMobile ? '18px' : '22px',
                  background: isCenter
                    ? 'linear-gradient(180deg, rgba(16, 22, 32, 0.90) 0%, rgba(9, 12, 18, 0.98) 100%)'
                    : 'linear-gradient(180deg, rgba(14, 18, 26, 0.68) 0%, rgba(8, 10, 15, 0.90) 100%)',
                  border: isCenter 
                    ? '1.5px solid rgba(52, 211, 153, 0.45)' 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isCenter
                    ? '0 28px 56px -12px rgba(0, 0, 0, 0.88), 0 0 36px rgba(52, 211, 153, 0.16)'
                    : '0 12px 28px -8px rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  cursor: isCenter ? 'default' : 'pointer',
                  padding: isUltrawide ? '1.85rem 1.6rem' : isDesktop ? '1.6rem 1.35rem' : isTablet ? '1.3rem 1.1rem' : '1.1rem 0.9rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Ambient Radial Glow Inside Active Card */}
                {isCenter && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-20%',
                      right: '-20%',
                      width: isUltrawide ? '180px' : '140px',
                      height: isUltrawide ? '180px' : '140px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(52, 211, 153, 0.18) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}

                {/* Top Row: Category tag and status dot */}
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
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      color: isCenter ? '#34d399' : 'var(--text-muted)',
                    }}
                  >
                    {card.tag}
                  </span>
                  <div
                    style={{
                      width: isUltrawide ? '8px' : '6px',
                      height: isUltrawide ? '8px' : '6px',
                      borderRadius: '50%',
                      backgroundColor: isCenter ? '#34d399' : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: isCenter ? '0 0 10px #34d399' : 'none',
                    }}
                  />
                </div>

                {/* Center Graphic Emblem */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    position: 'relative',
                    zIndex: 2,
                    margin: isUltrawide ? '1.2rem 0' : '0.8rem 0',
                  }}
                >
                  <div
                    style={{
                      width: isUltrawide ? '80px' : isDesktop ? '70px' : isTablet ? '60px' : '52px',
                      height: isUltrawide ? '80px' : isDesktop ? '70px' : isTablet ? '60px' : '52px',
                      borderRadius: '50%',
                      background: isCenter ? 'rgba(52, 211, 153, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                      border: isCenter ? '1.5px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(255, 255, 255, 0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isCenter ? '0 0 24px rgba(52, 211, 153, 0.15)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {card.icon(isCenter)}
                  </div>
                </div>

                {/* Bottom Card Title & Snippet */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: isUltrawide ? '1.24rem' : isDesktop ? '1.12rem' : isTablet ? '1rem' : '0.92rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      margin: '0 0 0.3rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {card.cardTitle}
                  </h4>
                  <p
                    style={{
                      fontSize: isUltrawide ? '0.88rem' : isDesktop ? '0.82rem' : '0.74rem',
                      color: isCenter ? 'var(--text-secondary)' : 'var(--text-muted)',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {card.cardSnippet}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Text Below the Cards */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: isUltrawide ? '740px' : '620px',
            margin: isUltrawide ? '3.5rem auto 0' : '2.5rem auto 0',
            minHeight: '130px',
          }}
        >
          {/* Active Card Title */}
          <h3
            key={activeCard.headline}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 1.2,
              margin: '0 0 0.85rem',
            }}
          >
            {activeCard.headline}
          </h3>

          {/* Active Card Description — Simple, Core, Easy to Understand */}
          <p
            key={activeCard.desc}
            style={{
              fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              margin: '0 auto 2rem',
              maxWidth: isUltrawide ? '640px' : '540px',
            }}
          >
            {activeCard.desc}
          </p>

          {/* Action Pill Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a
              href="#footer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                background: '#ffffff',
                color: '#07080b',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.94rem',
                fontWeight: 600,
                padding: '0.6rem 0.75rem 0.6rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 14px 32px -6px rgba(255, 255, 255, 0.3), 0 6px 16px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 255, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.5)';
              }}
            >
              <span>Talk with Us</span>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: '#07080b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'transform 0.2s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* Dots Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: isUltrawide ? '2.25rem' : '1.75rem',
            }}
          >
            {cards.map((card, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to card ${idx + 1}`}
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
