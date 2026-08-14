# Implementation Plan Format

Use this format after reading the ticket, specs, guidelines, and source context.

## Plan Sections

### Ticket Summary

- ClickUp task ID/title/status/link.
- Short restatement of the requested change.
- Scope boundaries and non-goals.

### Evidence Read

- Ticket fields and comments reviewed.
- Linked specs/docs/designs reviewed.
- Lovable design evidence reviewed, or explicitly state that none was found.
- Guidelines read.
- Source files, routes, components, models, services, tests, or configs inspected.

### Proposed Approach

- Recommended implementation path.
- How the implementation follows or intentionally differs from the Lovable design, when present.
- Frontend changes, when applicable.
- Backend/API/data changes, when applicable.
- State, validation, permissions, tenant/data ownership, and error behavior.
- Migration or rollout notes, when applicable.

### Branch Plan

- Target/base branch and why it is the right starting point.
- Proposed implementation branch name.
- Whether a new branch should be created or an existing branch should be reused.
- Any worktree, remote, or branch-name risks that need user approval.

### File-Level Work Plan

List likely files to create or edit with the reason for each. If exact files are still uncertain, list search targets and decision criteria.

### Validation Plan

- Automated tests to add/update/run.
- Manual QA steps.
- Responsive/theme/browser checks for UI work.
- Data setup or fixtures needed.

### Risks And Questions

- Blockers that require user input.
- Assumptions that need approval.
- Known tradeoffs or follow-up tickets.

### Approval Prompt

End with a concise approval request, such as:

`Review this plan and tell me what to change. Once you approve it, I will implement it and run the validation steps above.`

## After Approval

Before creating the branch or editing, re-check:

- The user approved the current plan.
- The worktree status and existing user changes.
- The current branch, target/base branch, and proposed implementation branch name.
- The ticket scope has not changed in ClickUp comments/specs if enough time has passed or the user mentions updates.

Create or switch to the approved implementation branch before editing product files. During implementation, keep changes scoped to the approved plan. If source inspection reveals a materially different approach is needed, pause and present a plan update before continuing.
