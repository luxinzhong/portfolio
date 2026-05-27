"use client";

import { useEffect } from "react";

export default function NoRightClick() {
  useEffect(() => {
    const block = (e: MouseEvent) => {
      const target = e.target as Element;
      // Block if the target is an image or contains/is wrapped by one
      if (
        target instanceof HTMLImageElement ||
        target.closest("img") ||
        target.querySelector("img")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", block);
    return () => document.removeEventListener("contextmenu", block);
  }, []);
  return null;
}
