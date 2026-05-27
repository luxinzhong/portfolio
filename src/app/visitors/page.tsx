import type { Metadata } from "next";
import GeoVisitorMapClient from "@/components/GeoVisitorMapClient";

export const metadata: Metadata = {
  title: "Visitors — Lucy Zhong",
  description: "Anonymous visitor locations for Lucy Zhong's architecture portfolio.",
};

export default function VisitorsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Visitors
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Hello, World.
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Anonymous visitor locations — no personal data is stored.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl bg-zinc-950 p-4 ring-1 ring-white/5">
        <GeoVisitorMapClient />
      </div>
    </section>
  );
}
