import process from "node:process";
import { readContentEntries } from "./content-utils.mjs";

const root = process.cwd();

async function main() {
  const entries = await readContentEntries(root);
  const courses = entries.filter((entry) => entry.collection === "courses");
  const courseLessons = entries.filter((entry) => entry.collection === "courseLessons");

  let totalWords = 0;

  for (const entry of courses) {
    const lessonWords = courseLessons
      .filter((lessonEntry) => lessonEntry.frontmatter.courseId === entry.frontmatter.id)
      .reduce((sum, lessonEntry) => sum + lessonEntry.wordCount, 0);
    const courseTotal = entry.wordCount + lessonWords;
    totalWords += courseTotal;

    console.log(
      [
        entry.frontmatter.id,
        entry.frontmatter.slug,
        `overviewWords=${entry.wordCount}`,
        `lessonWords=${lessonWords}`,
        `words=${courseTotal}`,
        `minimum=${entry.frontmatter.minimumWordCount}`,
        `status=${entry.frontmatter.status}`
      ].join(" | ")
    );
  }

  console.log(`Total course files: ${courses.length}`);
  console.log(`Total lesson files: ${courseLessons.length}`);
  console.log(`Total course words: ${totalWords}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
