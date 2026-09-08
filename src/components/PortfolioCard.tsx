import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';

export interface PortfolioCardProps {
  name: string;
  logoSrc: string;
  logoAlt: string;
  category: string;
  stage: string;
  description: string;
  href: string;
  capabilities: string[];
  onOpenBrief?: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  name,
  logoSrc,
  logoAlt,
  category,
  stage,
  description,
  href,
  capabilities,
  onOpenBrief,
}) => {
  return (
    <SpotlightCard
      className="premium-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '400px',
        padding: '2.5rem',
      }}
    >
      <div>
        {/* Card Header: Category & Stage */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 500,
              padding: '0.3rem 0.75rem',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'var(--text-secondary)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent-mint)',
              letterSpacing: '0.03em',
            }}
          >
            <span className="status-dot" style={{ width: 5, height: 5 }} />
            {stage}
          </span>
        </div>

        {/* Brand Logo Banner */}
        <div
          style={{
            background: 'linear-gradient(180deg, #0e111a 0%, #131722 100%)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '1.6rem 1.75rem',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <img
            src={logoSrc}
            alt={logoAlt}
            style={{
              maxHeight: '42px',
              maxWidth: '100%',
              width: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* One-Line Crisp Description */}
        <p
          style={{
            fontSize: '1.02rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            margin: '0 0 1.5rem',
            fontWeight: 400,
          }}
        >
          {description}
        </p>

        {/* Capabilities / Sector Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '2rem',
          }}
        >
          {capabilities.map((cap, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer: Brief Modal Trigger & Direct Link */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <button
          type="button"
          onClick={onOpenBrief}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: 'var(--accent-mint)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          View Intelligence Brief ↗
        </button>

        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={`Visit ${name} official website`}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            transition: 'background 0.2s ease',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 12L12 4M12 4H6M12 4V10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </SpotlightCard>
  );
};
