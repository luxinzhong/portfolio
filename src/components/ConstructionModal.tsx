"use client";

import { useState, useEffect } from "react";

export default function ConstructionModal() {
  const [open, setOpen] = useState(false);

  function dismiss() {
    localStorage.setItem("construction-notice-seen", "1");
    setOpen(false);
  }

  useEffect(() => {
    if (!localStorage.getItem("construction-notice-seen")) {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative mx-6 max-w-sm border border-black/10 bg-background px-10 py-10 text-center shadow-xl dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Notice
        </p>
        <p className="mt-4 text-lg font-semibold leading-snug tracking-tight">
          This website is in construction.
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Check back in the future for more!
        </p>
        <button
          onClick={dismiss}
          className="mt-8 border border-black/15 px-6 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-zinc-800"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
