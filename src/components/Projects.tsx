import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Database, Brain, Code } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import aiProject from "@/assets/ai-project.jpg";
import backendProject from "@/assets/backend-project.jpg";
import reelrzImage from "@/assets/reelrz.png";
import elearningImage from "@/assets/elearning.png";

const Projects = () => {
  const projects = [
    {
      title: "Reelrz.com",
      description: `A modern freelancing platform connecting video creators with brands. Built to handle high-traffic content collaboration with real-time features and secure payment processing.`,
      image: reelrzImage,
      category: "Full-Stack Platform",
      role: "Backend Lead",
      tech: ["Laravel", "Redis", "REST API", "MySQL", "React", "Pusher"],
      features: [
        "Multi-role authentication system with granular permissions",
        "Real-time messaging with Pusher (WebSocket integration)",
        "Project workflow engine with proposal and deal management",
        "Secure wallet system with commission handling and payouts",
        "Creator portfolio with video CDN optimization",
        "Admin analytics dashboard with revenue tracking",
      ],
      engineeringHighlights: [
        "Implemented Redis caching to reduce database queries by 60%",
        "Built background job queue for async email and notifications",
        "Designed scalable REST API serving React SPA",
        "Rate-limited API endpoints to prevent abuse",
      ],
      github: "#",
      demo: "https://reelrz.com/",
      icon: <Database className="h-5 w-5" />,
    },

    {
      title: "E-Learning Platform",
      description:
        "An interactive learning management system (LMS) with course creation, quiz engine, and flexible enrollment. Built as a Single Page Application using Laravel + Inertia.js + React for smooth UX.",
      image: elearningImage,
      category: "EdTech SPA",
      role: "Solo Developer",
      tech: ["Laravel", "Inertia.js", "React", "MySQL"],
      features: [
        "Role-based access: Admin, Instructor, Student",
        "Course builder with rich media support",
        "Quiz engine with automated grading and review",
        "Flexible enrollment: Payment, manual, and code-based",
        "Student progress tracking and completion certificates",
        "Real-time UI updates with Inertia.js (no API overhead)",
      ],
      engineeringHighlights: [
        "Server-side rendering with client-side transitions via Inertia.js",
        "Optimized SQL queries and indexed tables for fast course loading",
        "Implemented soft deletes and audit logging for data integrity",
        "Built reusable React components for consistent UI patterns",
      ],
      github: "#",
      demo: "#",
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  // const categories = ["All", "Web Apps", "RAG/AI","Backend"];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Case studies showcasing backend architecture, API design, and real-world engineering solutions
        </p>
      </div>

      {/* Category filters */}
      {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button 
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className={category === "All" 
              ? "gradient-primary" 
              : "glass-card border-primary/30 hover:bg-primary/10"
            }
          >
            {category}
          </Button>
        ))}
      </div> */}

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <TiltCard className="h-full">
              <Card
                className={`glass-card hover:glow-soft smooth-transition group overflow-hidden h-full hover:scale-[1.02] transform transition-all duration-500`}
              >
            {/* Project image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge
                  variant="outline"
                  className="glass border-primary/30 text-primary"
                >
                  {project.icon}
                  <span className="ml-2">{project.category}</span>
                </Badge>
              </div>
            </div>

            {/* Project content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-display font-semibold group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                {project.role && (
                  <Badge variant="outline" className="glass border-accent/30 text-accent text-xs">
                    {project.role}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Engineering Highlights */}
              {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
                <div className="mb-4 bg-secondary/30 rounded-lg p-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Engineering Highlights
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1.5">
                    {project.engineeringHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2 text-foreground">
                  Key Features:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="glass border-primary/20 text-primary hover:bg-primary/10 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                {project.demo && project.demo !== "#" && (
                  <Button size="sm" className="gradient-primary flex-1" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {!project.demo || project.demo === "#" ? (
                  <Button size="sm" variant="outline" className="glass border-primary/30 flex-1" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Private Project
                  </Button>
                ) : null}
              </div>
            </div>
          </Card>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* View more
      // <div className="text-center mt-12">
      //   <Button 
      //     variant="outline" 
      //     size="lg"
      //     className="glass-card hover:glow-soft border-primary/30 px-8"
      //   >
      //     View All Projects
      //   </Button>
      // </div> */}
    </section>
  );
};

export default Projects;
