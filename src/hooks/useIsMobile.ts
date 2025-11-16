import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the device is mobile
 * Checks for touch support and screen width
 * @returns boolean indicating if device is mobile
 */
export function useIsMobile(): boolean {
  // Initialize with immediate check to prevent flash of wrong content
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileWidth = window.innerWidth < 768;
    return isTouchDevice || isMobileWidth;
  });

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileWidth = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isMobileWidth);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
