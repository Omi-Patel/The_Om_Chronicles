"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const highlight = "font-medium text-foreground";

export const About = () => {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading index="01" eyebrow="About" title="A little about me" />

        <div className="grid items-start gap-12 md:grid-cols-[1fr,320px] lg:gap-20">
          {/* Statement + prose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              I like building things that feel effortless —{" "}
              <span className="text-muted-foreground">
                interfaces with intent, and systems that scale quietly behind
                them.
              </span>
            </p>

            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a{" "}
                <span className={highlight}>full-stack developer</span> working
                across the whole stack — from the first wireframe to the
                deployed service. On the frontend, I craft responsive,
                pixel-perfect interfaces with{" "}
                <span className={highlight}>React</span>,{" "}
                <span className={highlight}>Next.js</span>,{" "}
                <span className={highlight}>TypeScript</span> and{" "}
                <span className={highlight}>Tailwind CSS</span>.
              </p>
              <p>
                On the backend, I build robust services with{" "}
                <span className={highlight}>Node.js</span> and{" "}
                <span className={highlight}>Spring Boot</span>, backed by{" "}
                <span className={highlight}>PostgreSQL</span> and{" "}
                <span className={highlight}>MongoDB</span> — shipped with
                modern tooling like <span className={highlight}>Docker</span>,{" "}
                <span className={highlight}>AWS</span> and{" "}
                <span className={highlight}>Git</span>.
              </p>
            </div>

            <Button asChild variant="outline" className="group">
              <Link href="https://linktr.ee/Om_Patel_07" target="_blank">
                Connect with me
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>

          {/* Profile card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
                <Image
                  src="https://res.cloudinary.com/omicloud07/image/upload/v1716871034/my_photo_ddfczq.jpg"
                  alt="Om Patel"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold tracking-tight">Om Patel</p>
                <p className="text-sm text-muted-foreground">
                  Software Developer
                </p>
              </div>
            </div>

            <div className="my-6 h-px bg-border" aria-hidden />

            <dl className="space-y-4">
              {[
                { label: "Currently", value: "Liquify Solutions" },
                { label: "Focus", value: "Full-Stack Web" },
                { label: "Location", value: "Gujarat, India" },
                { label: "Status", value: "Open to work" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
