import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface AnimatedPageProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition: Transition = {
  type: "tween",
  ease: [0.43, 0.13, 0.23, 0.96],
  duration: 0.6,
};

const AnimatedPage = ({ children }: AnimatedPageProps) => {
  const isMobile = useIsMobile();
  
  // Skip animations on mobile for better performance
  if (isMobile) {
    return <div className="w-full">{children}</div>;
  }
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
