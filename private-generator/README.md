# Private Course Generation Workspace

This folder is for future private LLM-assisted course generation.

It is not part of the public site runtime and should not be treated as publishable content by default.

## Purpose

Use this workspace to:

- store raw course material
- prepare private generation prompts
- collect intermediate outputs
- package reviewed course material before moving it into the public academy

## Folder roles

- `raw/`
  Place the source course material here before any generation step.
- `prompts/`
  Store reusable prompts for each generation stage.
- `output/`
  Store structured intermediate or final private outputs before publication review.

## Security rules

- Do not implement real API calls here yet.
- Do not store real API keys in the repository.
- Do not create a committed `.env` with real secrets.
- Real API keys must stay only in a local `.env` on your machine or on a VPS where the private generator runs.
- Never expose private keys, tokens, or credentials in public app code, public content, screenshots, or commits.

## Publication boundary

Generated MDX output from this workspace is not public by default.

When a course is ready and reviewed, the final files will later be copied into:

- `src/content/courses/`

Only after that should the public validation and build pipeline run.

## Recommended workflow

1. Place the raw course file in `private-generator/raw/`
2. Run `course-architect.prompt.md`
3. Run `research-expander.prompt.md` if needed
4. Run `lesson-writer.prompt.md`
5. Run `visual-learning.prompt.md`
6. Run `mdx-packager.prompt.md`
7. Run `qa-auditor.prompt.md`
8. Copy the final files to `src/content/courses/`
9. Run `npm run validate`
10. Run `npm run build`

## Important note

Do not generate the first real course from this workspace until the user explicitly asks for it.
