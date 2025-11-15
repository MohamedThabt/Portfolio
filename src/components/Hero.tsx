import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code,
  Cpu,
  Zap,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Crafting the Core of Intelligent Systems";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { stiffness: 50, damping: 20 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ y, opacity }}
    >
      {/* Pure black background with radial gradient */}
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Animated gradient orbs that follow mouse */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], [-100, 100]),
          y: useTransform(mouseYSpring, [-0.5, 0.5], [-100, 100]),
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], [100, -100]),
          y: useTransform(mouseYSpring, [-0.5, 0.5], [100, -100]),
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating API nodes and backend particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* API Nodes */}
        <div
          className="api-node top-1/4 left-1/4"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="api-node top-1/3 right-1/3"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="api-node bottom-1/4 left-1/3"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="api-node top-1/2 right-1/4"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="api-node top-3/4 left-1/2"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating backend icons with enhanced animations */}
        <motion.div
          className="absolute top-20 left-20 opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Server className="h-8 w-8 text-foreground" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 opacity-30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Database className="h-6 w-6 text-foreground" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-40 opacity-30"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <Code className="h-10 w-10 text-foreground" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 opacity-30"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5,
          }}
        >
          <Cpu className="h-7 w-7 text-foreground" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-10 opacity-30"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4.5,
          }}
        >
          <Zap className="h-5 w-5 text-foreground" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Sparkles className="h-6 w-6 text-primary" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          {/* Terminal-style typing headline */}
          <div className="terminal-bg p-6 rounded-xl mb-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-left">
              <span className="text-green-400 text-sm">$ </span>
              <span className="text-foreground text-lg font-mono">
                {typedText}
                <span className="typing-cursor text-foreground">|</span>
              </span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
            Hi, I'm{" "}
            <span className="text-foreground font-bold">Mohamed Thabet</span> —
            Backend Engineer
          </h2>
          <h3 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Specializing in Laravel + RAG Architectures
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Building the invisible infrastructure that powers intelligent
            applications, from robust APIs to sophisticated AI systems.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="gradient-primary hover:glow-primary smooth-transition px-8 py-6 text-lg font-semibold rounded-full"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass-card hover:glow-soft px-8 py-6 text-lg font-semibold rounded-full border-primary/30"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1_ab8D-YieGBzIWy-riT4XXrQ7gChgm5s/view?usp=sharing"
              download="Mohamed Thabet CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-6 mb-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            variant="ghost"
            size="lg"
            className="glass-card hover:glow-soft p-4 rounded-full"
            asChild
          >
            <a
              href="https://github.com/MohamedThabt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="glass-card hover:glow-soft p-4 rounded-full"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/mohamed--thabet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="glass-card hover:glow-soft p-4 rounded-full"
            asChild
          >
            <a href="mailto:mohamedthabetthabet36@gmail.com">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-primary opacity-60" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
