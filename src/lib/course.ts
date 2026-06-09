import type {
  CourseCatalogItem,
  CourseData,
  CourseDurationBucket,
  CourseLesson,
  CourseModule,
  CourseRoadmapEntry
} from "../types";
import { defaultLocale, localizedPath, type AppLocale } from "../i18n/config";
import { getCategories, getDictionary } from "../i18n/ui";

const categoryNamesByEnglishName: Record<string, string> = {
  "Market Intelligence": "market-intelligence",
  "Probability & Modeling": "probability-modeling",
  "AI Prediction Systems": "ai-prediction-systems",
  "Football Research": "football-research",
  "Prediction Markets & On-chain": "prediction-markets-on-chain",
  "Risk & Execution": "risk-execution"
};

export function getCourseHref(courseSlug: string, locale: AppLocale = defaultLocale) {
  return localizedPath(locale, `/courses/${courseSlug}/`);
}

export function getLessonHref(courseSlug: string, lessonSlug: string, locale: AppLocale = defaultLocale) {
  return localizedPath(locale, `/courses/${courseSlug}/lessons/${lessonSlug}/`);
}

export function getFirstLesson(course: CourseData) {
  return [...course.lessons].sort((a, b) => a.lessonNumber - b.lessonNumber)[0];
}

export function getLessonById(course: CourseData, lessonId: string | null) {
  if (!lessonId) {
    return null;
  }

  return course.lessons.find((lesson) => lesson.id === lessonId) ?? null;
}

export function getLessonBySlug(course: CourseData, lessonSlug: string) {
  return course.lessons.find((lesson) => lesson.slug === lessonSlug) ?? null;
}

export function getModuleById(course: CourseData, moduleId: string) {
  return course.modules.find((module) => module.id === moduleId) ?? null;
}

export function getLessonsForModule(course: CourseData, module: CourseModule) {
  return module.lessonIds
    .map((lessonId) => getLessonById(course, lessonId))
    .filter((lesson): lesson is CourseLesson => lesson !== null);
}

export function getRelatedLessons(course: CourseData, lesson: CourseLesson) {
  const siblingLessons = course.lessons.filter(
    (candidate) => candidate.moduleId === lesson.moduleId && candidate.id !== lesson.id
  );

  if (siblingLessons.length > 0) {
    return siblingLessons.slice(0, 2);
  }

  return course.lessons.filter((candidate) => candidate.id !== lesson.id).slice(0, 2);
}

export function formatGlossaryTerm(term: string) {
  return term
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatLevel(level: CourseData["level"] | string, locale: AppLocale = defaultLocale) {
  const map = getDictionary(locale).shared.courseLevels;

  return map[level as keyof typeof map] ?? level;
}

export function formatDuration(minutes: number, locale: AppLocale = defaultLocale) {
  const minutesLabel = getDictionary(locale).shared.minutes;
  const hours = minutes / 60;
  const wholeHours = Math.floor(hours);
  const remainingMinutes = Math.round((hours - wholeHours) * 60);

  if (wholeHours === 0) {
    return `${remainingMinutes} ${minutesLabel}`;
  }

  if (remainingMinutes === 0) {
    return `${wholeHours}h`;
  }

  return `${wholeHours}h ${remainingMinutes}${minutesLabel}`;
}

export function getDurationBucket(minutes: number): CourseDurationBucket {
  const hours = minutes / 60;

  if (hours < 5) {
    return "under-5";
  }

  if (hours < 10) {
    return "5-10";
  }

  if (hours < 20) {
    return "10-20";
  }

  return "20-plus";
}

export function formatDurationBucket(bucket: CourseDurationBucket, locale: AppLocale = defaultLocale) {
  const map = getDictionary(locale).shared.durationBuckets;

  return map[bucket];
}

export function formatCourseStatus(
  status: CourseData["status"] | CourseRoadmapEntry["status"],
  locale: AppLocale = defaultLocale
) {
  const map = getDictionary(locale).shared.courseStatus;

  return map[status] ?? status;
}

export function formatCategoryName(category: string, locale: AppLocale = defaultLocale) {
  const localizedCategories = getCategories(locale);
  const categorySlug = categoryNamesByEnglishName[category] ?? category;
  return localizedCategories.find((item) => item.slug === categorySlug)?.name ?? category;
}

export function getCategorySlug(category: string) {
  return categoryNamesByEnglishName[category] ?? category;
}

export function createCatalogItemFromCourse(course: CourseData, locale: AppLocale = defaultLocale): CourseCatalogItem {
  return {
    id: course.id,
    title: course.title,
    summary: course.subtitle,
    category: getCategorySlug(course.category),
    level: course.level,
    status: course.status,
    estimatedReadingMinutes: course.estimatedReadingMinutes,
    durationBucket: getDurationBucket(course.estimatedReadingMinutes),
    href: getCourseHref(course.slug, locale),
    note: getDictionary(locale).catalogCard.publishedNote,
    focus: course.corePromise,
    moduleCount: course.courseStats.moduleCount,
    lessonCount: course.courseStats.lessonCount
  };
}

export function createCatalogItemFromRoadmap(entry: CourseRoadmapEntry): CourseCatalogItem {
  return {
    id: entry.id,
    title: entry.title,
    summary: entry.summary,
    category: getCategorySlug(entry.category),
    level: entry.level,
    status: entry.status,
    estimatedReadingMinutes: entry.estimatedReadingMinutes,
    durationBucket: getDurationBucket(entry.estimatedReadingMinutes),
    href: null,
    note: entry.note,
    focus: entry.focus
  };
}
