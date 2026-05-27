"use client";

import dynamic from "next/dynamic";

const GeoVisitorMap = dynamic(() => import("@/components/GeoVisitorMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] animate-pulse rounded-xl bg-zinc-900/50" />
  ),
});

export default function GeoVisitorMapClient() {
  return <GeoVisitorMap />;
}
