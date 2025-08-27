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

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.6 : 1.4,
      easing: (t) =>
        prefersReducedMotion
          ? Math.min(1, 1.001 - Math.pow(2, -8 * t))
          : Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
