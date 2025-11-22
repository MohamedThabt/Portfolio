import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const MagneticButton = ({ children, className, ...props }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    x.set(xPos * 0.35);
    y.set(yPos * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className="inline-block"
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  );
};

const Hero = () => {
  const text = "Building systems that scale & think.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-12 bg-background relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-accent/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-base md:text-xl font-medium text-muted-foreground mb-4 md:mb-6 tracking-wide uppercase md:normal-case">
            Backend & AI Engineer
          </h2>
          
          <motion.h1 
            className="text-[3.5rem] leading-[0.95] md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 md:mb-8 md:leading-[1.1] flex flex-wrap gap-x-4 gap-y-2"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span key={index} variants={child} className={word.includes("scale") || word.includes("think") ? "text-muted-foreground" : ""}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 md:mb-12 leading-relaxed font-light">
            I specialize in architecting robust Laravel backends and integrating intelligent AI agents. 
            Turning complex data into clear, actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16 md:mb-20">
            <MagneticButton
              size="lg"
              className="h-14 px-8 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="#projects">View Selected Work</a>
            </MagneticButton>
            
            <MagneticButton
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg rounded-full border-2 hover:bg-accent transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1_ab8D-YieGBzIWy-riT4XXrQ7gChgm5s/view?usp=sharing"
                download="Mohamed_Thabet_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                CV
              </a>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-8 justify-center sm:justify-start">
            <a
              href="https://github.com/MohamedThabt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed--thabet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mohamedthabetthabet36@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce opacity-50 hidden md:flex">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
