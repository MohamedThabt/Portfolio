import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Freelance Projects",
      role: "Freelance Backend Developer",
      period: "2025 - 6 months",
      location: "Remote",
      description: "Worked as a freelance backend developer, delivering custom solutions for clients across various industries.",
      achievements: [
        "Delivered 2 backend/API projects",
        "Built secure authentication and payment integrations",
        "Provided ongoing support and maintenance for client systems",
        "Enhanced client satisfaction through clear communication and timely delivery"
      ],
      tech: ["Laravel", "MySQL", "REST API", "Redis"]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          My journey in backend development and AI systems architecture
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background" />
              
              {/* Content */}
              <div className="ml-20">
                <Card className="glass-card hover:glow-soft smooth-transition animate-slide-up hover:scale-105 transform transition-all duration-500">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gradient">{exp.role}</h3>
                        <p className="text-lg font-medium flex items-center gap-2 mt-1">
                          <Building2 className="h-4 w-4 text-primary" />
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech stack */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline" 
                            className="glass border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;