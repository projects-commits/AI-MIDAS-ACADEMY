# COURSE SCHEMA

## Purpose

This document defines the content architecture for AI MIDAS ACADEMY. It explains how courses, frameworks, and glossary entries are stored, how MDX frontmatter should be written, how lessons link back to courses and modules, and how future courses should be added without collapsing into shallow content.

## Storage model

Public content lives under `src/content/` and is divided into three collections:

- `src/content/courses/`
- `src/content/frameworks/`
- `src/content/glossary/`

The courses catalog may additionally use `src/data/course-roadmap.ts` for planned catalog entries that do not yet have a public MDX course page.

The current recommended storage pattern for a course is:

1. Create a folder at `src/content/courses/<course-slug>/`
2. Put the course entry in `index.mdx`
3. Keep the frontmatter as the structural source of truth
4. Use the MDX body for the course overview, structural notes, and later the real course content

Example:

```text
src/content/courses/framework-de-9-passos-para-analisar-um-jogo-de-futebol/
  index.mdx
```

This keeps every course self-contained and makes it easier to add future assets, lesson files, diagrams, and references without flattening the repository.

## Collections

Astro content collections are defined in [src/content.config.ts](/C:/Users/Raziy/Desktop/projectos/ai_midas_academy/src/content.config.ts:1).

- `courses`: deep course objects with nested tracks, modules, lessons, labs, and glossary links
- `frameworks`: reference-grade conceptual systems, models, and checklists
- `glossary`: stable term definitions used across the academy

## Frontmatter format

For this project, MDX frontmatter should be written as JSON-compatible frontmatter inside the `---` block.

Why:

- courses have deep nested structures
- validation scripts need deterministic parsing without extra dependencies
- JSON-compatible frontmatter is still valid YAML-compatible frontmatter for Astro

Recommended pattern:

```mdx
---
{
  "id": "course-example",
  "title": "Example Course",
  "slug": "example-course"
}
---
```

Do not use loose or inconsistent key naming. Keep all required fields present, even for placeholder entries.

## Course schema

Each course entry must include these fields:

- `id`
- `title`
- `slug`
- `subtitle`
- `category`
- `secondaryCategories`
- `level`
- `status`
- `language`
- `estimatedReadingMinutes`
- `minimumWordCount`
- `targetPersonas`
- `corePromise`
- `whyThisCourseExists`
- `enemy`
- `audience`
- `prerequisites`
- `courseStats`
- `tracks`
- `modules`
- `lessons`
- `labs`
- `glossaryTerms`
- `createdAt`
- `updatedAt`

### Notes on selected fields

- `category`: the primary V1 category
- `secondaryCategories`: additional category relationships
- `status`: use values such as `placeholder`, `planned`, `draft`, or `published`
- `minimumWordCount`: the floor for serious delivery, not a target for padding
- `courseStats`: precomputed structural counts for modules, lessons, labs, and glossary terms
- `tracks`: high-level learning lanes across the course
- `modules`: the ordered learning blocks
- `lessons`: lesson metadata objects that define progression and structure
- `labs`: practice units linked to the course
- `glossaryTerms`: glossary ids or slugs that the course depends on

## Lesson schema

Lessons are currently stored as nested objects inside the course frontmatter. Each lesson must include:

- `id`
- `courseId`
- `moduleId`
- `title`
- `slug`
- `lessonNumber`
- `readingMinutes`
- `level`
- `concepts`
- `components`
- `learningObjectives`
- `failureModes`
- `exercises`
- `checklist`
- `previousLesson`
- `nextLesson`

This gives the academy enough structure to:

- map lesson order
- validate lesson linking
- plan future lesson pages
- keep course logic machine-readable before real lesson content is written

## How modules and lessons should be linked

Use three layers of linking:

1. The course owns the full list of modules and lessons.
2. Each module includes `lessonIds`.
3. Each lesson includes both `courseId` and `moduleId`.

That means a valid lesson should satisfy all of the following:

- `lesson.courseId` matches the parent course `id`
- `lesson.moduleId` exists in the course `modules`
- the lesson `id` appears inside the relevant module `lessonIds`
- `previousLesson` and `nextLesson` refer only to real lesson ids or `null`

This creates both structural clarity and a clear validation target for scripts.

## Minimum word count rules

The academy is explicitly anti-shallow. Use `minimumWordCount` as a hard publishing discipline.

Rules:

- placeholder entries may sit below the minimum while the structure is being designed
- draft or published courses should not remain below the minimum without explicit reason
- word count is measured on the MDX body, not on frontmatter
- meeting the minimum is necessary but not sufficient

Recommended guidance:

- placeholder course: may be below minimum, but should explain why
- serious draft: should be approaching the minimum
- publishable course: should exceed the minimum while still staying dense and useful

## How to avoid shallow content

High word count alone does not protect quality. To avoid shallow content:

- start from a real course thesis
- define modules before prose
- ensure each lesson has a mechanism, applied example, failure modes, checklist, and exercise
- remove repeated framing that only inflates length
- prefer operational detail over motivational commentary
- explain why a concept matters in real football or market reading
- make uncertainty visible instead of hiding behind confident tone

Shallow content usually looks like one of these failures:

- vocabulary without mechanism
- examples without reasoning
- claims without limitations
- frameworks with no execution implications
- inflated prose that teaches almost nothing new paragraph to paragraph

## How to add a future course

1. Choose the primary category and any secondary categories.
2. Create `src/content/courses/<course-slug>/index.mdx`.
3. Write the frontmatter first using the full course schema.
4. Add tracks, modules, and nested lesson metadata before writing the body.
5. Set a realistic `minimumWordCount`.
6. Use `status: "placeholder"` or `status: "planned"` until real drafting begins.
7. Run `npm run validate`.
8. Run `npm run wordcount`.
9. Run `npm run search:index`.

If the course becomes a real draft, expand the MDX body with the actual content and keep the metadata in sync.

## Catalog roadmap transition

If a course appears in `src/data/course-roadmap.ts`, treat that file as catalog-only metadata.

When the course is ready to become a public learning surface:

1. Create `src/content/courses/<course-slug>/index.mdx`
2. Move the structural metadata into the course frontmatter
3. Remove or replace the roadmap entry so the catalog does not describe the same course twice

## Placeholder example

The structural placeholder for the first future course lives at:

[src/content/courses/framework-de-9-passos-para-analisar-um-jogo-de-futebol/index.mdx](/C:/Users/Raziy/Desktop/projectos/ai_midas_academy/src/content/courses/framework-de-9-passos-para-analisar-um-jogo-de-futebol/index.mdx:1)

It exists to demonstrate the architecture only. It is not the real course.
