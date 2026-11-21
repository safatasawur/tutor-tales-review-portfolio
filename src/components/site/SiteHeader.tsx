import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOK_LESSON_URL } from "@/data/siteData";
import { cn } from "@/lib/utils";

type NavItem =
  | { label: string; kind: "section"; hash: string }
  | { label: string; kind: "page"; to: "/reviews" };

const NAV: NavItem[] = [
  { label: "Home", kind: "section", hash: "top" },
  { label: "What I Teach", kind: "section", hash: "what-i-teach" },
  { label: "Reviews", kind: "page", to: "/reviews" },
  { label: "About Me", kind: "section", hash: "about" },
];

function NavLinks({ onNavigate, mobile }: { onNavigate?: () => void; mobile?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = mobile
    ? "block rounded-xl border-2 border-transparent px-4 py-3 font-display text-2xl font-semibold hover:border-ink hover:bg-pink-mist"
    : "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-pink-soft";

  return (
    <>
      {NAV.map((item) =>
        item.kind === "page" ? (
          <Link
            key={item.label}
            to={item.to}
            onClick={onNavigate}
            className={cn(base, pathname === item.to && (mobile ? "border-ink bg-pink-soft" : "bg-pink-soft"))}
            aria-current={pathname === item.to ? "page" : undefined}
          >
            {item.label}
          </Link>
        ) : (
          <Link key={item.label} to="/" hash={item.hash} onClick={onNavigate} className={base}>
            {item.label}
          </Link>
        ),
      )}
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" hash="top" className="font-display text-3xl font-extrabold tracking-tight" aria-label="Safa — home">
          Safa<span className="text-pink">.</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="pink" size="default" className="hidden h-10 px-5 sm:inline-flex">
            <a href={BOOK_LESSON_URL} target="_blank" rel="noopener noreferrer">
              Book a Lesson <ArrowUpRight aria-hidden="true" />
              <span className="sr-only">(opens Preply in a new tab)</span>
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-ink bg-paper shadow-ink-sm md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t-2 border-ink bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              <NavLinks mobile onNavigate={() => setOpen(false)} />
              <Button asChild variant="pink" size="lg" className="mt-3">
                <a href={BOOK_LESSON_URL} target="_blank" rel="noopener noreferrer">
                  Book a Lesson <ArrowUpRight aria-hidden="true" />
                  <span className="sr-only">(opens Preply in a new tab)</span>
                </a>
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
