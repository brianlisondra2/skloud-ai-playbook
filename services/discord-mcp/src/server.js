import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const token = process.env.DISCORD_BOT_TOKEN;
const allowedGuildId = process.env.DISCORD_GUILD_ID;

if (!token || !allowedGuildId) {
  console.error("DISCORD_BOT_TOKEN and DISCORD_GUILD_ID are required");
  process.exit(1);
}

const api = "https://discord.com/api/v10";

async function discord(path, options = {}) {
  const response = await fetch(`${api}${path}`, {
    ...options,
    headers: {
      Authorization: `Bot ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Discord API ${response.status}: ${body}`);
  }

  return response.status === 204 ? null : response.json();
}

const server = new McpServer({ name: "skloud-discord", version: "0.1.0" });

server.tool(
  "discord_create_channel",
  "Create a text channel in the configured SKLoud Discord guild for a delivery handoff.",
  {
    name: z.string().min(1).max(100),
    topic: z.string().max(1024).optional(),
    parent_id: z.string().optional(),
  },
  async ({ name, topic, parent_id }) => {
    const channel = await discord(`/guilds/${allowedGuildId}/channels`, {
      method: "POST",
      body: JSON.stringify({ name, type: 0, topic, parent_id }),
    });
    return {
      content: [{ type: "text", text: JSON.stringify({ id: channel.id, name: channel.name, guild_id: allowedGuildId }) }],
    };
  }
);

server.tool(
  "discord_send_message",
  "Send a delivery handoff message to a text channel in the configured SKLoud Discord guild.",
  {
    channel_id: z.string().min(1),
    content: z.string().min(1).max(2000),
  },
  async ({ channel_id, content }) => {
    const channel = await discord(`/channels/${channel_id}`);
    if (channel.guild_id !== allowedGuildId) {
      throw new Error("Channel is outside the configured Discord guild");
    }
    const message = await discord(`/channels/${channel_id}/messages`, {
      method: "POST",
      body: JSON.stringify({ content, allowed_mentions: { parse: [] } }),
    });
    return {
      content: [{ type: "text", text: JSON.stringify({ id: message.id, channel_id: message.channel_id }) }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
