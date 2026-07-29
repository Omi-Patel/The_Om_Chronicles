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

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Technologies I work with"
          description="The tools I reach for to take an idea from concept to production."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-card p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground/60 transition-colors group-hover:text-primary">
                  {group.id}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{group.note}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
