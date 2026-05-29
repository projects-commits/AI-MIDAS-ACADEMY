import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { readContentEntries } from "./content-utils.mjs";

const root = process.cwd();

function toPublicUrl(entry) {
  const slug = entry.frontmatter.slug;
  if (entry.collection === "courses") {
    return `/courses/${slug}/`;
  }

  if (entry.collection === "frameworks") {
    return `/frameworks/${slug}/`;
  }

  if (entry.collection === "glossary") {
    return `/glossary/${slug}/`;
  }

  if (entry.collection === "courseLessons") {
    return `/courses/${entry.frontmatter.courseSlug}/lessons/${slug}/`;
  }

  return "/";
}

async function main() {
  const entries = await readContentEntries(root);
  const docs = entries.map((entry) => ({
    type: entry.collection,
    id: entry.frontmatter.id,
    title: entry.frontmatter.title,
    slug: entry.frontmatter.slug,
    summary:
      entry.frontmatter.subtitle ??
      entry.frontmatter.summary ??
      `Entry from ${entry.collection}`,
    status: entry.frontmatter.status ?? "draft",
    category: entry.frontmatter.category ?? entry.frontmatter.type ?? "general",
    wordCount: entry.wordCount,
    path: toPublicUrl(entry),
    source: entry.relativePath
  }));

  const index = {
    generatedAt: new Date().toISOString(),
    totals: {
      courses: docs.filter((doc) => doc.type === "courses").length,
      courseLessons: docs.filter((doc) => doc.type === "courseLessons").length,
      frameworks: docs.filter((doc) => doc.type === "frameworks").length,
      glossary: docs.filter((doc) => doc.type === "glossary").length
    },
    docs
  };

  const outputDir = path.join(root, "public/assets");
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "search-index.json"), JSON.stringify(index, null, 2));

  console.log(`Search index written with ${docs.length} entries.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
