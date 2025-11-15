import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "default" | "wave" | "dots" | "line";
}

const SectionDivider = ({ variant = "default" }: SectionDividerProps) => {
  if (variant === "wave") {
    return (
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-border/30"
            animate={{
              d: [
                "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
                "M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z",
                "M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="relative w-full py-12 flex justify-center">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="relative w-full py-8 flex justify-center">
        <motion.div
          className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full py-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border/30" />
      </div>
      <div className="relative flex justify-center">
        <motion.div
          className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionDivider;

