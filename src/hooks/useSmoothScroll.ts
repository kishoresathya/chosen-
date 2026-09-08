import { createContext, useContext } from 'react';
import type Lenis from 'lenis';

export interface SmoothScrollContextType {
  getLenis: () => Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  getLenis: () => null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);
