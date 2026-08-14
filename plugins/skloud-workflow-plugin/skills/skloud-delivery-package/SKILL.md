---
name: skloud-delivery-package
description: Turn a SKLoud product or engineering problem into an implementation-ready delivery package. Use when Codex should inspect SKLoud frontend/backend repos, recommend a solution, draft a ClickUp-ready ticket, PRD or technical spec, UI/UX notes, Lovable handoff, DESIGN.md context, or implementation prompt for SKLoud work.
---

# SKLoud Delivery Package

## Workflow

1. Interpret the request.
2. Inspect relevant SKLoud source context before final recommendations.
3. Recommend or refine the solution.
4. Prepare a ClickUp-ready ticket.
5. Prepare a PRD or technical spec when useful.
6. Prepare UI/UX direction grounded in the frontend code when user-facing behavior changes.
7. Prepare an AI handoff prompt for Lovable, Codex, or another named tool when requested.

## Source Defaults

- Frontend: `repos/skloud-app-frontend` or `SKLoud-SDS-Devs/skloud-app-frontend`
- Backend: `repos/skloud-backend` or `SKLoud-SDS-Devs/skloud-backend`
- ClickUp list: `901614444165`

Prefer a local checkout under `repos/`. If unavailable, use GitHub connector/source access. If neither is available, state the limitation and produce a best-effort package with assumptions.

## Frontend Context

When UI consistency matters, inspect:

- `components.json`
- `package.json`
- `app/assets/css/tailwind.css`
- `app/assets/css/main.css`
- relevant appbar/layout/page/component files

Capture components, tokens, typography, spacing, radius, dark mode, responsive behavior, interaction states, and nearby examples.

## Backend Context

When API or data behavior matters, inspect:

- route definitions
- controllers/handlers
- services/actions/jobs
- models/entities
- migrations/schema files
- validation/request classes
- tests and factories/fixtures

Capture endpoint contracts, permissions, validation, data ownership, error states, and test expectations.

## Delivery Output

Return:

- Recommended solution
- ClickUp task URL or ClickUp-ready payload
- PRD/spec content or location
- UI/UX design summary when applicable
- Lovable or AI handoff prompt when requested
- Open questions and assumptions
- Integration limits encountered

## Lovable Handoff

When the user wants Lovable:

- Make the prompt code-first.
- Tell Lovable to modify the existing codebase.
- Include `DESIGN.md` or source-design context.
- List exact files to upload or inspect.
- Add guardrails: no new app shell, no new palette, no route changes, no auth/store changes unless requested.
- Ask for a preview link, screenshots, exported file, or GitHub branch/commit to attach to ClickUp.

## Guardrails

- Do not invent routes, API contracts, database fields, or design systems.
- Do not rely on screenshots alone when source files are available.
- Do not copy full product repos into skills.
- Keep artifacts concise and implementation-ready.

