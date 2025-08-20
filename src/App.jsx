import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  Mailbox,
  MapPin,
  Phone,
  Rocket,
} from "lucide-react";

// ---------- Configurable Data ----------
const PROFILE = {
  name: "Shamim Ahmed",
  title: "Hey there — I'm Shamim Ahmed",
  location: "Prague, Czech Republic",
  summary:
    "I have been working as a Professional Frontend Developer for the last 3 year, Though I started my Self-Taught Programming Journey In 2018.",
  avatar:
    "https://api.dicebear.com/7.x/initials/svg?seed=SA&backgroundType=gradientLinear",
  social: [
    { label: "GitHub", href: "https://github.com/shamim99apk", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shamim-ahmed-rian-3602951b8",
      icon: Linkedin,
    },
    { label: "Email", href: "mailto:yrian.private99@gmail.com", icon: Mail },
  ],
};

const SKILLS = [
  {
    title: "Core",
    items: [
      "JavaScript (ES202x)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "C/C#",
      "REST/JSON",
    ],
  },
  {
    title: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "React Query",
      "Redux Toolkit",
      "Express.js",
      "Redux",
    ],
  },
  {
    title: "Database and Tools",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Git",
      "VS Code",
      "Postman",
      "Jira",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Adaptability",
      "Management",
      "Team collaboration",
      "Excellent communication",
    ],
  },
];

