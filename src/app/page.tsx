"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Monitor,
  Server,
  Terminal,
  UserPlus,
  ExternalLink,
  Send,
  ArrowUp,
  Calendar,
  Star,
  AlignRight,
  File,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";
import Form from "@/components/Form";

// Corner Decoration Component (visible, reference-inspired ring + ticks)
const CornerDecorations = ({ className = "" }: { className?: string }) => (
  <div aria-hidden className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
    {/* Inset rounded frame */}
    <div className="absolute inset-4 ring-1 ring-border/70" />
    {/* Corner L ticks */}
    {/* Top Left */}
    <span className="absolute top-4 left-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute top-4 left-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    {/* Top Right */}
    <span className="absolute top-4 right-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute top-4 right-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    {/* Bottom Left */}
    <span className="absolute bottom-4 left-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute bottom-4 left-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    {/* Bottom Right */}
    <span className="absolute bottom-4 right-4 h-5 w-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
    <span className="absolute bottom-4 right-4 w-5 h-px bg-border/80 transition-colors duration-200 group-hover:bg-primary/60" />
  </div>
);

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const sectionIds = navItems.map((n) => n.id);
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop || document.body.scrollTop;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(progress);
        setScrolled(scrollTop > 0);
        setShowScrollTop(scrollTop > 500);
        for (const section of sectionIds) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollTop >= offsetTop - 100 &&
              scrollTop < offsetTop + offsetHeight - 100
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b border-border/50 ${scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"}`}>
        {/* Scroll progress bar */}
        <div
          className="absolute left-0 right-0 top-0 h-[2px] bg-transparent"
          aria-hidden
        >
          <span
            className="block h-full bg-primary/70 transition-[width] duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <nav className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            OM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={isActive ? "text-primary" : ""}>{item.label}</span>
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px origin-left bg-primary/80 transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Toggle menu"
                >
                  <AlignRight className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-bold">Om Patel</h2>
                    <p className="text-sm text-muted-foreground">
                      Software Developer
                    </p>
                  </div>
                  <nav className="flex flex-col p-6 space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="group relative overflow-hidden scroll-mt-24"
        >
          <CornerDecorations />
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-88 h-88 bg-orange-500/8 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/6 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-green-500/6 rounded-full blur-3xl"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted-foreground)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted-foreground)/0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-[calc(100vh-4rem)] flex items-center">
            <div className="flex flex-col md:flex-row gap-12 items-start w-full">
              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-primary font-medium mb-4"
                >
                  Hello 👋, I&apos;m
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-4"
                >
                  Om Patel
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl md:text-2xl text-muted-foreground mb-4"
                >
                  Software Developer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8"
                >
                  Passionate about creating elegant solutions and building
                  impactful digital experiences. I specialize in modern web
                  technologies and love turning complex problems into simple,
                  beautiful interfaces.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link
                      href="https://drive.google.com/file/d/1JAWHI6HEzS9MqvmiKHGD8f-I4Z9PHsyL/view?usp=sharing"
                      target="_blank"
                    >
                      <File className="mr-2 h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex space-x-6"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="https://github.com/Omi-Patel"
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-6 w-6" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>GitHub</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="https://linkedin.com/in/ompatel7113"
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>LinkedIn</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="https://x.com/om_patel07"
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Twitter className="h-6 w-6" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Twitter</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="group py-20 bg-muted/30 relative overflow-hidden scroll-mt-24"
        >
          <CornerDecorations />
          {/* About Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-10 w-48 h-48 bg-violet-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-10 w-56 h-56 bg-sky-500/6 rounded-full blur-3xl"></div>
          </div>

          {/* About Dots Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
            <div className="absolute top-32 left-40 w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <div className="absolute top-48 left-60 w-3 h-3 bg-muted-foreground/50 rounded-full"></div>
            <div className="absolute top-64 left-80 w-1.5 h-1.5 bg-muted-foreground/35 rounded-full"></div>
            <div className="absolute top-80 left-32 w-2.5 h-2.5 bg-muted-foreground/45 rounded-full"></div>
            <div className="absolute top-96 left-72 w-1 h-1 bg-muted-foreground/30 rounded-full"></div>

            <div className="absolute top-24 right-24 w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
            <div className="absolute top-40 right-48 w-1.5 h-1.5 bg-muted-foreground/35 rounded-full"></div>
            <div className="absolute top-56 right-32 w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <div className="absolute top-72 right-64 w-3 h-3 bg-muted-foreground/50 rounded-full"></div>
            <div className="absolute top-88 right-40 w-2 h-2 bg-muted-foreground/40 rounded-full"></div>

            <div className="absolute bottom-20 left-28 w-2.5 h-2.5 bg-muted-foreground/45 rounded-full"></div>
            <div className="absolute bottom-36 left-56 w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <div className="absolute bottom-52 left-44 w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
            <div className="absolute bottom-68 left-68 w-1.5 h-1.5 bg-muted-foreground/35 rounded-full"></div>

            <div className="absolute bottom-24 right-32 w-3 h-3 bg-muted-foreground/50 rounded-full"></div>
            <div className="absolute bottom-40 right-56 w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <div className="absolute bottom-56 right-28 w-2 h-2 bg-muted-foreground/40 rounded-full"></div>
            <div className="absolute bottom-72 right-52 w-1.5 h-1.5 bg-muted-foreground/35 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl"></div>
                  <Image
                    src="https://res.cloudinary.com/omicloud07/image/upload/v1716871034/my_photo_ddfczq.jpg"
                    alt="Om Patel"
                    fill
                    className="object-cover rounded-2xl"
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
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I&apos;m a full-stack developer with a passion for creating
                    meaningful digital experiences. My journey in tech has been
                    driven by curiosity and a constant desire to learn and grow.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I specialize in modern web technologies including React,
                    Next.js, Node.js, and TypeScript. I believe in writing
                    clean, maintainable code and creating user-centered
                    solutions that make a difference.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community.
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

        {/* Skills Section */}
        <section id="skills" className="group py-20 relative overflow-hidden scroll-mt-24">
          <CornerDecorations />
          {/* Skills Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-lime-500/8 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/4 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-teal-500/8 rounded-full blur-3xl"></div>
          </div>

          {/* Skills Hexagon Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-current transform rotate-45"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border border-current transform rotate-45"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 border border-current transform rotate-45"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border border-current transform rotate-45"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
              <p className="text-muted-foreground max-w-2xl">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>

            {/* Main Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Monitor className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Frontend</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "HTML/CSS",
                      "Tailwind",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Server className="h-5 w-5 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Backend</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Node.js",
                      "Express",
                      "Spring Boot",
                      "Java",
                      "REST APIs",
                      "JWT",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Terminal className="h-5 w-5 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Database</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["MongoDB", "PostgreSQL", "MySQL", "Firebase"].map(
                      (skill, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span>{skill}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Code className="h-5 w-5 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Tools</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Git",
                      "VS Code",
                      "Docker",
                      "Vercel",
                      "Postman",
                      "Render",
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="group py-20 bg-muted/30 relative overflow-hidden scroll-mt-24"
        >
          <CornerDecorations />
          {/* Projects Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-500/8 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 left-0 w-64 h-64 bg-orange-500/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-red-500/8 rounded-full blur-3xl"></div>
          </div>

          {/* Projects Dots Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-2 h-2 bg-current rounded-full"></div>
            <div className="absolute top-40 left-40 w-1 h-1 bg-current rounded-full"></div>
            <div className="absolute top-60 left-60 w-3 h-3 bg-current rounded-full"></div>
            <div className="absolute top-80 left-80 w-1 h-1 bg-current rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-current rounded-full"></div>
            <div className="absolute bottom-40 right-40 w-1 h-1 bg-current rounded-full"></div>
            <div className="absolute bottom-60 right-60 w-3 h-3 bg-current rounded-full"></div>
            <div className="absolute bottom-80 right-80 w-1 h-1 bg-current rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work and personal projects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "retroUI - React Component Library",
                  description:
                    "A carefully crafted UI component library built with ReactJS and Tailwind CSS, designed for retro-themed interfaces.",
                  tags: ["React", "Tailwind CSS", "UI Library"],
                  liveUrl: "https://retro-ui-component.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/retroUI_Component",
                  featured: true,
                },
                {
                  title: "getYourTiffin()",
                  description:
                    "A food ordering platform with Razorpay integration and admin interface for order management.",
                  tags: ["Next.js", "Razorpay", "MongoDB"],
                  liveUrl: "https://book-your-tiffin-online.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/BookYourTiffin",
                  featured: true,
                },
                {
                  title: "motivate.js - NPM Package",
                  description:
                    "An npm package that provides motivational quotes when errors occur during development.",
                  tags: ["NPM", "JavaScript", "Node.js"],
                  liveUrl: "https://www.npmjs.com/package/motivatejs",
                  githubUrl: "https://github.com/Omi-Patel/motivatejs",
                  featured: false,
                },
                {
                  title: "Code_Mine",
                  description:
                    "A technology blog platform where users can read and share thoughts in the comment section.",
                  tags: ["Next.js", "Blog", "Comments"],
                  liveUrl: "https://code-mine.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/CodeMine_",
                  featured: false,
                },
                {
                  title: "resumifyX",
                  description:
                    "A dynamic web application for creating professional resumes with PDF export functionality.",
                  tags: ["React", "Resume Builder", "PDF Export"],
                  liveUrl: "https://resumifyx.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/Resume_Builder",
                  featured: false,
                },
                {
                  title: "Saarthi_EngStudy",
                  description:
                    "A study material sharing platform with secure uploads, cloud storage, and a smooth user experience, powered by Next.js, MongoDB, and Vercel.",
                  tags: ["Next.js", "MongoDB", "Cloud Storage"],
                  liveUrl: "https://saarthi-engstudy.vercel.app/",
                  githubUrl:
                    "https://github.com/Omi-Patel/Saarthi_EngStudy_Frontend",
                  featured: false,
                },
                {
                  title: "Veltrix | Project Management",
                  description:
                    "A comprehensive project management system with real-time collaboration and deadline tracking.",
                  tags: ["React.js", "PostgreSQL", "Spring Boot"],
                  liveUrl:
                    "https://project-management-client-eosin.vercel.app/",
                  githubUrl:
                    "https://github.com/Omi-Patel/Project_Management_Client",
                  featured: true,
                },
                {
                  title: "LiftLogX",
                  description:
                    "A platform for users to log their gym workouts and manage their progress.",
                  tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "NeonDB", "NeonAuth"],
                  liveUrl: "https://gym-logbook.vercel.app/",
                  githubUrl:
                    "https://github.com/Omi-Patel/gym-logbook",
                  featured: true,
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col border border-border/60 bg-card/50 hover:bg-card transition-all duration-300 group overflow-hidden motion-safe:hover:-translate-y-0.5">
                    <CardHeader className="pb-4 pt-6 px-6">
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <div className="flex items-center space-x-1 text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent className="flex-grow px-6 pb-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs font-medium border-border/60 bg-background/50 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <div className="px-6 pb-6 pt-0">
                      <div className="flex items-center justify-between pt-4 border-t border-border/40">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary hover:bg-primary/10 transition-colors"
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          asChild
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Source
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="group py-20 relative overflow-hidden scroll-mt-24">
          <CornerDecorations />
          {/* Experience Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-96 h-96 bg-slate-500/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gray-500/8 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-500/6 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neutral-500/8 rounded-full blur-3xl"></div>
          </div>

          {/* Experience Lines Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-0 w-32 h-px bg-current"></div>
            <div className="absolute top-40 left-0 w-24 h-px bg-current"></div>
            <div className="absolute top-60 left-0 w-28 h-px bg-current"></div>
            <div className="absolute bottom-20 right-0 w-32 h-px bg-current"></div>
            <div className="absolute bottom-40 right-0 w-24 h-px bg-current"></div>
            <div className="absolute bottom-60 right-0 w-28 h-px bg-current"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                My professional journey in software development
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: "Software Developer Engineer",
                  company: "Liquify Solutions",
                  period: "January 2025 - Present",
                  description:
                    "Development of enterprise-level web applications using Spring Boot, handling both frontend and backend components, and providing solutions to real-world problems.",
                  technologies: [
                    "Spring Boot",
                    "Java",
                    "Full Stack Development",
                  ],
                },
                {
                  title: "Junior Full Stack Developer",
                  company: "The Development Studio",
                  period: "July 2024 - October 2024",
                  description:
                    "Development of enterprise-level web applications, handling frontend components, and integrating APIs for actual data.",
                  technologies: ["React", "Node.js", "API Integration"],
                },
                {
                  title: "Full Stack Developer",
                  company: "Zidio Development",
                  period: "June 2024 - July 2024",
                  description:
                    "Developed and maintained resume builder websites, integrated third-party APIs and services, and optimized application performance.",
                  technologies: [
                    "React",
                    "Node.js",
                    "Performance Optimization",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            <h3 className="text-xl font-semibold">
                              {job.title}
                            </h3>
                          </div>
                          <p className="text-primary font-medium mb-1">
                            {job.company}
                          </p>
                          <div className="flex items-center text-muted-foreground text-sm mb-4">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{job.period}</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {job.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="group py-20 bg-muted/30 relative overflow-hidden scroll-mt-24"
        >
          <CornerDecorations />
          {/* Contact Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-88 h-88 bg-rose-500/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/8 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-fuchsia-500/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl"></div>
          </div>

          {/* Contact Wave Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-current rounded-full"></div>
            <div className="absolute top-20 left-20 w-16 h-16 border-2 border-current rounded-full"></div>
            <div className="absolute top-30 left-30 w-12 h-12 border-2 border-current rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-current rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-current rounded-full"></div>
            <div className="absolute bottom-30 right-30 w-12 h-12 border-2 border-current rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                I&apos;m always interested in new opportunities and exciting
                projects. Let&apos;s work together!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out for collaborations, opportunities, or
                    just to say hello!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background border">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        omipatel7113@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background border">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 9726368386</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background border">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Bilimora, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/Omi-Patel" target="_blank">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://linkedin.com/in/ompatel7113"
                      target="_blank"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://x.com/om_patel07" target="_blank">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Form />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Om Patel. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by Developer.
          </p>
        </div>
      </footer>
    </div>
  );
}
