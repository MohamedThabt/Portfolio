import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Detect mobile
    const isMobile = 'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0 || 
                     window.innerWidth < 768;

    // Disable smooth scroll on mobile for better performance
    if (isMobile || prefersReducedMotion) {
      return; // Skip Lenis initialization
    }

    const lenis = new Lenis({
      duration: 1.2, // Reduced from 1.4
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