const PROJECTS = [
  {
    name: "StaySwift",
    desc: "A hotel booking web application that allows users to search, book, and manage their stays with ease. Built with a modern and responsive UI, secure authentication, and real-time booking management.",
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js", "JWT"],
    links: [
      {
        href: "https://github.com/shamim99apk/stay-swift",
        label: "Code",
        icon: Github,
      },
      {
        href: "https://stay-swift-beryl.vercel.app/",
        label: "Live",
        icon: ExternalLink,
      },
    ],
  },
  {
    name: "React 17 Projects",
    desc: "A showcase of multiple small React 17 applications demonstrating reusable components, state management with hooks, and modern frontend patterns.",
    stack: ["Next.js", "React", "CSS3", "Netlify"],
    links: [
      {
        href: "https://github.com/shamim99apk/17-react-projects",
        label: "Code",
        icon: Github,
      },
      {
        href: "https://shamimahmedrian.netlify.app/project",
        label: "Live",
        icon: ExternalLink,
      },
    ],
  },
  {
    name: "Eventry",
    desc: "An event management platform where users can discover, create, and manage events seamlessly. Features include authentication, event scheduling, and a responsive design for smooth user experience.",
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    links: [
      {
        href: "https://github.com/shamim99apk/Eventry-2.0",
        label: "Code",
        icon: Github,
      },
      {
        href: "https://eventry-3-0.vercel.app/",
        label: "Live",
        icon: ExternalLink,
      },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "Cloud Production LTD",
    period: "2022 — 2023",
    points: [
      "Delivered responsive, mobile-first UIs with React.js + Tailwind CSS, increasing mobile engagement by ~20%.",
      "Integrated RESTful APIs to handle dynamic data, improving load efficiency and cutting average page load time by ~30%.",
      "Implemented Redux for scalable state management, reducing critical state-related bugs by ~40% and improving maintainability.",
      "Partnered with backend developers and designers to ship features on time, contributing to a 95% sprint completion rate.",
      "Led performance optimizations and code reviews, improving Lighthouse performance scores from ~70 → 90+ and reducing production bugs by ~25%.",
    ],
  },
];

const CONTACT = {
  email: "rian.private99@gmail.com",
  phone: "+420 728 967 637",
};

// ---------- Utility ----------
const Section = ({ id, label, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24" aria-label={label}>
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 rounded-3xl border border-white/20 backdrop-blur-xl relative overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-8">
        {Icon && (
          <div className="p-2 rounded-2xl bg-white/10">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-2xl font-extrabold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {label}
        </h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium bg-white/10 border-white/20">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-5 shadow-sm relative overflow-hidden  ${className}`}
  >
    {children}
  </div>
);

const Anchor = ({ href, children, className = "", newTab = true }) => (
  <a
    href={href}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noreferrer" : undefined}
    className={`inline-flex items-center gap-1.5 hover:underline underline-offset-4 ${className}`}
  >
    {children}
  </a>
);

// ---------- Main ----------
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-neutral-100">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const nav = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* <a href="#home" className="font-semibold tracking-tight">
          {PROFILE.name}
        </a> */}
        <img
          src="../public/otm3ihe7 (1).png"
          alt="jnb"
          className="h-14 w-auto"
        />
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:underline underline-offset-4"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            className="hidden sm:inline-flex items-center gap-1 btn btn-primary rounded-2xl"
          >
            <Rocket className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"
      >
        <div className="grid md:grid-cols-[auto,1fr] items-center gap-8">
          <img
            src="../public/profile pic avatar.jpg"
            alt="profile"
            className="h-28 w-28 md:h-36 md:w-36 rounded-3xl border border-white/20 shadow"
          />
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
    bg-clip-text text-transparent"
            >
              {PROFILE.title}
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Chip>
                <MapPin className="h-3.5 w-3.5 mr-1" /> {PROFILE.location}
              </Chip>
              {PROFILE.social.map((s) => (
                <Anchor key={s.label} href={s.href} className="text-sm">
                  <s.icon className="h-4 w-4" /> {s.label}
                </Anchor>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center btn btn-primary gap-2 rounded-2xl px-4 py-2 shadow-sm"
              >
                <FolderGit2 className="h-4 w-4" /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/20 bg-white/10 backdrop-blur hover:bg-white/20 transition"
              >
                <ArrowRight className="h-4 w-4" /> Hire Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" label="About" icon={Code2}>
      <Card className="liquid-card">
        <p className="leading-relaxed  text-neutral-200">
          ✨ Hi, I’m Shamim Ahmed — a Full-Stack Developer passionate about
          crafting clean, scalable, and impactful digital solutions. My
          expertise lies in the JavaScript ecosystem — from React & Next.js on
          the frontend to Node.js & MongoDB on the backend, with TypeScript
          tying it all together. Currently, I’m pursuing my Master’s in
          Informatics in Prague, where I’m sharpening not only my technical
          skills but also my ability to solve real-world problems with
          technology
        </p>
      </Card>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="Skills" icon={Code2}>
      {" "}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {" "}
        {SKILLS.map((cat) => (
          <Card className="liquid-card" key={cat.title}>
            {" "}
            <h3 className="font-medium mb-3 ">{cat.title}</h3>{" "}
            <div className="flex flex-wrap gap-2">
              {" "}
              {cat.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}{" "}
            </div>{" "}
          </Card>
        ))}{" "}
      </div>{" "}
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="Projects" icon={FolderGit2}>
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((p) => (
          <Card className="liquid-card" key={p.name}>
            <h3 className="text-lg font-medium">{p.name}</h3>
            <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.links.map((l) => (
                <Anchor key={l.href} href={l.href}>
                  <l.icon className="h-4 w-4" /> {l.label}
                </Anchor>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" label="Experience" icon={Rocket}>
      <div className="grid gap-4">
        {EXPERIENCE.map((e) => (
          <Card key={e.company}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="text-lg font-medium">
                {e.role} — {e.company}
              </h3>
              <span className="text-sm text-neutral-400">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-200">
              {e.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" label="Contact" icon={Mailbox}>
      <Card>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium">Let’s work together</h3>
            <p className="mt-2 text-neutral-300">
              Have a project in mind or just want to say hi? Drop a line and
              I’ll get back soon.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Anchor href={`mailto:${CONTACT.email}`}>
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </Anchor>
              <Anchor href={`tel:${CONTACT.phone}`}>
                <Phone className="h-4 w-4" /> {CONTACT.phone}
              </Anchor>
            </div>
          </div>
          <form
            className="grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! This demo form doesn’t actually send.");
            }}
          >
            <input
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur"
              placeholder="Email"
              required
            />
            <textarea
              className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 min-h-[120px] backdrop-blur"
              placeholder="Message"
              required
            />
            <button className="btn btn-primary inline-flex justify-center rounded-xl">
              Send <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </form>
        </div>
      </Card>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 border-white/10">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {PROFILE.social.map((s) => (
              <Anchor key={s.label} href={s.href} className="text-sm">
                <s.icon className="h-4 w-4" />
              </Anchor>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
