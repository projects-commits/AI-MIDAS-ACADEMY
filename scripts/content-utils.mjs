import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export const CONTENT_ROOT = "src/content";
export const ALLOWED_EXTENSIONS = new Set([".md", ".mdx"]);

export async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listFiles(fullPath);
      }
      return fullPath;
    })
  );

  return files.flat();
}

export async function readContentEntries(root) {
  const files = await listFiles(path.join(root, CONTENT_ROOT));

  const entries = await Promise.all(
    files
      .filter((file) => ALLOWED_EXTENSIONS.has(path.extname(file)))
      .map(async (file) => {
        const raw = await readFile(file, "utf8");
        const { frontmatter, body } = parseFrontmatter(raw, file);
        const relativePath = file.replace(root + path.sep, "").replaceAll("\\", "/");
        const segments = relativePath.split("/");
        const collection = segments[2];
        const wordCount = countWords(body);

        return {
          file,
          relativePath,
          collection,
          frontmatter,
          body,
          wordCount
        };
      })
  );

  return entries;
}

export function parseFrontmatter(raw, file) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    throw new Error(`Missing frontmatter block in ${file}`);
  }

  let frontmatter;
  try {
    frontmatter = JSON.parse(match[1]);
  } catch (error) {
    throw new Error(
      `Frontmatter in ${file} must be JSON-compatible so nested course structures can be validated reliably.`
    );
  }

  return {
    frontmatter,
    body: raw.slice(match[0].length).trim()
  };
}

export function countWords(text) {
  const cleaned = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_[\]\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) {
    return 0;
  }

  return cleaned.split(" ").filter(Boolean).length;
}
