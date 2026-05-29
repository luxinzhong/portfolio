"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "grid";

const SIZE = 110;

export default function CustomCursor() {
  const crosshairRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<CursorMode>("default");
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const crosshair = crosshairRef.current;
    const grid = gridRef.current;
    if (!crosshair || !grid) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      crosshair.style.transform = `translate(${x}px, ${y}px)`;
      grid.style.transform = `translate(${x}px, ${y}px)`;

      const el = e.target as Element;
      const newMode: CursorMode = el.closest("img, [data-cursor='View →']") ? "grid" : "default";
      if (newMode !== modeRef.current) {
        modeRef.current = newMode;
        setMode(newMode);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* Crosshair */}
      <div
        ref={crosshairRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          opacity: visible && mode === "default" ? 1 : 0,
          transition: "opacity 0.15s",
        }}
      >
        <div style={{ position: "absolute", top: -8, left: -0.5, width: 1, height: 16, background: "currentColor" }} />
        <div style={{ position: "absolute", left: -8, top: -0.5, height: 1, width: 16, background: "currentColor" }} />
      </div>

      {/* Grid circle */}
      <div
        ref={gridRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: SIZE,
          height: SIZE,
          marginTop: -SIZE / 2,
          marginLeft: -SIZE / 2,
          borderRadius: "50%",
          border: "1px solid currentColor",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          opacity: visible && mode === "grid" ? 1 : 0,
          transition: "opacity 0.2s",
          backgroundImage: [
            "linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "14px 14px",
        }}
      />
    </>
  );
}
