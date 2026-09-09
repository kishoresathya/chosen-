import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChosenLogo } from './ChosenLogo';

interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarProps {
  activePage?: 'home' | 'contact';
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('overview');

  const isNavigatingRef = useRef(false);

  // Navigation options matching the institution sections
  const navLinks: NavLinkItem[] = [
    { id: 'overview', label: 'Overview', href: '#hero' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'founders', label: 'Founders', href: '#founders' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Effective active item: if on contact page, it's always 'contact'
  const currentActiveId = activePage === 'contact' ? 'contact' : activeSectionId;

  // Track active section on scroll only when on home page
  useEffect(() => {
    if (activePage !== 'home') return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 25);

      if (isNavigatingRef.current) return;

      const sectionMappings: { id: string; sectionId: string }[] = [
        { id: 'overview', sectionId: 'hero' },
        { id: 'portfolio', sectionId: 'portfolio' },
        { id: 'founders', sectionId: 'founders' },
      ];

      const scrollPos = currentScrollY + 220;

      for (let i = sectionMappings.length - 1; i >= 0; i--) {
        const item = sectionMappings[i];
        const el = document.getElementById(item.sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSectionId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

  const handleLinkClick = (e: React.MouseEvent, link: NavLinkItem) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.id === 'contact') {
      if (onNavigate) {
        onNavigate('contact');
      } else {
        window.location.hash = '#contact';
      }
      return;
    }

    const sectionMapping: Record<string, string> = {
      overview: 'hero',
      portfolio: 'portfolio',
      founders: 'founders',
    };

    const targetSection = sectionMapping[link.id] || 'hero';

    if (onNavigate) {
      onNavigate('home', targetSection);
    } else {
      window.location.hash = `#${targetSection}`;
    }

    setActiveSectionId(link.id);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 120,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none',
      }}
    >
      {/* Floating Pill Dock matching screenshot reference */}
      <div
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '1080px',
          backgroundColor: scrolled || activePage === 'contact' ? 'rgba(9, 11, 15, 0.92)' : 'rgba(9, 11, 15, 0.82)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '9999px',
          padding: '0.62rem 1.35rem 0.62rem 1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.85), 0 0 1px rgba(255, 255, 255, 0.1)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        {/* Left: Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home', 'hero');
            else window.location.hash = '#hero';
          }}
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            userSelect: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
          }}
          aria-label="Chosen Home"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <ChosenLogo height={24} />
        </a>

        {/* Center: Nav links with animated mint active underline */}
        <nav
          aria-label="Primary Navigation"
          className="chosen-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1.4rem, 2.5vw, 2.75rem)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = currentActiveId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                style={{
                  position: 'relative',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 450,
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                  textDecoration: 'none',
                  padding: '0.35rem 0.15rem',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)';
                }}
              >
                <span>{link.label}</span>

                {/* Animated active underline in neon mint */}
                {isActive && (
                  <motion.span
                    layoutId="chosenActiveUnderline"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      background: 'linear-gradient(90deg, #10b981 0%, #00e599 100%)',
                      boxShadow: '0 0 10px rgba(0, 229, 153, 0.8)',
                      borderRadius: '2px',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Get in Touch White Capsule Pill Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="chosen-nav-actions">
          <button
            type="button"
            onClick={() => {
              if (onNavigate) {
                onNavigate('contact');
              } else {
                window.location.hash = '#contact';
              }
            }}
            style={{
              backgroundColor: '#ffffff',
              color: '#07080b',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.52rem 1.25rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.86rem',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00e599';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(0, 229, 153, 0.6)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="chosen-mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            padding: '0.35rem',
            color: '#ffffff',
            cursor: 'pointer',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: '1rem',
            right: '1rem',
            pointerEvents: 'auto',
            backgroundColor: 'rgba(9, 11, 15, 0.98)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = currentActiveId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                style={{
                  color: isActive ? '#00e599' : '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: isActive ? 700 : 500,
                  padding: '0.65rem 0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#00e599',
                      boxShadow: '0 0 8px rgba(0, 229, 153, 0.9)',
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .chosen-nav-links { display: none !important; }
          .chosen-nav-actions { display: none !important; }
          .chosen-mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
