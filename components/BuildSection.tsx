"use client";

import Link from "next/link";
import SectionIntro from "./SectionIntro";
import MotionCard from "./MotionCard";
import { projects } from "@/data/projects";

export function ProjectGrid({ limit }: { limit?: number }) {
  const shown = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {shown.map((project) => {
        const primaryHref = project.liveUrl || project.repoUrl || "/contact";

        return (
        <MotionCard key={project.title} className="p-6" href={primaryHref}>
          <p className="mb-3 text-sm font-semibold text-accent">
            {project.category}
          </p>

          <h3 className="mb-3 text-2xl font-bold text-fg transition duration-300 group-hover:text-cyan-200">
            {project.title}
          </h3>

          <p className="mb-5 leading-7 text-muted">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent transition duration-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10 group-hover:text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.55),0_0_24px_rgba(34,211,238,0.35)] focus:outline-none focus:ring-2 focus:ring-accent-dark"
              >
                View Live Project
              </a>
            ) : null}

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center justify-center rounded-lg border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-accent/10 hover:text-cyan-200 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.45),0_0_22px_rgba(34,211,238,0.28)] focus:outline-none focus:ring-2 focus:ring-accent"
              >
                View Repository
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center justify-center rounded-lg border border-accent/50 px-4 py-2 text-sm font-semibold text-accent transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-accent/10 hover:text-cyan-200 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.45),0_0_22px_rgba(34,211,238,0.28)] focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Request Details
              </Link>
            )}
          </div>
        </MotionCard>
        );
      })}
    </div>
  );
}

export default function BuildSection() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Selected Work"
            title="Projects that show practical capability"
          >
            These projects demonstrate front-end development, database-backed
            workflows, authentication, dashboards, deployment, and real-world
            problem solving.
          </SectionIntro>

          <Link
            href="/projects"
            className="group relative mb-12 inline-flex items-center justify-center overflow-hidden rounded-lg border border-accent/50 px-5 py-3 font-semibold text-accent transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-accent/10 hover:text-cyan-200 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.55),0_0_28px_rgba(34,211,238,0.35),0_0_70px_rgba(16,185,129,0.22)]"
          >
            <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-300/10 via-emerald-300/10 to-cyan-300/10" />
            </span>

            <span className="relative z-10">See All Projects</span>
          </Link>
        </div>

        <ProjectGrid limit={6} />
      </div>
    </section>
  );
}