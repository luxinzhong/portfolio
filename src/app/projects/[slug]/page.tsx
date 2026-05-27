import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import Carousel from "@/components/Carousel";

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
    title: `${project.title} — Lucy Zhong`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const [coverImage, ...galleryImages] = project.images;
  const carouselCount = project.carouselCount ?? 0;
  // When a carousel exists, prepend the cover so it becomes the first slide
  const carouselImages = carouselCount > 0
    ? [coverImage, ...galleryImages.slice(0, carouselCount)]
    : [];
  const gridImages = galleryImages.slice(carouselCount);

  const details = [
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Client", value: project.client },
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

      {/* Hero: carousel if available, otherwise static cover */}
      {carouselImages.length > 0 ? (
        <div className="mt-8 w-full">
          <Carousel images={carouselImages} alt={project.title} />
        </div>
      ) : (
        <div className="mt-8 w-full bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={coverImage}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
            unoptimized
            priority
          />
        </div>
      )}

      <header className="mt-10 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-5 text-base leading-8 text-zinc-600 md:col-span-2 dark:text-zinc-400">
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

      {/* Gallery grid */}
      {gridImages.length > 0 && (
        <div className="columns-1 gap-4 sm:columns-2 mt-16">
          {gridImages.map((src, i) => (
            <div
              key={i}
              className="mb-4 break-inside-avoid bg-zinc-100 dark:bg-zinc-900"
            >
              <Image
                src={src}
                alt={`${project.title} — view ${carouselCount + i + 2}`}
                width={0}
                height={0}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-auto w-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
