"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll progress bar */}
      <div className="fixed inset-x-0 top-0 z-[60] h-0.5" aria-hidden>
        <span
          className="block h-full bg-primary transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation — docked pill */}
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/80 py-1.5 pl-6 pr-1.5 backdrop-blur-xl transition-shadow duration-300 ${
            scrolled ? "shadow-lg shadow-black/5" : ""
          }`}
        >
          <Link
            href="/"
            className="mr-2 font-mono text-base font-semibold tracking-tight transition-colors hover:text-primary"
          >
            om<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="ml-1 flex items-center gap-1">
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
                <div className="flex h-full flex-col">
                  <div className="border-b border-border/60 p-6">
                    <p className="font-mono text-base font-semibold tracking-tight">
                      om<span className="text-primary">.</span>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Software Developer
                    </p>
                  </div>
                  <nav className="flex flex-col gap-1 p-4">
                    {navItems.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                          activeSection === item.id
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs ${
                            activeSection === item.id
                              ? "text-primary"
                              : "text-muted-foreground/50"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
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

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
