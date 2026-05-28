import type { Metadata } from "next";
import Image from "next/image";
import { imgSrc } from "@/lib/imgSrc";

export const metadata: Metadata = {
  title: "About — Lucy Zhong",
  description:
    "Architecture portfolio of Lucy Zhong, working across cultural, residential, and civic projects.",
};

const timeline = [
  { period: "Present", role: "ARE Exam", place: "4 / 6 complete" },
  { period: "2024 – Present", role: "Designer II", place: "Andrew Sidford Architects", url: "https://www.asidfordarchitects.com/" },
  { period: "2023 – 2024", role: "Research Assistant", place: "Polyhedral Structures Lab, UPenn", url: "https://psl.design.upenn.edu/" },
  { period: "2022", role: "Summer Intern", place: "BLTa — A Perkins Eastman Studio", url: "https://www.perkinseastman.com/blt-architects/" },
  { period: "2021 – 2024", role: "M.Arch", place: "University of Pennsylvania" },
  { period: "2017 – 2021", role: "B.A. Architectural Design", place: "University of Washington" },
];

const skills = [
  { category: "Modeling", tools: ["Rhino 3D", "Revit", "AutoCAD", "SketchUp", "Blender", "Zbrush"] },
  { category: "Rendering", tools: ["Vray", "Lumion", "Enscape", "Twinmotion", "Keyshot"] },
  { category: "Scripting", tools: ["Grasshopper", "Python", "HTML + CSS"] },
  { category: "Analysis", tools: ["Ladybug", "BHoM", "Fusion 360"] },
  { category: "Graphic", tools: ["Photoshop", "Illustrator", "InDesign"] },
  { category: "Video", tools: ["Premiere", "After Effects"] },
];

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-5 sm:gap-16">
        <div className="sm:col-span-2">
          <Image
            src={imgSrc("/images/profile.jpg")}
            alt="Lucy Zhong"
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, 40vw"
            className="h-auto w-full"
            unoptimized
            priority
          />
        </div>
        <div className="flex flex-col justify-center sm:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>
          <p className="mt-6 text-2xl leading-9 text-zinc-600 dark:text-zinc-300 sm:text-3xl sm:leading-10">
            Hi! I&apos;m Lucy, an architectural designer based in the Greater Boston Area.
            <br />My work is shaped by curiosity, observation, and continuous learning.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          Timeline
        </h2>
        <div className="mt-4">
          {timeline.map((entry, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-y-0.5 border-t border-black/10 py-5 sm:grid-cols-[11rem_1fr_1fr] sm:gap-y-0 dark:border-white/10"
            >
              <span className="text-sm text-zinc-400">{entry.period}</span>
              <span className="text-sm font-medium">{entry.role}</span>
              <span className="text-sm text-zinc-500">
                {"url" in entry ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-2 transition-colors hover:text-foreground"
                  >
                    {entry.place}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width={10} height={10} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M3.5 8.5 8.5 3.5M5 3.5h3.5V7" />
                    </svg>
                  </a>
                ) : (
                  entry.place
                )}
              </span>
            </div>
          ))}
          <div className="border-t border-black/10 dark:border-white/10" />
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          Skills
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
          {skills.map((s) => (
            <div key={s.category}>
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                {s.category}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {s.tools.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 text-sm text-zinc-400 dark:text-zinc-500">
        Last updated May 2026.
      </p>
    </div>
  );
}
