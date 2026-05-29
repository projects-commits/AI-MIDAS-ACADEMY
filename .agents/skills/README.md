# AI MIDAS ACADEMY Skills

This folder contains repository-scoped Codex skills for AI MIDAS ACADEMY.

## What each skill does

- `ai-midas-brand-guardian`
  Enforces brand positioning, tone, UI copy discipline, and visual identity.
- `academy-system-architect`
  Guides structural, technical, and deployment decisions for the static-first academy site.
- `course-architect`
  Turns a raw course idea into a complete AI MIDAS course architecture.
- `lesson-writer`
  Expands lesson plans or raw notes into deep, structured lesson content.
- `visual-learning-designer`
  Converts teaching points into blackboard panels, formula blocks, diagrams, comparison cards, and interactive learning ideas.
- `mdx-packager`
  Packages courses and lessons into valid project MDX files with correct frontmatter, slugs, links, and folder structure.
- `academy-qa-auditor`
  Audits pages, courses, lessons, design, and publishing readiness before release.

## When to invoke each skill

- Use `ai-midas-brand-guardian` when writing copy, adjusting UI text, checking tone, shaping positioning, or reviewing brand fit.
- Use `academy-system-architect` when changing folders, layouts, content architecture, deployment assumptions, or adding features that may affect the static-first model.
- Use `course-architect` when a user provides a course topic, uploads source material, or asks for tracks, modules, lessons, audience, prerequisites, or promise design.
- Use `lesson-writer` when writing or deepening lessons, examples, failure modes, checklists, or practice exercises.
- Use `visual-learning-designer` when transforming text into blackboard content, formulas, diagrams, decision trees, charts, lab ideas, or other visual learning blocks.
- Use `mdx-packager` when turning structured course output into final files for `src/content/`.
- Use `academy-qa-auditor` before publishing, before deploy, or when reviewing quality and consistency.

## Recommended course-generation order

1. `course-architect`
2. `lesson-writer`
3. `visual-learning-designer`
4. `mdx-packager`
5. `academy-qa-auditor`
6. `ai-midas-brand-guardian` final pass

## Notes

- These skills are repository-scoped and should align with `MEMORY.md`, `DESIGN_SYSTEM.md`, `COURSE_SCHEMA.md`, and `COURSE_GENERATION_PIPELINE.md`.
- Do not use these skills to generate the first course automatically unless the user explicitly asks for it.
