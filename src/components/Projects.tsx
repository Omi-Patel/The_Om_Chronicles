"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink, Github, Star, ArrowUpRight, FolderGit2 } from "lucide-react";

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
      featured: true,
    },
    {
      title: "motivate.js - NPM Package",
      description:
        "An npm package that provides motivational quotes when errors occur during development.",
      tags: ["NPM", "JavaScript", "Node.js"],
      liveUrl: "https://www.npmjs.com/package/motivatejs",
      githubUrl: "https://github.com/Omi-Patel/motivatejs",
      featured: false,
    },


    {
      title: "Code_Mine",
      description:
        "A technology blog platform where users can read and share thoughts in the comment section.",
      tags: ["Next.js", "Blog", "Comments"],
      liveUrl: "https://code-mine.vercel.app/",
      githubUrl: "https://github.com/Omi-Patel/CodeMine_",
      featured: false,
    },
    {
      title: "getYourTiffin()",
      description:
        "A food ordering platform with Razorpay integration and admin interface for order management.",
      tags: ["Next.js", "Razorpay", "MongoDB"],
      liveUrl: "https://book-your-tiffin-online.vercel.app/",
      githubUrl: "https://github.com/Omi-Patel/BookYourTiffin",
      featured: true,
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
      featured: true,
    },
    {
      title: "resumifyX",
      description:
        "A dynamic web application for creating professional resumes with PDF export functionality.",
      tags: ["React", "Resume Builder", "PDF Export"],
      liveUrl: "https://resumifyx.vercel.app/",
      githubUrl: "https://github.com/Omi-Patel/Resume_Builder",
      featured: false,
    },
    {
      title: "Saarthi_EngStudy",
      description:
        "A study material sharing platform with secure uploads, cloud storage, and a smooth user experience, powered by Next.js, MongoDB, and Vercel.",
      tags: ["Next.js", "MongoDB", "Cloud Storage"],
      liveUrl: "https://saarthi-engstudy.vercel.app/",
      githubUrl:
        "https://github.com/Omi-Patel/Saarthi_EngStudy_Frontend",
      featured: false,
    },

    {
      title: "LiftLogX",
      description:
        "A platform for users to log their gym workouts and manage their progress.",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "NeonDB", "NeonAuth"],
      liveUrl: "https://gym-logbook.vercel.app/",
      githubUrl:
        "https://github.com/Omi-Patel/gym-logbook",
      featured: true,
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group/card relative ${project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
            >
              <Card className="h-full flex flex-col border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:border-primary/20 overflow-hidden relative backdrop-blur-sm">

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold flex items-center gap-2 group-hover/card:text-primary transition-colors">
                        {project.title}
                        <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-y-0 group-hover/card:translate-x-0 transition-all duration-300" />
                      </CardTitle>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <FolderGit2 className="h-3 w-3 mr-1" />
                        Project
                      </div>
                    </div>
                    {project.featured && (
                      <div className="bg-yellow-500/10 p-1.5 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs font-medium bg-primary/5 text-primary/80 hover:bg-primary/10 hover:text-primary border-transparent transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-6">
                  <div className="flex items-center justify-between w-full pt-4 border-t border-border/40">
                    <div className="flex gap-4">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
                      >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline">Code</span>
                      </Link>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="hidden sm:inline">Live Demo</span>
                      </Link>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
