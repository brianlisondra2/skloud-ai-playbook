# Repository Attachment

Attach product repositories under `repos/` so AI tools can inspect the source while keeping this playbook lightweight.

## Recommended Layout

```text
repos/
  skloud-app-frontend/
  skloud-backend/
```

## Submodule Option

Use git submodules when this playbook repo should pin exact product repo revisions:

```powershell
git submodule add https://github.com/SKLoud-SDS-Devs/skloud-app-frontend.git repos/skloud-app-frontend
git submodule add https://github.com/SKLoud-SDS-Devs/skloud-backend.git repos/skloud-backend
```

## Clone-Only Option

Use normal clones when members should keep product repos independent:

```powershell
git clone https://github.com/SKLoud-SDS-Devs/skloud-app-frontend.git repos/skloud-app-frontend
git clone https://github.com/SKLoud-SDS-Devs/skloud-backend.git repos/skloud-backend
```

## Rule

Do not copy product source into skills. Skills should point to files and folders to inspect.

