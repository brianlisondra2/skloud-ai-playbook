---
name: skloud-implement
description: Read a SKLoud ClickUp ticket, linked specs, comments, attachments, and Lovable design evidence when present; inspect the relevant SKLoud frontend/backend repositories; draft an implementation plan for user review; then implement only after the user approves the plan. Use for ClickUp-ticketed SKLoud engineering work, bug fixes, feature implementation, repo edits, test planning, PR preparation, and follow-up implementation tasks where requirements must stay traceable to the ticket and any attached Lovable design.
---

# SKLoud Implement

## Operating Rule

Produce a reviewed plan before making product-code edits.

Do not implement until the user explicitly approves the implementation plan or asks to proceed after reviewing it. If the user starts by saying the plan is already approved, confirm the approved plan source and continue.

## Workflow

1. Identify the ClickUp ticket.
   - Use the ClickUp connector when available.
   - If the user provides a task URL, custom ID, or task ID, retrieve the task directly.
   - If the user gives only keywords, search ClickUp tasks and ask the user to choose when matches are ambiguous.
   - If ClickUp is unavailable, ask the user for the ticket text, specs, comments, and links.
2. Read the ticket intake, including Lovable design evidence if present. See [clickup-intake.md](references/clickup-intake.md).
3. Read SKLoud guidelines before planning or implementation.
   - Always read `instructions/team-ai-guidelines.md`, `instructions/repo-attachment.md`, and `instructions/plugin-and-apps.md` from the playbook when present.
   - Read `instructions/frontend-guidelines.md` for frontend/UI work.
   - Read `instructions/backend-guidelines.md` for API, database, auth, queue, job, or server behavior.
4. Inspect the relevant source repo before recommending changes.
   - Prefer local checkouts under `repos/skloud-app-frontend` and `repos/skloud-backend`.
   - If local repos are unavailable, use connected GitHub/source access.
   - If source access is incomplete, state assumptions and plan only to the level supported by available evidence.
5. Draft the implementation plan using [implementation-plan.md](references/implementation-plan.md).
6. Stop for user review.
   - Ask for approval to implement, or ask targeted questions if requirements are blocked.
   - Do not edit product source while waiting for plan approval.
7. After approval, implement the approved plan.
   - Stay inside the approved scope.
   - Re-open ticket details and relevant source files when needed instead of relying on memory.
   - Preserve existing architecture, design system, route conventions, API contracts, auth/tenant rules, and test patterns unless the approved plan explicitly changes them.
8. Validate and report.
   - Run the smallest meaningful checks first, then broader checks when the blast radius warrants it.
   - Summarize files changed, validation run, residual risks, and any ClickUp/GitHub handoff notes.

## Source Defaults

- Frontend: `repos/skloud-app-frontend` or `SKLoud-SDS-Devs/skloud-app-frontend`
- Backend: `repos/skloud-backend` or `SKLoud-SDS-Devs/skloud-backend`
- Existing delivery-package skill: `plugins/skloud-workflow-plugin/skills/skloud-delivery-package`

Do not copy product source into this skill. Point to repositories, specs, and guidelines instead.

## Implementation Guardrails

- Keep product decisions traceable to the ClickUp ticket or explicitly stated user approval.
- Do not invent routes, API contracts, database fields, permissions, status values, or design-system primitives.
- Do not modify authentication, authorization, payments, destructive data flows, migrations, or tenant/data ownership behavior unless the ticket and approved plan clearly require it.
- Do not treat screenshots, prototypes, or Lovable output as production source of truth when repository files are available.
- Do not attach secrets, credentials, `.env` values, or private production data to ClickUp, GitHub, Lovable, or prompts.
- Prefer focused commits/PR notes that cite the ClickUp task ID or URL when preparing handoff.
