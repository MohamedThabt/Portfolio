import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import Index from "./pages/Index";
import { useEffect } from "react";
import { notifyVisitor } from "@/lib/visitorNotifier";

const queryClient = new QueryClient();

const App = () => {
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
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
