import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExternalPreplyButton } from "@/components/site/ExternalPreplyButton";
import { BOOK_LESSON_URL, examBadges } from "@/data/siteData";
import { getAverageRating, reviews } from "@/data/reviewsData";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const rating = getAverageRating();
  const stats = [
    { value: rating !== null ? rating.toFixed(1) : "—", label: "review rating" },
    { value: String(reviews.length), label: "student reviews" },
    { value: "850+", label: "lessons taught" },
    { value: "3 yrs", label: "teaching" },
  ];

  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden border-b-2 border-ink">
      <div className="bg-dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="eyebrow inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1.5"
          >
            <span className="size-2 rounded-full bg-pink" aria-hidden="true" /> Computer Science Tutor
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl"
          >
            Hi, I'm Safa. I make Computer Science <span className="highlight-pink">click.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            I'm a Computer Engineering student and Computer Science tutor. I simplify complex concepts with
            real-world examples, guide you through problems at your own pace, and help you turn logical
            solutions into code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.26 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="pink" size="xl">
              <a href={BOOK_LESSON_URL} target="_blank" rel="noopener noreferrer">
                Book a Lesson <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens Preply in a new tab)</span>
              </a>
            </Button>
            <ExternalPreplyButton label="View My Preply Profile" size="xl" />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Exam boards I teach"
          >
            {examBadges.map((b) => (
              <li key={b} className="rounded-full border-2 border-ink bg-pink-soft px-3 py-1 font-mono text-xs font-semibold">
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="relative"
          aria-hidden="true"
        >
          <div className="card-ink overflow-hidden bg-ink shadow-ink-lg">
            <div className="flex items-center gap-2 border-b-2 border-paper/15 px-4 py-3">
              <span className="size-3 rounded-full bg-pink" />
              <span className="size-3 rounded-full bg-paper/80" />
              <span className="size-3 rounded-full bg-paper/30" />
              <span className="ml-3 font-mono text-xs text-paper/60">lesson.py</span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[0.82rem] leading-7 text-paper sm:text-sm">
              <code>
                <span className="text-pink">def</span> lesson(student):{"\n"}
                {"    "}goal = student.tell_me_your_goal(){"\n"}
                {"    "}<span className="text-pink">for</span> topic <span className="text-pink">in</span> goal.syllabus:{"\n"}
                {"        "}explain(topic, examples=<span className="text-pink">"real-world"</span>){"\n"}
                {"        "}practise(topic, pace=student.pace){"\n"}
                {"    "}<span className="text-pink">return</span> student.confidence{"  "}<span className="text-paper/45"># ↑</span>
              </code>
            </pre>
          </div>
          <div className="card-ink absolute -right-3 -top-10 rotate-6 bg-pink px-5 py-3 sm:-right-6">
            <p className="font-display text-3xl font-extrabold leading-none">5.0 ★</p>
            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-wider">on Preply</p>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t-2 border-ink bg-paper">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-ink sm:grid-cols-4 sm:divide-x-2">
          {stats.map((s) => (
            <div key={s.label} className="px-5 py-6 text-center sm:px-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-extrabold sm:text-4xl">{s.value}</span>
                <span className="eyebrow text-ink-soft">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
