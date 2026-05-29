"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function WorkFilter({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags))
  ).sort();

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
            activeTag === null
              ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
              : "border border-zinc-300 text-zinc-500 hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-400"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
              activeTag === tag
                ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                : "border border-zinc-300 text-zinc-500 hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
