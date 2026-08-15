---
name: skloud-delivery-package
description: Turn a SKLoud product or engineering problem into a planning and design delivery package. Use when Codex should inspect SKLoud frontend/backend patterns read-only, recommend a solution, draft a ClickUp-ready ticket, PRD or technical spec, prepare UI/UX direction, automatically create or update a design-only Lovable prototype in the SKLoud Pro workspace for user-facing work, set up Lovable folders/projects or DESIGN.md context, or record planning and design evidence in ClickUp for later implementation. This skill is strictly for planning, product definition, and design handoff; it must not implement code, edit repositories, create branches, commit, push, open PRs, or instruct another tool to modify production source files.
---

# SKLoud Delivery Package

## Workflow

1. Interpret the request.
2. Inspect relevant SKLoud source context read-only before final recommendations.
3. Recommend or refine the solution.
4. Prepare a ClickUp-ready ticket and ask for confirmation before creating it in ClickUp.
5. Prepare a PRD or technical spec when useful.
6. For user-facing work, define the allowed UI design delta before producing design direction.
7. Prepare UI/UX direction grounded in the frontend code and constrained to the allowed design delta.
8. For user-facing work, prepare a design-only Lovable brief and, after the required write confirmation, create or update the prototype in the default SKLoud Pro Lovable workspace unless the user explicitly opts out or selects another workspace/tool.
9. Verify the target Lovable workspace/project before creation or updates. Search for an existing matching project before creating one, then use Lovable connector tools to create or update design prototypes only.
10. When a PRD or technical spec is implementation-relevant, embed it directly in the ClickUp task description under an explicit `## PRD` or `## Technical Spec` section before implementation handoff.
11. When a Lovable design, preview, screenshot, or exported file exists, record it on the ClickUp ticket before handoff.
12. If Lovable creation/update is blocked by permissions, credits, or another connector error, preserve the complete Lovable-ready design brief in ClickUp, mark the design state accurately, and continue the non-Lovable parts of the delivery package.
13. Verify the ClickUp task contains enough planning and design evidence for `skloud-implement` to build an implementation plan without depending on files that exist only on one person's machine.

## Scope Boundary

This skill is planning/design only.

- Do not write, patch, generate, or modify application code.
- Do not clone repositories, create branches, commit, push, stage files, open pull requests, or mutate source control.
- Do not run implementation commands such as tests, builds, package installs, migrations, or dev servers.
- Do not create or modify production app files, even when the requested change seems small.
- Do not ask Lovable, Google Antigravity, Codex, or another tool to modify production source files.
- Do inspect frontend/backend source, screenshots, or docs only to understand existing patterns and produce planning/design guidance.
- If the user asks for implementation while this skill is active, stop at a planning/design artifact and state that implementation belongs in `skloud-implement` after approval.

## Source Defaults

- Frontend: `repos/skloud-app-frontend` or `SKLoud-SDS-Devs/skloud-app-frontend`
- Backend: `repos/skloud-backend` or `SKLoud-SDS-Devs/skloud-backend`
- ClickUp list: `901614444165`
- Default Lovable workspace: `SKLoud App's Lovable`
- Default Lovable workspace ID: `GYmOd9OHEIPikJwHYMqR`
- Expected Lovable plan: `Pro`

Prefer an existing local checkout under `repos/`. If unavailable, use GitHub connector/source access. If neither is available, state the limitation and produce a best-effort package with assumptions. Do not clone or mutate repositories while using this skill.

For Lovable writes, use the default workspace ID above rather than selecting by display name alone. Verify that the connector still reports this workspace as the SKLoud team workspace on the Pro plan. Never fall back to a personal or free Lovable workspace unless the user explicitly selects it.

## Frontend Context

When UI consistency matters, inspect:

- `components.json`
- `package.json`
- `app/assets/css/tailwind.css`
- `app/assets/css/main.css`
- relevant appbar/layout/page/component files

Capture components, tokens, typography, spacing, radius, dark mode, responsive behavior, interaction states, and nearby examples.

## UI Design Scope Contract

Before asking Lovable or another design tool to generate UI, classify the requested change and explicitly define what may and may not change.

Use the narrowest applicable class:

