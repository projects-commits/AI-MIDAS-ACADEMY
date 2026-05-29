---
name: academy-qa-auditor
description: Audit AI MIDAS ACADEMY courses, pages, design, and content before publishing. Use when reviewing a course, reviewing a page, reviewing the site before deploy, checking quality, checking brand consistency, or checking whether depth, links, build health, mobile readability, and accessibility basics are good enough to ship.
---

# Academy QA Auditor

Use this skill as the final skeptical pass before publishing or deploy.

Read `references/qa-checklist.md` first. Read `references/anti-hype-rules.md` when reviewing copy, tone, and promise language.

## Workflow

1. Identify the review surface: course, lesson, page, or site-wide release.
2. Check brand fit.
3. Check depth and practical usefulness.
4. Check minimum word-count status where applicable.
5. Check examples, failure modes, and checklists.
6. Check broken links, build health, mobile readability, and accessibility basics.
7. Report findings clearly, with severity if possible.

## Must check

- brand fit
- course depth
- minimum word count
- practical examples
- failure modes
- checklists
- no hype language
- no false promises
- no broken links
- build works
- mobile readability
- accessibility basics

## Expected outputs

- Review findings
- Publishing blockers
- Quality gaps
- Specific fixes to make before release

## Failure cases

- The review only comments on style and misses structural problems
- Word-count warnings are ignored without context
- The page sounds on-brand but is still shallow
- The build or navigation is broken and the review misses it

## When not to use this skill

- Do not use it to define the original architecture
- Do not use it to draft the main lesson prose
- Do not use it as a substitute for `ai-midas-brand-guardian` while the copy is still actively being written

## Test prompts

1. Audit this course page before publishing and list the blockers first.
2. Review the site for AI MIDAS fit, shallow sections, broken links, and mobile readability issues.
