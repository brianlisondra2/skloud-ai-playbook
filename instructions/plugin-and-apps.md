# Plugin And App Setup

Use this file when preparing the SKLoud AI playbook for team members.

## Recommended Apps

- GitHub: source inspection, PRs, issues, code search
- ClickUp: product tasks, comments, links, delivery tracking
- Lovable: design/code exploration from `DESIGN.md` and source context

## Permissions

- Prefer read access by default.
- Require confirmation for writes such as task creation, comments, file attachments, commits, branches, PRs, or app-generated code changes.
- Keep source-system permissions authoritative. If a member cannot access a repo or ClickUp task directly, the AI tool should not be used to bypass that.

## Plugin Strategy

- Use `plugins/skloud-workflow-plugin` as the team plugin wrapper.
- Keep reusable workflows as skills inside the plugin.
- Keep external app setup in workspace settings; do not hard-code credentials or secrets into plugin files.

