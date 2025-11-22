import { Home, FileText, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, height } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = elementTop + height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", icon: <Home className="h-5 w-5" />, label: "Home" },
    { href: "#about", icon: <FileText className="h-5 w-5" />, label: "About" },
    { href: "#projects", icon: <Github className="h-5 w-5" />, label: "Work" },
    { href: "https://mohamedthabt.github.io/", icon: <BookOpen className="h-5 w-5" />, label: "Blog", external: true },
    { href: "#contact", icon: <Mail className="h-5 w-5" />, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-2 py-2 shadow-lg">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`
              relative flex items-center justify-center w-10 h-10 rounded-full transition-colors
              ${
                (item.href === "/" && activeSection === "") ||
                item.href === `#${activeSection}`
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }
            `}
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
        
        <div className="w-px h-6 bg-border/50 mx-1" />
        
        <div className="flex items-center justify-center w-10 h-10">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
