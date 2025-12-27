"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

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

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] mt-16 flex items-center overflow-hidden bg-background pt-12 pb-20 md:pt-32 md:pb-32 group"
    >
      <CornerDecorations />
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-start text-left max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-8 max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground">Available for Work</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Om Patel</span>
              <br />
              <span className="text-foreground/80">Software Developer.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build pixel-perfect, engaging, and accessible digital experiences.
              Passionate about turning complex problems into simple, beautiful interfaces.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
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
          </motion.div>

          <motion.div
            className="flex items-center gap-6 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="https://github.com/Omi-Patel" target="_blank" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/ompatel7113" target="_blank" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:omipatel7113@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
