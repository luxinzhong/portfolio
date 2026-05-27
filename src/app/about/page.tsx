import type { Metadata } from "next";
import Image from "next/image";
import { imgSrc } from "@/lib/imgSrc";
import TimelineSection from "./TimelineSection";

export const metadata: Metadata = {
  title: "About — Lucy Zhong",
  description:
    "Architecture portfolio of Lucy Zhong, working across cultural, residential, and civic projects.",
};

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
      <TimelineSection />

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
