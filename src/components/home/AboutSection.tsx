import { Reveal } from "@/components/site/Reveal";
import { ExternalPreplyButton } from "@/components/site/ExternalPreplyButton";
import portrait from "@/assets/safa-portrait.jpg.asset.json";

const languages = [
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
  { name: "English", level: "Advanced C1" },
  { name: "Arabic", level: "Beginner A1" },
  { name: "Turkish", level: "Beginner A1" },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-b-2 border-ink">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-ink bg-pink" aria-hidden="true" />
            <img
              src={portrait.url}
              alt="Portrait of Safa, Computer Science tutor"
              width={320}
              height={320}
              loading="lazy"
              className="relative aspect-square w-full rounded-[2rem] border-2 border-ink object-cover"
            />
            <p className="card-ink absolute -bottom-5 -right-3 bg-paper px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider">
              Computer Engineering student
            </p>
          </div>
        </Reveal>

        <Reveal index={1}>
          <p className="eyebrow text-ink-soft">About me</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">Hi! I'm Safa.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              I'm a Computer Engineering student and Computer Science tutor with 3 years of teaching experience.
              In 2024 I also worked as a computer lab assistant at Fauji College, Mirpur AK.
            </p>
            <p>
              I help students improve their exam performance, master programming fundamentals, strengthen their
              problem-solving and coding skills — and approach assignments, projects and exam questions with
              confidence.
            </p>
          </div>

          <div className="mt-8">
            <p className="eyebrow text-ink-soft">I speak</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {languages.map((l) => (
                <li key={l.name} className="rounded-full border-2 border-ink bg-pink-mist px-3 py-1 text-sm">
                  <span className="font-semibold">{l.name}</span> · {l.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9">
            <ExternalPreplyButton label="View My Preply Profile" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
