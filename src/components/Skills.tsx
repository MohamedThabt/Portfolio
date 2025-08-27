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

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["PHP", "Python", "SQL","c++", "JavaScript"],
      color: "primary"
    },
    {
      title: "Backend Frameworks",
      icon: <Server className="h-6 w-6" />,
      skills: ["Laravel", "FastAPI", "Django"],
      color: "accent"
    },
    {
      title: "AI & ML Tools",
      icon: <Brain className="h-6 w-6" />,
      skills: ["LangChain"],
      color: "primary"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "Redis"],
      color: "accent"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Docker", "GitHub Actions"],
      color: "primary"
    },
    {
      title: "Specializations",
      icon: <Zap className="h-6 w-6" />,
      skills: ["RAG Systems", "API Architecture","Web Development", "System Design"],
      color: "accent"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
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
          <Card 
            key={category.title} 
            className={`glass-card hover:glow-soft smooth-transition group animate-scale-in stagger-${Math.min(index + 1, 5)} hover:scale-105 transform transition-all duration-500`}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-accent/10 text-accent'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline" 
                    className={`glass transition-all duration-200 hover:scale-105 ${
                      category.color === 'primary'
                        ? 'border-primary/30 text-primary hover:bg-primary/10'
                        : 'border-accent/30 text-accent hover:bg-accent/10'
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
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