import React from "react";
import HomeContactForm from "@/components/HomeContactForm";
import RevealSection from "@/components/RevealSection";

type Service = {
  label: string;
  title: string;
  description: string;
  icon: string;
};

type Package = {
  name: string;
  price: string;
  description: string;
  includes: string[];
  featured?: boolean;
};

type Project = {
  title: string;
  category: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
};

const services: Service[] = [
  {
    label: "Website Design",
    title: "Small business website design",
    description:
      "Clean, mobile-friendly websites for local service businesses that need to look professional, explain their services clearly, and make it easy for customers to call, email, or request help.",
    icon: "▣",
  },
  {
    label: "Website Refresh",
    title: "Website cleanup and redesign",
    description:
      "For businesses with outdated, confusing, or broken websites that need a cleaner layout, clearer wording, a better mobile experience, and stronger calls-to-action.",
    icon: "◩",
  },
  {
    label: "Workflow Automation",
    title: "Forms, trackers, and simple automations",
    description:
      "Quote forms, job request workflows, Google Sheets tracking, notifications, dashboards, and simple internal tools that reduce repeated manual work.",
    icon: "↔",
  },
  {
    label: "Business Setup",
    title: "Business email, domains, and DNS",
    description:
      "Professional email setup, domain connection, SPF/DKIM/DMARC basics, branded signatures, contact forms, and practical launch support.",
    icon: "✉",
  },
  {
    label: "Care Plans",
    title: "Website care and small updates",
    description:
      "Monthly support for small updates, content changes, form checks, backups, minor page edits, and practical website maintenance.",
    icon: "✓",
  },
  {
    label: "IT Help",
    title: "Practical IT help for small business",
    description:
      "No-nonsense support for account setup, MFA, password manager guidance, safer online habits, backups, and digital process cleanup.",
    icon: "⚙",
  },
  {
    label: "Networking",
    title: "Small office networking and connectivity support",
    description:
      "Practical support for routers, Wi-Fi coverage, device connectivity, basic network organization, and troubleshooting systems that need to communicate reliably.",
    icon: "◎",
  },
  {
    label: "Security Basics",
    title: "Basic security and backup guidance",
    description:
      "Practical support for MFA, password managers, safer account habits, backup conversations, email/domain records, and reducing common small-business technology risks.",
    icon: "◌",
  },
];

