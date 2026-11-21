import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote } from "lucide-react";
import { StarRating } from "./StarRating";
import { formatReviewDate, type Review } from "@/data/reviewsData";
import { cn } from "@/lib/utils";

/** Reviews longer than this show a marked preview with a Read more toggle. */
const PREVIEW_CHAR_LIMIT = 420;
const COLLAPSED_HEIGHT = "12rem";

interface ReviewCardProps {
  review: Review;
  tone?: "paper" | "pink";
  topic?: string;
  className?: string;
}

export function ReviewCard({ review, tone = "paper", topic, className }: ReviewCardProps) {
  const isLong = review.reviewText.length > PREVIEW_CHAR_LIMIT;
  const [expanded, setExpanded] = useState(false);
  const textId = useId();

  return (
    <article
      className={cn(
        "card-ink lift relative flex h-full flex-col p-6 sm:p-7",
        tone === "pink" ? "bg-pink-soft" : "bg-paper",
        className,
      )}
    >
      <Quote
        aria-hidden="true"
        className={cn(
          "absolute -top-5 right-6 size-11 rounded-full border-2 border-ink p-2.5 shadow-ink-sm",
          tone === "pink" ? "bg-paper fill-pink stroke-ink" : "bg-pink fill-ink stroke-ink",
        )}
      />

      {topic ? <p className="eyebrow mb-4 text-ink-soft">{topic}</p> : null}

      {typeof review.rating === "number" ? <StarRating rating={review.rating} className="mb-4" /> : null}

      <div className="relative flex-1">
        <motion.div
          id={textId}
          initial={false}
          animate={{ height: !isLong || expanded ? "auto" : COLLAPSED_HEIGHT }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <blockquote className="whitespace-pre-line text-[0.98rem] leading-relaxed text-ink">
            {review.reviewText}
          </blockquote>
        </motion.div>
        <AnimatePresence>
          {isLong && !expanded ? (
            <motion.div
              key="fade"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent",
                tone === "pink" ? "from-pink-soft" : "from-paper",
              )}
            />
          ) : null}
        </AnimatePresence>
      </div>

      {isLong ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={textId}
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 self-start font-mono text-xs font-semibold uppercase tracking-widest text-ink underline decoration-pink decoration-2 underline-offset-4 hover:decoration-ink"
        >
          {expanded ? "Read less" : "Read more — excerpt shown"}
        </button>
      ) : null}

      <footer className="mt-6 flex items-end justify-between gap-3 border-t-2 border-dashed border-ink/25 pt-4">
        <div className="min-w-0">
          <p className="truncate font-display text-lg font-semibold">{review.reviewerName}</p>
          <p className="text-sm text-muted-foreground">
            <time dateTime={review.date}>{formatReviewDate(review.date)}</time>
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <a
            href={review.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider hover:bg-pink"
          >
            Preply Review<span className="sr-only"> (opens in a new tab)</span>
          </a>
          {review.translatedByPreply ? (
            <span className="text-[0.7rem] text-muted-foreground">English translation by Preply</span>
          ) : null}
        </div>
      </footer>
    </article>
  );
}
