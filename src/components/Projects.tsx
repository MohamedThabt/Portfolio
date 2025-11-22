import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code } from "lucide-react";
import reelrzImage from "@/assets/reelrz.png";
import elearningImage from "@/assets/elearning.png";
import { useRef, useState } from "react";

const ProjectCard = ({ project }: { project: any }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || window.innerWidth < 768) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md group"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="aspect-video overflow-hidden border-b border-border/50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
            <div className="flex gap-2">
              {project.demo && project.demo !== "#" && (
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-secondary">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="rounded-md px-2 py-1 font-normal text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="pt-4 border-t border-border/50 mt-auto hidden md:block">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Code className="h-4 w-4" />
              Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.engineeringHighlights.map((highlight: string, idx: number) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Reelrz.com",
      description: `A modern freelancing platform connecting video creators with brands. Built to handle high-traffic content collaboration with real-time features.`,
      image: reelrzImage,
      category: "Full-Stack Platform",
      role: "Backend Lead",
      tech: ["Laravel", "Redis", "REST API", "MySQL", "React"],
      features: [
        "Multi-role authentication",
        "Real-time messaging",
        "Project workflow engine",
        "Secure wallet system",
      ],
      engineeringHighlights: [
        "Reduced DB queries by 60% via Redis",
        "Async job queue for notifications",
        "Scalable REST API architecture",
      ],
      demo: "https://reelrz.com/",
    },
    {
      title: "E-Learning Platform",
      description:
        "An interactive learning management system (LMS) with course creation, quiz engine, and flexible enrollment. Built as a Single Page Application.",
      image: elearningImage,
      category: "EdTech SPA",
      role: "Solo Developer",
      tech: ["Laravel", "Inertia.js", "React", "MySQL"],
      features: [
        "Role-based access control",
        "Course builder with rich media",
        "Automated quiz grading",
        "Real-time UI updates",
      ],
      engineeringHighlights: [
        "Server-side rendering with Inertia.js",
        "Optimized SQL for fast loading",
        "Audit logging for data integrity",
      ],
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 md:px-12 lg:px-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-mono text-muted-foreground mb-2 block">02</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Case studies showcasing backend architecture, API design, and real-world engineering solutions.
          </p>
        </div>
      </div>

      {/* Mobile: Horizontal Snap Scroll | Desktop: Grid */}
      <div className="
        flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 -mx-6 
        md:grid md:grid-cols-2 md:gap-12 md:px-0 md:pb-0 md:mx-auto md:max-w-7xl
        scrollbar-hide
      ">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="
              snap-center shrink-0 w-[85vw] md:w-auto
              first:pl-6 md:first:pl-0 last:pr-6 md:last:pr-0
            "
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
