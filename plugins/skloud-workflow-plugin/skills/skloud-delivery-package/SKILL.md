---
name: skloud-delivery-package
description: Turn a SKLoud product or engineering problem into a planning and design delivery package. Use when Codex should inspect SKLoud frontend/backend patterns read-only, recommend a solution, draft a ClickUp-ready ticket, PRD or technical spec, UI/UX notes, Lovable design automation, Lovable folder/project setup, DESIGN.md context, or attach planning and design evidence to ClickUp for later implementation. This skill is strictly for planning, product definition, and design handoff; it must not implement code, edit repositories, create branches, commit, push, open PRs, or instruct another tool to modify production source files.
---

# SKLoud Delivery Package

## Workflow

1. Interpret the request.
2. Inspect relevant SKLoud source context read-only before final recommendations.
3. Recommend or refine the solution.
4. Prepare a ClickUp-ready ticket and ask for confirmation before creating it in ClickUp.
5. Prepare a PRD or technical spec when useful.
6. Prepare UI/UX direction grounded in the frontend code when user-facing behavior changes.
7. Prepare a design-only AI handoff prompt for Lovable, Google Stitch, or another named design tool when requested.
8. When the user provides a Lovable workspace, folder, or project URL, use Lovable connector tools when available to create or update design prototypes only.
9. When planning artifacts exist locally or are generated during the workflow, attach the implementation-relevant PRD, technical spec, or DESIGN.md to the ClickUp task before implementation handoff when ClickUp write tools are available and writes are approved.
10. When a Lovable design, preview, screenshot, or exported file exists, record it on the ClickUp ticket before handoff.
11. Verify the ClickUp task contains enough planning and design evidence for `skloud-implement` to build an implementation plan without depending on files that exist only on one person's machine.

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
- ClickUp attachment/comment status for PRD/spec/design evidence when a ClickUp task exists
- Open questions and assumptions
- Integration limits encountered

## ClickUp Creation Gate

Prepare the ClickUp-ready payload first. Before creating a live ClickUp task, show a concise readiness prompt:

`I have the planning package ready. Do you want me to create the ClickUp task now, or keep this as a draft/spec only?`

Use ClickUp write tools only after the user confirms task creation after this prompt. If the user requested task creation before the package was prepared, still pause at the readiness prompt instead of creating the task immediately.

## Planning Artifact Handoff

Treat the ClickUp task as the durable handoff boundary between planning/design and `skloud-implement`.

When a ClickUp task exists and a PRD, technical spec, DESIGN.md, or other implementation-relevant planning artifact exists:

- Prefer attaching the actual `.md`, `.pdf`, image, or exported artifact to the ClickUp task instead of leaving it only on the local filesystem.
- If the artifact was generated locally, locate the exact file and attach it with the ClickUp attachment tool when available and the user has approved ClickUp writes.
- Use clear filenames such as `PRD-<feature-slug>.md`, `TECH-SPEC-<feature-slug>.md`, or `DESIGN-<feature-slug>.md` when creating new artifacts. Preserve an existing filename when the user already has one.
- Add or preserve a short `Spec / PRD` reference in the task description or comment so a future agent can identify which attachment is authoritative.
- Do not claim an artifact is attached until the ClickUp attachment operation succeeds.
- If attachment tooling is unavailable, state that the artifact remains local and identify the exact file that must be uploaded manually before implementation handoff.

Before declaring a delivery package ready for implementation, report one of these states for each relevant artifact:

- `PRD/spec attached`: include filename.
- `PRD/spec not required`: explain briefly why.
- `PRD/spec exists but is not attached`: identify the local/generated file and the blocker.

For implementation-oriented tickets, prefer this evidence order in ClickUp:

1. Task problem, scope, and acceptance criteria.
2. Attached PRD or technical spec.
3. Lovable design evidence and design-state notes.
4. Comments containing later clarifications or scope changes.
5. Links to relevant source repositories, branches, or related tickets.

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

## Implementation Handoff Check

Before finishing a delivery package that is expected to move into `skloud-implement`, verify and report:

- ClickUp task exists or a ready-to-create payload is provided.
- Acceptance criteria are testable.
- PRD/spec is attached when one exists and materially affects implementation.
- Lovable design evidence is attached or linked when one exists and affects UI behavior.
- Later scope-changing comments are recorded on the task.
- No implementation-critical evidence is left only in an unshared local file without being called out as a blocker.

The goal is for `skloud-implement` to be able to reconstruct the approved requirement, design intent, and acceptance criteria from ClickUp plus the real source repositories.

## Guardrails

- Do not invent routes, API contracts, database fields, or design systems.
- Do not rely on screenshots alone when source files are available.
- Do not copy full product repos into skills.
- Keep artifacts concise and planning/design-ready.
