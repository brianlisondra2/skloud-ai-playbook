# SKLoud AI Playbook

Shared AI operating manual for SKLoud product, design, frontend, backend, ClickUp, and implementation handoffs.

This repo is intended to be used by SKLoud team members with Codex, ChatGPT, Lovable, and related AI tools. It keeps reusable instructions, skills, templates, and plugin scaffolding in one place while the product repositories remain separate.

## Structure

```text
instructions/                         Team-level AI guidance
templates/                            Reusable output and handoff templates
scripts/                              Helper scripts for setup and repo attachment
repos/                                Optional local clones or git submodules
plugins/skloud-workflow-plugin/       Codex plugin wrapper with SKLoud skills
```

## Recommended Setup

1. Clone this playbook repo.
2. Attach product repositories under `repos/` as submodules or sibling clones:
   - `skloud-app-frontend`
   - `skloud-backend`
3. Install or share the `skloud-workflow-plugin` plugin with team members.
4. Use the templates in `templates/` for Lovable, ClickUp, PRDs, technical specs, and design-system handoff.

## Repository Attachment

Run this from the playbook root when you have access to the repos:

```powershell
.\scripts\attach-repos.ps1 `
  -FrontendUrl "https://github.com/SKLoud-SDS-Devs/skloud-app-frontend.git" `
  -BackendUrl "https://github.com/SKLoud-SDS-Devs/skloud-backend.git"
```

By default, the script adds repos as git submodules under `repos/`. Use `-CloneOnly` to clone without submodules.

## Skill Usage

The first included skill is:

- `skloud-delivery-package`: turns a product problem into a ClickUp-ready ticket, PRD/spec, UI/UX design notes, and Lovable/AI handoff grounded in SKLoud frontend/backend code.

## Team Rule

Do not paste large application code into a skill. Keep product code in product repos, and keep skills as concise repeatable workflows that know which files to inspect.
