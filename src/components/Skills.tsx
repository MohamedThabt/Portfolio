import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Server, 
  Brain, 
  Code, 
  Cloud,
  Shield,
  Zap,
  Globe
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
  color: "primary" | "accent";
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "PHP", level: 95 },
        { name: "Python", level: 90 },
        { name: "SQL", level: 88 },
        { name: "C++", level: 75 },
        { name: "JavaScript", level: 85 },
      ],
      color: "primary"
    },
    {
      title: "Backend Frameworks",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Laravel", level: 95 },
        { name: "FastAPI", level: 85 },
        { name: "Django", level: 80 },
      ],
      color: "accent"
    },
    {
      title: "AI & ML Tools",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "LangChain", level: 90 },
      ],
      color: "primary"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 92 },
        { name: "PostgreSQL", level: 88 },
        { name: "Redis", level: 85 },
      ],
      color: "accent"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Docker", level: 85 },
        { name: "GitHub Actions", level: 80 },
      ],
      color: "primary"
    },
    {
      title: "Specializations",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "RAG Systems", level: 90 },
        { name: "API Architecture", level: 95 },
        { name: "Web Development", level: 92 },
        { name: "System Design", level: 88 },
      ],
      color: "accent"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Skills & <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to build exceptional backend systems
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card 
              className={`glass-card hover:glow-soft smooth-transition group hover:scale-105 transform transition-all duration-500`}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className={`p-2 rounded-lg ${
                      category.color === 'primary' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {animated ? `${skill.level}%` : "0%"}
                        </span>
                      </div>
                      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            category.color === 'primary'
                              ? 'bg-primary'
                              : 'bg-accent'
                          }`}
                          initial={{ width: 0 }}
                          animate={animated ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1 + 0.3,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Additional highlights */}
      <div className="mt-16 text-center">
        <Card className="glass-card max-w-4xl mx-auto animate-slide-up hover:glow-soft transition-all duration-500">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              What I'm Currently Exploring
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Always staying at the forefront of technology, I'm currently diving deeper into 
              advanced RAG architectures, vector databases optimization, and multi-modal AI systems.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="glass border-primary/30 text-primary hover:scale-105 transition-transform duration-200">
                Vector Databases
              </Badge>
              <Badge variant="outline" className="glass border-accent/30 text-accent hover:scale-105 transition-transform duration-200">
                Multi-modal AI
              </Badge>
              <Badge variant="outline" className="glass border-primary/30 text-primary hover:scale-105 transition-transform duration-200">
                Graph RAG
              </Badge>
              <Badge variant="outline" className="glass border-accent/30 text-accent hover:scale-105 transition-transform duration-200">
                LLM Fine-tuning
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;