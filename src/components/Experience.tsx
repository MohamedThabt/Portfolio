import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Freelance",
      role: "Backend Engineer & Technical Consultant",
      period: "2024 - Present · 6+ months",
      location: "Remote",
      description: "Building custom backend solutions and consulting on system architecture for clients across various industries. Focus on Laravel APIs, database optimization, and real-time features.",
      achievements: [
        "Delivered 2 production-ready platforms handling 1000+ daily active users",
        "Reduced API response times by 60% through Redis caching and query optimization",
        "Architected real-time messaging system using Pusher (WebSocket) with message queuing",
        "Implemented secure payment wallet system with transaction logging and commission handling",
        "Designed database schemas with proper indexing, reducing query execution time by 45%",
        "Set up CI/CD pipelines for automated testing and deployment on shared hosting environments"
      ],
      tech: ["Laravel", "MySQL", "Redis", "REST API", "React", "Git"]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Track record of delivering scalable backend systems and technical solutions
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