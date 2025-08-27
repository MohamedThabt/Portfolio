import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import AnimatedPage from "@/components/AnimatedPage";

const Index = () => {
  useEffect(() => {
    const sectionTitles: Record<string, string> = {
      hero: "Home",
      about: "About",
      skills: "Skills",
      certificates: "Certificates",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    };
    const sectionIds = Object.keys(sectionTitles);
    const sections = sectionIds.map((id) =>
      id === "hero"
        ? document.querySelector("section")
        : document.getElementById(id)
    );
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length > 0) {
        // Pick the section closest to the top
        const topSection = visible.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top
            ? prev
            : curr
        );
        const id = topSection.target.id || "hero";
        document.title = `Mohamed Thabet : ${sectionTitles[id]}`;
      }
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    // Set initial title
    document.title = "Mohamed Thabet : Home";
    return () => observer.disconnect();
  }, []);
  return (
    <AnimatedPage>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="certificates">
            <Certificates />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/30 glass">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-muted-foreground">
                © 2024 Mohamed Thabet. Built with passion and modern technology.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Backend Engineer | AI Systems Architect | Open to opportunities
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AnimatedPage>
  );
};

export default Index;
