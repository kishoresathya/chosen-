import React from 'react';
import { motion } from 'framer-motion';

export const FoundersSection: React.FC = () => {
  return (
    <section
      id="founders"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#07080b',
        color: '#ffffff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(5.5rem, 11vh, 8rem)',
        paddingBottom: 'clamp(5rem, 10vh, 7.5rem)',
      }}
    >
      {/* Ambient Lighting Gradients */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '8%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 153, 0.09) 0%, rgba(16, 185, 129, 0.02) 50%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '8%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, transparent 65%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3.5rem, 7vh, 5.5rem)' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#00e599',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1.15rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#00e599',
                boxShadow: '0 0 10px #00e599',
              }}
            />
            Meet the Founders
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Leadership Behind Chosen
          </h2>
        </div>

        {/* 2 Founders Side-by-Side — Completely Frameless */}
        <div
          className="founders-stage-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 'clamp(5rem, 14vw, 15rem)',
            maxWidth: '1320px',
            margin: '0 auto',
            alignItems: 'end',
          }}
        >
          {/* ============================================================
              FOUNDER 1: THARUN KUMAR (LEFT) — ZERO FRAMES
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Cutout Portrait Container: Free Standing, No Frame, No Border */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '350px',
                height: 'clamp(360px, 46vh, 480px)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                margin: '0 auto 1.75rem',
              }}
            >
              <img
                src="/images/tharun-kumar-sticker.webp"
                alt="Tharun Kumar - Founder of Chosen"
                style={{
                  height: '100%',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  display: 'block',
                  filter: 'drop-shadow(0 25px 45px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(0, 229, 153, 0.08))',
                  maskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                }}
              />
            </div>

            {/* Name */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 2.7vw, 2.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                margin: '0 0 0.75rem',
                lineHeight: 1.15,
              }}
            >
              Tharun Kumar
            </h3>

            {/* Bottom Button: Founder of Chosen */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.52rem 1.35rem',
                borderRadius: '9999px',
                background: 'rgba(0, 229, 153, 0.08)',
                border: '1px solid rgba(0, 229, 153, 0.35)',
                boxShadow: '0 6px 20px rgba(0, 229, 153, 0.16)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#00e599',
                  boxShadow: '0 0 10px #00e599',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#00e599',
                }}
              >
                Founder of Chosen
              </span>
            </div>
          </motion.div>

          {/* ============================================================
              FOUNDER 2: VIJAYA RAGAVAN (RIGHT) — EMPTY SPACE, ZERO FRAMES
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Cutout Portrait Container: Free Standing, No Frame, No Border */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '350px',
                height: 'clamp(360px, 46vh, 480px)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                margin: '0 auto 1.75rem',
              }}
            >
              <img
                src="/images/vijaya-ragavan-sticker.webp"
                alt="Vijaya Ragavan - Founder of Chosen"
                style={{
                  height: '100%',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  display: 'block',
                  filter: 'drop-shadow(0 25px 45px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(0, 229, 153, 0.08))',
                  maskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 84%, transparent 100%)',
                }}
              />
            </div>

            {/* Name */}
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 2.7vw, 2.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                margin: '0 0 0.75rem',
                lineHeight: 1.15,
              }}
            >
              Vijaya Ragavan
            </h3>

            {/* Bottom Button: Founder of Chosen */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.52rem 1.35rem',
                borderRadius: '9999px',
                background: 'rgba(0, 229, 153, 0.08)',
                border: '1px solid rgba(0, 229, 153, 0.35)',
                boxShadow: '0 6px 20px rgba(0, 229, 153, 0.16)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#00e599',
                  boxShadow: '0 0 10px #00e599',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#00e599',
                }}
              >
                Founder of Chosen
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .founders-stage-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};
