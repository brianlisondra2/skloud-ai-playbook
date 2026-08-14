# Fresh Team Member Setup

Use this guide when onboarding a new SKLoud team member to the AI playbook.

## 1. Confirm Access

Before setup, confirm the team member has access to:

- This playbook repository: `brianlisondra2/skloud-ai-playbook`
- Frontend repository: `SKLoud-SDS-Devs/skloud-app-frontend`
- Backend repository: `SKLoud-SDS-Devs/skloud-backend`
- ClickUp workspace and the SKLoud delivery list
- Lovable workspace or production-connected project when design handoff is needed
- Codex or ChatGPT workspace where plugins, connectors, and MCP servers are managed

Do not use AI tooling to bypass missing source-system access. If a user cannot access a repository, ClickUp task, or Lovable project directly, pause and resolve permissions first.

## 2. Clone The Playbook

Clone this repository to a local workspace:

```powershell
git clone https://github.com/brianlisondra2/skloud-ai-playbook.git
cd skloud-ai-playbook
```

Open this folder in Codex. Codex should read the root `AGENTS.md` automatically when starting from the playbook directory.

## Quick Setup Command

From the playbook root, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-fresh.ps1 -CloneOnly
```

This command checks local prerequisites, prepares `repos/`, attaches the frontend/backend repositories as independent local clones, prints the SKLoud plugin path, and reminds the user which workspace apps and MCP servers still need to be connected.

For submodules instead of independent clones, omit `-CloneOnly`:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-fresh.ps1
```

Useful options:

- `-SkipRepos`: skip frontend/backend repository attachment.
- `-SkipPluginReminder`: skip the SKLoud plugin reminder.

## 3. Attach Product Repositories

Attach product repositories under `repos/` so Codex can inspect real source context without copying product code into the playbook.

For pinned repo revisions, use submodules:

```powershell
.\scripts\attach-repos.ps1 `
  -FrontendUrl "https://github.com/SKLoud-SDS-Devs/skloud-app-frontend.git" `
  -BackendUrl "https://github.com/SKLoud-SDS-Devs/skloud-backend.git"
```

For independent local clones, use clone-only mode:

```powershell
.\scripts\attach-repos.ps1 `
  -FrontendUrl "https://github.com/SKLoud-SDS-Devs/skloud-app-frontend.git" `
  -BackendUrl "https://github.com/SKLoud-SDS-Devs/skloud-backend.git" `
  -CloneOnly
```

Expected layout:

```text
repos/
  skloud-app-frontend/
  skloud-backend/
```

## 4. Install Or Share The SKLoud Plugin

Use `plugins/skloud-workflow-plugin` as the local plugin source. Install or share it through the team's approved Codex plugin management or workspace admin flow.

The helper script prints the plugin path and reminder:

```powershell
.\scripts\install-local-plugin.ps1
```

Available SKLoud skills:

- `skloud-delivery-package`: planning, PRD/spec, ClickUp-ready tickets, UI/UX direction, and Lovable design handoff. This is read-only for product source and must not implement code.
- `skloud-implement`: ClickUp-grounded implementation planning and approved repo edits. This must produce a reviewed plan before creating branches or changing product code.

## 5. Connect Apps And MCP Servers

In the Codex or ChatGPT workspace, connect the tools each role needs:

- GitHub for repository context, branches, commits, PRs, issues, and code search.
- ClickUp for tickets, comments, links, and delivery tracking.
- Lovable for source-grounded design briefs, prototypes, previews, and design evidence.
- shadcn MCP server for frontend/UI component docs, examples, registry metadata, and shadcn-compatible component installation.

Prefer read access by default. Require explicit confirmation before writes such as task creation, comments, file attachments, branches, commits, PRs, or app-generated source changes.

For shadcn MCP, use the team-approved Codex MCP configuration path. If the MCP server is not available in a session, ask Codex to discover and connect it before frontend component work:

```text
Check whether the shadcn MCP server is available. If not, help me install or connect it using the team-approved Codex MCP configuration path before changing frontend components.
```

Do not install shadcn components into this playbook repository. Install or update components only in `repos/skloud-app-frontend` after an implementation plan is approved.

## 6. Verify The Setup

Ask Codex from the playbook root:

```text
Summarize the active AGENTS.md instructions for this repository and list the SKLoud source repositories you can inspect.
```

Expected result:

- Codex mentions the root `AGENTS.md`.
- Codex can see `repos/skloud-app-frontend` and `repos/skloud-backend`, or clearly states they are missing.
- Codex knows planning work belongs in `skloud-delivery-package`.
- Codex knows implementation work belongs in `skloud-implement`.
- Codex treats Lovable output as design evidence unless production implementation is explicitly approved.

## 7. First Useful Prompts

For planning/design work:

```text
Use the SKLoud delivery-package workflow. Inspect the relevant frontend/backend source read-only, then draft a ClickUp-ready ticket, acceptance criteria, risks, validation steps, and any Lovable design handoff prompt needed.
```

For implementation work:

```text
Use the SKLoud implement workflow for this ClickUp ticket: <task URL>. Read the ticket, linked design evidence, and relevant source. Draft an implementation plan first and wait for my approval before creating a branch or editing product code.
```

For frontend component work:

```text
Inspect the existing SKLoud frontend patterns and use the shadcn MCP server for relevant component docs/examples before proposing the UI approach.
```

## 8. Team Rules To Remember

- Keep product code in product repositories.
- Keep skills and templates concise and reusable.
- Do not invent routes, API contracts, database fields, permissions, status values, or design-system primitives.
- Do not attach secrets, `.env` files, production credentials, or private production data to AI prompts or generated artifacts.
- Keep product-facing decisions traceable to ClickUp tasks.
