"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/projects/the-knot/cover.jpg", alt: "The Knot" },
  { src: "/images/projects/light-kit-house/cover.jpg", alt: "Light-Kit House" },
  { src: "/images/projects/music-box/cover.jpg", alt: "Music Box" },
];

export default function HeroImage() {
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    setImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "100svh" }}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}
