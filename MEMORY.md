# MEMORY

## Project identity

- Project name: AI MIDAS ACADEMY
- Mission: teach people to transform football into structured intelligence through price, probability, risk, context, and research.
- Public model: free public academy.
- V1 product shape: static-first educational site with no login.
- Core outcome: deep written learning, not fast signals, hype, or copy-betting behavior.

## Brand identity

- AI MIDAS is not a tips brand.
- AI MIDAS is not a betting signal group.
- AI MIDAS is not a casual betting site.
- AI MIDAS is not a guaranteed-profit brand.
- Positioning: research-grade educational academy for football prediction, football research, probability, risk, pre-live trading, odds movement, AI prediction systems, and prediction markets.

## Visual identity

- Background: `#121212`
- Primary: `#ff4500`
- Secondary: `#ffd700`
- Main text: white or near-white
- Muted text: gray
- Visual direction: dark research lab + blackboard learning + code academy structure + football market intelligence
- UI reference blend: Codecademy + financial research desk + programming course interface + digital blackboard

## Typography rules

- Brand, topbar, and buttons: Arial Bold or Arial
- Body and UI: Arial
- Blackboard notes, formulas, and diagram annotations: Segoe Print with cursive fallback
- No external font files in V1

## Technical choices

- Architecture bias: static-first
- Hosting bias: GitHub Pages or simple VPS static hosting
- Product bias: scalable without requiring login in V1
- Implementation bias: file-based content, generated routes, and low operational complexity
- Dependency bias: prefer fewer dependencies and avoid backend pressure unless clearly necessary

## Content rules

- Course language: Portuguese
- English technical terms are allowed when useful
- Tone: serious, analytical, direct, practical, research-grade
- No emojis
- No hype language
- No promises of guaranteed outcomes
- Courses should be deep, structured, practical, and visually clear
- Each course should contain mental models, mechanisms, applied examples, failure modes, checklists, and practical exercises

## Editorial anti-hype rules

- Forbidden directions include: "green guaranteed", "lucro certo", "sinal infalivel", "aposta certa", "so copiar"
- Avoid copy-trading tone, guru framing, and miracle vocabulary
- Prefer precise claims, explicit uncertainty, and mechanism-first teaching

## Course categories for V1

1. Market Intelligence
2. Probability & Modeling
3. AI Prediction Systems
4. Football Research
5. Prediction Markets & On-chain
6. Risk & Execution

## Target personas

1. Trader Esportivo em Transicao
2. Analista Quantitativo Amador
3. Operador Cripto-Quant / Prediction Market Operator
4. Premium Report Consumer

## Folder rules

- Root knowledge files define the long-term operating system of the project
- `src/content/` stores public academy content
- `src/data/` stores structured data such as categories, personas, and site metadata
- `src/components/` stores reusable UI and academy-specific components
- `src/layouts/` stores page and content layouts
- `src/pages/` stores route entrypoints
- `public/assets/` stores public static images and diagrams
- `scripts/` stores validation, utility, and build-support scripts
- `private-generator/` stores non-public raw materials, prompts, and intermediate output
- `.agents/skills/` stores reusable agent skills and supporting references

## Course generation rules

- Do not write course content directly from a vague prompt
- Start from category, learner outcome, and course thesis
- Pass through course architecture before lesson writing
- Package output with consistent schema and metadata
- Validate depth, clarity, anti-hype compliance, and structural completeness before publication
- Separate raw generation, reviewed content, and public output

## Deployment assumptions

- V1 should be publishable as static output
- GitHub Pages compatibility is a first-class assumption
- Simple VPS static hosting should also be easy
- Avoid design or routing choices that require server-side sessions in V1
- Keep asset strategy straightforward and cache-friendly

## First-course memory

- First planned course: `Framework de 9 Passos para Analisar um Jogo de Futebol`
- This is a future course reference only
- Do not generate the course content yet

## Operating principle

- When implementation choices conflict with hype, complexity, or trendiness, choose clarity, research discipline, and maintainability
