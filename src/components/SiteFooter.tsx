export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
        <p className="font-semibold uppercase tracking-[0.2em] text-foreground">
          Studio Atelier
        </p>
        <p>
          <a
            href="mailto:luxin_zhong@hotmail.com"
            className="transition-colors hover:text-foreground"
          >
            luxin_zhong@hotmail.com
          </a>
        </p>
        <p>© {new Date().getFullYear()} Studio Atelier. All rights reserved.</p>
      </div>
    </footer>
  );
}
