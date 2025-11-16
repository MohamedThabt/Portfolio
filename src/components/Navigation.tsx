import { Home, FileText, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useIsMobile } from "@/hooks/useIsMobile";

const Navigation = () => {
  const isMobile = useIsMobile();
  const [currentPath, setCurrentPath] = useState("");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let scrollThrottleTimeout: NodeJS.Timeout | null = null;
    let ticking = false;

    const updateCurrentPath = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };

    const updateActiveSection = () => {
      const sections = ["about", "skills", "certificates", "experience"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      // Find the currently visible section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            // All sections now map to home since we removed about
            setActiveSection("");
            return;
          }
        }
      }
    };

    updateCurrentPath();
    updateActiveSection();

    const handleHashChange = () => {
      updateCurrentPath();
    };

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth 60fps updates
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCurrentPath();
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      if (scrollThrottleTimeout) {
        clearTimeout(scrollThrottleTimeout);
      }
    };
  }, []);

  const navItems = [
    {
      href: "/",
      icon: <Home className="h-5 w-5" />,
      label: "Home",
    },

    {
      href: "https://mohamedthabt.github.io/",
      icon: <FileText className="h-5 w-5" />,
      label: "Blog",
      external: true,
    },
    {
      href: "https://github.com/MohamedThabt",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/mohamed--thabet/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      external: true,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return (
        activeSection === "" ||
        !window.location.hash ||
        window.location.hash === ""
      );
    }
    // Handle hash-based navigation with scroll detection
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      return activeSection === sectionId;
    }
    // External links are never considered "active"
    if (href.startsWith("http")) {
      return false;
    }
    return currentPath === href;
  };

  return (
    <motion.nav
      className="fixed bottom-4 md:bottom-6 left-1/2 z-50 isolation-auto"
      initial={isMobile ? { x: "-50%" } : { y: 100, opacity: 0, scale: 0.8, x: "-50%" }}
      animate={{ y: 0, opacity: 1, scale: 1, x: "-50%" }}
      transition={isMobile ? { duration: 0 } : {
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 0.5,
        delay: 0.1,
      }}
    >
      <motion.div
        className={`flex items-center gap-1 md:gap-2 bg-background/95 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-xl'} border border-border/30 rounded-full px-2 py-2 shadow-2xl shadow-black/20 hw-accelerated`}
        whileHover={isMobile ? {} : {
          scale: 1.03,
          y: -3,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
          mass: 0.4,
        }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            className="isolate"
            initial={isMobile ? {} : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={isMobile ? { duration: 0 } : {
              delay: index * 0.05,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            <motion.a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (!item.external && item.href.startsWith("/#")) {
                  e.preventDefault();
                  const sectionId = item.href.replace("/#", "");
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    window.history.pushState(null, "", item.href);
                  }
                } else if (!item.external && item.href === "/") {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  window.history.pushState(null, "", "/");
                }
              }}
              className={`
                group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 isolation-auto hw-accelerated
                ${
                  isActive(item.href)
                    ? "text-accent-foreground [&>*]:!text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground [&>*]:text-current [&:hover>*]:!text-foreground"
                }
              `}
              title={item.label}
              whileHover={isMobile ? {} : {
                scale: 1.15,
                y: -3,
              }}
              whileTap={isMobile ? {} : {
                scale: 0.9,
              }}
              transition={isMobile ? { duration: 0 } : {
                type: "spring",
                stiffness: 700,
                damping: 20,
                mass: 0.3,
              }}
            >
              <AnimatePresence>
                {isActive(item.href) && (
                  <motion.div
                    layoutId={isMobile ? undefined : "activeBackground"}
                    className="absolute inset-0 bg-accent rounded-full z-0 hw-accelerated"
                    initial={isMobile ? {} : { scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={isMobile ? {} : { scale: 0 }}
                    transition={isMobile ? { duration: 0 } : {
                      type: "spring",
                      stiffness: 600,
                      damping: 35,
                      mass: 0.4,
                      duration: 0.15,
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-20 pointer-events-none">
                {item.icon}
              </div>
            </motion.a>
          </motion.div>
        ))}

        {/* Theme Toggle */}
        <motion.div
          className="ml-1"
          initial={isMobile ? {} : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={isMobile ? { duration: 0 } : {
            delay: navItems.length * 0.05,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <motion.div
            className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full isolate hw-accelerated"
            whileHover={isMobile ? {} : {
              scale: 1.15,
              y: -3,
            }}
            whileTap={isMobile ? {} : {
              scale: 0.9,
            }}
            transition={isMobile ? { duration: 0 } : {
              type: "spring",
              stiffness: 700,
              damping: 20,
              mass: 0.3,
            }}
          >
            <div className="relative z-20">
              <ThemeToggle />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
