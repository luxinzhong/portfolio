"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { imgSrc } from "@/lib/imgSrc";

type HeroItem =
  | { type: "image"; src: string; alt: string }
  | { type: "carousel" };

const armatureImages = [
  "/images/projects/boning-chainmail/cover.jpg",
  "/images/projects/boning-chainmail/07.jpg",
  "/images/projects/boning-chainmail/08.jpg",
  "/images/projects/boning-chainmail/09.jpg",
];

const items: HeroItem[] = [
  { type: "image", src: "/images/projects/the-knot/cover.jpg", alt: "The Knot" },
  { type: "image", src: "/images/projects/the-knot/01.jpg", alt: "The Knot" },
  { type: "image", src: "/images/projects/the-knot/03.jpg", alt: "The Knot" },
  { type: "image", src: "/images/projects/the-knot/04.jpg", alt: "The Knot" },
  { type: "image", src: "/images/projects/light-kit-house/cover.jpg", alt: "Light-Kit House" },
  { type: "carousel" },
];

const SESSION_KEY = "hero_queue";

function shuffle(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nextHeroIndex(): number {
  const raw = sessionStorage.getItem(SESSION_KEY);
  let queue: number[] = raw ? JSON.parse(raw) : [];
  if (queue.length === 0) {
    queue = shuffle(Array.from({ length: items.length }, (_, i) => i));
  }
  const idx = queue.shift()!;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(queue));
  return idx;
}

export default function HeroImage() {
  const [item, setItem] = useState<HeroItem>(items[0]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItem(items[nextHeroIndex()]);
    setReady(true);
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = ""; };
  }, []);

  return (
    <div className={`fixed inset-0 transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}>
      {item.type === "carousel" ? (
        <div className="h-full flex items-center">
          <Carousel images={armatureImages.map(imgSrc)} alt="Armature" />
        </div>
      ) : (
        <Image
          src={imgSrc(item.src)}
          alt={item.alt}
          fill
          className="object-cover"
          unoptimized
          priority
        />
      )}
      {/* Footer overlay */}
      <div className={`absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 py-6 text-sm ${item.type === "carousel" ? "text-zinc-500" : "text-white/80"}`}>
        <a
          href="mailto:luxin_zhong@hotmail.com"
          className={`transition-colors ${item.type === "carousel" ? "hover:text-zinc-800" : "hover:text-white"}`}
        >
          luxin_zhong@hotmail.com
        </a>
        <span>© {new Date().getFullYear()} Lucy Zhong. All rights reserved.</span>
      </div>
    </div>
  );
}
