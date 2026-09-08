import React from 'react';
import { MotionConfig } from 'framer-motion';
import { SmoothScrollProvider } from './components/SmoothScroll';
import { ScrollHUD } from './components/ScrollHUD';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScrollProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-app)' }}>
          {/* Top progress bar, vertical section rail & live telemetry HUD */}
          <ScrollHUD />

          {/* Sticky Glassmorphic Navigation */}
          <Navbar />

          <main style={{ flex: 1 }}>
            {/* 1. Hero: Accel-Grade Institutional Statement with Scroll Parallax */}
            <HeroSection />

            {/* 2. What We Do / Thesis: Fluid 5-Card Fanned Arc Deck */}
            <WhatWeDoSection />

            {/* 3. Portfolio Centerpiece: Transparent Money Eye with Parallax Lens */}
            <PortfolioSection />

            {/* 4. Operating Principles: Expanded 3D Cylindrical Ring Stage */}
            <PrinciplesSection />
          </main>

          {/* 5. Footer: Inquiries, 3D Rotary Dialer, Correspondence */}
          <FooterSection />
        </div>
      </SmoothScrollProvider>
    </MotionConfig>
  );
};

export default App;
