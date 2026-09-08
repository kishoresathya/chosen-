import React, { useRef, useState } from 'react';
import { motion, useSpring, type HTMLMotionProps } from 'framer-motion';

interface SpotlightCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: HTMLMotionProps<'div'>['style'];
  enableTilt?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  onClick,
  style,
  enableTilt = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Spring Values
  const rotateX = useSpring(0, { stiffness: 260, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 20 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // CSS variables for radial spotlight glow
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Dynamic 3D tilt calculation
    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((y - centerY) / centerY) * -6; // max -6 to +6 deg
      const tiltY = ((x - centerX) / centerX) * 6;
      rotateX.set(tiltX);
      rotateY.set(tiltY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      rotateX.set(0);
      rotateY.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`spotlight-card ${className}`}
      style={{
        perspective: 1000,
        rotateX: enableTilt && isHovered ? rotateX : 0,
        rotateY: enableTilt && isHovered ? rotateY : 0,
        cursor: 'grab',
        userSelect: 'none',
        ...style,
      }}
      drag
      dragConstraints={{ left: -40, right: 40, top: -25, bottom: 25 }}
      dragElastic={0.25}
      dragSnapToOrigin={true}
      whileDrag={{
        scale: 1.04,
        cursor: 'grabbing',
        zIndex: 30,
        boxShadow: '0 24px 48px -10px rgba(0, 0, 0, 0.9), 0 0 30px rgba(52, 211, 153, 0.25)',
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
