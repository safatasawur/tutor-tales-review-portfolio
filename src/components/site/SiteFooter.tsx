import { Link } from "@tanstack/react-router";
import { PREPLY_PROFILE_URL } from "@/data/siteData";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl font-extrabold">
            Safa<span className="text-pink">.</span>
          </p>
          <p className="mt-2 max-w-sm text-paper/70">
            Computer Science &amp; programming tutor. Lessons are booked through Preply.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          <Link to="/" hash="top" className="hover:text-pink">Home</Link>
          <Link to="/" hash="what-i-teach" className="hover:text-pink">What I Teach</Link>
          <Link to="/reviews" className="hover:text-pink">Reviews</Link>
          <Link to="/" hash="about" className="hover:text-pink">About Me</Link>
          <a href={PREPLY_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink">
            Preply profile ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-5 py-5 font-mono text-xs text-paper/50 sm:px-8">
          © {new Date().getFullYear()} Safa · Reviews are copied from Preply and are not synced live.
        </p>
      </div>
    </footer>
  );
}
