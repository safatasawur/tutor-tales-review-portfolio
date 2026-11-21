import { describe, expect, it } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { getAverageRating, getFeaturedReviews, reviews, PREPLY_PROFILE_URL } from "@/data/reviewsData";

describe("student reviews", () => {
  it("homepage shows exactly three featured reviews", () => {
    expect(getFeaturedReviews()).toHaveLength(3);
  });

  it("never shows more than three featured reviews even if more are marked", () => {
    const allFeatured = reviews.map((r) => ({ ...r, featured: true }));
    expect(getFeaturedReviews(allFeatured)).toHaveLength(3);
  });

  it("contains all 19 verified Preply reviews with unique ids", () => {
    expect(reviews).toHaveLength(19);
    expect(new Set(reviews.map((r) => r.id)).size).toBe(19);
  });

  it("overall rating is 5.0", () => {
    expect(getAverageRating()).toBe(5);
  });

  it("every review links back to Safa's Preply profile", () => {
    expect(PREPLY_PROFILE_URL).toBe("https://preply.com/en/tutor/5668377");
    for (const r of reviews) expect(r.sourceUrl).toBe("https://preply.com/en/tutor/5668377");
  });

  it("/reviews is its own page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/reviews").at(-1)?.routeId).toBe("/reviews");
  });
});
