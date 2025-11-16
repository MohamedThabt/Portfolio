import { useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AnimatedPage from "@/components/AnimatedPage";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionDivider from "@/components/SectionDivider";
import CustomCursor from "@/components/CustomCursor";

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Statistics = lazy(() => import("@/components/Statistics"));
const Certificates = lazy(() => import("@/components/Certificates"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

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
      <div className="min-h-screen relative">
        <CustomCursor />
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <SectionDivider variant="wave" />
          <Suspense fallback={<SectionLoader />}>
            <section id="about">
              <About />
            </section>
          </Suspense>
          <SectionDivider variant="dots" />
          <Suspense fallback={<SectionLoader />}>
            <section id="skills">
              <Skills />
            </section>
          </Suspense>
          <SectionDivider variant="line" />
          <Suspense fallback={<SectionLoader />}>
            <Statistics />
          </Suspense>
          <SectionDivider variant="default" />
          <Suspense fallback={<SectionLoader />}>
            <section id="certificates">
              <Certificates />
            </section>
          </Suspense>
          <SectionDivider variant="wave" />
          <Suspense fallback={<SectionLoader />}>
            <section id="projects">
              <Projects />
            </section>
          </Suspense>
          <SectionDivider variant="dots" />
          <Suspense fallback={<SectionLoader />}>
            <section id="experience">
              <Experience />
            </section>
          </Suspense>
          <SectionDivider variant="line" />
          <Suspense fallback={<SectionLoader />}>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
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
