import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";

// Pre-render one static page per project at build time. Required for
// `output: "export"`; only these slugs will exist in the export.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Studio Atelier`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const details = [
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Client", value: project.client },
    { label: "Area", value: project.area },
    { label: "Status", value: project.status },
    { label: "Category", value: project.category },
  ];

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-16">
      <Link
        href="/"
        className="text-sm text-zinc-500 transition-colors hover:text-foreground"
      >
        ← Back to work
      </Link>

      {/* Placeholder hero image. */}
      <div
        className={`mt-8 aspect-[16/9] w-full rounded-xl bg-gradient-to-br ${project.gradient}`}
      />

      <header className="mt-10 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-6 text-lg leading-8 text-zinc-600 md:col-span-2 dark:text-zinc-400">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <dl className="space-y-4 text-sm">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex justify-between gap-4 border-b border-black/10 pb-4 dark:border-white/10"
            >
              <dt className="text-zinc-500">{detail.label}</dt>
              <dd className="text-right font-medium">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
