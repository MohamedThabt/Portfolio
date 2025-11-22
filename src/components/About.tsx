import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span 
      onMouseEnter={scramble} 
      className={`cursor-default inline-block ${className}`}
    >
      {display}
    </span>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-xs font-mono text-muted-foreground mb-8 block">01</span>
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Large Editorial Headline */}
          <div className="md:col-span-12 mb-8">
            <motion.h2 
              style={{ opacity }}
              className="text-[12vw] md:text-[8vw] leading-[0.8] font-display font-bold tracking-tighter text-foreground/5 select-none"
            >
              ENGINEER
            </motion.h2>
          </div>

          {/* Photo Column */}
          <div className="md:col-span-5 relative group">
            <motion.div style={{ y }} className="relative z-10">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-secondary/20">
                <img
                  src={profilePhoto}
                  alt="Mohamed Thabet"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-foreground/20 rounded-full animate-spin-slow hidden md:block" />
            <div className="absolute -top-6 -left-6 w-full h-full border border-border z-0 hidden md:block" />
          </div>

          {/* Content Column */}
          <div className="md:col-span-7 space-y-12 pt-8 md:pl-12">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                Architecting the <br />
                <span className="text-muted-foreground">invisible infrastructure.</span>
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  <span className="text-foreground font-medium text-xl">I</span>'m a backend engineer from Egypt, but I like to think of myself as a digital architect. I don't just write code; I design the structural integrity of applications.
                </p>
                <p>
                  My journey evolved from traditional web development to the bleeding edge of AI integration. I specialize in **Retrieval-Augmented Generation (RAG)**—teaching machines to understand and act on your specific data.
                </p>
                <p>
                  I believe in "boring" technology for critical infrastructure and "exciting" technology for user capabilities. Stability meets intelligence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-border/50 pt-8">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider mb-4 text-foreground">Stack</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><ScrambleText text="Laravel / PHP" /></li>
                  <li><ScrambleText text="Python / FastAPI" /></li>
                  <li><ScrambleText text="React / Inertia.js" /></li>
                  <li><ScrambleText text="PostgreSQL / Redis" /></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider mb-4 text-foreground">Focus</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><ScrambleText text="RAG Systems" /></li>
                  <li><ScrambleText text="API Architecture" /></li>
                  <li><ScrambleText text="Performance Tuning" /></li>
                  <li><ScrambleText text="System Design" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
