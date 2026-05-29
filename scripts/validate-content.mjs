import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { readContentEntries } from "./content-utils.mjs";

const root = process.cwd();
const forbiddenPhrases = [
  "green guaranteed",
  "lucro certo",
  "sinal infalivel",
  "aposta certa",
  "so copiar"
];

const requiredCourseFields = [
  "id",
  "title",
  "slug",
  "subtitle",
  "category",
  "secondaryCategories",
  "level",
  "status",
  "language",
  "estimatedReadingMinutes",
  "minimumWordCount",
  "targetPersonas",
  "corePromise",
  "whyThisCourseExists",
  "enemy",
  "audience",
  "prerequisites",
  "courseStats",
  "tracks",
  "modules",
  "lessons",
  "labs",
  "glossaryTerms",
  "createdAt",
  "updatedAt"
];

const requiredLessonFields = [
  "id",
  "courseId",
  "moduleId",
  "title",
  "slug",
  "lessonNumber",
  "readingMinutes",
  "level",
  "concepts",
  "components",
  "learningObjectives",
  "failureModes",
  "exercises",
  "checklist",
  "previousLesson",
  "nextLesson"
];

const requiredCourseLessonFields = [
  "id",
  "courseId",
  "courseSlug",
  "lessonId",
  "moduleId",
  "title",
  "slug",
  "lessonNumber",
  "readingMinutes",
  "status",
  "createdAt",
  "updatedAt"
];

function assertFields(object, fields, label) {
  for (const field of fields) {
    if (!(field in object)) {
      throw new Error(`Missing required field "${field}" in ${label}`);
    }
  }
}

function validateNavigation(siteData) {
  if (!Array.isArray(siteData.navigation) || siteData.navigation.length === 0) {
    throw new Error("site.json must include a non-empty navigation array.");
  }
}

function validateCourseLessonEntry(entry) {
  assertFields(entry.frontmatter, requiredCourseLessonFields, entry.relativePath);
}

function validateCourseEntry(entry, warnings, courseLessonEntries) {
  const course = entry.frontmatter;
  assertFields(course, requiredCourseFields, entry.relativePath);

  const lessonIds = new Set(course.lessons.map((lesson) => lesson.id));
  const moduleIds = new Set(course.modules.map((module) => module.id));
  const lessonContentByLessonId = new Map(
    courseLessonEntries
      .filter((lessonEntry) => lessonEntry.frontmatter.courseId === course.id)
      .map((lessonEntry) => [lessonEntry.frontmatter.lessonId, lessonEntry])
  );

  if (course.courseStats.moduleCount !== course.modules.length) {
    throw new Error(`moduleCount mismatch in ${entry.relativePath}`);
  }

  if (course.courseStats.lessonCount !== course.lessons.length) {
    throw new Error(`lessonCount mismatch in ${entry.relativePath}`);
  }

  if (course.courseStats.labCount !== course.labs.length) {
    throw new Error(`labCount mismatch in ${entry.relativePath}`);
  }

  if (course.courseStats.glossaryTermCount !== course.glossaryTerms.length) {
    throw new Error(`glossaryTermCount mismatch in ${entry.relativePath}`);
  }

  for (const module of course.modules) {
    for (const lessonId of module.lessonIds) {
      if (!lessonIds.has(lessonId)) {
        throw new Error(`Module ${module.id} references unknown lesson ${lessonId} in ${entry.relativePath}`);
      }
    }
  }

  for (const lesson of course.lessons) {
    assertFields(lesson, requiredLessonFields, `${entry.relativePath} -> lesson ${lesson.id}`);

    if (lesson.courseId !== course.id) {
      throw new Error(`Lesson ${lesson.id} has mismatched courseId in ${entry.relativePath}`);
    }

    if (!moduleIds.has(lesson.moduleId)) {
      throw new Error(`Lesson ${lesson.id} references unknown module ${lesson.moduleId} in ${entry.relativePath}`);
    }

    if (lesson.previousLesson && !lessonIds.has(lesson.previousLesson)) {
      throw new Error(`Lesson ${lesson.id} has invalid previousLesson in ${entry.relativePath}`);
    }

    if (lesson.nextLesson && !lessonIds.has(lesson.nextLesson)) {
      throw new Error(`Lesson ${lesson.id} has invalid nextLesson in ${entry.relativePath}`);
    }

    const lessonContent = lessonContentByLessonId.get(lesson.id);
    if (course.status === "published" && !lessonContent) {
      throw new Error(`Published course ${course.slug} is missing MDX content for lesson ${lesson.id}.`);
    }

    if (lessonContent && lessonContent.frontmatter.slug !== lesson.slug) {
      throw new Error(`Lesson content slug mismatch for ${lesson.id} in ${entry.relativePath}`);
    }
  }

  const lessonWordCount = courseLessonEntries
    .filter((lessonEntry) => lessonEntry.frontmatter.courseId === course.id)
    .reduce((sum, lessonEntry) => sum + lessonEntry.wordCount, 0);
  const totalWordCount = entry.wordCount + lessonWordCount;

  if (totalWordCount < course.minimumWordCount) {
    warnings.push(
      `Course ${course.slug} has ${totalWordCount} words, below minimumWordCount ${course.minimumWordCount}.`
    );
  }
}

async function main() {
  const categories = JSON.parse(await readFile(path.join(root, "src/data/categories.json"), "utf8"));
  const personas = JSON.parse(await readFile(path.join(root, "src/data/personas.json"), "utf8"));
  const siteData = JSON.parse(await readFile(path.join(root, "src/data/site.json"), "utf8"));
  const entries = await readContentEntries(root);
  const courseLessonEntries = entries.filter((entry) => entry.collection === "courseLessons");
  const warnings = [];

  if (categories.length !== 6) {
    throw new Error(`Expected 6 categories, found ${categories.length}.`);
  }

  if (personas.length !== 4) {
    throw new Error(`Expected 4 personas, found ${personas.length}.`);
  }

  validateNavigation(siteData);

  for (const entry of entries) {
    const body = entry.body.toLowerCase();
    for (const phrase of forbiddenPhrases) {
      if (body.includes(phrase)) {
        throw new Error(`Forbidden phrase "${phrase}" found in ${entry.relativePath}`);
      }
    }

    if (entry.collection === "courses") {
      validateCourseEntry(entry, warnings, courseLessonEntries);
    }

    if (entry.collection === "courseLessons") {
      validateCourseLessonEntry(entry);
    }
  }

  for (const warning of warnings) {
    console.warn(`Warning: ${warning}`);
  }

  console.log("Content validation passed.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
