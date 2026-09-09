import React, { useState, useEffect } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import { SmoothScrollProvider } from './components/SmoothScroll';
import { ScrollHUD } from './components/ScrollHUD';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FoundersSection } from './components/FoundersSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FooterSection } from './components/FooterSection';
import { ContactPage } from './components/ContactPage';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'contact'>('home');

  // Handle URL hash changes & open-contact custom events
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#contact') {
        setActivePage('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setActivePage('home');
      }
    };

    const handleOpenContact = () => {
      setActivePage('contact');
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', checkHash);
    window.addEventListener('open-contact', handleOpenContact);
    checkHash();

    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('open-contact', handleOpenContact);
    };
  }, []);

  const handleNavigate = (page: 'home' | 'contact', sectionId?: string) => {
    if (page === 'contact') {
      setActivePage('contact');
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActivePage('home');
      if (sectionId) {
        window.location.hash = `#${sectionId}`;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        history.replaceState(null, '', window.location.pathname);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-app)' }}>
          {/* Top progress bar, vertical section rail & telemetry HUD */}
          {activePage === 'home' && <ScrollHUD />}

          {/* Floating Glassmorphic Pill Navigation Bar */}
          <Navbar activePage={activePage} onNavigate={handleNavigate} />

          <AnimatePresence mode="wait">
            {activePage === 'contact' ? (
              <motion.main
                key="contact-page"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <ContactPage onNavigateHome={(sectionId) => handleNavigate('home', sectionId)} />
              </motion.main>
            ) : (
              <motion.div
                key="home-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <main style={{ flex: 1 }}>
                  {/* 1. Hero: Accel-Grade Institutional Statement with Scroll Parallax */}
                  <HeroSection />

                  {/* 2. Our Portfolio: 3D Curved Rotary Carousel */}
                  <PortfolioSection />

                  {/* 3. Meet the Founders: Sevora-Grade Luxury Profile Stage */}
                  <FoundersSection />
                </main>

                {/* 4. Footer: Businesses, More info, Legal */}
                <FooterSection onOpenContact={() => handleNavigate('contact')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SmoothScrollProvider>
    </MotionConfig>
  );
};

export default App;
