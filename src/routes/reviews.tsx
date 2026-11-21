import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";
import { ReviewCard } from "@/components/site/ReviewCard";
import { StarRating } from "@/components/site/StarRating";
import { ExternalPreplyButton } from "@/components/site/ExternalPreplyButton";
import { getAverageRating, reviews } from "@/data/reviewsData";

const title = "Student Reviews — Safa, Computer Science Tutor";
const description =
  "Read every student and parent review of Safa's Computer Science and programming lessons, copied in full from her Preply profile.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

const HEADING_WORDS = ["Kind", "Words", "From", "My", "Students."];
const ease = [0.22, 1, 0.36, 1] as const;

function ReviewsPage() {
  const rating = getAverageRating();
  const count = reviews.length;

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink">
        <div className="bg-dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1.5"
          >
            <span className="size-2 rounded-full bg-pink" aria-hidden="true" /> Student reviews
          </motion.p>

          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
            {HEADING_WORDS.map((word, i) => (
              <span key={word} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom last:mr-0">
                <motion.span
                  className={i === HEADING_WORDS.length - 1 ? "highlight-pink inline-block" : "inline-block"}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.75, ease, delay: 0.1 + i * 0.08 }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="max-w-2xl text-lg leading-relaxed text-ink-soft"
            >
              Nothing makes me happier than seeing students gain confidence, understand challenging concepts, and
              discover what they're capable of. Here's what students and parents have shared about learning with me.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 1.5 }}
              transition={{ duration: 0.7, ease, delay: 0.6 }}
              className="card-ink flex items-center gap-6 bg-pink px-7 py-5 shadow-ink-lg"
            >
              <div>
                <p className="font-display text-5xl font-extrabold leading-none">
                  {rating !== null ? rating.toFixed(1) : "—"}
                  <span className="text-2xl">/5</span>
                </p>
                {rating !== null ? <StarRating rating={rating} onPink className="mt-2" /> : null}
              </div>
              <div className="border-l-2 border-ink pl-6">
                <p className="font-display text-2xl font-bold leading-tight">{count} student reviews</p>
                <p className="mt-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wider">
                  Reviews shared on Preply
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-label="All reviews" className="bg-pink-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.id} index={i % 3} stagger={0.1} className="h-full">
                <ReviewCard review={r} tone={i % 2 === 1 ? "pink" : "paper"} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink">
        <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-28">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Want to See Where These Reviews Come From?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            All testimonials are shared by students and parents on my Preply tutoring profile.
          </p>
          <div className="mt-10 flex justify-center">
            <ExternalPreplyButton label="View Original Reviews on Preply" variant="pink" size="xl" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
