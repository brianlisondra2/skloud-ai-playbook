---
name: skloud-implement
description: Read a SKLoud ClickUp ticket, embedded PRD/technical spec, linked specs, comments, attachments, and Lovable design evidence when present; inspect the relevant SKLoud frontend/backend repositories; draft an implementation plan with a branch plan for user review; then create/switch to the approved branch and implement only after the user approves the plan. Use for ClickUp-ticketed SKLoud engineering work, bug fixes, feature implementation, repo edits, branch-scoped implementation, test planning, PR preparation, and follow-up implementation tasks where requirements must stay traceable to the ticket and any design evidence.
---

# SKLoud Implement

## Operating Rule

Produce a reviewed plan before making product-code edits or creating implementation branches.

Do not create branches or implement until the user explicitly approves the implementation plan or asks to proceed after reviewing it. If the user starts by saying the plan is already approved, confirm the approved plan source and continue.

Treat an embedded `## PRD` or `## Technical Spec` section in the ClickUp task description as first-class authoritative planning evidence. Do not require a duplicate `.md` attachment when the complete content is embedded in ClickUp.

For user-facing work, do not draft the implementation plan until ClickUp has been checked for Lovable design evidence and any discovered design attachment/link has either been inspected or explicitly reported as inaccessible.

## Workflow

1. Identify the ClickUp ticket.
   - Use the ClickUp connector when available.
   - If the user provides a task URL, custom ID, or task ID, retrieve the task directly.
   - If the user gives only keywords, search ClickUp tasks and ask the user to choose when matches are ambiguous.
   - If ClickUp is unavailable, ask the user for the ticket text, embedded PRD/spec, comments, attachments, and links.
2. Read the full ticket intake before source planning. See [clickup-intake.md](references/clickup-intake.md).
   - Read the complete task description, including any embedded `## PRD` or `## Technical Spec`, before using attachment fallbacks.
   - Treat embedded planning sections as authoritative unless a later ClickUp comment explicitly supersedes them.
   - Check the task, subtasks, comments, linked docs, custom fields, and attachments for Lovable design evidence.
   - Do not treat attachment metadata or a filename as having inspected the design.
   - Retrieve/materialize and inspect design-relevant ClickUp attachments using available file, download, browser, PDF, or image tooling when ClickUp only exposes attachment metadata.
   - Before a UI implementation plan, establish one state: `Lovable design inspected`, `No Lovable design found`, or `Lovable design found but inaccessible`.
   - If design evidence is found but inaccessible, treat design-sensitive implementation as blocked unless the user explicitly approves proceeding without it.
3. Read SKLoud guidelines before planning or implementation.
   - Always read `instructions/team-ai-guidelines.md`, `instructions/repo-attachment.md`, and `instructions/plugin-and-apps.md` from the playbook when present.
   - Read `instructions/frontend-guidelines.md` for frontend/UI work.
   - Read `instructions/backend-guidelines.md` for API, database, auth, queue, job, or server behavior.
4. Inspect the relevant source repo before recommending changes.
   - Prefer local checkouts under `repos/skloud-app-frontend` and `repos/skloud-backend`.
   - If local repos are unavailable, use connected GitHub/source access.
   - If source access is incomplete, state assumptions and plan only to the level supported by available evidence.
5. Draft the implementation plan, including the proposed base branch and implementation branch, using [implementation-plan.md](references/implementation-plan.md).
6. Stop for user review.
   - Ask for approval to create/switch to the proposed branch and implement, or ask targeted questions if requirements are blocked.
   - Do not create branches or edit product source while waiting for plan approval.
7. After approval, create or switch to the approved implementation branch before editing.
   - Re-check the worktree and current branch first.
   - Base the branch on the approved target branch, or the repository default branch when the target is unspecified.
   - Use the naming pattern `codex/<clickup-id-or-area>-<short-task-slug>` unless the user or repo convention specifies another name.
   - If the target branch has unrelated local changes or an existing branch conflicts with the proposed name, pause and ask how to proceed.
8. Implement the approved plan.
   - Stay inside the approved scope.
   - Re-open ticket details, embedded PRD/spec, design evidence, and relevant source files when needed instead of relying on memory.
   - Preserve existing architecture, design system, route conventions, API contracts, auth/tenant rules, and test patterns unless the approved plan explicitly changes them.
9. Validate and report.
   - Run the smallest meaningful checks first, then broader checks when the blast radius warrants it.
   - If API/backend code changes add or modify migration files, comment on the GitHub PR with the exact migration command for those specific files before final handoff. Use `php artisan migrate --path=database/migrations/<file>.php` from the Laravel app root, include one command per migration file, and add any required storage/linking or rollout note when relevant.
   - Summarize branch created/used, files changed, validation run, residual risks, PRD/spec evidence used, design evidence used, and any ClickUp/GitHub handoff notes.

## Source Defaults

- Frontend: `repos/skloud-app-frontend` or `SKLoud-SDS-Devs/skloud-app-frontend`
- Backend: `repos/skloud-backend` or `SKLoud-SDS-Devs/skloud-backend`
- Existing delivery-package skill: `plugins/skloud-workflow-plugin/skills/skloud-delivery-package`

Do not copy product source into this skill. Point to repositories, specs, and guidelines instead.

## Implementation Guardrails

- Keep product decisions traceable to the ClickUp ticket, embedded PRD/spec, later scope-changing comments, or explicitly stated user approval.
- When the task description and a later ClickUp comment conflict, treat the later explicit clarification as the current requirement and call out the conflict in the plan.
- Do not require or search indefinitely for a `.md` attachment when the complete PRD/spec is already embedded in the ClickUp description.
- Keep branch creation traceable to the approved implementation plan.
- Do not create or switch branches before user approval unless the user explicitly asks for branch setup only.
- Do not invent routes, API contracts, database fields, permissions, status values, or design-system primitives.
- Do not modify authentication, authorization, payments, destructive data flows, migrations, or tenant/data ownership behavior unless the ticket and approved plan clearly require it.
- When approved API/backend work includes migration files, make the migration rollout visible in the PR by commenting the exact file-specific migration command(s).
- Do not treat screenshots, prototypes, or Lovable output as production source of truth when repository files are available.
- Do not claim a Lovable attachment was inspected unless its actual contents were opened/read, not merely its metadata.
- Do not attach secrets, credentials, `.env` values, or private production data to ClickUp, GitHub, Lovable, or prompts.
- Prefer focused commits/PR notes that cite the ClickUp task ID or URL when preparing handoff.
