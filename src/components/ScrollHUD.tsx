import React, { useState, useEffect } from 'react';

export const ScrollHUD: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? Math.min(1, Math.max(0, currentScrollY / totalScrollable)) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Luminous Top Scroll Progress Bar */
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 120,
        pointerEvents: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollProgress * 100}%`,
          background: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #38bdf8 100%)',
          boxShadow: '0 0 10px rgba(52, 211, 153, 0.6)',
          transition: 'width 0.08s linear',
        }}
      />
    </div>
  );
};
