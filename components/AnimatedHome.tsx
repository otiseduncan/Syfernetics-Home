"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type IconShellProps = {
  children: ReactNode;
};

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type Service = {
  icon: React.ComponentType;
  title: string;
  text: string;
};

function IconShell({ children }: IconShellProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <IconShell>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconShell>
  );
}

function SparkIcon() {
  return (
    <IconShell>
      <path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
    </IconShell>
  );
}

function MonitorIcon() {
  return (
    <IconShell>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </IconShell>
  );
}

function WorkflowIcon() {
  return (
    <IconShell>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h3a3 3 0 0 1 3 3v4" />
      <path d="m12 11 3 3 3-3" />
    </IconShell>
  );
}

function ShieldIcon() {
  return (
    <IconShell>
      <path d="M12 3 20 6v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6l8-3z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </IconShell>
  );
}

function CodeIcon() {
  return (
    <IconShell>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
    </IconShell>
  );
}

function CheckIcon() {
  return (
    <IconShell>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </IconShell>
  );
}

function Section({ id, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`relative z-10 mx-auto w-full max-w-7xl px-6 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.015 }}
      className={`group relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-emerald-400/0 opacity-0 transition duration-500 group-hover:from-cyan-400/10 group-hover:to-emerald-400/10 group-hover:opacity-100" />
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-emerald-400/20" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function AnimatedHome() {
  const services: Service[] = [
    {
      icon: MonitorIcon,
      title: "Websites & Online Presence",
      text: "Clean, modern websites for small businesses, service brands, portfolios, booking pages, and lead generation.",
    },
    {
      icon: WorkflowIcon,
      title: "Workflow Tools & Automation",
      text: "Custom dashboards, job tracking, forms, reporting tools, and business processes that replace scattered spreadsheets.",
    },
    {
      icon: ShieldIcon,
      title: "Security-Minded IT Setup",
      text: "Practical security reviews, safer access control, better documentation, backups, and network-hardening guidance.",
    },
  ];

  const projects = [
    {
      title: "FieldOps IQ",
      label: "Workflow Platform",
      text: "Field-service job tracking, photo enforcement, invoice logic, and manager review workflows.",
    },
    {
      title: "SyferSec Lab Console",
      label: "Security Dashboard",
      text: "Cybersecurity lab dashboard connected to a Neon PostgreSQL database for assets and findings.",
    },
    {
      title: "Financial Tracker",
      label: "Data Dashboard",
      text: "Personal finance dashboard concept for transaction review, categories, and clean reporting.",
    },
    {
      title: "Soggy Doggy Grooming",
      label: "Local Business Website",
      text: "Small-business website with simple service presentation and booking workflow integration.",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "Tailwind",
    "PostgreSQL",
    "Neon",
    "Supabase",
    "GitHub",
    "Linux",
    "Python",
    "Security Labs",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <motion.div
          animate={{ x: [0, 80, -20, 0], y: [0, -50, 40, 0], scale: [1, 1.12, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-8rem] top-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -70, 30, 0], y: [0, 60, -30, 0], scale: [1, 0.9, 1.18, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-emerald-500/15 blur-3xl"
        />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
            <SparkIcon />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight">Syfernetics</p>
            <p className="text-xs text-slate-400">Practical technology studio</p>
          </div>
        </motion.div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-cyan-300" href="#services">Services</a>
          <a className="transition hover:text-cyan-300" href="#projects">Projects</a>
          <a className="transition hover:text-cyan-300" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            Websites • Dashboards • Automation • Security-minded systems
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl"
          >
            Build better business tech without making it complicated.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            Syfernetics creates modern websites, useful dashboards, workflow tools,
            databases, and security-conscious systems for small businesses and growing teams.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-200"
            >
              View Projects
              <span className="h-4 w-4 transition group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/70 px-6 py-4 font-bold text-slate-100 transition hover:border-cyan-300/40 hover:bg-slate-900"
            >
              Request Consultation
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] border border-cyan-300/15 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur"
          >
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm font-semibold text-cyan-200">Live Business Console</p>
                <p className="text-xs text-slate-500">Sample Syfernetics interface preview</p>
              </div>

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Active Jobs", "24", "Workflow tracking"],
                ["Open Leads", "8", "Website inquiries"],
                ["Automations", "13", "Manual steps removed"],
                ["Security Checks", "97%", "Baseline readiness"],
              ].map(([label, value, sub], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.12, duration: 0.55 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                >
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="mt-2 text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs text-cyan-200/80">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Section id="services">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Services
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Simple offers that make sense to real businesses.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Subtle motion on each section gives the site energy without making it feel overbuilt.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <AnimatedCard key={service.title}>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
                  <ServiceIcon />
                </div>

                <h3 className="text-xl font-black text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
              </AnimatedCard>
            );
          })}
        </motion.div>
      </Section>

      <Section id="projects" className="py-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
            Portfolio
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Real projects. Practical proof.
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {projects.map((project) => (
            <AnimatedCard key={project.title} className="min-h-[230px]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                  {project.label}
                </span>

                <span className="h-5 w-5 text-slate-500">
                  <CodeIcon />
                </span>
              </div>

              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">{project.text}</p>
            </AnimatedCard>
          ))}
        </motion.div>
      </Section>

      <Section>
        <div className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-950/70 p-8 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-[0.95fr_1.05fr] md:p-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Why it works
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              Motion should guide the visitor, not distract them.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              This direction gives Syfernetics a polished agency feel while still staying honest,
              lightweight, and focused on problem solving.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Animated hero background with slow-moving glow",
              "Fade-up reveals for every major homepage section",
              "Staggered project cards for a premium scroll feel",
              "Hover lift and border glow on cards and buttons",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <span className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300">
                  <CheckIcon />
                </span>
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
            Tech Stack
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
            Built with modern tools, explained in plain language.
          </h2>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -4 }}
                className="rounded-full border border-cyan-300/15 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-200 shadow-lg shadow-black/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" className="pb-28">
        <div className="relative overflow-hidden rounded-[2.3rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-slate-950 to-emerald-300/10 p-8 shadow-2xl shadow-cyan-950/30 md:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
              Start small. Build smart.
            </p>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Need a website, dashboard, automation, or tech cleanup?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              The goal is to look capable, modern, trustworthy, and ready to solve business problems.
            </p>

            <a
              href="mailto:contact@syfernetics.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-200"
            >
              Let’s build something useful
              <span className="h-4 w-4 transition group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}