# AGENTS.md

## Repository Purpose

This repository is the SKLoud AI playbook. It stores shared instructions, templates, scripts, and plugin/skill scaffolding for AI-assisted product, design, frontend, backend, ClickUp, Lovable, and implementation workflows.

Keep this repo lightweight. Product source belongs in the attached product repositories under `repos/` or in their upstream GitHub repositories, not copied into playbook skills or templates.

## Read First

Before planning or editing, inspect the relevant playbook guidance:

- `README.md` for repository structure and setup.
- `instructions/team-ai-guidelines.md` for default team operating rules.
- `instructions/repo-attachment.md` for product repository layout.
- `instructions/plugin-and-apps.md` for app, plugin, permission, and Lovable rules.
- `instructions/frontend-guidelines.md` for `skloud-app-frontend` work.
- `instructions/backend-guidelines.md` for `skloud-backend` work.

When a skill applies, read its `SKILL.md` and only the referenced files needed for the request.

## Source Context

Prefer local product checkouts when they exist:

- Frontend: `repos/skloud-app-frontend`
- Backend: `repos/skloud-backend`

If a local checkout is missing, use connected GitHub/source access when available. If source access is incomplete, state assumptions clearly and limit recommendations to what the available evidence supports.

## MCP And UI Tooling

For frontend or UI component work, use the shadcn MCP server when available to inspect component docs, examples, registry metadata, and install/update shadcn-compatible components.

- Before hand-rolling UI primitives, check existing SKLoud frontend patterns and query the shadcn MCP server for relevant components or examples.
- If the shadcn MCP server is not available in the current Codex session, look for an available shadcn MCP/plugin/tool through tool discovery.
- If installation or connection is required, ask for approval and install/connect the shadcn MCP server using the team-approved Codex MCP configuration path.
- After installing or connecting the MCP server, restart or refresh the Codex session if needed so the tools are loaded before continuing.
- Do not install UI components into this playbook repository. Install or update components only in the intended frontend product repository after the implementation plan is approved.

## Planning And Delivery Packages

For planning, PRD, technical spec, ClickUp, design direction, or Lovable handoff work:

- Use `plugins/skloud-workflow-plugin/skills/skloud-delivery-package`.
- Inspect source context read-only before final recommendations.
- Produce implementation-ready artifacts with target files, acceptance criteria, validation steps, risks, and open questions.
- Ask for confirmation before creating or mutating live ClickUp tasks.
- Treat Lovable prototypes as design evidence unless explicitly connected to a production implementation flow.

## Implementation Work

For product-code implementation:

- Use `plugins/skloud-workflow-plugin/skills/skloud-implement`.
- Start from a ClickUp ticket or clearly stated approved requirement.
- Draft an implementation plan before creating branches or editing product source.
- Wait for explicit user approval before branch creation or implementation unless the user already approved a specific plan.
- Keep branches scoped and named with `codex/<clickup-id-or-area>-<short-task-slug>` unless the repo convention says otherwise.
- Run the smallest meaningful validation first, then broader checks when the change warrants it.

## Guardrails

- Prefer existing repository patterns over new abstractions.
- Do not invent routes, API contracts, database fields, permissions, status values, or design-system primitives.
- Do not alter authentication, authorization, payments, destructive data flows, migrations, or tenant/data ownership behavior unless explicitly scoped and approved.
- Do not rely on screenshots alone when source files are available.
- Do not paste or store secrets, `.env` values, production credentials, or private production data in this repo, prompts, ClickUp, GitHub, Lovable, or generated artifacts.
- Keep generated templates concise and handoff-ready.

## Editing This Playbook

- Keep instructions short, durable, and easy for agents to apply.
- Prefer updating an existing instruction file or skill reference over duplicating detailed rules in multiple places.
- When adding a new template, include enough headings for consistent handoff but avoid embedding product-specific source code.
- When changing scripts, preserve PowerShell compatibility for Windows users.
