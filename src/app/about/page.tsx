import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Lucy Zhong",
  description:
    "Architecture portfolio of Lucy Zhong, working across cultural, residential, and civic projects.",
};

const timeline = [
  { period: "2024 – Present", role: "Designer II", place: "Andrew Sidford Architects" },
  { period: "2023 – 2024", role: "Research Assistant", place: "Polyhedral Structures Lab, UPenn" },
  { period: "2022", role: "Summer Intern", place: "BLTa — A Perkins Eastman Studio" },
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
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        About
      </p>
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Lucy Zhong
      </h1>

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
              <span className="text-sm text-zinc-500">{entry.place}</span>
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
