import { Lightbulb, Footprints, Code2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const principles = [
  {
    icon: Lightbulb,
    title: "Real-world examples",
    text: "Abstract ideas become concrete when they connect to things you already know. Every concept gets an example that makes sense.",
  },
  {
    icon: Footprints,
    title: "Your own pace",
    text: "We work through problems step by step, at the speed that's right for you — no rushing, and no question is too small.",
  },
  {
    icon: Code2,
    title: "From logic to code",
    text: "You learn to build a logical solution first, then turn it into clean, working code — the skill exams and projects really test.",
  },
];

export function PhilosophySection() {
  return (
    <section className="border-b-2 border-ink bg-pink-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-ink-soft">My teaching approach</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Complex topics, explained <span className="highlight-pink">simply</span> — so you can approach any
            question with confidence.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} index={i}>
              <div className="card-ink lift h-full bg-paper p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl border-2 border-ink bg-pink">
                  <p.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
