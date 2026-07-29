"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background: faint grid fading out + single soft accent glow */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-10rem] h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs tracking-wide text-muted-foreground">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            Om Patel<span className="text-primary">.</span>
            <br />
            <span className="text-muted-foreground">Software Developer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I design and build clean, scalable web experiences — from
            pixel-perfect interfaces to robust backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://drive.google.com/file/d/1Cdqhc_BzRCXBReZ8CnqqtwwnYygPCtt-/view?usp=sharing"
                target="_blank"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>

            <span aria-hidden className="hidden h-6 w-px bg-border sm:block" />

            <div className="flex items-center gap-1">
              {[
                {
                  href: "https://github.com/Omi-Patel",
                  label: "GitHub",
                  icon: Github,
                },
                {
                  href: "https://linkedin.com/in/ompatel7113",
                  label: "LinkedIn",
                  icon: Linkedin,
                },
                {
                  href: "mailto:omipatel7113@gmail.com",
                  label: "Email",
                  icon: Mail,
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};
