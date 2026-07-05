import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position coordinates using motion values for performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing circle
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch screen
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of cursor dimensions to center it
      mouseX.set(e.clientX - 4); 
      mouseY.set(e.clientY - 4);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track cursor style changes to scale ring on hover
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering over clickable items
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary-400 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary-400/60 pointer-events-none z-[9998]"
        animate={{
          width: isHovered ? 40 : 24,
          height: isHovered ? 40 : 24,
          // Calculate offset relative to trail position
          translateX: isHovered ? -16 : -8,
          translateY: isHovered ? -16 : -8,
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.1)' : 'rgba(56, 189, 248, 0)',
          borderColor: isHovered ? '#38bdf8' : 'rgba(56, 189, 248, 0.6)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        style={{
          x: trailX,
          y: trailY,
        }}
      />
    </>
  );
}
