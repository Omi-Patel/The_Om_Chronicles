"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
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
  X,
  ExternalLink,
  Send,
  ArrowUp,
  PanelLeftClose,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

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

      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
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
    { id: "services", label: "Services" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent tracking-wider"
          >
            OM.
          </Link>

          <div className="flex justify-center items-center gap-3">
            <ModeToggle />

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <PanelLeftClose className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent">
                      OM PATEL
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer
                    </p>
                  </div>
                  <nav className="flex flex-col space-y-1 p-4 flex-1">
                    {navItems.map((item) => (
                      <Button
                        key={item.id}
                        variant={
                          activeSection === item.id ? "default" : "ghost"
                        }
                        className={`justify-start text-base ${
                          activeSection === item.id
                            ? "bg-teal-500 text-white hover:bg-teal-600"
                            : "hover:text-teal-500"
                        }`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </nav>
                  <div className="p-4 border-t mt-auto">
                    <div className="flex justify-center space-x-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="https://github.com/Omi-Patel"
                              target="_blank"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Github className="h-5 w-5" />
                              <span className="sr-only">GitHub</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GitHub</p>
                          </TooltipContent>
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
                              <Linkedin className="h-5 w-5" />
                              <span className="sr-only">LinkedIn</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>LinkedIn</p>
                          </TooltipContent>
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
                              <Twitter className="h-5 w-5" />
                              <span className="sr-only">Twitter</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Twitter</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main className="">
        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-background text-foreground"
        >
          <div className="text-center px-4 w-full max-w-7xl font-sans">
            <motion.p
              className="text-lg sm:text-xl font-medium mb-4 text-teal-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hello 👋, I am
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 to-teal-800 dark:from-teal-300 dark:to-teal-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ fontFamily: "Montserrat" }}>Om Patel</span>
            </motion.h1>
            <motion.div
              className="text-lg sm:text-lg md:text-xl lg:text-2xl mb-4 flex items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-1 text-base sm:text-lg border-teal-500 text-teal-500 rounded-full"
              >
                Software Developer
              </Badge>
            </motion.div>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
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
                  className="flex items-center justify-center px-2 sm:px-4 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
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
                  className="flex items-center justify-center px-2 sm:px-4 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href={"https://x.com/om_patel07"} target="_blank">
                <Button
                  variant="outline"
                  className="flex items-center justify-center px-2 sm:px-4 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
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
                className="px-4 py-2 sm:px-6 sm:py-3 bg-teal-500 hover:bg-teal-600 text-white"
                onClick={() => scrollToSection("contact")}
              >
                <Send className="mr-2 h-4 w-4" />
                Get in touch
              </Button>
            </motion.div>
          </div>
        </section>
        <Separator className="bg-border" />

        {/* About */}
        <section id="about" className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500"></span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-full blur-md"></div>
                  <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl z-10">
                    <Image
                      src="https://res.cloudinary.com/omicloud07/image/upload/v1716871034/my_photo_ddfczq.jpg"
                      alt="Om Patel"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-2 left-0 right-0 text-center z-20">
                    <Badge className="bg-teal-500 hover:bg-teal-600 text-white border-none px-4 py-1 text-sm">
                      Software Developer
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="relative">
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-blue-500 -mt-4 -mr-4"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-teal-500 -mb-4 -ml-4"></div>

                  <Card className="bg-card text-card-foreground rounded-xl shadow-lg p-5 sm:p-8 border border-border relative z-10">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-blue-500 text-white px-4 py-1 text-sm rounded-bl-xl rounded-tr-xl font-medium">
                      About Me
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">
                      Hello, I&apos;m Om Patel!
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <p className="text-base sm:text-lg">
                          I&apos;m a passionate full stack developer with a
                          knack for turning complex problems into elegant,
                          efficient solutions. With experience in the
                          ever-evolving world of web development, I&apos;ve
                          honed my skills in both front-end and back-end
                          technologies.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <p className="text-base sm:text-lg">
                          My journey in tech has been driven by curiosity and a
                          constant desire to learn. From crafting pixel-perfect
                          user interfaces to architecting robust server-side
                          applications, I find joy in every aspect of the
                          development process.
                        </p>
                      </div>

                      <div className="flex items-start">
                        <p className="text-base sm:text-lg">
                          I&apos;m a Full stack developer with a passion for
                          building top-notch websites. I&apos;ve a solid
                          understanding of both Frontend and Backend development
                          and I can&apos;t wait to utilize my skills in the
                          workplace. I&apos;m a quick learner and am certain
                          that I can be a valuable asset to any web development
                          team.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={"https://linktr.ee/Om_Patel_07"}
                        target="_blank"
                      >
                        <Button className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Follow Me
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Separator className="bg-border" />

        {/* Skills */}
        <section id="skills" className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold relative inline-block">
                Skills
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Frontend Technology",
                  skills: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Tanstack Query",
                  ],
                  color: "blue",
                  icon: <Monitor className="h-5 w-5" />,
                },
                {
                  category: "Backend Technology",
                  skills: [
                    "NodeJS",
                    "ExpressJS",
                    "REST API",
                    "JWT",
                    "Bcrypt",
                    "Spring Boot",
                  ],
                  color: "green",
                  icon: <Server className="h-5 w-5" />,
                },
                {
                  category: "Database",
                  skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL"],
                  color: "yellow",
                  icon: <Terminal className="h-5 w-5" />,
                },
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
                  icon: <Code className="h-5 w-5" />,
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border border-border h-full">
                    <CardHeader
                      className={`pb-2 ${
                        category.color === "blue"
                          ? "bg-blue-50 dark:bg-blue-950/30 border-b border-blue-200 dark:border-blue-800/30"
                          : category.color === "green"
                          ? "bg-green-50 dark:bg-green-950/30 border-b border-green-200 dark:border-green-800/30"
                          : category.color === "yellow"
                          ? "bg-yellow-50 dark:bg-yellow-950/30 border-b border-yellow-200 dark:border-yellow-800/30"
                          : "bg-purple-50 dark:bg-purple-950/30 border-b border-purple-200 dark:border-purple-800/30"
                      }`}
                    >
                      <CardTitle
                        className={`text-lg sm:text-xl flex items-center gap-2 ${
                          category.color === "blue"
                            ? "text-blue-600 dark:text-blue-400"
                            : category.color === "green"
                            ? "text-green-600 dark:text-green-400"
                            : category.color === "yellow"
                            ? "text-yellow-600 dark:text-yellow-400"
                            : "text-purple-600 dark:text-purple-400"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center border ${
                            category.color === "blue"
                              ? "bg-blue-100 dark:bg-blue-900/50 border-blue-200 dark:border-blue-700"
                              : category.color === "green"
                              ? "bg-green-100 dark:bg-green-900/50 border-green-200 dark:border-green-700"
                              : category.color === "yellow"
                              ? "bg-yellow-100 dark:bg-yellow-900/50 border-yellow-200 dark:border-yellow-700"
                              : "bg-purple-100 dark:bg-purple-900/50 border-purple-200 dark:border-purple-700"
                          }`}
                        >
                          {category.icon}
                        </div>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="grid grid-cols-2 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className={`group flex items-center p-2 rounded-md  ${
                              category.color === "blue"
                                ? "border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 hover:shadow-blue-500/10"
                                : category.color === "green"
                                ? "border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 hover:shadow-green-500/10"
                                : category.color === "yellow"
                                ? "border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 hover:shadow-yellow-500/10"
                                : "border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 hover:shadow-purple-500/10"
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 transition-colors ${
                                category.color === "blue"
                                  ? "bg-blue-100 dark:bg-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-700"
                                  : category.color === "green"
                                  ? "bg-green-100 dark:bg-green-800 group-hover:bg-green-200 dark:group-hover:bg-green-700"
                                  : category.color === "yellow"
                                  ? "bg-yellow-100 dark:bg-yellow-800 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-700"
                                  : "bg-purple-100 dark:bg-purple-800 group-hover:bg-purple-200 dark:group-hover:bg-purple-700"
                              }`}
                            >
                              <ChevronRight
                                className={`h-3 w-3 text-primary`}
                              />
                            </div>
                            <span
                              className={`font-medium text-sm text-primary`}
                            >
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Separator className="bg-border" />

        {/* Projects */}
        <section id="projects" className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold relative inline-block">
                Projects
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "retroUI - React Component Library",
                  desc: "RetroUI is a carefully crafted UI component library built with ReactJS and Tailwind CSS, designed to help developers create unique and nostalgic retro-themed interfaces.",
                  src: "https://retro-ui-component.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/retroUI_Component",
                  tags: ["React", "Tailwind CSS", "UI Library"],
                },
                {
                  title: "getYourTiffin()",
                  desc: "Customers can easily select their desired menu items, create orders, and make payments using Razorpay integration. With an intuitive admin interface for order management.",
                  src: "https://book-your-tiffin-online.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/BookYourTiffin",
                  tags: ["Next.js", "Razorpay", "MongoDB"],
                },
                {
                  title: "motivate.js - An NPM Package",
                  desc: "MotivateJS is a simple npm package designed to help beginners to stay motivated while coding. It provides a function that prints motivational quotes when an error occurs.",
                  src: "https://www.npmjs.com/package/motivatejs",
                  githubUrl: "https://github.com/Omi-Patel/motivatejs",
                  tags: ["NPM", "JavaScript", "Node.js"],
                },
                {
                  title: "Code_Mine",
                  desc: "The Platform where you can Read Blogs related to Technology and Coding and share your thought into the comment section.",
                  src: "https://code-mine.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/CodeMine_",
                  tags: ["Next.js", "Blog", "Comments"],
                },
                {
                  title: "resumifyX",
                  desc: "Developed a dynamic and user-friendly web application that allows users to create professional resumes with ease.",
                  src: "https://resumifyx.vercel.app/",
                  githubUrl: "https://github.com/Omi-Patel/Resume_Builder",
                  tags: ["React", "Resume Builder", "PDF Export"],
                },
                {
                  title: "Saarthi_EngStudy",
                  desc: "A study material sharing platform with secure uploads, cloud storage, and a smooth user experience, powered by Next.js, MongoDB, and Vercel.",
                  src: "https://saarthi-engstudy.vercel.app/",
                  githubUrl:
                    "https://github.com/Omi-Patel/Saarthi_EngStudy_Frontend",
                  tags: ["Next.js", "MongoDB", "Cloud Storage"],
                },
                {
                  title: "Veltrix | Project Management System",
                  desc: "Simplify your team's workflow, collaborate in real-time, and meet every deadline — all in one platform.",
                  src: "https://project-management-client-eosin.vercel.app/",
                  githubUrl:
                    "https://github.com/Omi-Patel/Project_Management_Client",
                  tags: ["React.js", "PostgreSQL", "Spring Boot", "Kotlin"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full flex flex-col border rounded-xl overflow-hidden p-2">
                    <CardHeader className="pb-2 pt-3 px-4">
                      <CardTitle className="text-xl tracking-wide group-hover:text-teal-500 transition-colors">
                        <span style={{ fontFamily: "Montserrat" }}>
                          {project.title}
                        </span>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow px-4 pb-2">
                      <p className="text-muted-foreground">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="bg-teal-500/10 text-teal-500 border-teal-500/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-3 px-4 pb-3 flex justify-between border-t">
                      <Link href={project.src} target="_blank">
                        <Button
                          variant="ghost"
                          className="flex items-center text-teal-500 hover:text-teal-600 hover:bg-teal-500/10"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Button>
                      </Link>
                      <Link href={project.githubUrl} target="_blank">
                        <Button
                          variant="ghost"
                          className="flex items-center text-teal-500 hover:text-teal-600 hover:bg-teal-500/10"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Separator className="bg-border" />

        {/* Service */}
        <section id="services" className="py-16 text-foreground">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold relative inline-block">
                Services I Offer
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500"></span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  icon: <Monitor className="h-6 w-6 text-teal-500" />,
                  description:
                    "As a Frontend Developer, I create engaging and user-friendly interfaces using HTML, CSS, and JavaScript. My expertise includes building responsive designs and optimizing web performance, to deliver seamless user experiences.",
                },
                {
                  title: "Backend Development",
                  icon: <Server className="h-6 w-6 text-teal-500" />,
                  description:
                    "In Backend Development, I focus on creating robust server-side applications using technologies such as Node.js, Express, and Databases like MongoDB. I design and implement APIs, manage server configurations, and ensure the security and efficiency of web applications.",
                },
                {
                  title: "Java Programming",
                  icon: <Terminal className="h-6 w-6 text-teal-500" />,
                  description:
                    "With a strong foundation in Java programming, I wrote effective code for the solution. My experience includes Object-Oriented Design, Data Structures, and Algorithms, enabling me to build scalable and maintainable software solutions.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border border-border hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl group-hover:text-teal-500 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Separator className="bg-border" />

        {/* Experience */}
        <section
          id="experience"
          className="py-16 bg-background text-foreground"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold relative inline-block">
                Experience
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500"></span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative border-l-2 border-blue-500 pl-8 ml-4 space-y-10 before:absolute before:top-0 before:left-0 before:w-2 before:h-full">
                {[
                  {
                    title: "Software Developer Engineer",
                    company: "Liquify Solutions",
                    period: "January'25 - Present",
                    responsibilities: [
                      "Development of enterprise-level web applications using Spring Boot",
                      "Handling Frontend and Backend part of the application",
                      "Providing Solutions to real-world problem",
                    ],
                  },
                  {
                    title: "Junior Full Stack Developer",
                    company: "The Development Studio",
                    period: "July'24 - October'24",
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -left-10 w-8 h-8 rounded-full border-4 border-background bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                      <Briefcase className="h-4 w-4 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>

                    <div className="rounded-lg p-6 border bg-card hover:bg-accent transition-colors duration-300">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <h3 className="text-lg font-semibold text-primary">
                          {job.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-xs border-primary text-primary"
                        >
                          {job.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 font-semibold tracking-wider">
                        At: {job.company}
                      </p>

                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, respIndex) => (
                          <motion.li
                            key={respIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.1 + respIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="flex items-start text-sm group/item"
                          >
                            <ChevronRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary/60 group-hover/item:text-primary transition-colors" />
                            <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                              {resp}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Separator className="bg-border" />

        {/* Education */}
        <section id="education" className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold relative inline-block">
                Education
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500"></span>
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  degree: "Bachelor Of Engineering",
                  school: "SVIT, Vasad",
                  period: "2021 - 2025",
                  cgpa: "9.28",
                  percentage: "87%",
                  description:
                    "Focused on advanced software engineering principles, Web Development, and Core Subjects.",
                },
                {
                  degree: "XII | Higher Secondary",
                  school: "The Ambika Highschool, Gadat",
                  period: "2019 - 2021",
                  cgpa: "9.1",
                  percentage: "86%",
                  description:
                    "Completed higher secondary education with focus on science and mathematics.",
                },
                {
                  degree: "X | Secondary",
                  school: "The Ambika Highschool, Gadat",
                  period: "2018 - 2019",
                  cgpa: "9.0",
                  percentage: "85%",
                  description:
                    "Completed secondary education with excellent academic performance.",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <Card className="h-full border border-border hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center text-xl">
                        <GraduationCap className="mr-2 h-5 w-5 text-teal-500" />
                        {edu.degree}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-teal-500">
                        {edu.school}
                      </p>
                      <p className="text-muted-foreground mb-2">{edu.period}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-teal-500/10 text-teal-500"
                        >
                          CGPA: {edu.cgpa}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-teal-500/10 text-teal-500"
                        >
                          Percentage: {edu.percentage}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Separator className="bg-border" />

        {/* Contact */}
        <section id="contact" className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold relative inline-block">
                Contact Me
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-teal-500"></span>
              </h2>
            </div>
            <Card className="max-w-5xl mx-auto border border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl md:text-3xl text-teal-500">
                  Get in Touch..👋
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Feel free to reach out to me for any questions,
                      opportunities, or just to say hello!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
                          <Mail className="h-5 w-5 text-teal-500" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">omipatel7113@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
                          <Phone className="h-5 w-5 text-teal-500" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">+91 9726368386</p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                        <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mr-3">
                          <MapPin className="h-5 w-5 text-teal-500" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Location
                          </p>
                          <p className="font-medium">Bilimora, Gujarat</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect with me on social media
                      </p>
                      <div className="flex space-x-4">
                        <Link
                          href="https://github.com/Omi-Patel"
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-teal-500/10 hover:border-teal-500 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://linkedin.com/in/ompatel7113"
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-teal-500/10 hover:border-teal-500 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                          href="https://x.com/om_patel07"
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-teal-500/10 hover:border-teal-500 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Form />
                </div>
              </CardContent>
            </Card>
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
            className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg hover:bg-teal-600 transition-colors z-50"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-card text-card-foreground py-6 w-full border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024 <span className="text-teal-500 font-medium">OM PATEL</span> -
            All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Made with</span>
            <span className="text-red-500">❤️</span>
            <span className="text-sm text-muted-foreground">by Developer.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
