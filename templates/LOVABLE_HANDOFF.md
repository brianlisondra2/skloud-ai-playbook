# Lovable Handoff

Use this with `templates/DESIGN.md` and current source files. Prefer a production-connected Lovable project for implementation. If the production repo is not connected, use this as a design prototype prompt and state that limitation clearly.

## Goal

## Target Files

## Current Problem

## Required Behavior

## Lovable Prompt

```text
You are working on the existing SKLoud codebase. Use DESIGN.md as the design-system source of truth.

Task:

Important:
- Modify the existing codebase.
- Do not generate an unrelated app shell.
- Do not redesign SKLoud brand, tokens, typography, routes, or component system.
- Reuse existing components and patterns.

Return:
- Design summary.
- Changed files.
- Implemented code changes or preview link.
- Risks and assumptions.
```

## Lovable Design Prototype Prompt

Use this variant when the production frontend is not connected to Lovable and the user wants design exploration in a Lovable workspace or folder.

```text
Create a high-fidelity interactive design prototype for SKLoud.

This is a design prototype, not the production repository. Ground the prototype in the existing SKLoud frontend design system and make the first screen the actual product experience, not a landing page.

Use:
- SKLoud source-design context from DESIGN.md.
- Existing page/component references listed below.
- Nuxt/Vue production target files as implementation notes.
- Tailwind tokens, shadcn-vue/Reka style, lucide-style icons, Inter typography, neutral surfaces, SKLoud primary accent, and existing card/form/table patterns.

Include:
- 2-3 polished design variants when useful.
- Desktop, tablet, and mobile responsive states.
- Loading, empty, error, and success states where relevant.
- Compact implementation notes mapped to target files.

Do not:
- Create a generic marketing page.
- Invent a new app shell, palette, routes, auth flow, store behavior, or component system.
- Depend only on screenshots when source context is available.

Return:
- Editor or preview link.
- Design summary.
- Recommended production files to change.
- Risks, assumptions, and validation notes.
```

## Files To Provide

## Validation

## ClickUp Attachment Plan

## Lovable Connector Checklist

- Extract workspace ID from `/dashboard/<workspace_id>`.
- Extract folder ID from `/folders/<folder_id>`.
- Extract project ID from `/projects/<project_id>`.
- List workspace projects before creating a new project.
- Move new design projects into the supplied folder.
- After a create timeout, list projects before retrying to avoid duplicates.
