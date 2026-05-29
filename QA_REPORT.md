# QA Report

## Scope

Full pre-course QA audit of AI MIDAS ACADEMY before generating the first real course.

Audit lenses used:

- `academy-qa-auditor`
- `ai-midas-brand-guardian`
- `academy-system-architect`

## Summary

The repository is in good shape for the first real course to be added later.

The public site builds successfully, the core pages render from the static build, the course system is wired, the labs are present locally, the required root docs exist, the repository-scoped skills exist, and no API keys were found in the repo.

One critical brand issue was found in public copy and fixed during this audit.

## Checks completed

1. Folder structure reviewed: clean overall, with clear separation between public app, content, scripts, private generation workspace, and repository skills.
2. Root docs confirmed present and non-trivial:
   `AGENTS.md`, `MEMORY.md`, `PROJECT_BRIEF.md`, `CONTENT_SYSTEM.md`, `DESIGN_SYSTEM.md`, `COURSE_SCHEMA.md`, `COURSE_GENERATION_PIPELINE.md`, `DEPLOYMENT.md`
3. Skills confirmed present in `.agents/skills/`
4. Every skill confirmed to have `SKILL.md` with `name` and `description`
5. Regex scan found no API keys or obvious secret tokens in the repository
6. `.env` is ignored in `.gitignore`
7. `npm run validate` works
8. `npm run build` works
9. Static render check passed for:
   `/`
   `/courses/`
   `/frameworks/`
   `/labs/`
   `/glossary/`
   `/about/`
10. Design token check passed:
    `#121212`, `#ff4500`, `#ffd700` are present in the design system
11. Forbidden public hype phrases scan passed after fix
12. Course system is ready for the first real course:
    `courses=1`, `frameworks=1`, `glossary=10`
13. Labs confirmed in built output:
    implied probability, EV, stake sizing, glossary tooltip
14. Responsive CSS structure exists for mobile breakpoints
15. Markdown and MDX structure is ready and validated

## Critical issue found and fixed

### 1. Forbidden anti-hype phrases were present in public `/about` copy

Severity: Critical

Why it mattered:

- The public site must not echo prohibited hype phrases even when negating them.
- This weakened the brand-guardian standard and made the public copy noisier than it needed to be.

Fix applied:

- Updated [src/pages/about.astro](/C:/Users/Raziy/Desktop/projectos/ai_midas_academy/src/pages/about.astro:1)
- Replaced the public references to those exact phrases with cleaner boundary language that keeps the same positioning without repeating the banned wording

## Non-critical issues and TODOs

### 1. Placeholder course is still below `minimumWordCount`

Status: Expected for now

Detail:

- The placeholder course `Framework de 9 Passos para Analisar um Jogo de Futebol` has `91` words and a `minimumWordCount` of `3500`
- This is acceptable because the first real course has not been generated yet

TODO:

- Keep the warning until real course drafting begins

### 2. Some legacy Astro components are currently unused

Status: Non-critical

Examples:

- `CategoryCard.astro`
- `HeroBoard.astro`
- `LabPreviewCard.astro`
- `LessonCallout.astro`
- `SectionHeading.astro`
- `SiteHeader.astro`
- `SiteFooter.astro`

Impact:

- Does not break build
- Slightly reduces repository cleanliness

TODO:

- Prune or reuse legacy components after the first real course is added

### 3. Mobile QA is structurally good but not visually screenshot-verified in this audit

Status: Non-critical

Detail:

- Responsive breakpoints and layout rules are present
- Static render checks passed
- This audit did not include screenshot-based browser verification

TODO:

- Run a browser pass on mobile viewport before public release

## Brand and content findings

- Public copy is now aligned with the anti-hype rule set
- No emojis were found in public-facing app content
- The academy remains clearly positioned as football research education, not a tips platform

## Technical findings

- Static-first architecture remains intact
- No login or backend dependency was introduced
- Labs work as browser-side local tools
- Content collections and MDX structure are ready for the first real course

## Commands run

- `npm run validate`
- `npm run build`
- static HTTP render check against built `dist/`
- repository regex scans for secrets, forbidden phrases, skill metadata, and content counts

## Final assessment

The project is ready for the first real course to be added later.

No critical blockers remain open after the copy fix in `/about`.
