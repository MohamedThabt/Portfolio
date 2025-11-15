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
    // Wait for document to be fully loaded before sending notification
    const sendNotification = () => {
      // Add a small delay to ensure all data is available
      setTimeout(() => {
        notifyVisitor();
      }, 1000);
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
