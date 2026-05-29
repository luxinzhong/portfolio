"use client";

import { useState } from "react";

const timeline = [
  {
    period: "Present",
    role: "ARE Exam",
    place: "4 / 6 complete",
    detail: [],
  },
  {
    period: "2024 – Present",
    role: "Designer II",
    place: "Andrew Sidford Architects",
    url: "https://www.asidfordarchitects.com/",
    detail: [
      "Developed Revit models and Lumion renderings for single-family homes, music venues, and historic renovations across all design phases",
      "Produced DD and CD construction documents; conducted daylighting analysis and produced diagrams for client decision-making",
      "Coordinated with consultants and construction teams, reviewed shop drawings, and responded to RFIs",
      "Improved firm-wide Revit standards and file management systems",
      "Prepared business development materials leading to signed contracts for cultural and educational projects",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Research Assistant",
    place: "Polyhedral Structures Lab, UPenn",
    url: "https://psl.design.upenn.edu/",
    detail: [
      "Developed Python + Grasshopper scripts and concrete 3D printing guidelines for an NSF-funded robotic research project with five PhD and postdoctoral researchers",
      "Proposed 20 design options, conducted structural analyses, and optimized 3D printing toolpaths for feasibility",
      "Co-created models, drawings, and renderings for the 'House of Future' competition with 12 members across 4 labs and firms",
    ],
  },
  {
    period: "2022",
    role: "Summer Intern",
    place: "BLTa — A Perkins Eastman Studio",
    url: "https://www.perkinseastman.com/blt-architects/",
    detail: [
      "Implemented 30+ massing and 10+ program studies for a 20-person client meeting",
      "Organized a 2-day design charrette with interior and landscape designers, yielding 10+ design options",
      "Prepared feasibility and massing studies in Revit and Excel for multi-family and commercial proposals",
      "Composed facade designs with Rhino + Grasshopper and Enscape during Design Development",
    ],
  },
  {
    period: "2021 – 2024",
    role: "M.Arch",
    place: "University of Pennsylvania",
    detail: [
      "GPA 3.9 / 4.0",
      "Certificate in Integrated Product Design — jointly offered by SEAS, Wharton, and Weitzman",
      "Coursework: Daylighting Assessment, New Healthcare Architecture, Parametric Life Cycle Assessment, Real Estate Development",
      "M. Arch Student Representative (2022–23)",
    ],
  },
  {
    period: "2017 – 2021",
    role: "B.A. Architectural Design",
    place: "University of Washington",
    detail: [
      "GPA 3.8 / 4.0 — Cum Laude",
      "Honors Program with Capstone Research Project on Affordable Housing and Design",
      "Coursework: Building Life Cycle Assessment, Site Planning, Computational Design Thinking, Community, Environment, and Planning",
    ],
  },
];

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width={10}
    height={10}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3.5 8.5 8.5 3.5M5 3.5h3.5V7" />
  </svg>
);

export default function TimelineSection() {
  const [detailed, setDetailed] = useState(false);

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          Timeline
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">Show more</span>
          <button
            onClick={() => setDetailed((d) => !d)}
            role="switch"
            aria-checked={detailed}
            aria-label="Detailed timeline"
            className="flex h-5 w-9 items-center rounded-full border border-black/15 bg-black/5 transition-colors dark:border-white/15 dark:bg-white/5"
          >
            <span
              className={`ml-0.5 h-3.5 w-3.5 rounded-full bg-zinc-400 transition-transform dark:bg-zinc-500 ${detailed ? "translate-x-3.5" : "translate-x-0"}`}
            />
          </button>
        </div>
      </div>
      <div className="mt-4">
        {timeline.map((entry, i) => (
          <div
            key={i}
            className="border-t border-black/10 py-5 dark:border-white/10"
          >
            <div className="grid grid-cols-1 gap-y-0.5 sm:grid-cols-[11rem_1fr_1fr] sm:gap-y-0">
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
                    <ExternalIcon />
                  </a>
                ) : (
                  entry.place
                )}
              </span>
            </div>
            {detailed && entry.detail.length > 0 && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-[11rem_1fr]">
                <span />
                <ul className="space-y-1.5">
                  {entry.detail.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-6 text-zinc-400 dark:text-zinc-500">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>
    </div>
  );
}
