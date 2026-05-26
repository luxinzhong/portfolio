import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Architecture &amp; Urbanism
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Buildings that hold light, landscape, and time.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Studio Atelier is an architecture practice working across cultural,
          residential, and civic projects — from a riverside pavilion to a
          cliffside retreat.
        </p>
      </section>

      {/* Selected work */}
      <section className="border-t border-black/10 py-16 dark:border-white/10">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </h2>
          <span className="text-sm text-zinc-500">
            {projects.length} projects
          </span>
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
