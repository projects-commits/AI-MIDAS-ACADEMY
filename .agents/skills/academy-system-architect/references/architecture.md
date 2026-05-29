# Architecture reference

## Product assumptions

- Static-first site
- No login in V1
- No mandatory backend
- No browser-side LLM calls
- No exposed secrets

## Preferred stack shape

- Astro
- TypeScript
- MDX content
- Local browser interactivity when needed

## Structural preferences

- Route from content where possible
- Keep public content separate from private generation materials
- Favor deterministic scripts for validation and indexing
- Prefer simple client-side state such as localStorage over accounts in V1

## Hosting

- GitHub Pages compatible
- Simple static VPS compatible
