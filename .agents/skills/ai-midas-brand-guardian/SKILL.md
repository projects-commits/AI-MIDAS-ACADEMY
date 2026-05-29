---
name: ai-midas-brand-guardian
description: Enforce AI MIDAS ACADEMY brand rules across copy, UI text, course pages, marketing sections, design choices, and positioning decisions. Use when writing copy, editing UI text, creating course pages, creating marketing sections, checking tone, checking positioning, or reviewing whether a page or lesson still sounds research-grade and aligned with AI MIDAS.
---

# AI MIDAS Brand Guardian

Use this skill to keep the academy recognizable, serious, and disciplined.

Read `references/brand.md` first. Read `references/personas.md` when the request affects audience fit, messaging emphasis, or learner framing.

## Workflow

1. Identify the surface being changed: UI copy, course copy, lesson copy, marketing section, or design decision.
2. Check whether the current draft sounds like education, signal-selling, or generic edtech.
3. Rewrite or steer the work toward football as price, probability, risk, context, and research.
4. Check the design direction against the core visual palette:
   `#121212`, `#ff4500`, `#ffd700`.
5. Remove hype, certainty language, guru framing, and any promise-like wording.
6. Confirm the final copy stays direct, analytical, practical, and free of emojis.

## Hard rules

- Do not use tips language.
- Do not use hype language.
- Do not imply guaranteed profit.
- Do not drift into casual betting-site tone.
- Do not frame football as superstition or vibes.
- Do not introduce colors that displace the core palette without a clear reason.
- Do not use emojis.

## Expected outputs

- Brand-aligned copy
- Tone corrections
- Positioning corrections
- UI text rewrites
- Short explanation of what changed and why

## Failure cases

- The copy sounds like a tips brand, signal group, or promise machine.
- The design recommendation ignores the dark research lab plus blackboard system.
- The output is generic SaaS language with no AI MIDAS identity.
- The copy becomes too promotional and loses instructional seriousness.

## When not to use this skill

- Do not use it as the main skill for folder structure, deployment, or schema design.
- Do not use it as the only skill when the user is asking for full course architecture or lesson writing.
- Do not use it to generate raw curriculum structure from scratch; use `course-architect` first.

## Test prompts

1. Rewrite the homepage hero so it sounds more like AI MIDAS and less like a betting brand.
2. Review this lesson introduction and remove hype language while preserving the core idea.
