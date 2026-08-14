# Team AI Guidelines

Use these rules for SKLoud AI-assisted work.

## Default Behavior

- Inspect the relevant repository before recommending or implementing changes.
- Prefer existing patterns over new abstractions.
- Keep outputs implementation-ready: target files, acceptance criteria, validation steps, and risks.
- State assumptions when source access is incomplete.
- Keep project decisions traceable to ClickUp tasks when work is product-facing.

## Tool Use

- Use GitHub or the local checkout for source context.
- Use ClickUp for tickets and delivery tracking.
- Use Lovable for design/code exploration only with `DESIGN.md` and current source context.
- Use production-connected Lovable projects for implementation prompts. Use standalone Lovable projects only as clearly labeled design prototypes.
- Use Codex for repo edits, reviews, tests, PR prep, and skill/plugin maintenance.

## Guardrails

- Do not invent design systems, routes, API contracts, or database fields.
- Do not change authentication, authorization, payments, or destructive data flows without explicit scope.
- Do not use screenshots alone when source files are available.
- Do not attach secret values, production credentials, or private environment files to AI prompts.
- Do not claim a Lovable prototype changed production code. Link the prototype separately from implementation PRs or commits.
