# SKLoud Discord Delivery Bot

Discord adapter for the `skloud-delivery-package` skill only.

## Scope

The bot exposes one slash command:

- `/delivery request:<product problem>`

It loads `plugins/skloud-workflow-plugin/skills/skloud-delivery-package/SKILL.md` at runtime and uses that file as the authoritative workflow instructions.

This adapter intentionally does **not** expose `skloud-implement` and must not edit application code, mutate repositories, create branches/commits/PRs, or make production changes.

Connector-backed steps such as inspecting private SKLoud source, creating ClickUp tasks, or creating Lovable designs are not automatically available to this standalone bot. When those capabilities are unavailable, the skill should report the limitation and produce draft payloads/handoffs instead.

## Setup

Requirements: Node.js 20+, a Discord application/bot, and an OpenAI API key.

1. From this directory, run `npm install`.
2. Copy `.env.example` to `.env`.
3. Set `DISCORD_TOKEN`, `DISCORD_CLIENT_ID`, and `OPENAI_API_KEY`.
4. During development, set `DISCORD_GUILD_ID` so the slash command registers immediately in one server. Leave it empty for a global command.
5. Optionally set `OPENAI_MODEL`; the default is `gpt-5`.
6. Run `npm start`.

Invite the Discord bot to the target server with the `bot` and `applications.commands` scopes. The bot only requires normal slash-command/reply permissions for this first version.

## Security

Never commit `.env`, Discord tokens, OpenAI API keys, production credentials, or private customer data. Restrict the Discord application to the intended SKLoud server(s) before adding broader capabilities.
