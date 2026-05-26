import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      {/* Placeholder image — a gradient block until real photography lands. */}
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br ${project.gradient}`}
      >
        <span className="absolute bottom-4 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-zinc-500">
          {project.title}
        </h3>
        <span className="shrink-0 text-sm text-zinc-500">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-500">{project.location}</p>
    </Link>
  );
}
