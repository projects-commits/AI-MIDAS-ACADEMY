import type {
  CourseCatalogItem,
  CourseData,
  CourseDurationBucket,
  CourseLesson,
  CourseModule,
  CourseRoadmapEntry
} from "../types";

export function getCourseHref(courseSlug: string) {
  return `/courses/${courseSlug}/`;
}

export function getLessonHref(courseSlug: string, lessonSlug: string) {
  return `/courses/${courseSlug}/lessons/${lessonSlug}/`;
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

export function formatLevel(level: CourseData["level"] | string) {
  const map = {
    foundation: "Fundação",
    intermediate: "Intermediário",
    advanced: "Avançado"
  };

  return map[level as keyof typeof map] ?? level;
}

export function formatDuration(minutes: number) {
  const hours = minutes / 60;
  const wholeHours = Math.floor(hours);
  const remainingMinutes = Math.round((hours - wholeHours) * 60);

  if (wholeHours === 0) {
    return `${remainingMinutes} min`;
  }

  if (remainingMinutes === 0) {
    return `${wholeHours}h`;
  }

  return `${wholeHours}h ${remainingMinutes}min`;
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

export function formatDurationBucket(bucket: CourseDurationBucket) {
  const map = {
    "under-5": "Abaixo de 5 horas",
    "5-10": "5 a 10 horas",
    "10-20": "10 a 20 horas",
    "20-plus": "20+ horas"
  };

  return map[bucket];
}

export function formatCourseStatus(status: CourseData["status"] | CourseRoadmapEntry["status"]) {
  const map = {
    placeholder: "Em estrutura",
    planned: "Planejado",
    draft: "Rascunho",
    published: "Publicado",
    archived: "Arquivado"
  };

  return map[status] ?? status;
}

export function formatCategoryName(category: string) {
  const map: Record<string, string> = {
    "Market Intelligence": "Inteligência de Mercado",
    "Probability & Modeling": "Probabilidade e Modelagem",
    "AI Prediction Systems": "Sistemas de Predição com IA",
    "Football Research": "Pesquisa em Futebol",
    "Prediction Markets & On-chain": "Mercados de Predição e On-chain",
    "Risk & Execution": "Risco e Execução"
  };

  return map[category] ?? category;
}

export function createCatalogItemFromCourse(course: CourseData): CourseCatalogItem {
  return {
    id: course.id,
    title: course.title,
    summary: course.subtitle,
    category: course.category,
    level: course.level,
    status: course.status,
    estimatedReadingMinutes: course.estimatedReadingMinutes,
    durationBucket: getDurationBucket(course.estimatedReadingMinutes),
    href: getCourseHref(course.slug),
    note: "Curso publicado",
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
    category: entry.category,
    level: entry.level,
    status: entry.status,
    estimatedReadingMinutes: entry.estimatedReadingMinutes,
    durationBucket: getDurationBucket(entry.estimatedReadingMinutes),
    href: null,
    note: entry.note,
    focus: entry.focus
  };
}
