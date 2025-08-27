import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MessageSquare,
  Calendar,
  MapPin,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to discuss your next project? I'd love to hear from you.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <Card className="glass-card lg:col-span-1 animate-scale-in stagger-1 hover:glow-soft transition-all duration-500">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">


              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 text-accent rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Egypt (Remote Available)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">Open for new opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Links */}
        <Card className="glass-card lg:col-span-1 animate-scale-in stagger-2 hover:glow-soft transition-all duration-500">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6">Connect on Social</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="glass border-primary/30 hover:bg-primary/10 justify-start w-full"
                asChild
              >
                <a href="mailto:mohamedthabetthabet36@gmail.com">
                  <Mail className="mr-3 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="glass border-primary/30 hover:bg-primary/10 justify-start w-full"
                asChild
              >
                <a href="https://github.com/MohamedThabt" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="glass border-primary/30 hover:bg-primary/10 justify-start w-full"
                asChild
              >
                <a href="https://www.linkedin.com/in/mohamed--thabet" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="glass border-accent/30 hover:bg-accent/10 justify-start w-full"
                asChild
              >
                <a href="https://t.me/m_7_m_d_t_h_a_b_e_t" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-3 h-4 w-4" />
                  Telegram
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="glass border-primary/30 hover:bg-primary/10 justify-start w-full"
                asChild
              >
                <a href="https://x.com/SirThabet" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-3 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17.53 6.47L6.47 17.53M6.47 6.47l11.06 11.06" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  X
                </a>
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Services highlight */}
        <Card className="glass-card lg:col-span-1 animate-scale-in stagger-3 hover:glow-soft transition-all duration-500">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gradient">Services I Offer</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Backend API Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">RAG Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">AI Integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">System Architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Database Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Performance Optimization</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;