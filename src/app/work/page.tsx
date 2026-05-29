import WorkFilter from "@/components/WorkFilter";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <section className="border-t border-black/10 py-10 sm:py-16 dark:border-white/10">
        <div className="mb-6 sm:mb-10">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </h2>
        </div>
        <WorkFilter projects={projects} />
      </section>
    </div>
  );
}
