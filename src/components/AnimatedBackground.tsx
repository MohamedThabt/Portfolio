import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Skip canvas animations on mobile
    if (isMobile) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Reduce particle count for better performance
    const particleCount = 25; // Reduced from 50
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(var(--foreground), 0.1)`;
        ctx.fill();

        // Reduce connection checks for better performance
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Reduced connection distance from 150 to 100
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(var(--foreground), ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
          style={{ opacity: 0.3 }}
        />
      )}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: isMobile ? 30 : 20, // Slower on mobile
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </>
  );
};

export default AnimatedBackground;

