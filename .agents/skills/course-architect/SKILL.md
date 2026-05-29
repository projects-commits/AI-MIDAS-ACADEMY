---
name: course-architect
description: Transform a raw course idea into a complete AI MIDAS ACADEMY course architecture. Use when the user provides a course topic, uploads raw course material, asks for tracks, modules, lessons, course promise, audience, prerequisites, curriculum design, labs, exercises, glossary terms, or minimum word-count targets.
---

# Course Architect

Use this skill to convert a vague course direction into a structured teaching system that fits AI MIDAS.

Read `references/course-structure.md` first. Read `references/curriculum-rules.md` when defining lesson depth, sequencing, or minimum completeness.

## Workflow

1. Restate the course topic in AI MIDAS terms: price, probability, risk, context, and research.
2. Define the course name.
3. Define the core promise.
4. Define why the course exists and what weak alternative it replaces.
5. Define the enemy: the bad habit, shallow method, or false framing the course is meant to defeat.
6. Define audience and prerequisites.
7. Set course stats: module count, lesson count, lab count, glossary term count, and minimum word count target.
8. Design tracks first, then modules, then lessons.
9. Add labs, exercises, and glossary terms.
10. Check that the architecture is deep enough before handing off to `lesson-writer`.

## Required output shape

Always output:

- course name
- core promise
- why course exists
- enemy
- audience
- prerequisites
- course stats
- tracks
- modules
- lessons
- labs
- exercises
- glossary terms
- minimum word count target

## Design rules

- Build around mechanisms, not slogans
- Keep progression logical
- Make every module earn its place
- Make every lesson point toward applied judgment
- Include failure modes and practice expectations in the lesson plan

## Failure cases

- The architecture is just a list of topics with no progression
- Lessons overlap heavily or repeat the same claim
- The promise is vague or inflated
- The enemy is undefined, so the course lacks contrast
- There are not enough practice surfaces to justify a full course

## When not to use this skill

- Do not use it for final lesson prose
- Do not use it for packaging final MDX
- Do not use it for final QA

## Test prompts

1. Build the architecture for a course about pre-live odds movement in football.
2. I have rough notes about pricing weak favorites. Turn them into a full course structure for AI MIDAS.
