import {
  Home,
  FileText,
  Github,
  Linkedin,
  User,
  Briefcase,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let scrollThrottleTimeout: NodeJS.Timeout | null = null;

    const updateCurrentPath = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };

    const updateActiveSection = () => {
      const sections = [
        "about",
        "skills",
        "certificates",
        "projects",
        "experience",
        "contact",
      ];
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
            // Map sections to their corresponding nav items
            if (sectionId === "skills" || sectionId === "certificates") {
              setActiveSection("about"); // Skills and certificates are about the person
            } else if (sectionId === "experience") {
              setActiveSection("projects"); // Experience is related to projects/work
            } else {
              setActiveSection(sectionId);
            }
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
      // Throttle scroll updates for performance
      if (scrollThrottleTimeout) {
        clearTimeout(scrollThrottleTimeout);
      }

      scrollThrottleTimeout = setTimeout(() => {
        updateCurrentPath();
        updateActiveSection();
      }, 100); // Reduced throttle time for more responsive updates
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
      href: "/#about",
      icon: <User className="h-5 w-5" />,
      label: "About",
    },
    {
      href: "/#projects",
      icon: <Briefcase className="h-5 w-5" />,
      label: "Projects",
    },
    {
      href: "/#contact",
      icon: <Mail className="h-5 w-5" />,
      label: "Contact",
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
      className="fixed bottom-4 md:bottom-6 left-1/2 z-50"
      initial={{ y: 100, opacity: 0, scale: 0.8, x: "-50%" }}
      animate={{ y: 0, opacity: 1, scale: 1, x: "-50%" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.2,
      }}
    >
      <motion.div
        className="flex items-center gap-2 bg-background/95 backdrop-blur-lg border border-border/30 rounded-full px-2 py-2 shadow-2xl"
        whileHover={{
          scale: 1.02,
          y: -2,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          mass: 0.6,
        }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            className="isolate"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
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
                group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 isolation-auto
                ${
                  isActive(item.href)
                    ? "text-accent-foreground [&>*]:!text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground [&>*]:text-current [&:hover>*]:!text-foreground"
                }
              `}
              title={item.label}
              whileHover={{
                scale: 1.1,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 15,
                mass: 0.5,
              }}
            >
              <AnimatePresence>
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-accent rounded-full z-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: navItems.length * 0.05,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <motion.div
            className="group relative flex items-center justify-center w-12 h-12 rounded-full isolate"
            whileHover={{
              scale: 1.1,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 15,
              mass: 0.5,
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
