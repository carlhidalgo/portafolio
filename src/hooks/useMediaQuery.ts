import { useState, useEffect } from 'react';
import type { UseMediaQueryReturn, Breakpoint } from '@/types';

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const useMediaQuery = (query: string): UseMediaQueryReturn => {
  const [matches, setMatches] = useState(false);
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= 1536) {
        setBreakpoint('2xl');
      } else if (width >= 1280) {
        setBreakpoint('xl');
      } else if (width >= 1024) {
        setBreakpoint('lg');
      } else if (width >= 768) {
        setBreakpoint('md');
      } else if (width >= 640) {
        setBreakpoint('sm');
      } else {
        setBreakpoint(null);
      }
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);

    return () => {
      window.removeEventListener('resize', checkBreakpoint);
    };
  }, []);

  return { matches, breakpoint };
};

// Hook específico para breakpoints
export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const query = `(min-width: ${breakpoints[breakpoint]})`;
  const { matches } = useMediaQuery(query);
  return matches;
};

// Hook para detectar si es mobile
export const useIsMobile = (): boolean => {
  return useMediaQuery('(max-width: 768px)').matches;
};

// Hook para detectar si es tablet
export const useIsTablet = (): boolean => {
  return useMediaQuery('(min-width: 768px) and (max-width: 1024px)').matches;
};

// Hook para detectar si es desktop
export const useIsDesktop = (): boolean => {
  return useMediaQuery('(min-width: 1024px)').matches;
};
