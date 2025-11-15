import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Database, Rocket, Users } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counted, setCounted] = useState(false);

  const stats: StatItem[] = [
    {
      icon: <Code className="h-8 w-8" />,
      value: 2,
      label: "Production Projects",
      suffix: "+",
    },
    {
      icon: <Database className="h-8 w-8" />,
      value: 1000,
      label: "Daily Active Users",
      suffix: "+",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      value: 60,
      label: "Performance Improvement",
      suffix: "%",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: 6,
      label: "Months Experience",
      suffix: "+",
    },
  ];

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true);
    }
  }, [isInView, counted]);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
          Impact <span className="text-gradient">Metrics</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Real results from production systems and client projects
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="glass-card hover:glow-soft smooth-transition text-center p-6 group hover:scale-105 transition-all duration-500">
              <motion.div
                className="flex justify-center mb-4 text-primary"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2 text-gradient"
                initial={{ scale: 0 }}
                animate={counted ? { scale: 1 } : {}}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {counted ? (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={1.5}
                  />
                ) : (
                  "0"
                )}
              </motion.div>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  suffix?: string;
  duration: number;
}

const CountUp = ({ end, suffix = "", duration }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default Statistics;

