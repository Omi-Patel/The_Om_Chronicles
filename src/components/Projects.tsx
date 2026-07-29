"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "retroUI — React Component Library",
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
    tags: ["AI", "MERN Stack", "Payments"],
    liveUrl: "https://poster.basecase.site/",
    githubUrl: "",
  },
  {
    title: "Veltrix — Project Management",
    description:
      "A comprehensive project management system with real-time collaboration and deadline tracking.",
    tags: ["React.js", "PostgreSQL", "Spring Boot"],
    liveUrl: "https://project-management-client-eosin.vercel.app/",
    githubUrl: "https://github.com/Omi-Patel/Project_Management_Client",
  },
  {
    title: "Saarthi_EngStudy",
    description:
      "A study material sharing platform with secure uploads, cloud storage, and a smooth user experience.",
    tags: ["Next.js", "MongoDB", "Cloud Storage"],
    liveUrl: "https://saarthi-engstudy.vercel.app/",
    githubUrl: "https://github.com/Omi-Patel/Saarthi_EngStudy_Frontend",
  },
  {
    title: "LiftLogX",
    description:
      "A platform for users to log their gym workouts and manage their progress.",
    tags: ["Next.js", "PostgreSQL", "NeonDB"],
    liveUrl: "https://gym-logbook.vercel.app/",
    githubUrl: "https://github.com/Omi-Patel/gym-logbook",
  },
  {
    title: "getYourTiffin()",
    description:
      "A food ordering platform with Razorpay integration and an admin interface for order management.",
    tags: ["Next.js", "Razorpay", "MongoDB"],
    liveUrl: "https://book-your-tiffin-online.vercel.app/",
    githubUrl: "https://github.com/Omi-Patel/BookYourTiffin",
  },
  {
    title: "motivate.js — NPM Package",
    description:
      "An npm package that provides motivational quotes when errors occur during development.",
    tags: ["NPM", "JavaScript", "Node.js"],
    liveUrl: "https://www.npmjs.com/package/motivatejs",
    githubUrl: "https://github.com/Omi-Patel/motivatejs",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Selected work"
          description="A selection of my recent work and personal projects."
        />

        <div className="divide-y divide-border/70 border-y border-border/70">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                className="group relative block"
              >
                <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-8 md:py-9">
                  {/* Index */}
                  <span className="w-12 shrink-0 font-mono text-sm tabular-nums text-muted-foreground/50 transition-colors group-hover:text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title + description */}
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-2 text-xl font-medium tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                      <span className="truncate">{project.title}</span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <p className="shrink-0 font-mono text-xs text-muted-foreground/70 md:w-56 md:text-right">
                    {project.tags.join(" · ")}
                  </p>

                  {/* GitHub link */}
                  <div className="hidden shrink-0 items-center md:flex">
                    {project.githubUrl ? (
                      <span
                        role="link"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(
                            project.githubUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                              project.githubUrl,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        aria-label={`${project.title} source code`}
                      >
                        <Github className="h-4 w-4" />
                      </span>
                    ) : (
                      <span className="h-9 w-9" aria-hidden />
                    )}
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
          className="mt-12"
        >
          <Link
            href="https://github.com/Omi-Patel"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-primary/40"
          >
            <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            View more on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
