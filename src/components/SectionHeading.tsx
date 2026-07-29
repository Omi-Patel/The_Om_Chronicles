"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-14 md:mb-16"
  >
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
      <span>{index}</span>
      <span className="h-px w-8 bg-primary/40" aria-hidden />
      <span>{eyebrow}</span>
    </div>
    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        {description}
      </p>
    )}
  </motion.div>
);
