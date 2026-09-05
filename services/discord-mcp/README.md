# SKLoud Discord MCP

Minimal local MCP server for publishing `skloud-delivery-package` handoffs to Discord.

## Tools

- `discord_create_channel` — creates a text channel in one configured guild.
- `discord_send_message` — sends a message only after verifying the target channel belongs to that guild.

This server intentionally does not expose channel deletion, role/permission changes, moderation, DMs, webhooks, or arbitrary Discord administration.

## Discord setup

1. Create an application in the Discord Developer Portal and add a bot.
2. Invite the bot to the SKLoud server.
3. Grant only the permissions needed for the handoff: View Channels, Send Messages, and Manage Channels.
4. Enable Discord Developer Mode and copy the target server/guild ID.
5. Keep the bot token secret. Never commit it to GitHub.

## Local setup

```bash
cd services/discord-mcp
npm install
export DISCORD_BOT_TOKEN="..."
export DISCORD_GUILD_ID="..."
npm start
```

The MCP server uses stdio, so it is intended to be launched by an MCP-capable client such as Codex rather than hosted as a public HTTP service.

## Example MCP client configuration

Configure the client to launch Node with the absolute path to `src/server.js`, and provide the two environment variables through the client's secret/environment configuration. Do not put the real bot token in a committed config file.

Conceptually:

```json
{
  "mcpServers": {
    "skloud-discord": {
      "command": "node",
      "args": ["/absolute/path/to/skloud-ai-playbook/services/discord-mcp/src/server.js"],
      "env": {
        "DISCORD_BOT_TOKEN": "from-secret-storage",
        "DISCORD_GUILD_ID": "your-guild-id"
      }
    }
  }
}
```

Adapt the exact configuration syntax to the MCP client you use.

## Intended delivery flow

1. `skloud-delivery-package` completes the planning package.
2. The ClickUp task is created after the existing approval gate.
3. Lovable design evidence is produced and recorded on ClickUp.
4. With user approval for Discord writes, create a delivery channel.
5. Post the task title, ClickUp URL, Lovable URL, status, and `Review/approve before implementation`.

## Security

The guild ID is an allowlist boundary. `discord_send_message` fetches the channel first and refuses to post if the channel is not in the configured guild. Mentions are disabled in outbound messages to avoid accidental `@everyone` or role/user pings.
