import { PREPLY_PROFILE_URL } from "./reviewsData";

export { PREPLY_PROFILE_URL };
/** Booking happens on Preply — the site has no booking system of its own. */
export const BOOK_LESSON_URL = PREPLY_PROFILE_URL;

export const examBadges = ["IGCSE", "GCSE", "IB", "A-Level", "AP"] as const;

export interface TeachingCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  topics: string[];
}

export const teachingCategories: TeachingCategory[] = [
  {
    id: "exam-prep",
    number: "01",
    title: "Computer Science Exam Preparation",
    summary:
      "Understand your syllabus, strengthen your concepts, practise exam-style questions and walk into your exam prepared.",
    topics: [
      "Cambridge IGCSE & O Level",
      "GCSE (OCR, AQA, Edexcel)",
      "IB Computer Science SL & HL",
      "A-Level Computer Science",
      "AP Computer Science A",
    ],
  },
  {
    id: "university",
    number: "02",
    title: "University-Level Computer Science",
    summary:
      "Core university courses explained step by step, so assignments, projects and exams stop feeling overwhelming.",
    topics: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Databases & SQL",
      "Software Engineering",
      "Other core CS courses",
    ],
  },
  {
    id: "programming",
    number: "03",
    title: "Programming & Web Development",
    summary:
      "Learn programming fundamentals, problem-solving and practical projects — from your first loop to your first React app.",
    topics: ["Python", "C", "C++", "Java", "HTML & CSS", "JavaScript", "React"],
  },
];

export interface SubjectDetail {
  id: string;
  label: string;
  description: string;
  topics: string[];
}

/** Subject descriptions follow Safa's own wording on her Preply profile. */
export const subjectDetails: SubjectDetail[] = [
  {
    id: "ib",
    label: "IB Computer Science",
    description:
      "IB Computer Science (SL & HL), covering both the theory and programming side of the course — plus support with your Computer Science IA, from planning and developing the solution to documentation, testing and evaluation.",
    topics: ["Computational thinking", "OOP", "Recursion", "Searching & sorting", "Databases", "Networks", "System fundamentals", "IA support", "Past papers"],
  },
  {
    id: "igcse",
    label: "IGCSE & O Level",
    description:
      "Cambridge IGCSE and O Level Computer Science, explaining difficult topics in a simple and practical way, with exam preparation, past papers and programming practice.",
    topics: ["Programming", "Algorithms", "Data representation", "Computer systems", "Networks", "Databases", "Past papers"],
  },
  {
    id: "gcse",
    label: "GCSE Computer Science",
    description:
      "GCSE Computer Science across the major UK exam boards — AQA, OCR and Pearson Edexcel — with exam preparation, past-paper practice, coursework support and programming help.",
    topics: ["Programming", "Algorithms", "Computational thinking", "Computer systems", "Networks", "Data representation"],
  },
  {
    id: "a-level",
    label: "A-Level Computer Science",
    description:
      "A-Level Computer Science, making challenging topics clear and practical, with exam preparation, past papers, coursework and programming practice.",
    topics: ["Programming", "Algorithms", "Data structures", "Databases", "Computer systems", "Networking", "Problem-solving"],
  },
  {
    id: "ap",
    label: "AP Computer Science A",
    description:
      "AP Computer Science A, focused on Java programming and problem-solving, with coding practice and exam-style questions to prepare for the AP exam.",
    topics: ["Java", "Object-oriented programming", "Algorithms", "Data structures", "Exam-style questions"],
  },
  {
    id: "university-cs",
    label: "University CS",
    description:
      "Core university Computer Science courses, explained step by step and adapted to your course, your assignments and your current level.",
    topics: ["OOP", "Data Structures & Algorithms", "Databases & SQL", "Software Engineering"],
  },
  {
    id: "programming",
    label: "Programming",
    description:
      "C, C++, Java and Python, along with web development using HTML, CSS, JavaScript and React — programming fundamentals, OOP, problem-solving, coding exercises and practical projects at school and university level.",
    topics: ["Python", "C", "C++", "Java", "HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "basics",
    label: "Computer Basics",
    description:
      "A strong foundation for beginners: hardware and software, operating systems, files and storage, internet and networking fundamentals, cybersecurity basics and common computer applications.",
    topics: ["Hardware & software", "Operating systems", "Networking basics", "Cybersecurity basics", "Everyday applications"],
  },
];
