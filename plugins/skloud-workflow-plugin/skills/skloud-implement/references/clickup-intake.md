# ClickUp Intake

## Retrieve

Use ClickUp tools in this order when available:

1. Get the task by task ID, custom ID, or URL-derived ID.
2. Include subtasks when they may carry acceptance criteria or implementation details.
3. Get task comments for clarifications, decisions, QA notes, screenshots, or changed scope.
4. Search for linked docs or specs mentioned by title, URL, attachment name, or ticket text.
5. Read linked ClickUp document pages when the task points to ClickUp Docs.
6. Search the task description, comments, attachments, subtasks, linked docs, and custom fields for Lovable design evidence.

## Lovable Design Intake

Treat Lovable design evidence as required source material for user-facing work when present.

Look for:

- Lovable project URLs, preview URLs, workspace/folder/project IDs, exported files, screenshots, or GitHub branches/commits produced by Lovable.
- ClickUp comments titled or labeled `Lovable Design`, `Lovable Design Evidence`, `Design`, `Prototype`, `Preview`, or similar.
- Notes that identify whether the Lovable work is production-connected or a standalone prototype.
- Design states, screenshots, responsive variants, empty/loading/error states, dark mode notes, and implementation constraints.

When Lovable evidence exists:

- Read it before inspecting implementation details or drafting the plan.
- Use Lovable connector/browser/source access when available to inspect the design or preview.
- Compare the design against the real frontend source; repository code remains the production source of truth.
- Record design-derived requirements separately from ticket/spec/source evidence.
- If a Lovable link is inaccessible, say so in the plan and ask for the missing design access or screenshots before implementing design-sensitive work.

## Extract

Capture:

- Task ID, title, URL, status, assignees, due date, priority, tags, list, and parent/subtask relationship.
- Problem statement and expected outcome.
- User stories, acceptance criteria, QA notes, and non-goals.
- Explicit frontend, backend, API, database, auth, permission, integration, notification, or analytics requirements.
- Links to specs, Lovable designs/previews, screenshots, docs, PRs, branches, and related tickets.
- Comments that supersede the description or narrow the scope.
- Ambiguities, contradictions, missing assets, and decisions needing user confirmation.

## Traceability

When planning, map each implementation step to ticket evidence:

- `Ticket`: task description, acceptance criteria, or custom fields.
- `Comment`: author/date summary when comments change scope.
- `Spec`: linked doc/page/section.
- `Lovable`: design URL, preview, screenshot/export, or design comment.
- `Source`: repository files inspected.
- `Assumption`: clearly mark anything not directly supported by source material.

Do not bury uncertain requirements. Put blockers and assumptions in the plan before implementation starts.
