---
name: skloud-delivery-package
description: Turn a SKLoud product or engineering problem into a planning and design delivery package. Use when Codex should inspect SKLoud frontend/backend patterns read-only, recommend a solution, draft a ClickUp-ready ticket, PRD or technical spec, UI/UX notes, Lovable design automation, Lovable folder/project setup, DESIGN.md context, or attach/comment Lovable design links/evidence on ClickUp. This skill is strictly for planning, product definition, and design handoff; it must not implement code, edit repositories, create branches, commit, push, open PRs, or instruct another tool to modify production source files.
---

# SKLoud Delivery Package

## Workflow

1. Interpret the request.
2. Inspect relevant SKLoud source context read-only before final recommendations.
3. Recommend or refine the solution.
4. Prepare a ClickUp-ready ticket.
5. Prepare a PRD or technical spec when useful.
6. Prepare UI/UX direction grounded in the frontend code when user-facing behavior changes.
7. Prepare a design-only AI handoff prompt for Lovable, Google Stitch, or another named design tool when requested.
8. When the user provides a Lovable workspace, folder, or project URL, use Lovable connector tools when available to create or update design prototypes only.
9. When a Lovable design, preview, screenshot, or exported file exists, record it on the ClickUp ticket before handoff.

## Scope Boundary

This skill is planning/design only.

- Do not write, patch, generate, or modify application code.
- Do not clone repositories, create branches, commit, push, stage files, open pull requests, or mutate source control.
- Do not run implementation commands such as tests, builds, package installs, migrations, or dev servers.
- Do not create or modify production app files, even when the requested change seems small.
- Do not ask Lovable, Google Antigravity, Codex, or another tool to modify production source files.
- Do inspect frontend/backend source, screenshots, or docs only to understand existing patterns and produce planning/design guidance.
- If the user asks for implementation while this skill is active, stop at a planning/design artifact and state that implementation belongs in `skloud-implement` after approval.

## Source Defaults

- Frontend: `repos/skloud-app-frontend` or `SKLoud-SDS-Devs/skloud-app-frontend`
- Backend: `repos/skloud-backend` or `SKLoud-SDS-Devs/skloud-backend`
- ClickUp list: `901614444165`

Prefer an existing local checkout under `repos/`. If unavailable, use GitHub connector/source access. If neither is available, state the limitation and produce a best-effort package with assumptions. Do not clone or mutate repositories while using this skill.

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
- Lovable design URL, preview URL, screenshots/export references, or design handoff prompt when applicable
- ClickUp comment/attachment status for Lovable design evidence when a ClickUp task exists
- Open questions and assumptions
- Integration limits encountered

## Lovable Handoff

When the user wants Lovable:

- Make the prompt design-first.
- Tell Lovable to create a design prototype, design brief, state matrix, or visual direction. Do not ask Lovable to modify production source files.
- Include `DESIGN.md` or source-design context.
- List exact files to upload or inspect.
- Add guardrails: no production source edits, no new app shell, no new palette, no route changes, no auth/store changes unless requested.
- Ask for a preview link, screenshots, or exported file.
- Add the Lovable design evidence to the ClickUp task as a comment or attachment when ClickUp write tools are available and the user has approved writes.
- If ClickUp writes are unavailable, include a clearly labeled `Lovable Design Evidence` section in the ClickUp-ready ticket payload so the creator can paste it into the task.

When the user asks to add designs to Lovable:

- Parse Lovable URLs for workspace, folder, and project IDs.
- List projects in the target workspace before creating a new one.
- If a production Lovable project exists for `skloud-app-frontend`, send only a design/planning prompt with explicit no-source-edit guardrails.
- Create design prototypes only. State that they are not production source changes.
- Make the first screen the actual product/design surface, not a marketing page.
- Include design variants, responsive states, empty/loading/error states, and design/developer notes.
- Move the created project into the supplied Lovable folder when a folder ID is provided.
- If Lovable creation times out, search the workspace before retrying because the project may have been created.

## ClickUp Design Traceability

For user-facing work with a Lovable design, ensure the ClickUp task contains enough evidence for `skloud-implement` to read later:

- Lovable project or preview URL
- Whether the design is a standalone prototype or source-grounded design brief
- Screenshots or exported files when available
- Design intent and important states: desktop, tablet, mobile, empty, loading, error, disabled, and dark mode when applicable
- Design/developer constraints: files to inspect, no-go areas, and source-code assumptions

Prefer a ClickUp comment for generated or discovered design evidence after the task exists. Prefer attachments for exported screenshots or documents. Never attach secrets, environment files, production credentials, or private data.

## Guardrails

- Do not invent routes, API contracts, database fields, or design systems.
- Do not rely on screenshots alone when source files are available.
- Do not copy full product repos into skills.
- Keep artifacts concise and planning/design-ready.