const packages: Package[] = [
  {
    name: "Website Refresh",
    price: "Starting at $500",
    description:
      "For businesses that already have a website but need it cleaned up, modernized, made mobile-friendly, or rewritten so customers understand what to do next.",
    includes: [
      "Homepage or key-page cleanup",
      "Mobile layout review",
      "Clear service wording",
      "Contact button and form review",
      "Search-friendly page title and description guidance",
    ],
  },
  {
    name: "Small Business Website",
    price: "Starting at $1,200",
    description:
      "For local businesses that need a professional web presence with the right pages, clear service sections, and a clean path for customers to contact you.",
    includes: [
      "4-6 page website structure",
      "Home, About, Services, Contact",
      "Mobile-friendly design",
      "Local search setup basics",
      "Launch guidance and hosting support",
    ],
    featured: true,
  },
  {
    name: "Workflow Automation Lite",
    price: "Starting at $500",
    description:
      "For shops, churches, contractors, groomers, repair businesses, and service teams that need intake forms, job tracking, or simple process visibility.",
    includes: [
      "Customer intake or request form",
      "Google Sheets or simple tracker",
      "Email notification flow",
      "Simple dashboard planning",
      "Workflow documentation",
    ],
  },
  {
    name: "Business Email Setup",
    price: "Starting at $250",
    description:
      "For businesses that need a professional email address, domain connection, basic DNS records, and a cleaner digital foundation.",
    includes: [
      "Domain and DNS review",
      "Business email setup support",
      "SPF/DKIM/DMARC basics",
      "Branded email signature guidance",
      "Account security recommendations",
    ],
  },
  {
    name: "Network & Wi-Fi Checkup",
    price: "Starting at $175",
    description:
      "For small offices or service businesses that need help with Wi-Fi coverage, router setup, device connectivity, network organization, or basic network troubleshooting.",
    includes: [
      "Router and Wi-Fi review",
      "Device connectivity check",
      "Basic network map notes",
      "Simple improvement recommendations",
      "On-site or remote support by fit",
    ],
  },
  {
    name: "IT Troubleshooting Block",
    price: "Starting at $125 remote",
    description:
      "For practical help with account setup, software issues, device problems, email access, connectivity questions, or small-business technology cleanup.",
    includes: [
      "Remote support session",
      "Issue review and triage",
      "Basic fix or recommendation",
      "Follow-up notes",
      "On-site support quoted when needed",
    ],
  },
  {
    name: "Website Care Plan",
    price: "Starting at $99/mo",
    description:
      "For small businesses that need someone to help keep the website updated, checked, and adjusted without starting a new project every time.",
    includes: [
      "Minor content updates",
      "Contact form checks",
      "Basic page edits",
      "Monthly improvement notes",
      "Priority support window",
    ],
  },
  {
    name: "Custom Project",
    price: "Quoted after review",
    description:
      "For custom dashboards, internal tools, advanced automation, security-focused setup, API integrations, larger workflow projects, or more involved network support.",
    includes: [
      "Discovery call",
      "Problem and workflow review",
      "Project scope outline",
      "Milestone-based pricing",
      "Clear deliverables before work begins",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Syfernetics Website Rebuild",
    category: "Business Website / SEO",
    description:
      "A complete business-site rebuild focused on service clarity, local SEO structure, pricing visibility, contact flow, and customer-facing credibility for a practical technology brand.",
    repoUrl: "https://github.com/otiseduncan/Syfernetics-Home",
  },
  {
    title: "Financial Tracker App",
    category: "Full-stack / Dashboard",
    description:
      "A finance-focused app project built around clear data flow, practical dashboard views, API integration planning, and a user interface designed to make financial information easier to understand.",
    repoUrl: "https://github.com/otiseduncan",
  },
  {
    title: "Soggy Doggy Grooming",
    category: "Small Business Website",
    description:
      "A small business website project focused on friendly branding, clear service information, customer booking flow, and an affordable path to getting a professional web presence online.",
    repoUrl: "https://github.com/otiseduncan",
  },
  {
    title: "Katie Bug's Country Kitchen",
    category: "Small Business Website",
    description:
      "A restaurant-style small business website project focused on local branding, menu and service clarity, warm visual presentation, and a cleaner online presence for customers browsing before they visit.",
    repoUrl: "https://github.com/otiseduncan",
  },
  {
    title: "DriveOps-IQ / ShopOps-IQ",
    category: "Workflow Platform",
    description:
      "A workflow platform concept for field-service and repair operations, covering job queues, user roles, status tracking, required documents, invoice logic, and better operational visibility.",
    repoUrl: "https://github.com/otiseduncan",
  },
  {
    title: "FUZE Boxx Brand & Market Research",
    category: "Business Strategy / Web Direction",
    description:
      "A business strategy and web-positioning project for a specialized automotive service brand, including service packaging, market research, pricing logic, and customer-facing messaging.",
    repoUrl: "https://github.com/otiseduncan",
  },
];

const areas = [
  "Milledgeville",
  "Eatonton",
  "Macon",
  "Gray",
  "Warner Robins",
  "Perry",
  "Lake Oconee",
  "Greensboro",
  "Madison",
  "Central Georgia",
  "Based in Milledgeville, GA",
  "Remote Support",
];

const faqs = [
  {
    q: "Do I need a brand-new website, or can you fix what I already have?",
    a: "Many businesses do not need to start over. If the current site has a decent foundation, Syfernetics can refresh the layout, clarify the words, fix mobile issues, and improve the customer contact path.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Websites are one part of the work. Syfernetics also helps with business email, domain setup, forms, request tracking, workflow automation, dashboards, small-office networking, and practical IT cleanup.",
  },
  {
    q: "Can you work with businesses outside Central Georgia?",
    a: "Yes. Many website, email, workflow, and automation projects can be handled remotely. Local service-area wording is focused on Central Georgia, but remote support is available when the project can be handled effectively online.",
  },
  {
    q: "Do you offer cybersecurity services?",
    a: "Syfernetics focuses first on practical security-minded setup: MFA, safer account habits, password manager guidance, backups, email/domain records, basic network hygiene, and reducing common small-business digital risks. Advanced security work is quoted carefully based on scope.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 max-w-4xl">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{children}</p>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/check flex items-start gap-3 text-sm leading-6 text-slate-300 transition-colors duration-300 hover:text-slate-100">
      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-teal-400/15 text-xs font-black text-teal-300 transition-all duration-300 group-hover/check:scale-110 group-hover/check:bg-teal-400/25 group-hover/check:text-teal-100">
        ✓
      </span>
      <span>{children}</span>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-teal-300/40 hover:bg-slate-900/90 hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.28)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/10 text-2xl font-black text-teal-300 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-teal-400/20 group-hover:text-teal-100">
        {service.icon}
      </div>
      <p className="text-sm font-black uppercase tracking-widest text-teal-300 transition-colors duration-300 group-hover:text-teal-100">
        {service.label}
      </p>
      <h3 className="mt-2 text-2xl font-black text-white transition-colors duration-300 group-hover:text-teal-100">
        {service.title}
      </h3>
      <p className="mt-4 leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
        {service.description}
      </p>
    </div>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`group relative rounded-[1.6rem] border p-6 shadow-xl shadow-black/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_22px_60px_-15px_rgba(45,212,191,0.25)] ${
        pkg.featured
          ? "border-teal-300/50 bg-teal-400/10 hover:border-teal-200/70 hover:bg-teal-400/15"
          : "border-white/10 bg-slate-900/70 hover:border-teal-300/35 hover:bg-slate-900/90"
      }`}
    >
      {pkg.featured ? (
        <div className="absolute right-5 top-5 rounded-full bg-teal-300 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-950 transition-all duration-300 group-hover:scale-105 group-hover:bg-teal-100">
          Best starter
        </div>
      ) : null}
      <h3 className="pr-28 text-2xl font-black text-white transition-colors duration-300 group-hover:text-teal-100">
        {pkg.name}
      </h3>
      <p className="mt-3 text-3xl font-black text-teal-300 transition-colors duration-300 group-hover:text-teal-100">
        {pkg.price}
      </p>
      <p className="mt-4 min-h-[112px] leading-7 text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
        {pkg.description}
      </p>
      <div className="mt-6 space-y-3">
        {pkg.includes.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const href = project.liveUrl || project.repoUrl || "#contact";
  const linkType = project.liveUrl
    ? "View live project"
    : project.repoUrl
      ? "View repository"
      : "Request details";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-teal-300/35 hover:bg-slate-900/85 hover:shadow-[0_20px_50px_-15px_rgba(45,212,191,0.24)]"
    >
      <p className="text-sm font-black uppercase tracking-widest text-teal-300 transition-colors group-hover:text-teal-100">
        {project.category}
      </p>
      <h3 className="mt-3 text-2xl font-black text-white transition-colors duration-300 group-hover:text-teal-100">
        {project.title}
      </h3>
      <p className="mt-4 leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
        {project.description}
      </p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-teal-300 transition group-hover:translate-x-1 group-hover:text-teal-100">
        {linkType} -&gt;
      </div>
    </a>
  );
}

