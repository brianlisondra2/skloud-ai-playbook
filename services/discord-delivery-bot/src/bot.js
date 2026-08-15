import { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } from "discord.js";
import OpenAI from "openai";
import { loadDeliverySkill } from "./playbook.js";

const required = ["DISCORD_TOKEN", "DISCORD_CLIENT_ID", "OPENAI_API_KEY"];
for (const name of required) {
  if (!process.env[name]) throw new Error(`Missing required environment variable: ${name}`);
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const model = process.env.OPENAI_MODEL || "gpt-5";

const deliveryCommand = new SlashCommandBuilder()
  .setName("delivery")
  .setDescription("Create a SKLoud planning/design delivery package")
  .addStringOption((option) =>
    option
      .setName("request")
      .setDescription("Product or engineering problem to plan")
      .setRequired(true),
  );

const helpCommand = new SlashCommandBuilder()
  .setName("delivery-help")
  .setDescription("Explain what the SKLoud delivery workflow can do");

async function registerCommands() {
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
  const body = [deliveryCommand.toJSON(), helpCommand.toJSON()];

  if (process.env.DISCORD_GUILD_ID) {
    await rest.put(
      Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID),
      { body },
    );
  } else {
    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body });
  }
}

function chunk(text, limit = 1900) {
  const chunks = [];
  let remaining = text.trim();
  while (remaining.length > limit) {
    let split = remaining.lastIndexOf("\n", limit);
    if (split < limit * 0.5) split = remaining.lastIndexOf(" ", limit);
    if (split < 1) split = limit;
    chunks.push(remaining.slice(0, split).trim());
    remaining = remaining.slice(split).trim();
  }
  if (remaining) chunks.push(remaining);
  return chunks;
}

async function runDelivery(request) {
  const instructions = await loadDeliverySkill();
  const response = await openai.responses.create({
    model,
    instructions,
    input: request,
  });
  return response.output_text || "No delivery package was returned.";
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "delivery-help") {
    await interaction.reply({
      ephemeral: true,
      content:
        "Use `/delivery request:<problem>` for planning, product definition, ClickUp-ready ticket content, PRD/spec guidance, UI/UX direction, and design handoff. This bot does not implement code or modify repositories.",
    });
    return;
  }

  if (interaction.commandName !== "delivery") return;

  await interaction.deferReply();
  try {
    const request = interaction.options.getString("request", true);
    const result = await runDelivery(request);
    const messages = chunk(result);
    await interaction.editReply(messages.shift() || "No output returned.");
    for (const message of messages) await interaction.followUp(message);
  } catch (error) {
    console.error(error);
    const message = "The delivery workflow failed. Check the bot logs and configured credentials.";
    if (interaction.deferred || interaction.replied) await interaction.editReply(message);
    else await interaction.reply({ content: message, ephemeral: true });
  }
});

await registerCommands();
await client.login(process.env.DISCORD_TOKEN);
