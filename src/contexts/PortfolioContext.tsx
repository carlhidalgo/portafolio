import { createContext, useContext } from 'react';
import type { PortfolioContextType } from '@/types/portfolio';

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
