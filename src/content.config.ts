import { defineCollection, z } from "astro:content";

const lessonSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  moduleId: z.string(),
  title: z.string(),
  slug: z.string(),
  lessonNumber: z.number().int().positive(),
  readingMinutes: z.number().int().positive(),
  level: z.string(),
  concepts: z.array(z.string()),
  components: z.array(z.string()),
  learningObjectives: z.array(z.string()),
  failureModes: z.array(z.string()),
  exercises: z.array(z.string()),
  checklist: z.array(z.string()),
  previousLesson: z.string().nullable(),
  nextLesson: z.string().nullable(),
  glossaryTerms: z.array(z.string()).optional(),
  formulas: z
    .array(
      z.object({
        label: z.string(),
        value: z.string()
      })
    )
    .optional()
});

const moduleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  lessonIds: z.array(z.string()),
  learningGoals: z.array(z.string())
});

const trackSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string()
});

const labSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  status: z.enum(["planned", "draft", "published"])
});

const courseStatsSchema = z.object({
  moduleCount: z.number().int().nonnegative(),
  lessonCount: z.number().int().nonnegative(),
  labCount: z.number().int().nonnegative(),
  glossaryTermCount: z.number().int().nonnegative()
});

const courses = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    subtitle: z.string(),
    category: z.string(),
    secondaryCategories: z.array(z.string()).default([]),
    level: z.enum(["foundation", "intermediate", "advanced"]),
    status: z.enum(["placeholder", "planned", "draft", "published", "archived"]),
    language: z.string(),
    estimatedReadingMinutes: z.number().int().positive(),
    minimumWordCount: z.number().int().positive(),
    targetPersonas: z.array(z.string()),
    corePromise: z.string(),
    whyThisCourseExists: z.string(),
    enemy: z.string(),
    audience: z.string(),
    prerequisites: z.array(z.string()),
    courseStats: courseStatsSchema,
    tracks: z.array(trackSchema),
    modules: z.array(moduleSchema),
    lessons: z.array(lessonSchema),
    labs: z.array(labSchema),
    glossaryTerms: z.array(z.string()),
    createdAt: z.string(),
    updatedAt: z.string()
  })
});

const frameworks = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    type: z.enum(["framework", "model", "checklist"]),
    status: z.enum(["placeholder", "planned", "draft", "published", "archived"]),
    relatedCategories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    createdAt: z.string(),
    updatedAt: z.string()
  })
});

const glossary = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    term: z.string(),
    summary: z.string(),
    aliases: z.array(z.string()).default([]),
    category: z.string().default("general"),
    status: z.enum(["placeholder", "planned", "draft", "published", "archived"]),
    createdAt: z.string(),
    updatedAt: z.string()
  })
});

const courseLessons = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    courseId: z.string(),
    courseSlug: z.string(),
    lessonId: z.string(),
    moduleId: z.string(),
    title: z.string(),
    slug: z.string(),
    lessonNumber: z.number().int().positive(),
    readingMinutes: z.number().int().positive(),
    status: z.enum(["draft", "published", "archived"]),
    createdAt: z.string(),
    updatedAt: z.string()
  })
});

export const collections = {
  courses,
  frameworks,
  glossary,
  courseLessons
};
