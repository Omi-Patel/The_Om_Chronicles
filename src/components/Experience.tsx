"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const experiences = [
  {
    title: "Software Developer Engineer",
    company: "Liquify Solutions",
    period: "Jan 2025 — Present",
    description:
      "Building enterprise-level web applications with Spring Boot, owning both frontend and backend components and delivering solutions to real-world problems.",
    technologies: ["ReactJS", "Spring Boot", "Java", "Kotlin"],
  },
  {
    title: "Junior Full Stack Developer",
    company: "The Development Studio",
    period: "Jul 2024 — Oct 2024",
    description:
      "Developed enterprise-level web applications, built frontend components and integrated APIs for production data.",
    technologies: ["React", "Node.js", "API Integration"],
  },
  {
    title: "Full Stack Developer",
    company: "Zidio Development",
    period: "Jun 2024 — Jul 2024",
    description:
      "Developed and maintained resume builder websites, integrated third-party APIs and services, and optimized application performance.",
    technologies: ["React", "Node.js", "Performance"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Where I've worked"
          description="My professional journey in software development."
        />

        <div className="divide-y divide-border/70 border-y border-border/70">
          {experiences.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group grid gap-3 py-10 md:grid-cols-[220px,1fr] md:gap-8"
            >
              <p className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-primary">
                {job.period}
              </p>

              <div>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {job.company}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
                <p className="mt-4 font-mono text-xs text-muted-foreground/70">
                  {job.technologies.join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
