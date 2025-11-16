import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AnimatePresence, MotionConfig } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import Index from "./pages/Index";
import { useEffect, useState } from "react";
import { notifyVisitor } from "@/lib/visitorNotifier";

const queryClient = new QueryClient();

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileWidth = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isMobileWidth);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    // Optimize visitor notification with better timing
    const sendNotification = () => {
      // Use requestIdleCallback if available for better performance
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          notifyVisitor();
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          notifyVisitor();
        }, 2000);
      }
    };

    if (document.readyState === 'complete') {
      sendNotification();
    } else {
      window.addEventListener('load', sendNotification);
      return () => window.removeEventListener('load', sendNotification);
    }
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <MotionConfig 
          reducedMotion={isMobile ? "always" : "user"}
          transition={isMobile ? { duration: 0 } : undefined}
        >
          <SmoothScroll>
            <Toaster />
            <Sonner />
            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}
            >
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<Index />} />
                </Routes>
              </AnimatePresence>
            </BrowserRouter>
          </SmoothScroll>
        </MotionConfig>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
