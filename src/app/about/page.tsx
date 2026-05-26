import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Studio Atelier",
  description:
    "Studio Atelier is an architecture practice working across cultural, residential, and civic projects.",
};

const services = [
  "Architecture",
  "Urban design",
  "Interiors",
  "Adaptive reuse",
  "Feasibility studies",
  "Competition design",
];

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        About
      </p>
      <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        A small studio with a long view.
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-6 text-lg leading-8 text-zinc-600 md:col-span-2 dark:text-zinc-400">
          <p>
            Studio Atelier is an architecture and urbanism practice. We work at
            the scale of a room and the scale of a city block, and we believe
            the two are always related.
          </p>
          <p>
            Each project begins with the specifics of its place — light,
            climate, ground, and the people who will use it — and grows from
            there. We favour durable materials, generous daylight, and plans
            that age gracefully.
          </p>
          <p>
            This is a placeholder biography. Replace it with the studio&apos;s
            real story, team, awards, and press.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
