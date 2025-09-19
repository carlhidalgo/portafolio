import { useState, useEffect } from 'react';
import type { UseScrollReturn, ScrollDirection } from '@/types';

export const useScroll = (): UseScrollReturn => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setScrollY(scrollY);
      setIsAtTop(scrollY === 0);
      setIsAtBottom(scrollY + window.innerHeight >= document.documentElement.scrollHeight);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
        setIsScrolling(true);
      }
    };

    const onScrollEnd = () => {
      setIsScrolling(false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scrollend', onScrollEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', onScrollEnd);
    };
  }, [scrollDirection]);

  return {
    scrollY,
    scrollDirection,
    isScrolling,
    isAtTop,
    isAtBottom,
  };
};
