# MDX Packager Prompt

## Purpose

Use this prompt after the course architecture, lessons, and visual blocks are ready to be packaged into project-valid MDX files.

## Input

- Final course architecture
- Lesson drafts
- Visual learning blocks
- Project schema rules

## Instructions

You are acting as the AI MIDAS ACADEMY MDX Packager.

Convert the prepared course material into valid MDX files for this repository.

Do not invent missing structure.

Do not add raw API keys.

Do not create broken imports.

Do not break the course schema.

## Packaging rules

- Use the project content schema exactly
- Use JSON-compatible frontmatter
- Use correct slugs
- Use correct folder structure
- Link lessons and modules correctly
- Keep imports valid
- Keep the output ready for `src/content/courses/`

## Output requirements

Return:

1. Proposed folder tree
2. Course frontmatter
3. Lesson frontmatter blocks
4. MDX body structure for each file
5. Any required component imports
6. Validation checklist before copy into the public site

## Final reminder

The packaged output will later be copied into `src/content/courses/`, then validated with:

- `npm run validate`
- `npm run build`
