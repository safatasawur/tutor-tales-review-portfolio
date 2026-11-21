import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { TeachingSection } from "@/components/home/TeachingSection";
import { FeaturedReviewsSection } from "@/components/home/FeaturedReviewsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BookingSection } from "@/components/home/BookingSection";

const title = "Safa — Computer Science & Programming Tutor";
const description =
  "Learn Computer Science with Safa: IGCSE, GCSE, IB, A-Level and AP exam prep, university CS, Python, Java, C++ and web development.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <TeachingSection />
      <FeaturedReviewsSection />
      <AboutSection />
      <BookingSection />
    </>
  );
}
