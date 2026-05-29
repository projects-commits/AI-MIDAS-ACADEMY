# AGENTS

## Purpose

This repository is the knowledge and implementation base for AI MIDAS ACADEMY, a free public academy for deep written courses about football prediction, football research, probability, risk, pre-live trading, odds movement, AI prediction systems, and prediction markets.

This file tells Codex and future agents how to work inside the repo.

## Working mode

- Treat this repository as a product system and a content system at the same time.
- Prefer durable decisions over quick hacks.
- Keep changes narrow, readable, and reversible.
- Optimize for beginner/intermediate developer readability.
- Before introducing a new abstraction, check whether a simpler structure is enough.
- Before building application code, preserve the project knowledge layer and keep it aligned with implementation decisions.

## Security rules

- Never expose API keys, secrets, tokens, cookies, or private credentials in commits, logs, screenshots, markdown files, examples, or generated content.
- Never place API keys in frontend code, client-side bundles, public environment files, or static pages.
- If a secret is needed, keep it server-side or in ignored local environment files only.
- If a workflow requires a new secret or third-party integration, document the need first and ask before wiring it in.

## Architecture rules

- Prefer static-first architecture.
- V1 has no login and should not assume accounts, sessions, dashboards, or personalized state.
- Default hosting target is GitHub Pages or a simple VPS serving static output.
- Favor patterns that can scale later without forcing a backend in V1.
- Prefer content-driven routing, generated pages, and file-based content models.
- Avoid unnecessary runtime complexity.

## Dependency rules

- Ask before adding unnecessary dependencies.
- Prefer platform-native capabilities and existing framework utilities before adding packages.
- If a dependency is justified, explain what problem it solves and why the existing stack is not enough.
- Avoid dependencies that require a server if the same result can be achieved statically.

## Quality rules

- Run validation, lint, typecheck, or build commands when they exist and are relevant to the change.
- If commands do not exist yet, note that clearly instead of pretending validation happened.
- Keep naming explicit and content structures predictable.
- Do not mix unrelated refactors into the same change.

## Brand and editorial preservation

- Preserve AI MIDAS design, tone, and positioning in every implementation choice.
- AI MIDAS is not a tips brand, not a betting signal group, not a casual betting site, and not a guaranteed-profit brand.
- Avoid hype phrases such as "green guaranteed", "lucro certo", "sinal infalivel", "aposta certa", or "so copiar".
- The tone must stay serious, analytical, direct, practical, and research-grade.
- Course content is written in Portuguese, with English technical terms allowed when they improve clarity.

## UX and design guidance

- Respect the dark research lab plus blackboard learning visual system.
- Keep the interface visually disruptive but structurally disciplined.
- Prefer layouts that feel like a mix of code academy, financial research desk, and digital blackboard.
- Do not introduce decorative choices that dilute the research-grade tone.
- Do not use external font files unless the project direction changes explicitly.

## Content and generation rules

- Do not create fake expertise or unverifiable claims.
- Do not generate course content casually; follow the course schema and generation pipeline.
- Every future course should include mental models, mechanisms, applied examples, failure modes, checklists, and practical exercises.
- Do not publish raw AI output without review against the editorial rules.

## Collaboration rules

- Check existing files before creating parallel rules in a new place.
- When changing system assumptions, update the relevant knowledge-layer documents.
- If a technical decision affects content structure, reflect that in `CONTENT_SYSTEM.md`, `COURSE_SCHEMA.md`, or `COURSE_GENERATION_PIPELINE.md`.
- If a design decision affects identity or layout behavior, reflect that in `DESIGN_SYSTEM.md`.