1. `Layout-only`
   - May change: spacing, alignment, grouping, width, height, density, responsive arrangement, visual hierarchy, section/card placement, and existing component positioning.
   - Must not change: actions, buttons, fields, menus, cards, data, labels, flows, navigation, permissions, or feature behavior unless explicitly requested.
2. `Visual-style-only`
   - May change: typography, color usage within existing tokens, border/radius/shadow treatment, icon sizing, emphasis, and presentation of existing elements.
   - Must not add/remove interactive elements or change behavior.
3. `Interaction refinement`
   - May change only the explicitly named interactions or states.
   - Must not invent adjacent actions, fields, routes, or workflows.
4. `Feature/flow design`
   - May introduce new elements only when the PRD/problem explicitly requires new capability.

Write the result into the delivery package as:

`Design scope: <class>`

Then list:

- `Allowed changes`: exact categories/components that may change.
- `Preserve exactly`: existing actions, controls, data fields, routes, and behaviors that must remain.
- `Forbidden additions`: new buttons, menu items, filters, CTAs, form fields, badges, cards, tabs, routes, metrics, data, empty-state actions, or workflows not explicitly required by the ticket/PRD.

If the request is ambiguous, default to preserving behavior and existing controls. Do not interpret a visual/layout improvement request as permission to invent product functionality.

## Design Fidelity Rules

For source-grounded UI design:

- Treat the current frontend source as the inventory of allowed controls and capabilities unless the PRD explicitly authorizes a product change.
- Inspect the target screen/component and nearby patterns before writing the design brief.
- Name the existing controls that must remain and the exact area being redesigned.
- Require the design to preserve current labels, actions, routes, data fields, and information architecture unless a change is explicitly in scope.
- A design may reposition, resize, restyle, regroup, or reprioritize existing elements when allowed by the design scope.
- A design must not invent a plausible-looking action merely because it would make the mockup feel more complete.
- If a potentially useful new feature is discovered during design, record it separately as `Out-of-scope suggestion` and do not include it in the proposed screen.
- Prefer a visually incomplete-but-faithful design over a polished mockup that introduces unsupported behavior.

## Backend Context

When API or data behavior matters, inspect:

- route definitions
- controllers/handlers
- services/actions/jobs
- models/entities
- migrations/schema files
- validation/request classes
- tests and factories/fixtures

Capture endpoint contracts, permissions, validation, data ownership, error states, and test expectations.

## Delivery Output

Return:

- Recommended solution
- ClickUp task URL or ClickUp-ready payload
- Embedded PRD/spec status and summary
- Design scope contract for user-facing work
- UI/UX design summary when applicable
- Lovable design URL, preview URL, screenshots/export references, or Lovable-ready design brief when applicable
- Explicit Lovable state: created/updated, pending because of permissions/credits/tooling, or not required
- ClickUp comment/attachment status for design evidence when a ClickUp task exists
- Open questions and assumptions
- Integration limits encountered

## ClickUp Creation Gate

Prepare the ClickUp-ready payload first. Before creating a live ClickUp task, show a concise readiness prompt:

`I have the planning package ready. Do you want me to create the ClickUp task now, or keep this as a draft/spec only?`

Use ClickUp write tools only after the user confirms task creation after this prompt. If the user requested task creation before the package was prepared, still pause at the readiness prompt instead of creating the task immediately.

For user-facing work where Lovable is required, include the design write in the same readiness prompt:

`I have the planning package ready. Do you want me to create or update the Lovable design in the SKLoud Pro workspace and create the ClickUp task now, or keep both as draft handoff artifacts?`

If the user has already explicitly approved Lovable creation/update after the package was prepared, do not ask a second time.

## Planning Artifact Handoff

Treat the ClickUp task description as the primary durable handoff boundary between planning/design and `skloud-implement`.

When a ClickUp task exists and a PRD or technical spec is implementation-relevant:

