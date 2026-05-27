"use client";

import { useState, useEffect } from "react";

const timeline = [
  {
    period: "Present",
    role: "ARE Exam",
    place: "4 / 6 complete",
    detail: "AE · PPD · PA · PcM passed. Currently preparing for PDD and CE.",
  },
  {
    period: "2024 – Present",
    role: "Designer II",
    place: "Andrew Sidford Architects",
    url: "https://www.asidfordarchitects.com/",
    detail:
      "Design development and construction documentation for residential and civic projects. Consultant coordination, client communication, and site observation.",
  },
  {
    period: "2023 – 2024",
    role: "Research Assistant",
    place: "Polyhedral Structures Lab, UPenn",
    url: "https://psl.design.upenn.edu/",
    detail:
      "Computational investigation of polyhedral geometries for structural applications. Programming in Python and Grasshopper; fabrication and physical modeling.",
  },
  {
    period: "2022",
    role: "Summer Intern",
    place: "BLTa — A Perkins Eastman Studio",
    url: "https://www.perkinseastman.com/blt-architects/",
    detail:
      "Contributed to design and production for healthcare and civic projects. Produced Revit models, detail drawings, and presentation graphics.",
  },
  {
    period: "2021 – 2024",
    role: "M.Arch",
    place: "University of Pennsylvania",
    detail:
      "Master of Architecture. Stuart Weitzman School of Design. Focus areas: computational design, structural form-finding, and digital fabrication.",
  },
  {
    period: "2017 – 2021",
    role: "B.A. Architectural Design",
    place: "University of Washington",
    detail:
      "Bachelor of Arts in Architectural Design. Department of Architecture, College of Built Environments.",
  },
];

export default function TimelineSection() {
  const [expanded, setExpanded] = useState(false);
  const [hinting, setHinting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setHinting(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          Timeline
        </h2>
        <button
          onClick={() => {
            setExpanded((v) => !v);
            setHinting(false);
          }}
          className="flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-200"
          aria-expanded={expanded}
        >
          <span>{expanded ? "Less" : "Details"}</span>
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
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""} ${hinting ? "animate-bounce" : ""}`}
            style={hinting ? { animationIterationCount: 3 } : undefined}
          >
            <path d="M2 4l4 4 4-4" />
          </svg>
        </button>
      </div>

      <div className="mt-4">
        {timeline.map((entry, i) => (
          <div
            key={i}
            className="border-t border-black/10 dark:border-white/10"
          >
            <div className="grid grid-cols-1 gap-y-0.5 py-5 sm:grid-cols-[11rem_1fr_1fr] sm:gap-y-0">
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
                  </a>
                ) : (
                  entry.place
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expanded ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-5 text-sm leading-6 text-zinc-400 dark:text-zinc-500 sm:pl-44">
                {entry.detail}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t border-black/10 dark:border-white/10" />
      </div>
    </div>
  );
}
