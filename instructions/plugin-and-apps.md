# Plugin And App Setup

Use this file when preparing the SKLoud AI playbook for team members.

## Recommended Apps

- GitHub: source inspection, PRs, issues, code search
- ClickUp: product tasks, comments, links, delivery tracking
- Lovable: design/code exploration from `DESIGN.md` and source context; use production-connected projects for implementation and separate prototypes for design exploration

## Permissions

- Prefer read access by default.
- Require confirmation for writes such as task creation, comments, file attachments, commits, branches, PRs, or app-generated code changes.
- Keep source-system permissions authoritative. If a member cannot access a repo or ClickUp task directly, the AI tool should not be used to bypass that.
- For Lovable folder/project requests, confirm whether the target is a production-connected project or a design prototype. Do not imply a prototype changed production code.

## Plugin Strategy

- Use `plugins/skloud-workflow-plugin` as the team plugin wrapper.
- Keep reusable workflows as skills inside the plugin.
- Keep external app setup in workspace settings; do not hard-code credentials or secrets into plugin files.
- When Lovable project creation times out, check the workspace for a newly created project before retrying.
