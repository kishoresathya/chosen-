import React from 'react';

export const ChosenLogo: React.FC<{ height?: number; className?: string }> = ({ 
  className = ''
}) => {
  return (
    <div className={`brand-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      {/* Bespoke Geometric Nexus Icon */}
      <svg 
        width="26" 
        height="26" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Modern architectural faceted prism */}
        <path 
          d="M16 3L27 9.5V22.5L16 29L5 22.5V9.5L16 3Z" 
          stroke="#ffffff" 
          strokeWidth="1.8" 
          strokeLinejoin="round"
        />
        <path 
          d="M16 3V29M5 9.5L27 22.5M5 22.5L27 9.5" 
          stroke="rgba(255, 255, 255, 0.22)" 
          strokeWidth="1" 
        />
        <circle cx="16" cy="16" r="3" fill="#34d399" />
      </svg>

      {/* Pure High-Craft Wordmark */}
      <span 
        style={{ 
          fontFamily: "var(--font-heading)",
          fontSize: '1.25rem', 
          fontWeight: 800, 
          letterSpacing: '0.12em',
          color: '#ffffff',
          textTransform: 'uppercase',
          display: 'inline-block',
          lineHeight: 1,
        }}
      >
        Chosen
      </span>
    </div>
  );
};

