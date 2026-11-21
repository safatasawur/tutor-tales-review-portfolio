/**
 * Student reviews shown on the homepage (featured) and on /reviews (all).
 *
 * Every entry below was copied word for word from Safa's public Preply profile:
 * https://preply.com/en/tutor/5668377 — this file is NOT synced with Preply.
 *
 * To add a new review later:
 * 1. Copy the reviewer's name, date and full text exactly as Preply shows them.
 * 2. Add a new object to the `reviews` array (newest first) with a unique `id`.
 * 3. Only add `rating` if you can see the star rating for that review.
 * 4. Set `featured: true` on at most three reviews — those appear on the homepage.
 * Never edit, shorten or rewrite the text of a review.
 */

export const PREPLY_PROFILE_URL = "https://preply.com/en/tutor/5668377";

export interface Review {
  id: string;
  reviewerName: string;
  /** ISO date (YYYY-MM-DD) as published on Preply. */
  date: string;
  /** Star rating out of 5 — include only when verified on Preply. */
  rating?: number;
  /** The complete, original review text. */
  reviewText: string;
  sourceUrl: string;
  featured: boolean;
  /** Short label explaining why this review is featured on the homepage. */
  featuredTopic?: string;
  /** True when Preply displays an English translation of the original review. */
  translatedByPreply?: boolean;
}