- Prefer embedding the full Markdown content directly in the task description under `## PRD` or `## Technical Spec`.
- Keep the task-level `Problem`, `Recommended Solution`, `Scope`, `Out of Scope`, `User Experience`, `Technical Notes`, and `Acceptance Criteria` concise, then place detailed planning content in the embedded section.
- Preserve headings and checklists so a future agent can reliably parse the document.
- Do not require a `.md` attachment when the full PRD/spec is already embedded in the task description.
- If a local `.md` file also exists, treat it as an optional convenience/export, not as the authoritative handoff unless the user explicitly says otherwise.
- Use attachments primarily for artifacts that cannot be represented well as task Markdown: screenshots, images, PDFs, exports, archives, or other visual evidence.
- If the task description cannot accommodate the required planning content, use a ClickUp Doc or attachment as a fallback and state which artifact is authoritative.

Before declaring a delivery package ready for implementation, report one of these states:

- `PRD/spec embedded in ClickUp`: authoritative content is in the task description.
- `PRD/spec not required`: explain briefly why.
- `PRD/spec external`: identify the ClickUp Doc/attachment and why embedding was not suitable.
- `PRD/spec not shared`: implementation-relevant content still exists only locally; treat this as a handoff blocker.

For implementation-oriented tickets, prefer this evidence order:

1. Task problem, scope, and acceptance criteria.
2. Embedded `## PRD` or `## Technical Spec` in the task description.
3. Design scope contract.
4. Lovable design evidence and design-state notes.
5. Comments containing later clarifications or scope changes.
6. Links to relevant source repositories, branches, or related tickets.

## Lovable Handoff

For user-facing work, Lovable design is a standard part of the planning package, not an optional afterthought. Treat creation or update of a design-only prototype in the default SKLoud Pro workspace as the expected deliverable unless the user explicitly opts out. Obtain write confirmation through the combined readiness gate, then create the prototype during planning so it can be scope-QA'd and linked in the ClickUp handoff.

Mark Lovable `not required` only when the request is entirely backend/non-visual or the user explicitly declines design creation. State the reason.

When preparing Lovable work:

- Make the prompt design-first and scope-first.
- Begin the Lovable brief with the `Design scope` class, `Allowed changes`, `Preserve exactly`, and `Forbidden additions`.
- State explicitly: `Do not add product functionality that is not present in the inspected source or explicitly required by this ticket/PRD.`
- Tell Lovable to create a design prototype, design brief, state matrix, or visual direction. Do not ask Lovable to modify production source files.
- Include `DESIGN.md` or source-design context.
- List exact files to upload or inspect.
- Add guardrails: no production source edits, no new app shell, no new palette, no route changes, no auth/store changes unless requested.
- For layout-only work, explicitly prohibit new controls and content: no new buttons, menu items, filters, form fields, tabs, cards, badges, metrics, routes, CTAs, or placeholder features.
- Require Lovable to reuse only the actions/data/content proven to exist in the inspected screen and source context.
- If Lovable believes a new product element would improve the experience, instruct it to put that idea in a separate `Out-of-scope suggestions` note rather than rendering it in the design.
- Ask for a preview link, screenshots, or exported file.
- Add the Lovable design evidence to the ClickUp task as a comment or attachment when ClickUp write tools are available and the user has approved writes.
- If ClickUp writes are unavailable, include a clearly labeled `Lovable Design Evidence` section in the ClickUp-ready ticket payload so the creator can paste it into the task.

When adding designs to Lovable:

- Default to `SKLoud App's Lovable` (`GYmOd9OHEIPikJwHYMqR`) and verify it is the SKLoud team Pro workspace before writing.
- If the user explicitly selects a different workspace, resolve it by ID and use it only for that request.
- If multiple workspaces have the same display name, compare workspace IDs/details; never assume names are unique.
- Do not use `Brian's Lovable` or another personal/free workspace as an automatic fallback.
- Check the target workspace before creating a project. Use available workspace details such as role, plan, credits, and project visibility to anticipate creation constraints when the connector exposes them.
- List/search projects in the target workspace before creating a new one to avoid duplicates.
- If a production Lovable project exists for `skloud-app-frontend`, send only a design/planning prompt with explicit no-source-edit guardrails.
- Create design prototypes only. State that they are not production source changes.
- Make the first screen the actual product/design surface, not a marketing page.
- Include only the states required by the current feature and design scope. Do not introduce speculative controls while demonstrating states.
- Move the created project into the supplied Lovable folder when a folder ID is provided.
- If Lovable creation times out, search the workspace before retrying because the project may have been created.
- If Lovable returns a permission/authorization error (for example `403 Forbidden`), do not call the integration unavailable. Report that the connector is connected but the selected workspace/project does not permit the requested write. Record the workspace ID/name and the blocked operation when available.
- If Lovable is connected but creation is blocked by role, workspace permissions, plan/credits, or another recoverable account constraint, generate the complete Lovable-ready design brief anyway and put it in ClickUp under `## Lovable Design Brief` or a clearly labeled comment. Mark the design state `Lovable design pending — workspace permission/account constraint`.
- After the user changes workspace permission or account constraints, retry creation against the same resolved workspace unless the user selects a different one.

