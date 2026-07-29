"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Form from "@/components/Form";
import { SectionHeading } from "@/components/SectionHeading";

const contactDetails = [
  {
    label: "Email",
    value: "omipatel7113@gmail.com",
    href: "mailto:omipatel7113@gmail.com",
  },
  { label: "Phone", value: "+91 9726368386", href: "tel:+919726368386" },
  { label: "Location", value: "Bilimora, Gujarat, India" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Omi-Patel", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ompatel7113",
    icon: Linkedin,
  },
  { label: "Twitter", href: "https://x.com/om_patel07", icon: Twitter },
];

export const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's work together"
          description="I'm always interested in new opportunities and exciting projects. My inbox is open."
        />

        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-10"
          >
            <div className="space-y-8">
              <p className="max-w-md leading-relaxed text-muted-foreground">
                Whether you have a project in mind, an opportunity to discuss,
                or just want to say hello — I&apos;ll get back to you as soon as
                I can.
              </p>

              <dl className="space-y-6">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-lg font-medium transition-colors hover:text-primary"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <span className="text-lg font-medium">
                          {item.value}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