export const reviews: Review[] = [
  {
    id: "sarah-2026-09-15",
    reviewerName: "sarah",
    date: "2026-09-15",
    rating: 5,
    reviewText:
      "It's been a couple of months since Sarah started studying coding with Safa, and Alhumdolillah, I am absolutely satisfied with her. For me, Safa is truly sent from Allah.\n\nMy husband and I had almost given up on continuing coding lessons for Sarah, as her previous teacher, from a well-known online coding school, didn't teach her well, leaving Sarah unwilling to study coding at all. I prayed to Allah to help me find the right teacher for my child, and that's how I found Safa.\n\nIt's amazing to see the same child who always looked stressed and unhappy about coding now ready to code whenever asked. She does her homework on her own, and even gets up and logs on for class without needing a reminder. Sarah is happy, Alhumdolillah, and that means the world to me and my family.\nJazakillahu khairan kaseeran, my dear Safa.\n\nLastly, I know this testimony may sound a bit dramatic, but Allah knows how big and positive a difference you have made in our lives. Please keep doing whatever you're doing, it's working perfectly, Masha'Allah. ❤️",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "luyana-2026-08-03",
    reviewerName: "Luyana",
    date: "2026-08-03",
    rating: 5,
    reviewText:
      "Safa is a wonderful teacher and person! I had only two weeks before my final exams, yet we were still able to cover everything I was struggling with and practice it calmly. She is very patient, and when you don’t understand something, she finds alternative ways to explain the concept.",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: true,
    featuredTopic: "Exam preparation",
  },
  {
    id: "malena-2026-08-01",
    reviewerName: "Malena",
    date: "2026-08-01",
    rating: 5,
    reviewText:
      "Safa is a very good teacher, she knows a lot and explains very well! She is great both in organization and content. I highly recommend her!!! :) 10/10",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
    translatedByPreply: true,
  },
  {
    id: "virahn-2026-05-07",
    reviewerName: "Virahn",
    date: "2026-05-07",
    rating: 5,
    reviewText:
      "Safa is an excellent tutor. My daughter picked up lesson with Safa late in the day before an exam, Safa was patient in her approach, but was able to work at pace to cover what was required. Her communication style was excellent, she made the content interesting, relevant and clear. Highly recommend",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "zsofia-2026-04-20",
    reviewerName: "Zsófia",
    date: "2026-04-20",
    rating: 5,
    reviewText:
      "She is the best without exaggeration. I recommend her to every student feeling driven towards computer science. You are promised patience and well-spent time each lesson.",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "umm-2026-04-14",
    reviewerName: "Umm",
    date: "2026-04-14",
    rating: 5,
    reviewText:
      "Great supportive teacher\nAlways communicates clearly asking what the goal are to be met.\nShe is friendly and encourages an easy learning style.\nMy son has felt more confident in his class since starting lessons with Safa.\nGive her a try - you won’t be disappointed",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: true,
    featuredTopic: "Confidence & progress",
  },
  {
    id: "viviane-2026-04-09",
    reviewerName: "Viviane",
    date: "2026-04-09",
    rating: 5,
    reviewText:
      "Great computer science tutor! She explain difficult concepts clearly and are very patient. She step by step guidance really helped me understand programming better and boosted my confidence. Highly recommended!",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: true,
    featuredTopic: "Clear, structured explanations",
  },
  {
    id: "sabrina-2026-03-08",
    reviewerName: "sabrina",
    date: "2026-03-08",
    rating: 5,
    reviewText: "A really good, tutor, lots of patience, very helpful, explains topics very well",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "wish-2026-03-01",
    reviewerName: "wish",
    date: "2026-03-01",
    rating: 5,
    reviewText:
      "i really like how patient she is when shes teaching it makes things way easier to understand and i appreciate that she send the notes after class because it helps a lot with revision. I also like that we practise exam questions together it makes me feel more prepared for exams",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "angela-2026-02-03",
    reviewerName: "Angela",
    date: "2026-02-03",
    rating: 5,
    reviewText: "She is so patient and very attentive",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "mr-2026-02-01",
    reviewerName: "MR",
    date: "2026-02-01",
    rating: 5,
    reviewText: "Very supportive and good creativity of teaching!",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "sameer-2026-01-21",
    reviewerName: "Sameer",
    date: "2026-01-21",
    rating: 5,
    reviewText: "She is a good tutor, who explains very well. She satisfied  all queries. I am fully satisfied.",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "pei-2026-01-16",
    reviewerName: "Pei",
    date: "2026-01-16",
    rating: 5,
    reviewText:
      "Thanks to Safa's clear instructions and lessons, our class are moving fast! Hopefully I can start learning java script soon!",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "tuncay-2025-11-15",
    reviewerName: "Tuncay",
    date: "2025-11-15",
    rating: 5,
    reviewText:
      "Safa has been very helpful and supportive in my learning. She always explain things in a clear and patient way, which makes it easier for me to understand difficult topics. I feel comfortable asking questions because Safa never makes me feel bad for not knowing something. They also take extra time to review my work and give me helpful feedback. Thanks to Safa, I feel more confident in my classes and more motivated to study. Her teaching style is friendly, organized, and easy to follow. I really appreciate her hard work and the positive attitude she bring to every lesson.",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "akin-2025-10-23",
    reviewerName: "Akın",
    date: "2025-10-23",
    rating: 5,
    reviewText:
      "Safa is a patient teacher. Even though I'm a beginner, I'm learning a lot from her. I definitely recommend.",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "aryam-2025-09-21",
    reviewerName: "Aryam",
    date: "2025-09-21",
    rating: 5,
    reviewText:
      "She is a very effective teacher. She understands the subject well and explains it in a way that makes it easy to learn. She is quick and clear in delivering the information.",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "daniel-2025-08-19",
    reviewerName: "Daniel",
    date: "2025-08-19",
    rating: 5,
    reviewText:
      "The thing I liked most about the lecture is that it helped me learn a lot - and only the most relevant things. The fundamental concepts were explained in a fresh and interesting way, often in slightly new contexts, which I really appreciated because it felt like gaining real new insights.\n\nThese insights came at a high pace throughout the lecture. I genuinely felt like I was learning something new and that I’d be able to recall and apply it later thanks to your teaching style. You made the material engaging with accurate, on-point explanations and were able to simplify more complicated topics effectively.\n\nThere’s also great passion in your teaching. I felt that you truly care about your students’ progress. You managed to keep me more engaged than usual by making the content genuinely interesting.\n\nI tried to think of what could be improved, but nothing came to mind. To me, this teaching style is perfect. You present and code everything with great accuracy and show deep knowledge and expertise. I feel truly taken seriously as a learner.",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "somayyeh-2025-08-11",
    reviewerName: "Somayyeh",
    date: "2025-08-11",
    rating: 5,
    reviewText:
      "Ms. Safa is one of the most brilliant minded computer teachers! On the first session, my daughter was quite challenged. However, she eventually was able to stabilize because of Ms. Safa's gentleness, patience and mindfulness as computing became one of her favorite subjects!",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
  {
    id: "mert-2025-07-18",
    reviewerName: "mert",
    date: "2025-07-18",
    rating: 5,
    reviewText:
      "I took Python classes with Miss Safa, and she’s an amazing teacher! She explains both basic and advanced concepts in a simple, clear way. Her teaching style is very effective and easy to follow. Highly recommended for anyone looking to learn Python!",
    sourceUrl: PREPLY_PROFILE_URL,
    featured: false,
  },
];

/** The homepage shows at most three featured reviews. */
export const MAX_FEATURED_REVIEWS = 3;

export function getFeaturedReviews(list: Review[] = reviews): Review[] {
  return list.filter((r) => r.featured).slice(0, MAX_FEATURED_REVIEWS);
}

/** Average of verified star ratings, rounded to one decimal; null when none are verified. */
export function getAverageRating(list: Review[] = reviews): number | null {
  const rated = list.filter((r): r is Review & { rating: number } => typeof r.rating === "number");
  if (rated.length === 0) return null;
  const avg = rated.reduce((sum, r) => sum + r.rating, 0) / rated.length;
  return Math.round(avg * 10) / 10;
}

export function formatReviewDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
