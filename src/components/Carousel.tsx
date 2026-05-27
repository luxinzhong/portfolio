"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const DURATION = 450; // ms — must match CSS transition
const BUFFER   = 3;   // full loops rendered on each side for preloading

export default function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const n = images.length;

  // slides = [2 full pre-loops] + [real loop] + [2 full post-loops]  → 5n slides total
  const slides = [
    ...[...Array(BUFFER)].flatMap(() => images),
    ...images,
    ...[...Array(BUFFER)].flatMap(() => images),
  ];
  const totalSlides = slides.length; // n * (2*BUFFER + 1)

  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef     = useRef<HTMLDivElement>(null);
  const jumpTimer    = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const [cw, setCw]       = useState(0);
  const [sw, setSw]       = useState(0);
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(n * BUFFER); // start at first real slide
  const [anim,  setAnim]  = useState(true);
  const [drag,  setDrag]  = useState(0);
  const dragStartX        = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const measure = () => {
      setAnim(false);
      setCw(containerRef.current?.clientWidth ?? 0);
      setSw(slideRef.current?.clientWidth ?? 0);
      setReady(true);
      requestAnimationFrame(() => setAnim(true));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const GAP    = 20;
  const step   = sw + GAP;
  const trackX = sw > 0 ? (cw - sw) / 2 - index * step + drag : 0;

  const goTo = useCallback((i: number, animate = true) => {
    clearTimeout(jumpTimer.current);
    setAnim(animate);
    setIndex(i);
    setDrag(0);

    // If we've entered the outer buffer zone (< n from either edge),
    // silently jump by n after the animation to stay centred in the buffer.
    if (animate) {
      let jumpTo: number | null = null;
      if (i < n)                  jumpTo = i + n;
      else if (i >= totalSlides - n) jumpTo = i - n;

      if (jumpTo !== null) {
        jumpTimer.current = setTimeout(() => {
          setAnim(false);
          setIndex(jumpTo!);
          requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
        }, DURATION / 2);
      }
    }
  }, [n, totalSlides]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    setDragging(true);
    setAnim(false);
    clearTimeout(jumpTimer.current);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    setDrag(e.clientX - dragStartX.current);
  };

  const onRelease = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    dragStartX.current = null;
    setDragging(false);
    setAnim(true);
    if (Math.abs(dx) > step * 0.2) {
      goTo(dx < 0 ? index + 1 : index - 1);
    } else {
      setDrag(0);
    }
  };

  // Dot highlight: which real image is currently shown
  const realIdx = index % n;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-white select-none py-10 transition-opacity duration-300 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
      style={{ cursor: dragging ? "grabbing" : "grab", touchAction: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onRelease}
      onPointerCancel={onRelease}
    >
      {/* Track */}
      <div
        className="flex items-center"
        style={{
          gap: `${GAP}px`,
          transform: `translateX(${trackX}px)`,
          transition: anim
            ? `transform ${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
            : "none",
          willChange: "transform",
          userSelect: "none",
        }}
      >
        {slides.map((src, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              ref={i === 0 ? slideRef : undefined}
              className="flex-shrink-0 relative overflow-hidden"
              style={{
                width: "min(62vw, 420px)",
                aspectRatio: "3 / 4",
                opacity: active ? 1 : 0.4,
                transform: active ? "scale(1)" : "scale(0.93)",
                transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
              }}
            >
              <Image
                src={src}
                alt={`${alt} — view ${i % n + 1}`}
                fill
                className="object-cover"
                draggable={false}
                unoptimized
                loading="eager"
              />
            </div>
          );
        })}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => goTo(index - 1)}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/10 px-3 py-2 text-sm text-zinc-700 backdrop-blur-sm transition hover:bg-black/20"
      >
        ←
      </button>
      <button
        onClick={() => goTo(index + 1)}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/10 px-3 py-2 text-sm text-zinc-700 backdrop-blur-sm transition hover:bg-black/20"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(n * BUFFER + i)}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === realIdx ? "w-5 bg-zinc-600" : "w-1.5 bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
