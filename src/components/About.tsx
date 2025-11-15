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
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Passionate about creating elegant, efficient, and explainable code
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
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate backend software engineer from Egypt,
                  specializing in building robust, scalable systems that power
                  modern applications. My expertise spans from traditional web
                  frameworks to cutting-edge AI integrations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Over the years, I've evolved from web development to
                  architecting complex AI-powered systems, particularly focusing
                  on Retrieval-Augmented Generation (RAG) architectures that bring
                  intelligence to data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe code should be elegant, efficient, and explainable.
                  Every system I build is designed with performance, scalability,
                  and security at its core.
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
              <h3 className="text-xl font-semibold mb-4">Core Values</h3>
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
                  className="glass border-primary/30 text-primary hover:scale-105 transition-transform duration-200"
                >
                  Clarity
                </Badge>
                <Badge
                  variant="outline"
                  className="glass border-accent/30 text-accent hover:scale-105 transition-transform duration-200"
                >
                  Innovation
                </Badge>
                <Badge
                  variant="outline"
                  className="glass border-accent/30 text-accent hover:scale-105 transition-transform duration-200"
                >
                  Excellence
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
