"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { photos } from "@/data/photos";
import { imgSrc } from "@/lib/imgSrc";

export default function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i !== null ? (i + 1) % photos.length : null)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  if (photos.length === 0) {
    return (
      <p className="py-40 text-center text-sm text-zinc-500">
        No photos yet — drop images into{" "}
        <code className="font-mono">/public/images/photography/</code> and add
        entries to{" "}
        <code className="font-mono">src/data/photos.ts</code>.
      </p>
    );
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            className="mb-4 block w-full break-inside-avoid overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            onClick={() => setActive(i)}
          >
            <Image
              src={imgSrc(`/images/photography/${photo.src}`)}
              alt={photo.alt}
              width={0}
              height={0}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-auto w-full transition-opacity duration-300 hover:opacity-85"
              unoptimized
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute right-5 top-5 p-2 text-white/50 transition-colors hover:text-white"
            onClick={close}
            aria-label="Close"
          >
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
              <path d="M4 4l10 10M14 4 4 14" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 p-3 text-white/50 transition-colors hover:text-white"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 17 8 11l6-6" />
            </svg>
          </button>

          {/* Image */}
          <div className="px-14" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc(`/images/photography/${photos[active].src}`)}
              alt={photos[active].alt}
              className="max-h-[88vh] max-w-[80vw] object-contain"
            />
            {(photos[active].location || photos[active].year) && (
              <p className="mt-3 text-center text-xs tracking-wide text-white/40">
                {[photos[active].location, photos[active].year]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
          </div>

          {/* Next */}
          <button
            className="absolute right-4 p-3 text-white/50 transition-colors hover:text-white"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 17l6-6-6-6" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/30 tabular-nums">
            {active + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
