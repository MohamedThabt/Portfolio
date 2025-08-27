import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Award,
  Calendar,
  ExternalLink,
  Eye,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificates = [
    {
      id: 1,
      title: "Introduction to Cyber Security",
      issuer: "Cisco Networking Academy",
      date: "2023",
      credentialId: "CISCO-CYBERSEC-2023",
      image: `${
        import.meta.env.BASE_URL
      }certificates/Introduction to Cyber Security.png`,
      skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
      status: "Active",
      level: "Foundation",
      duration: "40 hours",
      verificationUrl: null,
      verified: true,
      priority: "high",
      description:
        "Foundational knowledge in cybersecurity principles, threat identification, and security best practices. Covers essential security concepts, risk management, and incident response procedures.",
      achievements: [
        "Security Fundamentals",
        "Threat Assessment",
        "Risk Management",
      ],
    },
    {
      id: 2,
      title: "CompTIA Network+ (N10-008)",
      issuer: "Cybrary",
      date: "Jun 2024",
      credentialId: "CC-dfa8508d-be2a-40bb-8226-52c686994dfd",
      image: `${
        import.meta.env.BASE_URL
      }certificates/CompTIA Network+ (N10-008).png`,
      skills: [
        "Network Administration",
        "TCP/IP",
        "Network Troubleshooting",
        "Security",
      ],
      status: "Active",
      level: "Professional",
      duration: "11 hours",
      verificationUrl:
        "https://app.cybrary.it/courses/api/certificate/CC-dfa8508d-be2a-40bb-8226-52c686994dfd/view",
      verified: true,
      priority: "high",
      description:
        "10 CEUs/CPEs and 11 hours training course completion for CompTIA Network+ covering networking concepts, infrastructure, operations, and security. Industry-standard certification for network professionals.",
      achievements: [
        "Network Infrastructure",
        "Security Implementation",
        "Troubleshooting Expertise",
      ],
    },
    {
      id: 3,
      title: "Cloud and Virtualization Concepts",
      issuer: "Professional Training Institute",
      date: "2023",
      credentialId: "CLOUD-VIRT-2023",
      image: `${
        import.meta.env.BASE_URL
      }certificates/Cloud and Virtualization Concepts.png`,
      skills: [
        "Cloud Computing",
        "Virtualization",
        "Infrastructure",
        "Scalability",
      ],
      status: "Active",
      level: "Intermediate",
      duration: "25 hours",
      verificationUrl: null,
      verified: true,
      priority: "medium",
      description:
        "Comprehensive understanding of cloud technologies, virtualization platforms, and modern infrastructure concepts. Covers cloud deployment models, virtualization strategies, and scalability principles.",
      achievements: [
        "Cloud Architecture",
        "Virtualization Mastery",
        "Infrastructure Design",
      ],
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="text-center mb-16 animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="h-8 w-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Certificates</span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Validated expertise through industry-recognized certifications and
          credentials
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: true,
        }}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {certificates.map((certificate, index) => (
            <CarouselItem
              key={certificate.id}
              className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <Card
                className="glass-card h-full border-border/30 hover:border-accent/50 transition-all duration-500 group hover:glow-soft hover:scale-105 transform animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 h-full flex flex-col relative overflow-hidden">
                  {/* Certificate Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex flex-col gap-2">
                      {certificate.verificationUrl && (
                        <a
                          href={certificate.verificationUrl}
                          className="text-muted-foreground hover:text-accent transition-colors p-1 rounded hover:bg-accent/10"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Certificate"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="text-muted-foreground hover:text-accent transition-colors p-1 rounded hover:bg-accent/10">
                            <Eye className="h-4 w-4" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
                          <div className="space-y-6">
                            <div className="text-center">
                              <h3 className="text-2xl font-bold mb-2">
                                {certificate.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {certificate.issuer}
                              </p>
                            </div>
                            <div className="relative rounded-lg overflow-hidden border border-border/30 bg-white/5">
                              <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="w-full h-auto object-contain max-h-[50vh]"
                                loading="lazy"
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2">Details</h4>
                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="font-medium">Level:</span>{" "}
                                    {certificate.level}
                                  </div>
                                  <div>
                                    <span className="font-medium">
                                      Duration:
                                    </span>{" "}
                                    {certificate.duration}
                                  </div>
                                  <div>
                                    <span className="font-medium">Date:</span>{" "}
                                    {certificate.date}
                                  </div>
                                  <div>
                                    <span className="font-medium">ID:</span>{" "}
                                    {certificate.credentialId}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">
                                  Achievements
                                </h4>
                                <div className="space-y-1">
                                  {certificate.achievements.map(
                                    (achievement, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-2 text-sm"
                                      >
                                        <Star className="h-3 w-3 text-accent" />
                                        {achievement}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  {/* Certificate Image */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative mb-4 rounded-lg overflow-hidden border border-border/30 bg-white/5 cursor-pointer group/image">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-48 object-cover group-hover/image:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <div className="text-white text-sm font-medium flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            View Full Size
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[90vw] h-[80vh] p-4">
                      <div className="flex items-center justify-center h-full">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Certificate Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {certificate.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {certificate.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">Issuer:</span>
                        <span className="truncate">{certificate.issuer}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{certificate.date}</span>
                        </div>
                        <div className="text-xs">{certificate.duration}</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs text-muted-foreground bg-accent/10 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 4 && (
                        <span className="text-xs text-muted-foreground">
                          +{certificate.skills.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Achievements Preview */}
                    <div className="border-t border-border/30 pt-3">
                      <div className="text-xs text-muted-foreground mb-2 font-medium">
                        Key Achievements:
                      </div>
                      <div className="space-y-1">
                        {certificate.achievements
                          .slice(0, 2)
                          .map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs text-muted-foreground"
                            >
                              <Star className="h-2 w-2 text-accent" />
                              {achievement}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="glass-card border-border/30 hover:border-accent/50 bg-background/90 backdrop-blur-sm hover:bg-accent/10" />
        <CarouselNext className="glass-card border-border/30 hover:border-accent/50 bg-background/90 backdrop-blur-sm hover:bg-accent/10" />
      </Carousel>

      {/* Enhanced Summary Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card text-center p-6 animate-scale-in stagger-1 hover:glow-soft transition-all duration-500 hover:scale-105 transform group">
          <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
            {certificates.length}
          </div>
          <div className="text-sm text-muted-foreground">
            Total Certificates
          </div>
          <Award className="h-5 w-5 text-accent/50 mx-auto mt-2" />
        </div>
        <div className="glass-card text-center p-6 animate-scale-in stagger-2 hover:glow-soft transition-all duration-500 hover:scale-105 transform group">
          <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
            {certificates.filter((cert) => cert.verified).length}
          </div>
          <div className="text-sm text-muted-foreground">
            Verified Credentials
          </div>
          <Shield className="h-5 w-5 text-green-400/50 mx-auto mt-2" />
        </div>
        <div className="glass-card text-center p-6 animate-scale-in stagger-3 hover:glow-soft transition-all duration-500 hover:scale-105 transform group">
          <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
            {certificates.reduce(
              (acc, cert) => acc + parseInt(cert.duration),
              0
            )}
            +
          </div>
          <div className="text-sm text-muted-foreground">Training Hours</div>
          <TrendingUp className="h-5 w-5 text-blue-400/50 mx-auto mt-2" />
        </div>
        <div className="glass-card text-center p-6 animate-scale-in stagger-4 hover:glow-soft transition-all duration-500 hover:scale-105 transform group">
          <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
            {new Set(certificates.flatMap((cert) => cert.skills)).size}
          </div>
          <div className="text-sm text-muted-foreground">Verified Skills</div>
          <Star className="h-5 w-5 text-purple-400/50 mx-auto mt-2" />
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;
