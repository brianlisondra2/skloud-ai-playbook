# SKLoud Discord Delivery Bot

Discord adapter for the existing `skloud-delivery-package` skill. It intentionally does not expose `skloud-implement` or any source-control mutation workflow.

## Commands

- `/delivery request:<problem>` - create a planning/design delivery package.
- `/delivery-help` - show the supported scope.

## Setup

1. Create a Discord application and bot in the Discord Developer Portal.
2. Invite the bot to the target server with the `applications.commands` and `bot` scopes.
3. From this directory, run `npm install`.
4. Copy `.env.example` values into your hosting environment. Do not commit secrets.
5. Set `DISCORD_GUILD_ID` while testing for fast guild command registration. Omit it for global commands.
6. Run `npm start`.

Required environment variables:

- `DISCORD_TOKEN`
- `DISCORD_CLIENT_ID`
- `OPENAI_API_KEY`

Optional:

- `DISCORD_GUILD_ID`
- `OPENAI_MODEL` (defaults to `gpt-5`)

## Security and scope

The bot loads `plugins/skloud-workflow-plugin/skills/skloud-delivery-package/SKILL.md` at runtime and adds Discord-specific guardrails. It does not load `skloud-implement`.

This first version calls the OpenAI API directly. It does not automatically inherit ChatGPT/Codex connector access to GitHub, ClickUp, Lovable, or other services. When those integrations are unavailable, the skill is instructed to state the limitation rather than claim that a live action occurred.

Keep the bot token and OpenAI API key only in environment/secrets storage. Restrict installation to the intended Discord server(s) if this workflow is for internal SKLoud use.
