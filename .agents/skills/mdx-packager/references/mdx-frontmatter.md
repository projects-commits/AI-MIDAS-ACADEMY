# MDX frontmatter reference

## Rules

- Use JSON-compatible frontmatter inside the `---` block
- Include all required schema fields
- Keep ids, slugs, and timestamps explicit
- Keep nested lesson and module objects consistent

## Validation reminders

- `courseStats` must match actual counts
- lesson `courseId` must match the parent course id
- lesson `moduleId` must point to a real module
