import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <section className="border-t border-black/10 py-16 dark:border-white/10">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </h2>
          <span className="text-sm text-zinc-500">{projects.length} projects</span>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
