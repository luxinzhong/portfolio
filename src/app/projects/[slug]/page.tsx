import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import Carousel from "@/components/Carousel";
import SafeImage from "@/components/SafeImage";
import { imgSrc } from "@/lib/imgSrc";

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
  const carouselImages = carouselCount > 0
    ? [coverImage, ...galleryImages.slice(0, carouselCount)]
    : [];
  const gridImages = galleryImages.slice(carouselCount);

  const mainDetails = [
    { label: "Author(s)", value: project.authors },
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Organization", value: project.organization },
    ...(project.instructor ? [{ label: "Instructor", value: project.instructor }] : []),
    { label: "Status", value: project.status },
    { label: "Category", value: project.category },
  ];

  // Paragraphs paired with gallery images (alternating sides)
  const pairedImages = gridImages.slice(0, project.description.length);
  const remainingImages = gridImages.slice(project.description.length);

  return (
    <article className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
      <Link
        href="/"
        className="text-sm text-zinc-500 transition-colors hover:text-foreground"
      >
        ← Back to work
      </Link>

      {/* Hero */}
      {carouselImages.length > 0 ? (
        <div className="mt-5 sm:mt-8 w-full">
          <Carousel images={carouselImages.map(imgSrc)} alt={project.title} />
        </div>
      ) : (
        <div className="mt-5 sm:mt-8 w-full bg-zinc-100 dark:bg-zinc-900">
          <SafeImage
            src={imgSrc(coverImage)}
            alt={project.title}
            className="h-auto w-full"
            priority
          />
        </div>
      )}

      {/* Title */}
      <header className="mt-6 sm:mt-10 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          {project.category}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>
      </header>

      {/* Metadata grid */}
      <dl className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-black/10 pt-8 sm:grid-cols-3 dark:border-white/10">
        {mainDetails.map((detail) => {
          const multiline = detail.value.includes("\n");
          return (
            <div key={detail.label} className={multiline ? "col-span-2 sm:col-span-3" : ""}>
              <dt className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500">
                {detail.label}
              </dt>
              <dd className={`mt-1 text-sm font-medium leading-6 ${multiline ? "whitespace-pre-line" : ""}`}>
                {detail.value}
              </dd>
            </div>
          );
        })}
      </dl>

      {/* Critics — full width below main metadata */}
      {project.critics && (
        <div className="mt-5 border-t border-black/10 pt-5 dark:border-white/10">
          <dt className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500">
            Critics
          </dt>
          <dd className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {project.critics}
          </dd>
        </div>
      )}

      {/* External link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-zinc-500 underline underline-offset-4 transition-colors hover:text-foreground"
        >
          View project page →
        </a>
      )}

      {/* Integrated content: paragraphs paired with images, alternating sides */}
      <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-20">
        {project.description.map((para, i) => {
          const img = pairedImages[i];
          const isOdd = i % 2 === 1;

          if (!img) {
            return (
              <p key={i} className="max-w-3xl text-base leading-7 sm:leading-8 text-zinc-600 dark:text-zinc-400">
                {para}
              </p>
            );
          }

          return (
            <div
              key={i}
              className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${isOdd ? "md:flex-row-reverse" : ""}`}
            >
              <p className="md:w-[52%] text-base leading-7 sm:leading-8 text-zinc-600 dark:text-zinc-400">
                {para}
              </p>
              <div className="md:w-[48%] shrink-0 bg-zinc-100 dark:bg-zinc-900">
                <SafeImage
                  src={imgSrc(img)}
                  alt={`${project.title} — view ${carouselCount + i + 2}`}
                  className="h-auto w-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Remaining images not paired with paragraphs */}
      {remainingImages.length > 0 && (
        <div className="mt-10 sm:mt-16 columns-1 gap-3 sm:gap-4 sm:columns-2">
          {remainingImages.map((src, i) => (
            <div
              key={i}
              className="mb-3 sm:mb-4 break-inside-avoid bg-zinc-100 dark:bg-zinc-900"
            >
              <SafeImage
                src={imgSrc(src)}
                alt={`${project.title} — view ${carouselCount + project.description.length + i + 2}`}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
