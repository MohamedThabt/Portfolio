import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Database, Brain } from "lucide-react";
import aiProject from "@/assets/ai-project.jpg";
import backendProject from "@/assets/backend-project.jpg";
import reelrzImage from "@/assets/reelrz.png";
import elearningImage from "@/assets/elearning.png";

const Projects = () => {
  const projects = [
    {
      title: "Reelrz.com",
      description: `Reelrz is a modern freelancing platform designed to connect video creators, influencers, and content professionals with brands and agencies seeking high-quality content and collaboration. The platform streamlines every step of the creative hiring process — from talent discovery and communication to contract management and secure payments.
                    Built to serve the fast-paced content creation industry, Reelrz focuses on short-form video collaboration, brand deals, and UGC (User Generated Content) campaigns.`,
      image: reelrzImage,
      category: "Backend",
      tech: ["Redis", "Laravel", "REST API", "MySQL", "React"],
      features: [
        "User Roles: Creators, Brands, and Admin with role-based access",
        "Profile Management: Public creator profiles and brand dashboards",
        "Real-Time Chat: Instant messaging with notifications via Pusher",
        "Project System: Campaign posting, proposals, and deal flow",
        "Wallet & Payments: In-app wallets, secure payouts, and commissions",
        "Creator Reels: Portfolio-style short video reels to showcase work",
        "Admin Tools: User control, disputes, and financial analytics",
        "Notifications: Real-time and in-app alerts for key events",
      ],
      github: "#",
      demo: "https://reelrz.com/",
      icon: <Database className="h-5 w-5" />,
    },

    {
      title: "E-learning Platform",
      description:
        "E-Learn is a dynamic Single Page Application (SPA) built with Laravel, Inertia.js, and React. It empowers instructors to create and manage courses, quizzes, and students, while offering learners an interactive and personalized education experience. The system supports flexible enrollment options and performance tracking, all in one unified interface.",
      image: elearningImage,
      category: "Web Apps",
      tech: ["Laravel", "React", "MySQL"],
      features: [
        "User Roles: Admin, Instructor, and Student with role-based access",
        "Course Management: Instructors can create, update, and publish courses",
        "Quiz System: Custom quizzes with automated grading and review",
        "Enrollment Methods:",
        "- Auto-enrollment via payment",
        "- Manual enrollment by admin",
        "- Code-based student enrollment",
        "Student Dashboard: Track course progress, quiz results, and completion",
        "Real-Time UI: Built using Laravel + Inertia.js + React for seamless UX",
        "Secure Auth: Login, registration, and permission control via Laravel",
        "Admin Panel: Manage courses, users, and enrollments",
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
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of my latest work in backend development and AI systems
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
          <Card
            key={project.title}
            className={`glass-card hover:glow-soft smooth-transition group overflow-hidden animate-scale-in stagger-${
              index + 1
            } hover:scale-105 transform transition-all duration-500`}
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
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Key features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2 text-primary">
                  Key Features:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
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
                      className="glass border-accent/30 text-accent hover:bg-accent/10 transition-colors"
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
                      Visit Site
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Card>
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
