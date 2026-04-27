import Link from "next/link";
import MotionCard from "@/components/MotionCard";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <MotionCard className="p-6">
      <Link href={`/projects/${project.slug}`} className="block cursor-pointer">
        <div>
          <div className="mb-1 text-sm text-accent">{project.type}</div>

          <h3 className="mb-2 text-xl font-bold text-fg transition group-hover:text-cyan-200">
            {project.title}
          </h3>

          <p className="mb-3 text-sm text-muted">{project.summary}</p>

          <div className="flex flex-wrap gap-2 text-xs text-muted">
            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="rounded-md bg-black/30 px-2 py-1 transition group-hover:bg-cyan-300/10 group-hover:text-cyan-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="mt-4 flex gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition hover:text-cyan-200 hover:underline"
          >
            GitHub →
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition hover:text-cyan-200 hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
    </MotionCard>
  );
}