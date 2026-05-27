"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/visitors", label: "Visitors" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          onClick={pathname === "/" ? () => window.location.reload() : undefined}
          className="text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Lucy Zhong
        </Link>
        <nav className="flex gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
