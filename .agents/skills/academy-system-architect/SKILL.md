---
name: academy-system-architect
description: Guide structural and technical decisions for the AI MIDAS ACADEMY static site. Use when changing folder structure, creating pages or layouts, adding new features, deploying, deciding static vs backend, or editing content architecture that affects how the academy is built and published.
---

# Academy System Architect

Use this skill to keep the academy technically coherent and compatible with the static-first product thesis.

Read `references/architecture.md` first. Read `references/folder-structure.md` when the request changes files, folders, content placement, or ownership boundaries.

## Workflow

1. Identify whether the request changes architecture, routing, content structure, hosting assumptions, or runtime behavior.
2. Ask whether the feature can be solved statically before considering any backend logic.
3. Keep content in MDX or Markdown-compatible flows when public content is involved.
4. Prefer reusable components and predictable page patterns over one-off implementation.
5. Check whether the result still works for GitHub Pages or a simple static VPS.
6. Reject frontend API keys, login assumptions, and backend creep unless the user explicitly asks for them.

## Hard rules

- Static-first by default
- No frontend API keys
- No backend unless explicitly requested
- No login in V1
- Public content in MDX or Markdown-driven structure
- Reusable components over page-specific hacks
- Hosting compatibility with GitHub Pages or simple static VPS

## Expected outputs

- Folder decisions
- Layout and routing recommendations
- Static-safe feature design
- Reusable component boundaries
- Deployment-safe implementation choices

## Failure cases

- The feature quietly requires a backend even though the request did not ask for one.
- A new pattern breaks static export.
- Content architecture becomes inconsistent with `src/content/`.
- A page depends on browser secrets or frontend API keys.

## When not to use this skill

- Do not use it as the main skill for rewriting brand copy.
- Do not use it as the main skill for drafting lesson prose.
- Do not use it for final QA; use `academy-qa-auditor`.

## Test prompts

1. We want to add a new glossary system and linked lesson pages. How should the folder structure evolve without breaking static hosting?
2. Review this feature idea and decide whether it should stay client-side, static-generated, or be rejected for V1.
