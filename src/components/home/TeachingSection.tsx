import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";
import { examBadges, subjectDetails, teachingCategories } from "@/data/siteData";
import { cn } from "@/lib/utils";

export function TeachingSection() {
  const [activeId, setActiveId] = useState(subjectDetails[0]?.id ?? "");
  const active = subjectDetails.find((s) => s.id === activeId) ?? subjectDetails[0];

  return (
    <section id="what-i-teach" className="scroll-mt-20 border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-ink-soft">What I teach</p>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              From your first line of code to your final exam.
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Exam boards">
            {examBadges.map((b) => (
              <li key={b} className="rounded-full border-2 border-ink bg-ink px-3 py-1 font-mono text-xs font-semibold text-paper">
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {teachingCategories.map((cat, i) => (
            <Reveal key={cat.id} index={i}>
              <article className={cn("card-ink lift flex h-full flex-col p-7", i === 1 ? "bg-pink" : "bg-paper")}>
                <span className="font-mono text-sm font-semibold">{cat.number}</span>
                <h3 className="mt-3 text-2xl font-bold leading-tight">{cat.title}</h3>
                <p className={cn("mt-3 leading-relaxed", i === 1 ? "text-ink" : "text-ink-soft")}>{cat.summary}</p>
                <ul className="mt-6 space-y-2 border-t-2 border-ink pt-5">
                  {cat.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 font-medium">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="text-3xl font-extrabold">Explore a subject</h3>
          <p className="mt-2 text-ink-soft">Choose a subject to see what we can cover together.</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[18rem_1fr]">
            <div role="tablist" aria-label="Subjects" aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {subjectDetails.map((s) => {
                const selected = s.id === active?.id;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={selected}
                    aria-controls="subject-panel"
                    onClick={() => setActiveId(s.id)}
                    className={cn(
                      "shrink-0 rounded-full border-2 border-ink px-4 py-2.5 text-left text-sm font-semibold transition-all lg:rounded-xl",
                      selected ? "bg-ink text-paper shadow-pink" : "bg-paper hover:bg-pink-soft",
                    )}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            <div
              id="subject-panel"
              role="tabpanel"
              aria-labelledby={active ? `tab-${active.id}` : undefined}
              className="card-ink relative min-h-[18rem] overflow-hidden bg-pink-soft p-7 sm:p-9"
            >
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h4 className="text-3xl font-extrabold">{active.label}</h4>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed">{active.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {active.topics.map((t) => (
                        <li key={t} className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-sm font-medium">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
