---
name: mdx-packager
description: Convert structured AI MIDAS course and lesson output into valid project MDX files. Use when generating final course files, converting raw Markdown to MDX, preparing course folders, creating frontmatter, linking lessons and modules, or packaging output for publishing inside the project content schema.
---

# MDX Packager

Use this skill to turn structured educational output into valid project files that build cleanly.

Read `references/mdx-frontmatter.md` first. Read `references/file-output-rules.md` before creating folders, slugs, or imports.

## Workflow

1. Confirm the course or lesson structure is already defined.
2. Create or update the target folder under `src/content/`.
3. Write valid frontmatter that matches the project schema.
4. Normalize slugs and linking between modules and lessons.
5. Add MDX body content without broken component imports.
6. Check for raw secrets, broken links, and incorrect paths.
7. Run build or validation commands when available.

## Hard rules

- Frontmatter must be valid
- Slugs must be correct and consistent
- Folder structure must follow project rules
- Imports must not be broken
- No raw API keys
- Components must be used correctly
- Build must pass when packaging is complete

## Expected outputs

- Final MDX files
- Correct course folder structure
- Correct frontmatter
- Correct lesson and module links
- Publish-ready content packaging

## Failure cases

- Frontmatter does not validate against the schema
- Slugs diverge between route, file, and frontmatter
- Lessons are linked incorrectly
- Component imports are invalid
- The packaged output breaks the build

## When not to use this skill

- Do not use it to invent the course architecture from scratch
- Do not use it as the primary lesson-writing skill
- Do not use it as the final QA layer

## Test prompts

1. Package this finished course outline into valid MDX files for AI MIDAS.
2. Convert these Markdown lesson drafts into schema-valid course content with correct frontmatter and links.