## Design Scope QA

Before accepting Lovable output or recording it as approved design evidence, compare it against the design scope contract and inspected source.

Reject or request revision when the design:

- adds a button, menu item, filter, field, tab, card, badge, CTA, metric, route, or workflow that was not present in source and not explicitly authorized by the PRD;
- removes an existing action or data element without explicit scope approval;
- changes labels or information architecture without a stated requirement;
- adds backend/data assumptions to make the design work;
- expands a layout-only request into product feature design.

For every Lovable result, report:

- `Scope QA: pass` when the design stays within the allowed delta.
- `Scope QA: revision required` when out-of-scope elements are present, followed by a concise list of violations and a corrective Lovable prompt.

Do not hand an out-of-scope design to `skloud-implement` as authoritative evidence.

## Lovable State Reporting

Before finishing a user-facing delivery package that requested Lovable, report exactly one state:

- `Lovable design created/updated`: include project/preview URL and workspace.
- `Lovable design pending — workspace permission/account constraint`: connector works, but the requested write was rejected; include the target workspace and blocked operation.
- `Lovable design pending — connector/tooling unavailable`: no callable Lovable integration exists in the current environment.
- `Lovable design not required`: explain briefly why.

Never collapse a permission failure into a generic connector failure. This distinction matters because the remediation is different.

## ClickUp Design Traceability

For user-facing work with a Lovable design or pending Lovable brief, ensure the ClickUp task contains enough evidence for `skloud-implement` to read later:

- Design scope class, allowed changes, preserved elements, and forbidden additions
- Lovable project or preview URL when creation succeeds
- Target Lovable workspace name/ID when relevant
- Lovable state, including permission/account blockers when creation has not succeeded
- Scope QA result for generated Lovable output
- Full `## Lovable Design Brief` in ClickUp when a design is pending
- Whether the design is a standalone prototype or source-grounded design brief
- Screenshots or exported files when available
- Design intent and important states: desktop, tablet, mobile, empty, loading, error, disabled, and dark mode when applicable
- Design/developer constraints: files to inspect, no-go areas, and source-code assumptions

Prefer a ClickUp comment for generated or discovered design evidence after the task exists. Prefer attachments for screenshots, PDFs, and other visual/exported files. Never attach secrets, environment files, production credentials, or private data.

## Implementation Handoff Check

Before finishing a delivery package that is expected to move into `skloud-implement`, verify and report:

- ClickUp task exists or a ready-to-create payload is provided.
- Acceptance criteria are testable.
- PRD/spec is embedded in the task description when one exists and materially affects implementation, or a clearly identified fallback artifact is authoritative.
- Design scope contract is explicit for user-facing work.
- Lovable design passes scope QA before it is treated as authoritative evidence.
- Lovable design evidence is attached/linked when creation succeeds, or a full Lovable-ready brief plus explicit pending state is recorded when creation is blocked.
- Later scope-changing comments are recorded on the task.
- No implementation-critical evidence is left only in an unshared local file without being called out as a blocker.

The goal is for `skloud-implement` to be able to reconstruct the approved requirement, design intent, and acceptance criteria from ClickUp plus the real source repositories without inheriting speculative product ideas from a design prototype.

## Guardrails

- Do not invent routes, API contracts, database fields, design systems, actions, controls, or product capabilities.
- Do not rely on screenshots alone when source files are available.
- Do not copy full product repos into skills.
- Keep artifacts concise and planning/design-ready.
