import React, { useState, useEffect } from 'react';
import { ChosenLogo } from './ChosenLogo';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'How We Work', href: '#thesis' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'How We Think', href: '#principles' },
    { label: 'Contact', href: '#footer' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(href, { offset: -40, duration: 1.4 });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: '1rem',
        zIndex: 100,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1.25rem',
        pointerEvents: 'none',
      }}
    >
      <nav
        aria-label="Main Navigation"
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '980px',
          background: scrolled ? 'rgba(10, 12, 18, 0.88)' : 'rgba(12, 15, 22, 0.72)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          padding: '0.6rem 0.85rem 0.6rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled
            ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)'
            : '0 12px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleScroll(e, '#hero')}
          style={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Chosen Homepage"
        >
          <ChosenLogo />
        </a>

        {/* Desktop Navigation Links */}
        <div 
          className="desktop-nav-links" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.4rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.86rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
                padding: '0.45rem 0.95rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action Button */}
        <div className="desktop-nav-cta" style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="#footer"
            onClick={(e) => handleScroll(e, '#footer')}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.84rem',
              fontWeight: 600,
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              background: '#ffffff',
              color: '#07080b',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 10px rgba(255, 255, 255, 0.12)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.12)';
            }}
          >
            Get in Touch
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            padding: '0.4rem',
            color: 'var(--text-primary)',
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
      </nav>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            pointerEvents: 'auto',
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: '1.25rem',
            right: '1.25rem',
            maxWidth: '980px',
            margin: '0 auto',
            background: 'rgba(12, 15, 22, 0.95)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 24px 48px rgba(0, 0, 0, 0.7)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.6rem 0.8rem',
                borderRadius: '8px',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={(e) => handleScroll(e, '#footer')}
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem',
              borderRadius: '9999px',
              background: '#ffffff',
              color: '#07080b',
              textAlign: 'center',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            Get in Touch →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav-links { display: none !important; }
          .desktop-nav-cta { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

