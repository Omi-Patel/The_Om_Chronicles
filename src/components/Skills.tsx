"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const skillGroups = [
  {
    id: "01",
    title: "Frontend",
    note: "Interfaces that feel effortless.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    id: "02",
    title: "Backend",
    note: "Robust, scalable server-side systems.",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Java",
      "Kotlin",
      "REST APIs",
    ],
  },
  {
    id: "03",
    title: "Database",
    note: "Efficient schemas, reliable data.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "BaaS"],
  },
  {
    id: "04",
    title: "Tools & Cloud",
    note: "Shipping with modern workflows.",
    skills: ["Git & GitHub", "Docker", "AWS", "Vercel", "Postman"],
  },
];

const alsoInto = ["System Design", "Open Source", "UI/UX Details", "AI Integrations"];

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Technologies I work with"
          description="The tools I reach for to take an idea from concept to production."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-card/80 md:p-10"
            >
              {/* Accent line sweeps across the top on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0.5 w-0 bg-primary transition-[width] duration-500 ease-out group-hover:w-full"
              />

              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary">
                  {group.id}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{group.note}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: groupIndex * 0.08 + skillIndex * 0.04,
                    }}
                    viewport={{ once: true }}
                    className="cursor-default rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Full-width footer strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 bg-card px-8 py-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between md:px-10"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Also into
            </span>
            <p className="font-mono text-xs text-muted-foreground">
              {alsoInto.join("  ·  ")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
