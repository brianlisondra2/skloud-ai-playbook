# SKLoud Backend Guidelines

Use this when working on `SKLoud-SDS-Devs/skloud-backend`.

## Source Context

Inspect the backend repository before changing behavior:

- Framework config and dependency files
- Route definitions
- Controllers/handlers
- Services/actions/jobs
- Models/entities
- Migrations/schema files
- Validation/request classes
- Tests and factories/fixtures

## Engineering Rules

- Preserve existing API contracts unless the ticket explicitly asks for a contract change.
- Keep validation close to established backend patterns.
- Respect auth, role, tenant, and data ownership boundaries.
- Add or update tests for behavior changes.
- Include migration and rollback notes for schema changes.

## Handoff Notes

Frontend-impacting backend work should include:

- Endpoint path and method
- Request/response shape
- Error states
- Permission rules
- Test data expectations
- Rollout/migration considerations

