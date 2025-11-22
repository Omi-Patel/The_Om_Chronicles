"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Code, Terminal, Globe, Box, Layout, Layers, Cloud, Coffee, Globe2, FileCode2, Palette, AtomIcon, Zap, GitBranch } from "lucide-react";

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

export const Skills = () => {
  return (
    <section id="skills" className="group py-20 relative overflow-hidden scroll-mt-24">
      <CornerDecorations />
      {/* Skills Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/6 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-lime-500/8 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/4 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-teal-500/8 blur-3xl"></div>
      </div>

      {/* Skills Hexagon Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-current transform rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-current transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border border-current transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-current transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="w-fit text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground/40">Skills</h2>
          <p className="text-muted-foreground max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Bento Grid Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Frontend - Large Horizontal Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-1"
          >
            <div className="h-full p-8 border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 transition-colors duration-300">
                      <Monitor className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-semibold">Frontend Development</h3>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground/60 border border-border/50 px-2 py-1">
                    Focus
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { name: "React", icon: AtomIcon },
                    { name: "Next.js", icon: Globe2 },
                    { name: "TypeScript", icon: FileCode2 },
                    { name: "Tailwind CSS", icon: Palette },
                    { name: "Framer Motion", icon: Zap },
                    { name: "HTML/CSS", icon: Layers },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 p-2 bg-white/5 transition-colors cursor-default border border-transparent hover:border-blue-500/20"
                    >
                      <skill.icon className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Backend - Tall Vertical Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-2"
          >
            <div className="h-full p-8 border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-xl group relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-bl from-green-500/5 via-transparent to-transparent opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-green-500/10 transition-colors duration-300">
                    <Server className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold">Backend</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Node.js", icon: Server },
                    { name: "Express", icon: Box },
                    { name: "Spring Boot", icon: Coffee },
                    { name: "Java", icon: Coffee },
                    { name: "Kotlin", icon: FileCode2 },
                    { name: "REST APIs", icon: Globe },
                    { name: "System Design", icon: Layout },
                  ].map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-2 bg-white/5 transition-colors border border-transparent hover:border-green-500/20"
                    >
                      <skill.icon className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50 relative z-10">
                <div className="text-xs text-muted-foreground">
                  Building robust and scalable server-side architectures.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Database - Small Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="h-full p-6 lg:p-8 border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 transition-colors duration-300">
                    <Database className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "MongoDB", icon: Database },
                    { name: "PostgreSQL", icon: Database },
                    { name: "MySQL", icon: Database },
                    { name: "BaaS", icon: Layers },
                  ].map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2 bg-white/5 hover:bg-background/60 border border-transparent hover:border-purple-500/20 transition-colors"
                    >
                      <tech.icon className="h-4 w-4 text-purple-500" />
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools - Small Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="h-full p-6 lg:p-8 border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/5 via-transparent to-transparent opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500/10 transition-colors duration-300">
                    <Code className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Tools</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Git & GitHub", icon: GitBranch },
                    { name: "Docker", icon: Box },
                    { name: "AWS", icon: Cloud },
                    { name: "Vercel", icon: Layout },
                    { name: "VS Code", icon: Terminal },
                    { name: "Postman", icon: Globe },
                  ].map((tool) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2 bg-white/5 hover:bg-background/60 border border-transparent hover:border-orange-500/20 transition-colors"
                    >
                      <tool.icon className="h-4 w-4 text-orange-500" />
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

