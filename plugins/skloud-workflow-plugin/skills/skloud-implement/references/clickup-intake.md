# ClickUp Intake

## Retrieve

Use ClickUp tools in this order when available:

1. Get the task by task ID, custom ID, or URL-derived ID.
2. Include subtasks when they may carry acceptance criteria or implementation details.
3. Get task comments for clarifications, decisions, QA notes, screenshots, or changed scope.
4. Search for linked docs or specs mentioned by title, URL, attachment name, or ticket text.
5. Read linked ClickUp document pages when the task points to ClickUp Docs.
6. Search the task description, comments, attachments, subtasks, linked docs, and custom fields for Lovable design evidence.
7. If the task or comments contain attachments, enumerate the attachment metadata and identify design-relevant files before planning.

## Lovable Design Intake

Treat Lovable design evidence as required source material for user-facing work when present.

Look for:

- Lovable project URLs, preview URLs, workspace/folder/project IDs, exported files, screenshots, PDFs, images, ZIP exports, or GitHub branches/commits produced by Lovable.
- ClickUp comments titled or labeled `Lovable Design`, `Lovable Design Evidence`, `Design`, `Prototype`, `Preview`, or similar.
- Notes that identify whether the Lovable work is production-connected or a standalone prototype.
- Design states, screenshots, responsive variants, empty/loading/error states, dark mode notes, and implementation constraints.

When Lovable evidence exists:

1. Read or inspect it before inspecting implementation details or drafting the plan.
2. For a Lovable URL or preview URL, use the Lovable connector, browser, or source access when available.
3. For a ClickUp attachment:
   - Identify its filename, type, URL/reference, and the task/comment it came from.
   - Retrieve or materialize the attachment with the available file/download/browser tooling when the ClickUp connector itself only exposes metadata.
   - Inspect images visually. Inspect PDFs using the PDF workflow. Read text/code exports directly. For archives, inspect the contained design/spec files without treating generated application code as production source of truth.
   - Do not mark the design as "read" merely because the attachment filename or metadata was visible.
4. Compare the design against the real frontend source; repository code remains the production source of truth.
5. Record design-derived requirements separately from ticket/spec/source evidence.
6. If the attachment or Lovable link cannot be retrieved with the tools available in the current session, state exactly what was discovered (filename/link/location) and what could not be opened. Treat design-sensitive implementation as blocked unless the user explicitly approves proceeding without that evidence.

Before drafting a UI implementation plan, explicitly report one of these states:

- `Lovable design inspected`: include the design source(s) inspected.
- `No Lovable design found`: after checking the task, comments, attachments, linked docs, and custom fields.
- `Lovable design found but inaccessible`: identify the attachment/link and the access/tooling gap.

## Extract

Capture:

- Task ID, title, URL, status, assignees, due date, priority, tags, list, and parent/subtask relationship.
- Problem statement and expected outcome.
- User stories, acceptance criteria, QA notes, and non-goals.
- Explicit frontend, backend, API, database, auth, permission, integration, notification, or analytics requirements.
- Links to specs, Lovable designs/previews, screenshots, docs, PRs, branches, and related tickets.
- ClickUp attachment filenames/types and whether each design-relevant attachment was successfully inspected.
- Comments that supersede the description or narrow the scope.
- Ambiguities, contradictions, missing assets, and decisions needing user confirmation.

## Traceability

When planning, map each implementation step to ticket evidence:

- `Ticket`: task description, acceptance criteria, or custom fields.
- `Comment`: author/date summary when comments change scope.
- `Spec`: linked doc/page/section.
- `Lovable`: design URL, preview, screenshot/export, attachment, or design comment; note whether it was actually inspected.
- `Source`: repository files inspected.
- `Assumption`: clearly mark anything not directly supported by source material.

Do not bury uncertain requirements. Put blockers and assumptions in the plan before implementation starts.
