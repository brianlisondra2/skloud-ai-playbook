# SKLoud Frontend Guidelines

Use this when working on `SKLoud-SDS-Devs/skloud-app-frontend`.

## Source Context

Inspect these first when UI consistency matters:

- `package.json`
- `components.json`
- `app/assets/css/tailwind.css`
- `app/assets/css/main.css`
- `app/components`
- relevant `app/pages`, `app/layouts`, or feature folders

## Design Rules

- Reuse shadcn-vue/Reka UI components and Tailwind tokens.
- Prefer compact product UI over marketing-style UI.
- Preserve light/dark mode token behavior.
- Use lucide icons where existing patterns already do.
- Keep appbars, drawers, dropdowns, tabs, tables, cards, forms, dialogs, and toasts consistent with nearby screens.

## Validation

- Check desktop, tablet, and mobile breakpoints.
- Check light and dark mode.
- Check loading, empty, error, disabled, active, and success states when applicable.
- Check long labels and translations before finalizing navigation or compact controls.

