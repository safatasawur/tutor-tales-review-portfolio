import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ExternalPreplyButton } from "@/components/site/ExternalPreplyButton";
import { BOOK_LESSON_URL } from "@/data/siteData";

export function BookingSection() {
  return (
    <section id="book" className="scroll-mt-20 bg-pink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="card-ink mx-auto max-w-4xl bg-paper p-8 text-center shadow-ink-lg sm:p-14">
          <p className="eyebrow text-ink-soft">Ready when you are</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
            Let's make a plan that <span className="highlight-pink">works for you.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Book a trial lesson, tell me what you're working towards and where you need help, and we'll create a
            learning plan together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="pink" size="xl">
              <a href={BOOK_LESSON_URL} target="_blank" rel="noopener noreferrer">
                Book a Lesson <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens Preply in a new tab)</span>
              </a>
            </Button>
            <ExternalPreplyButton label="View My Preply Profile" size="xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
