"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Form from "@/components/Form";

// Corner Decoration Component
const CornerDecorations = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 z-10 ${className} hidden md:block`}
  >
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

export const Contact = () => {
  return (
    <section
      id="contact"
      className="group py-20 bg-muted/30 relative overflow-hidden scroll-mt-24"
    >
      <CornerDecorations />
      {/* Contact Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-88 h-88 bg-rose-500/6 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/8 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-fuchsia-500/6 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500/8 blur-3xl"></div>
      </div>

      {/* Contact Wave Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-current"></div>
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-current"></div>
        <div className="absolute top-30 left-30 w-12 h-12 border-2 border-current"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-current"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-current"></div>
        <div className="absolute bottom-30 right-30 w-12 h-12 border-2 border-current"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="w-fit text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground/40">
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
              <h3 className="text-xl font-semibold mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out for collaborations, opportunities, or
                just to say hello!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-background border">
                <div className="p-2 bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    omipatel7113@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-background border">
                <div className="p-2 bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 9726368386</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-background border">
                <div className="p-2 bg-primary/10">
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
  );
};
