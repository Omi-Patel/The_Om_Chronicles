"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

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

export const Projects = () => {
  const projects = [
    {
      title: "retroUI - React Component Library",
      description:
        "A carefully crafted UI component library built with ReactJS and Tailwind CSS, designed for retro-themed interfaces.",
      tags: ["React", "Tailwind CSS", "UI Library"],
      liveUrl: "https://retro-ui-component.vercel.app/",
      githubUrl: "https://github.com/Omi-Patel/retroUI_Component",
    },

    {
      title: "postER",
      description:
        "An AI-powered content creator that automates social media post generation, helping creators and businesses produce engaging, on-brand content at scale.",
      tags: ["AI", "MERN Stack", "Social Media", "Payment Gateway"],
      liveUrl: "https://poster.basecase.site/",
      githubUrl: "",
    },

    {
      title: "Veltrix | Project Management",
      description:
        "A comprehensive project management system with real-time collaboration and deadline tracking.",
      tags: ["React.js", "PostgreSQL", "Spring Boot"],
      liveUrl:
        "https://project-management-client-eosin.vercel.app/",
      githubUrl:
        "https://github.com/Omi-Patel/Project_Management_Client",
    },
    {
      title: "Saarthi_EngStudy",
      description:
        "A study material sharing platform with secure uploads, cloud storage, and a smooth user experience, powered by Next.js, MongoDB, and Vercel.",
      tags: ["Next.js", "MongoDB", "Cloud Storage"],
      liveUrl: "https://saarthi-engstudy.vercel.app/",
      githubUrl:
        "https://github.com/Omi-Patel/Saarthi_EngStudy_Frontend",
    },

    {
      title: "LiftLogX",
      description:
        "A platform for users to log their gym workouts and manage their progress.",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "NeonDB", "NeonAuth"],
      liveUrl: "https://gym-logbook.vercel.app/",
      githubUrl:
        "https://github.com/Omi-Patel/gym-logbook",
    },
    {
      title: "getYourTiffin()",
      description:
        "A food ordering platform with Razorpay integration and admin interface for order management.",
      tags: ["Next.js", "Razorpay", "MongoDB"],
      liveUrl: "https://book-your-tiffin-online.vercel.app/",
      githubUrl: "https://github.com/Omi-Patel/BookYourTiffin",
    },
    {
      title: "motivate.js - NPM Package",
      description:
        "An npm package that provides motivational quotes when errors occur during development.",
      tags: ["NPM", "JavaScript", "Node.js"],
      liveUrl: "https://www.npmjs.com/package/motivatejs",
      githubUrl: "https://github.com/Omi-Patel/motivatejs",
    }
  ];

  return (
    <section
      id="projects"
      className="group py-20 bg-muted/30 relative overflow-hidden scroll-mt-24"
    >
      <CornerDecorations />
      {/* Projects Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-amber-500/6 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-500/8 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-orange-500/6 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-red-500/8 blur-3xl"></div>
      </div>

      {/* Projects Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-current"></div>
        <div className="absolute top-40 left-40 w-1 h-1 bg-current"></div>
        <div className="absolute top-60 left-60 w-3 h-3 bg-current"></div>
        <div className="absolute top-80 left-80 w-1 h-1 bg-current"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-current"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-current"></div>
        <div className="absolute bottom-60 right-60 w-3 h-3 bg-current"></div>
        <div className="absolute bottom-80 right-80 w-1 h-1 bg-current"></div>
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
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-border/50">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                className="group/row relative block border-b border-border/50"
              >
                {/* Hover wash */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-primary/[0.02] to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity duration-500" />
                {/* Left accent bar */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-0.5 bg-primary scale-y-0 group-hover/row:scale-y-100 origin-top transition-transform duration-500" />

                <div className="relative flex flex-col gap-5 px-2 py-7 md:flex-row md:items-center md:gap-8 md:px-6 md:py-8">
                  {/* Index */}
                  <div className="flex w-full items-center md:w-20 md:shrink-0">
                    <span className="text-sm tabular-nums text-muted-foreground/60 transition-colors duration-300 group-hover/row:text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover/row:text-primary md:text-2xl">
                      <span className="truncate">{project.title}</span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:translate-y-0 group-hover/row:opacity-100" />
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:w-64 md:shrink-0 md:justify-end">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="border-transparent bg-primary/5 text-xs font-medium text-primary/80 transition-colors duration-300 group-hover/row:bg-primary/10 group-hover/row:text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-1 md:shrink-0">
                    {project.githubUrl && (
                      <span
                        role="link"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:bg-primary/10 hover:text-foreground"
                        aria-label={`${project.title} source code`}
                      >
                        <Github className="h-4 w-4" />
                      </span>
                    )}
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 group-hover/row:bg-primary/10 group-hover/row:text-primary"
                      aria-hidden
                    >
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-end"
        >
          <Link
            href="https://github.com/Omi-Patel"
            target="_blank"
            className="group/more inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg"
          >
            <Github className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover/more:text-primary" />
            View more on GitHub
            <ArrowUpRight className="h-4 w-4 -translate-x-1 transition-transform duration-300 group-hover/more:translate-x-0 group-hover/more:text-primary" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
