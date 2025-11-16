import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState<"api" | "db" | "code" | "server">("api");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Don't initialize cursor on mobile
    if (isMobile) return;
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      
      // Change cursor type based on vertical position
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const totalScroll = scrollY + e.clientY;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = totalScroll / documentHeight;
      
      if (scrollPercentage < 0.25) {
        setCursorType("api");
      } else if (scrollPercentage < 0.5) {
        setCursorType("code");
      } else if (scrollPercentage < 0.75) {
        setCursorType("db");
      } else {
        setCursorType("server");
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], .glass-card, .hover-interactive, input, textarea"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseout", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseout", () => setIsVisible(false));
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile || !isVisible) return null;

  // Different cursor shapes based on section
  const renderCursor = () => {
    switch (cursorType) {
      case "api":
        return (
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2L2 2L2 22L4 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M28 2L30 2L30 22L28 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <text x="16" y="16" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="monospace">API</text>
            <motion.circle cx="28" cy="4" r="2" fill={isHovering ? "#22c55e" : "white"}
              animate={isHovering ? { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </svg>
        );
      
      case "code":
        return (
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6L2 12L8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 6L30 12L24 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 4L14 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            {isHovering && <circle cx="16" cy="12" r="2" fill="white" opacity="0.6"/>}
          </svg>
        );
      
      case "db":
        return (
          <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="14" cy="6" rx="12" ry="5" stroke="white" strokeWidth="2" fill="white" opacity="0.3"/>
            <path d="M2 6V12C2 14.7614 7.372 17 14 17C20.628 17 26 14.7614 26 12V6" stroke="white" strokeWidth="2"/>
            <ellipse cx="14" cy="18" rx="12" ry="5" stroke="white" strokeWidth="2" fill="white" opacity="0.2"/>
            <path d="M2 18V24C2 26.7614 7.372 29 14 29C20.628 29 26 26.7614 26 24V18" stroke="white" strokeWidth="2"/>
            {isHovering && (
              <>
                <circle cx="14" cy="6" r="1.5" fill="white"/>
                <circle cx="14" cy="18" r="1.5" fill="white"/>
              </>
            )}
          </svg>
        );
      
      case "server":
        return (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="24" height="6" rx="2" stroke="white" strokeWidth="2" fill="white" opacity="0.2"/>
            <rect x="2" y="11" width="24" height="6" rx="2" stroke="white" strokeWidth="2" fill="white" opacity="0.3"/>
            <rect x="2" y="19" width="24" height="6" rx="2" stroke="white" strokeWidth="2" fill="white" opacity="0.4"/>
            <circle cx="6" cy="6" r="1" fill={isHovering ? "#22c55e" : "white"}/>
            <circle cx="6" cy="14" r="1" fill={isHovering ? "#22c55e" : "white"}/>
            <circle cx="6" cy="22" r="1" fill={isHovering ? "#22c55e" : "white"}/>
          </svg>
        );
    }
  };

  return (
    <>
      {/* Dynamic backend cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
            rotate: isHovering ? 5 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          key={cursorType}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {renderCursor()}
        </motion.div>
      </motion.div>

      {/* Trail with color based on cursor type */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white opacity-15 blur-sm"
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;