export default function SyferneticsFreshProfessionalPreview() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 top-60 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.28) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-400/10 text-xl font-black text-teal-300 shadow-lg shadow-teal-500/10">
              S
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">Syfernetics</p>
              <p className="text-xs text-slate-400">
                Websites • Workflow • Practical IT
              </p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 lg:flex">
            <a href="#services" className="hover:text-teal-300">
              Services
            </a>
            <a href="#packages" className="hover:text-teal-300">
              Pricing
            </a>
            <a href="#projects" className="hover:text-teal-300">
              Projects
            </a>
            <a href="#service-area" className="hover:text-teal-300">
              Service Area
            </a>
            <a href="#faq" className="hover:text-teal-300">
              FAQ
            </a>
            <a
              href="#contact-form"
              className="rounded-xl border border-teal-400/40 px-4 py-2 text-teal-200 hover:bg-teal-400/10"
            >
              Start a project
            </a>
          </nav>
        </header>

        <main id="home" className="relative z-10">
          <RevealSection className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-200">
                Based in Milledgeville, GA • Serving Central Georgia
              </div>
              <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Websites, workflow automation, networking, and practical IT help
                for Central Georgia small businesses.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Based in Milledgeville, Georgia, Syfernetics helps local service
                businesses look professional online, clean up broken digital
                processes, and build simple systems that save time. From website
                design and business email setup to forms, trackers, dashboards,
                networking support, and security-minded IT habits, the focus is
                practical technology that solves real business problems across
                Central Georgia and remote projects by fit.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-400 px-6 py-4 font-black text-slate-950 shadow-xl shadow-teal-500/20 transition hover:-translate-y-1 hover:bg-teal-300"
                >
                  View starting packages -&gt;
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-bold text-slate-100 transition hover:-translate-y-1 hover:border-teal-300/50 hover:bg-teal-400/10"
                >
                  Send a message
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                {[
                  "Website design",
                  "Workflow automation",
                  "Business email setup",
                  "Networking support",
                  "Security basics",
                  "Small business IT help",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-5 border-b border-white/10 pb-4">
                <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
                  Built for small business
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  A clearer online presence starts here.
                </h2>
              </div>
              <div className="space-y-4">
                <CheckItem>
                  Professional website design and refresh services.
                </CheckItem>
                <CheckItem>
                  Workflow tools that reduce scattered messages and manual
                  tracking.
                </CheckItem>
                <CheckItem>
                  Business email, domain, and digital setup support.
                </CheckItem>
                <CheckItem>
                  Networking support for routers, Wi-Fi, and connected devices.
                </CheckItem>
                <CheckItem>
                  Security basics for accounts, backups, and safer daily
                  operations.
                </CheckItem>
              </div>
              <div className="mt-6 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4 text-sm leading-6 text-teal-100">
                Need a better website, cleaner workflow, or professional
                business email setup? Start with a practical review and a clear
                recommendation before committing to a full project.
              </div>
            </aside>
          </RevealSection>
        </main>
      </div>

      <RevealSection
        id="services"
        className="border-y border-white/10 bg-slate-900/70 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Practical digital services for small business owners"
          >
            Syfernetics is designed for service businesses that need clear help
            without confusing tech language. The goal is to make the business
            easier to find, easier to contact, easier to connect, and easier to
            operate.
          </SectionIntro>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="website-design" className="px-6 py-20" delay={0.03}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro
            eyebrow="Website Design"
            title="Small business website design that explains what you do fast"
          >
            A good small business website should answer the customer's first
            questions quickly: what you do, where you serve, why they should
            trust you, and how they can contact you.
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-black text-white">
                Built for customer action
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Clear calls-to-action, contact forms, service sections, mobile
                layout, and simple navigation so visitors know what to do next.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-black text-white">
                Built for local search
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Page titles, headings, service wording, and location signals
                designed around local customers searching for real help.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 md:col-span-2">
              <h3 className="text-xl font-black text-white">Best fit</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Contractors, repair shops, dog groomers, churches, food
                services, mobile service businesses, local consultants, and
                small teams that need a clean professional web presence.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        id="workflow-automation"
        className="border-y border-white/10 bg-slate-900/70 px-6 py-20"
        delay={0.04}
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
              Workflow Automation
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Turn scattered messages and manual tracking into a simple
              workflow.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Many small businesses lose time because requests come through
              calls, texts, Facebook messages, paper notes, and memory.
              Syfernetics helps turn that chaos into forms, lists,
              notifications, and dashboards that are easier to manage.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="space-y-4">
              <CheckItem>Customer request forms</CheckItem>
              <CheckItem>Quote or appointment intake</CheckItem>
              <CheckItem>Google Sheets tracking</CheckItem>
              <CheckItem>Email notification workflows</CheckItem>
              <CheckItem>Simple dashboards for visibility</CheckItem>
              <CheckItem>
                Documentation so the business can keep using it
              </CheckItem>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="packages" className="px-6 py-20" delay={0.05}>
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Starting Packages"
            title="Simple pricing that gives small businesses a place to start"
          >
            These are starting points, not rigid boxes. Every project begins
            with a short review so the scope, price, and deliverables are clear
            before work starts.
          </SectionIntro>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        id="projects"
        className="border-y border-white/10 bg-slate-900/70 px-6 py-20"
        delay={0.06}
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Project Proof"
            title="Real project work that shows practical capability"
          >
            These projects show how Syfernetics approaches practical problems:
            understanding the workflow first, then building websites, tools,
            dashboards, and digital systems that make the work easier to
            manage.
          </SectionIntro>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="about" className="px-6 py-20" delay={0.07}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950/30 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
              Why Syfernetics is different
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Built by a field problem-solver, not a buzzword agency.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Syfernetics is built from years of hands-on troubleshooting,
              customer-facing communication, workflow pressure, documentation
              problems, networking practice, and real business operations. The
              technology is the tool. The goal is solving the problem.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-black text-white">
                30 years of real-world technical problem solving
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Automotive diagnostics, field operations, customer
                communication, repair process thinking, networking practice, and
                workflow pressure translate directly into practical business
                technology support.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-black text-white">
                Modern software, networking, and IT project experience
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Web projects, workflow concepts, dashboards, deployment
                experience, networking labs, Linux systems, and service-business
                website work show how Syfernetics turns learning into practical
                solutions for real business needs.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-black text-white">
                Plain-language support for small business owners
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                No confusing agency talk. The focus is simple: what is not
                working, what needs to be clearer, what wastes time, and what
                would make the business easier for customers and owners.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection
        id="service-area"
        className="border-y border-white/10 bg-slate-900/70 px-6 py-20"
        delay={0.08}
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Service Area"
            title="Serving Central Georgia small businesses with local and remote support"
          >
            Syfernetics is based in Milledgeville, Georgia and serves small
            businesses across Central Georgia, including Eatonton, Macon, Gray,
            Warner Robins, Perry, Lake Oconee, Greensboro, Madison, and
            surrounding communities. Remote support is available when the
            project can be handled effectively online.
          </SectionIntro>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-teal-300/40 hover:bg-teal-400/10 hover:text-teal-100"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="process" className="px-6 py-20" delay={0.09}>
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Process" title="A simple process built for clarity">
            Small business owners do not need a complicated technical process.
            They need clear steps, clear pricing, and clear deliverables.
          </SectionIntro>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              [
                "01",
                "Review",
                "We look at the current website, workflow, email setup, network issue, or business problem.",
              ],
              [
                "02",
                "Plan",
                "We define the practical outcome, pages, tools, scope, and price.",
              ],
              [
                "03",
                "Build",
                "The website, form, workflow, setup, or support plan is built and reviewed in stages.",
              ],
              [
                "04",
                "Launch",
                "The work is deployed, documented, and supported with next-step guidance.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={num}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal-300/35 hover:shadow-[0_20px_50px_-15px_rgba(45,212,191,0.22)]"
              >
                <p className="text-4xl font-black text-teal-300">{num}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection
        id="faq"
        className="border-y border-white/10 bg-slate-900/70 px-6 py-20"
        delay={0.1}
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Common questions before starting a small business tech project"
          >
            Straight answers for small business owners who want practical help
            with websites, workflow, email setup, networking, and everyday
            technology decisions.
          </SectionIntro>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{faq.q}</h3>
                <p className="mt-3 leading-7 text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact" className="px-6 py-20" delay={0.12}>
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-teal-300/20 bg-gradient-to-br from-teal-400/15 via-slate-900 to-cyan-500/10 p-8 text-center shadow-2xl shadow-teal-900/20 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
            Start here
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
            Request a website, workflow, networking, or small business IT
            review.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The first conversation is practical: what is broken, what is
            confusing, what is costing time, what needs to look more
            professional, and what would make the business easier to run.
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-4 text-left md:grid-cols-2">
            <a
              href="mailto:otis.duncan@syfernetics.com"
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-teal-300/40 hover:bg-teal-400/10"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                Email
              </p>
              <p className="mt-2 break-words text-lg font-black text-white">
                otis.duncan@syfernetics.com
              </p>
            </a>
            <a
              href="/contact"
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition hover:border-teal-300/40 hover:bg-teal-400/10"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                Contact page
              </p>
              <p className="mt-2 text-lg font-black text-white">
                Open full inquiry form
              </p>
            </a>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-300 px-6 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-teal-200"
            >
              Send inquiry -&gt;
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              View starting packages
            </a>
          </div>
          <HomeContactForm />
        </div>
      </RevealSection>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row md:items-center">
          <p>
            © 2026 Syfernetics. Practical technology solutions for small
            businesses in Central Georgia.
          </p>
          <p>
            Based in Milledgeville, GA • Websites • Workflow • Networking •
            Practical IT
          </p>
        </div>
      </footer>
    </div>
  );
}