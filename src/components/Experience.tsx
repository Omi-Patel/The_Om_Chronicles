"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

// Corner Decoration Component
const CornerDecorations = ({ className = "" }: { className?: string }) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 z-10 ${className} hidden md:block`}>
    <div className="absolute inset-4 ring-1 ring-border/70" />
    <span className="absolute top-4 left-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute top-4 left-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute top-4 right-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute top-4 right-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute bottom-4 left-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute bottom-4 left-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute bottom-4 right-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute bottom-4 right-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
  </div>
);

export const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Engineer",
      company: "Liquify Solutions",
      period: "January 2025 - Present",
      description:
        "Development of enterprise-level web applications using Spring Boot, handling both frontend and backend components, and providing solutions to real-world problems.",
      technologies: ["ReactJS", "Spring Boot", "Java", "Kotlin", "Full Stack Development"],
    },
    {
      title: "Junior Full Stack Developer",
      company: "The Development Studio",
      period: "July 2024 - October 2024",
      description:
        "Development of enterprise-level web applications, handling frontend components, and integrating APIs for actual data.",
      technologies: ["React", "Node.js", "API Integration"],
    },
    {
      title: "Full Stack Developer",
      company: "Zidio Development",
      period: "June 2024 - July 2024",
      description:
        "Developed and maintained resume builder websites, integrated third-party APIs and services, and optimized application performance.",
      technologies: ["React", "Node.js", "Performance Optimization"],
    },
  ];

  return (
    <section id="experience" className="group py-20 relative overflow-hidden scroll-mt-24">
      <CornerDecorations />
      {/* Experience Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-slate-500/6 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gray-500/8 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-500/6 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neutral-500/8 blur-3xl"></div>
      </div>

      {/* Experience Lines Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-32 h-px bg-current"></div>
        <div className="absolute top-40 left-0 w-24 h-px bg-current"></div>
        <div className="absolute top-60 left-0 w-28 h-px bg-current"></div>
        <div className="absolute bottom-20 right-0 w-32 h-px bg-current"></div>
        <div className="absolute bottom-40 right-0 w-24 h-px bg-current"></div>
        <div className="absolute bottom-60 right-0 w-28 h-px bg-current"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="w-fit text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground/40">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent md:before:ml-[18rem] md:before:translate-x-0">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-start md:flex-row md:items-center group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-5 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-primary bg-background md:left-[18rem] z-10 group-hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-0.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Date (Desktop) */}
              <div className="hidden md:block md:w-[16rem] md:text-right md:pr-12 text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors duration-300">
                {job.period}
              </div>

              {/* Content Card */}
              <Card className="ml-12 md:ml-12 flex-1 border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/20 relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold flex items-center gap-2 group-hover/card:text-primary transition-colors">
                          {job.title}
                          <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-primary" />
                        </h3>
                        <div className="flex items-center text-primary font-medium mt-1">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {job.company}
                        </div>
                      </div>
                      {/* Date (Mobile) */}
                      <div className="flex items-center text-muted-foreground text-sm md:hidden mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/5 hover:bg-primary/10 text-primary border-transparent transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
