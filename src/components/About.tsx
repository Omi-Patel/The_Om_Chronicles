"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { UserPlus } from "lucide-react";

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

export const About = () => {
  return (
    <section
      id="about"
      className="group py-20 bg-muted/30 relative overflow-hidden scroll-mt-24"
    >
      <CornerDecorations />
      {/* About Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-indigo-500/8 blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/6 blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-violet-500/8 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-56 h-56 bg-sky-500/6 blur-3xl"></div>
      </div>

      {/* About Dots Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-muted-foreground/40"></div>
        <div className="absolute top-32 left-40 w-1 h-1 bg-muted-foreground/30"></div>
        <div className="absolute top-48 left-60 w-3 h-3 bg-muted-foreground/50"></div>
        <div className="absolute top-64 left-80 w-1.5 h-1.5 bg-muted-foreground/35"></div>
        <div className="absolute top-80 left-32 w-2.5 h-2.5 bg-muted-foreground/45"></div>
        <div className="absolute top-96 left-72 w-1 h-1 bg-muted-foreground/30"></div>

        <div className="absolute top-24 right-24 w-2 h-2 bg-muted-foreground/40"></div>
        <div className="absolute top-40 right-48 w-1.5 h-1.5 bg-muted-foreground/35"></div>
        <div className="absolute top-56 right-32 w-1 h-1 bg-muted-foreground/30"></div>
        <div className="absolute top-72 right-64 w-3 h-3 bg-muted-foreground/50"></div>
        <div className="absolute top-88 right-40 w-2 h-2 bg-muted-foreground/40"></div>

        <div className="absolute bottom-20 left-28 w-2.5 h-2.5 bg-muted-foreground/45"></div>
        <div className="absolute bottom-36 left-56 w-1 h-1 bg-muted-foreground/30"></div>
        <div className="absolute bottom-52 left-44 w-2 h-2 bg-muted-foreground/40"></div>
        <div className="absolute bottom-68 left-68 w-1.5 h-1.5 bg-muted-foreground/35"></div>

        <div className="absolute bottom-24 right-32 w-3 h-3 bg-muted-foreground/50"></div>
        <div className="absolute bottom-40 right-56 w-1 h-1 bg-muted-foreground/30"></div>
        <div className="absolute bottom-56 right-28 w-2 h-2 bg-muted-foreground/40"></div>
        <div className="absolute bottom-72 right-52 w-1.5 h-1.5 bg-muted-foreground/35"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="w-fit text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground/40">About Me</h2>
          <p className="text-muted-foreground max-w-2xl">
            A passionate software developer with a love for clean code and
            innovative solutions
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <Image
                src="https://res.cloudinary.com/omicloud07/image/upload/v1716871034/my_photo_ddfczq.jpg"
                alt="Om Patel"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div className="max-w-4xl">
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground/40 ">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I&apos;m a <span className="text-foreground  bg-muted-foreground/20">Full Stack Developer</span> with a deep passion for building scalable and user-centric digital solutions. My journey involves mastering both the art of frontend design and the science of backend architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the frontend realm, I specialize in crafting pixel-perfect, responsive interfaces using <span className="text-blue-500 bg-muted-foreground/20">React</span>, <span className="text-blue-500 bg-muted-foreground/20">Next.js</span>, and <span className="text-blue-500 bg-muted-foreground/20">Tailwind CSS</span>, enhanced with smooth animations via <span className="text-blue-500 bg-muted-foreground/20">Framer Motion</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On the backend, I engineer robust server-side applications using <span className="text-green-500 bg-muted-foreground/20">Node.js</span> and <span className="text-green-500 bg-muted-foreground/20">Spring Boot</span>, leveraging languages like <span className="text-green-500 bg-muted-foreground/20">TypeScript</span>, <span className="text-green-500 bg-muted-foreground/20">Java</span>, and <span className="text-green-500 bg-muted-foreground/20">Kotlin</span>. I design efficient database schemas with <span className="text-purple-500 bg-muted-foreground/20">PostgreSQL</span> and <span className="text-purple-500 bg-muted-foreground/20">MongoDB</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My development workflow is powered by modern tools like <span className="text-orange-500 bg-muted-foreground/20">Docker</span>, <span className="text-orange-500  bg-muted-foreground/20">AWS</span>, and <span className="text-orange-500  bg-muted-foreground/20">Git</span>, ensuring high-quality software delivery.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="https://linktr.ee/Om_Patel_07" target="_blank">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Connect With Me
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

