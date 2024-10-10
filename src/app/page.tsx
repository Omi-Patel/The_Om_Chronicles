"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Eye,
  Code,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Twitter,
  Monitor,
  Server,
  Terminal,
  UserPlus,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Helper function to map colors to classes
  const colorClasses = {
    blue: {
      border: "border-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
    green: {
      border: "border-green-500",
      bg: "bg-green-50",
      text: "text-green-500",
    },
    yellow: {
      border: "border-yellow-500",
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    purple: {
      border: "border-purple-500",
      bg: "bg-purple-50",
      text: "text-purple-500",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "services",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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

  return (
    <div className="min-h-screen bg-background text-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary text-primary shadow-md">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-teal-800 to-gray-400 bg-clip-text text-transparent tracking-wider"
          >
            OM.
          </Link>

          <div className="flex justify-center items-center gap-3">
            <ModeToggle />

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className=""
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-10">
                  {[
                    "Home",
                    "About",
                    "Skills",
                    "Projects",
                    "Services",
                    "Experience",
                    "Education",
                    "Contact",
                  ].map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className={`justify-start text-lg ${
                        activeSection === item.toLowerCase()
                          ? "font-bold bg-secondary"
                          : ""
                      }`}
                      onClick={() => {
                        scrollToSection(item.toLowerCase());
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main className="pt-1">
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-background text-primary"
        >
          <div className="text-center px-4 w-full max-w-7xl font-sans">
            <motion.p
              className="text-lg sm:text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello 👋, I am
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-800 to-gray-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              OM PATEL
            </motion.h1>
            <motion.p
              className="text-lg  sm:text-lg md:text-xl lg:text-2xl mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              className="text-sm sm:text-lg md:text-xl lg:text-lg text-gray-700 dark:text-gray-400 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ✨ As someone who is always passionate for learning more about
              tech and life. Ever since been a self taught software developer
              also unstopped learner. I have evolved into a Full Stack
              Javascript career path, and loves working with cutting edge tools
              and technologies🚀.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href={"https://github.com/Omi-Patel"} target="_blank">
                <Button
                  variant="outline"
                  className="flex items-center justify-center px-2 sm:px-4"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link
                href={"https://linkedin.com/in/ompatel7113"}
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="flex items-center justify-center px-2 sm:px-4"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href={"https://x.com/om_patel07"} target="_blank">
                <Button
                  variant="outline"
                  className="flex items-center justify-center px-2 sm:px-4"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                className="px-4 py-2 sm:px-6 sm:py-3"
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </section>
        <Separator />

        {/* About */}
        <section id="about" className="py-16 bg-background text-primary">
          <div className="container mx-auto px-4 ">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 ">About Me :</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="w-full md:w-1/3 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://res.cloudinary.com/dzg2xzsdm/image/upload/v1728492215/om-img_m3w6s2.jpg"
                  alt="John Doe"
                  width={450}
                  height={450}
                  className="rounded-full border-4 border-primary shadow-lg"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 50%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                />
              </motion.div>
              <motion.div
                className="w-full md:w-2/3 bg-secondary text-primary rounded-3xl shadow-lg p-4 sm:p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Hello, I&apos;m Om Patel
                </h3>
                <p className="text-base sm:text-lg mb-4">
                  I&apos;m a passionate full stack developer with a knack for
                  turning complex problems into elegant, efficient solutions.
                  With an experience in the ever-evolving world of web
                  development, I&apos;ve honed my skills in both front-end and
                  back-end technologies.
                </p>
                <p className="text-base sm:text-lg mb-4">
                  My journey in tech has been driven by curiosity and a constant
                  desire to learn. From crafting pixel-perfect user interfaces
                  to architecting robust server-side applications, I find joy in
                  every aspect of the development process.
                </p>
                <p className="text-base sm:text-lg mb-6">
                  I&apos;m a Full stack developer with a passion for building
                  top-notch websites. I&apos;ve a solid understanding of both
                  Frontend and Backend development and I can&apos;t wait to
                  utilize my skills in the workplace. I&apos;m a quick learner
                  and am certain that I can be a valueable asset to any web
                  development team.
                </p>
                <div className="flex">
                  <Link href={"https://linktr.ee/Om_Patel_07"} target="_blank">
                    <Button
                      className="flex items-center px-4 py-2 sm:px-6 sm:py-3"
                      onClick={() =>
                        window.open("https://twitter.com/johndoe", "_blank")
                      }
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Follow Me
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <Separator />

        {/* Skills */}
        <section id="skills" className="py-16 bg-background text-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Skills : </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Frontend Technology",
                  skills: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                  ],
                  color: "blue",
                } as const,
                {
                  category: "Backend Technology",
                  skills: ["NodeJS", "ExpressJS", "REST API", "JWT", "Bcrypt"],
                  color: "green",
                } as const,
                {
                  category: "Database",
                  skills: ["MongoDB", "Firebase", "MySQL"],
                  color: "yellow",
                } as const,
                {
                  category: "Other Tools / Technology",
                  skills: [
                    "VS Code",
                    "Postman ",
                    "Git & GitHub",
                    "Vercel",
                    "Netlify",
                    "Render",
                  ],
                  color: "purple",
                } as const,
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=""
                >
                  <Card className="dark:bg-secondary shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className={`flex items-center p-2 border-l-4 text-black ${
                              colorClasses[category.color].border
                            } ${colorClasses[category.color].bg}`}
                          >
                            <ChevronRight
                              className={`mr-2 h-4 w-4 ${
                                colorClasses[category.color].text
                              }`}
                            />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Separator />

        {/* Projects */}
        <section id="projects" className="py-16 bg-background text-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Projects : </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "retroUI - React Component Library",
                  desc: "RetroUI is a carefully crafted UI component library built with ReactJS and Tailwind CSS, designed to help developers create unique and nostalgic retro-themed interfaces. Create responsive and beautifully designed components effortlessly.",
                  src: "https://retro-ui-component.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel",
                },
                {
                  title: "getYourTiffin()",
                  desc: "Customers can easily select their desired menu items, create orders, and make payments using Razorpay integration. With an intuitive admin interface, managing orders has never been easier! Admins can efficiently track and fulfill orders to ensure a smooth experience.",
                  src: "https://book-your-tiffin-online.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel",
                },
                {
                  title: "motivate.js - An NPM Package",
                  desc: "MotivateJS is a simple npm package designed to help beginners to stay motivated while coding. It provides a function that prints motivational quotes when an error occurs during coding.",
                  src: "https://www.npmjs.com/package/motivatejs",
                  githubUrl: "https://github.com/Omi-Patel",
                },
                {
                  title: "Code_Mine",
                  desc: "The Platform where you can Read Blogs related to Technology and Coding and share your thought into the comment section.",
                  src: "https://code-mine.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel",
                },
                {
                  title: "resumifyX",
                  desc: "Developed a dynamic and user-friendly web application that allows users to create professional resumes with ease.",
                  src: "https://resumifyx.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ">
                    <CardHeader>
                      <CardTitle className="text-xl tracking-wider">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{project.desc}</p>
                    </CardContent>
                    <div className="p-4 flex justify-between">
                      <Link href={project.src}>
                        <Button variant="outline" className="flex items-center">
                          <Eye className="mr-2 h-4 w-4" />
                          View Project
                        </Button>
                      </Link>
                      <Link href={project.githubUrl}>
                        <Button variant="outline" className="flex items-center">
                          <Code className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Separator />

        {/* Service */}
        <section id="services" className="py-16 text-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Services I Offer : </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="mr-2 h-5 w-5" />
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  As a Frontend Developer, I create engaging and user-friendly
                  interfaces using HTML, CSS, and JavaScript. My expertise
                  includes building responsive designs and optimizing web
                  performance, to deliver seamless user experiences.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Server className="mr-2 h-5 w-5" />
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  In Backend Development, I focus on creating robust server-side
                  applications using technologies such as Node.js, Express, and
                  Databases like MongoDB. I design and implement APIs, manage
                  server configurations, and ensure the security and efficiency
                  of web applications.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Terminal className="mr-2 h-5 w-5" />
                    Java Programming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  With a strong foundation in Java programming, I wrote
                  effective code for the solution. My experience includes
                  Object-Oriented Design, Data Structures, and Algorithms,
                  enabling me to build scalable and maintainable software
                  solutions.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Separator />

        {/* Experience */}
        <section id="experience" className="py-16 bg-background text-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Experience : </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Junior Full Stack Developer",
                  company: "The Development Studio",
                  period: "July'24 - August'24",
                  responsibilities: [
                    "Development of enterprise-level web applications",
                    "Handling Frontend part of the application",
                    "Integrating API to the frontend for actual data.",
                  ],
                },
                {
                  title: "Full Stack Developer",
                  company: "Zidio Development",
                  period: "June'24 - July'24",
                  responsibilities: [
                    "Developed and maintained resume builder websites",
                    "Integrated third-party APIs and services",
                    "Optimized application performance and database queries",
                  ],
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" />
                      {job.title} at {job.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 mb-2">{job.period}</p>
                    <ul className="list-disc list-inside">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Separator />

        {/* Education */}
        <section id="education" className="py-16 bg-background text-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Education : </h2>

            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  degree: "Bachelor Of Engineering",
                  school: "SVIT, Vasad",
                  period: "2021 - 2025",
                  cgpa: "9.28",
                  percentage: "87%",
                  description:
                    "Focused on advanced software engineering principles, Web Development, and Core Subjects. Built and Deployed so many full stake application",
                },
                {
                  degree: "XII | Higher Secondary",
                  school: "The Ambika Highschool, Gadat",
                  period: "2019 - 2021",
                  cgpa: "9.1",
                  percentage: "86%",
                  description:
                    "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and received the Outstanding Academic Achievement Award. Served as the President of the Computer Science Student Association.",
                },
                {
                  degree: "X | Secondary",
                  school: "The Ambika Highschool, Gadat",
                  period: "2018 - 2019",
                  cgpa: "9.0",
                  percentage: "85%",
                  description:
                    "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and received the Outstanding Academic Achievement Award. Served as the President of the Computer Science Student Association.",
                },
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="flex-1 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      {edu.degree}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{edu.school}</p>
                    <p className="text-gray-500 mb-2">{edu.period}</p>
                    <p className="mb-2">
                      CGPA: {edu.cgpa} | Percentage: {edu.percentage}
                    </p>
                    {/* <p>{edu.description}</p> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Separator />

        {/* Contact */}
        <section id="contact" className="py-16 bg-background text-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Contact Me : </h2>
            <Card className="max-w-5xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl mb-6">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 dark:text-gray-400">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      <span>omipatel7113@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      <span>+91 9726368386</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      <span>Bilimora, Gujarat</span>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-auto flex justify-center items-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className=" text-primary py-6 w-full">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <p className="text-sm ">
            © 2024 OM PATEL - All rights reserved by developer.
          </p>
        </div>
      </footer>
    </div>
  );
}
