import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-foreground py-24 px-6 md:px-12 lg:px-24 border-t border-border/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24">
          <div className="space-y-8">
            <h2 className="text-[12vw] md:text-[6vw] font-display font-bold leading-[0.8] tracking-tighter">
              LET'S <br />
              BUILD.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-md">
              Have a complex backend challenge or an AI idea? Let's turn it into a robust, scalable reality.
            </p>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end space-y-8">
            <Button
              size="lg"
              className="h-16 px-10 text-xl rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              asChild
            >
              <a href="mailto:mohamedthabetthabet36@gmail.com">
                Start a Conversation
                <ArrowUpRight className="ml-2 h-6 w-6" />
              </a>
            </Button>

            <div className="flex gap-6">
              <a
                href="https://github.com/MohamedThabt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed--thabet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mohamedthabetthabet36@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20 text-sm text-muted-foreground">
          <p>© 2024 Mohamed Thabet. Crafted with precision.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 hover:text-foreground transition-colors uppercase tracking-widest text-xs font-medium"
          >
            Back to Top
          </button>
        </div>
      </div>
      
      {/* Decorative massive text in background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <span className="text-[20vw] font-bold leading-none whitespace-nowrap">
          THABET AI FORGE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
