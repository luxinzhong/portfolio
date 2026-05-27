import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          unoptimized
        />
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

    </Link>
  );
}
