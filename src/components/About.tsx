import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Engineering robust systems with a focus on performance, scalability, and clean architecture
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="glass-card p-8 hover:glow-soft transition-all duration-500"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={profilePhoto}
              alt="Mohamed Thabet"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-elevated"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full blur-xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Card className="glass-card hover:glow-soft transition-all duration-500">
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">
                  My Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a backend engineer from Egypt, specializing in building scalable APIs, 
                  optimizing database performance, and integrating AI capabilities into production systems.
                  My work focuses on creating the invisible infrastructure that powers modern applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With expertise in Laravel, Python, and AI frameworks, I've evolved from traditional 
                  web development to architecting intelligent systems—particularly Retrieval-Augmented 
                  Generation (RAG) architectures that combine LLMs with domain-specific knowledge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe great engineering is about trade-offs: choosing the right tool, optimizing 
                  for the constraints that matter, and writing code that's maintainable by future you. 
                  Every system I build prioritizes performance, security, and developer experience.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Card className="glass-card hover:glow-soft transition-all duration-500">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Focus Areas</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">AI-Powered APIs</p>
                    <p className="text-xs text-muted-foreground">RAG systems, LangChain integration, vector search</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Backend Architecture</p>
                    <p className="text-xs text-muted-foreground">Laravel, FastAPI, REST/GraphQL APIs, microservices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Performance Engineering</p>
                    <p className="text-xs text-muted-foreground">Database optimization, caching strategies, query tuning</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 mt-6">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="glass border-primary/30 text-primary hover:scale-105 transition-transform duration-200"
                >
                  Performance
                </Badge>
                <Badge
                  variant="outline"
                  className="glass border-primary/30 text-primary hover:scale-105 transition-transform duration-200"
                >
                  Scalability
                </Badge>
                <Badge
                  variant="outline"
                  className="glass border-primary/30 text-primary hover:scale-105 transition-transform duration-200"
                >
                  Security
                </Badge>
                <Badge
                  variant="outline"
                  className="glass border-accent/30 text-accent hover:scale-105 transition-transform duration-200"
                >
                  Maintainability
                </Badge>
                <Badge
                  variant="outline"
                  className="glass border-accent/30 text-accent hover:scale-105 transition-transform duration-200"
                >
                  DX Focus
                </Badge>
              </div>
            </div>
          </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
