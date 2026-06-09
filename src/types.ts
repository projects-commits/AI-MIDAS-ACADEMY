export interface Category {
  slug: string;
  name: string;
  summary: string;
  angle: string;
}

export interface Persona {
  slug: string;
  name: string;
  summary: string;
  need: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteData {
  name: string;
  tagline: string;
  description: string;
  navigation: NavigationItem[];
}

export interface CourseStatBlock {
  moduleCount: number;
  lessonCount: number;
  labCount: number;
  glossaryTermCount: number;
}

export interface CourseTrack {
  id: string;
  title: string;
  summary: string;
}

export interface CourseModule {
  id: string;
  title: string;
  slug: string;
  summary: string;
  lessonIds: string[];
  learningGoals: string[];
}

export interface LessonFormula {
  label: string;
  value: string;
}

export interface CourseLesson {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  slug: string;
  summary?: string;
  lessonNumber: number;
  readingMinutes: number;
  level: string;
  concepts: string[];
  components: string[];
  learningObjectives: string[];
  failureModes: string[];
  exercises: string[];
  checklist: string[];
  previousLesson: string | null;
  nextLesson: string | null;
  glossaryTerms?: string[];
  formulas?: LessonFormula[];
}

export interface CourseLab {
  id: string;
  title: string;
  slug: string;
  summary: string;
  status: string;
}

export type CourseLevel = "foundation" | "intermediate" | "advanced";
export type CourseStatus = "placeholder" | "planned" | "draft" | "published" | "archived";
export type CourseDurationBucket = "under-5" | "5-10" | "10-20" | "20-plus";

export interface CourseData {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  secondaryCategories: string[];
  level: CourseLevel;
  status: CourseStatus;
  language: string;
  estimatedReadingMinutes: number;
  minimumWordCount: number;
  targetPersonas: string[];
  corePromise: string;
  whyThisCourseExists: string;
  enemy: string;
  audience: string;
  prerequisites: string[];
  courseStats: CourseStatBlock;
  tracks: CourseTrack[];
  modules: CourseModule[];
  lessons: CourseLesson[];
  labs: CourseLab[];
  glossaryTerms: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseRoadmapEntry {
  id: string;
  title: string;
  summary: string;
  category: string;
  level: CourseLevel;
  status: "planned";
  estimatedReadingMinutes: number;
  note: string;
  focus: string;
}

export interface CourseCatalogItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  level: CourseLevel;
  status: CourseStatus;
  estimatedReadingMinutes: number;
  durationBucket: CourseDurationBucket;
  href: string | null;
  note: string;
  focus: string;
  moduleCount?: number;
  lessonCount?: number;
}
