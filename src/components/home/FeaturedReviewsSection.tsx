import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ReviewCard } from "@/components/site/ReviewCard";
import { getFeaturedReviews, reviews } from "@/data/reviewsData";

export function FeaturedReviewsSection() {
  const featured = getFeaturedReviews();

  return (
    <section id="featured-reviews" className="scroll-mt-20 border-b-2 border-ink bg-pink-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-ink-soft">Student reviews</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            What students &amp; parents <span className="highlight-pink">say.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((r, i) => (
            <Reveal key={r.id} index={i} className="h-full">
              <ReviewCard review={r} tone={i === 1 ? "pink" : "paper"} {...(r.featuredTopic ? { topic: r.featuredTopic } : {})} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-3 text-center">
          <Button asChild variant="ink" size="xl">
            <Link to="/reviews">
              View All Student Reviews <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <p className="text-sm text-ink-soft">All {reviews.length} reviews, in full, right here on this site.</p>
        </Reveal>
      </div>
    </section>
  );
}
