import "dotenv/config";
import { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } from "discord.js";
import OpenAI from "openai";
import { buildDeliveryInput, loadDeliverySkill } from "./playbook.js";

const required = ["DISCORD_TOKEN", "DISCORD_CLIENT_ID", "OPENAI_API_KEY"];
for (const key of required) {
  if (!process.env[key]) throw new Error(`Missing required environment variable: ${key}`);
}

const command = new SlashCommandBuilder()
  .setName("delivery")
  .setDescription("Create a SKLoud planning/design delivery package")
  .addStringOption((option) =>
    option
      .setName("request")
      .setDescription("Describe the product or engineering problem")
      .setRequired(true),
  );

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
const route = process.env.DISCORD_GUILD_ID
  ? Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID)
  : Routes.applicationCommands(process.env.DISCORD_CLIENT_ID);
await rest.put(route, { body: [command.toJSON()] });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand() || interaction.commandName !== "delivery") return;

  await interaction.deferReply();

  try {
    const skill = await loadDeliverySkill();
    const request = interaction.options.getString("request", true);
    const input = buildDeliveryInput({
      request,
      userName: interaction.user.username,
      channelName: interaction.channel?.name ?? "unknown",
    });

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5",
      instructions: skill,
      input,
    });

    const text = response.output_text?.trim() || "No delivery package was generated.";
    const chunks = splitForDiscord(text);
    await interaction.editReply(chunks.shift());
    for (const chunk of chunks) await interaction.followUp(chunk);
  } catch (error) {
    console.error(error);
    await interaction.editReply("I couldn't generate the delivery package. Check the bot logs and configuration.");
  }
});

function splitForDiscord(text, limit = 1900) {
  const chunks = [];
  let remaining = text;
  while (remaining.length > limit) {
    let cut = remaining.lastIndexOf("\n", limit);
    if (cut < limit / 2) cut = limit;
    chunks.push(remaining.slice(0, cut));
    remaining = remaining.slice(cut).trimStart();
  }
  if (remaining) chunks.push(remaining);
  return chunks;
}

client.once("ready", () => console.log(`Logged in as ${client.user.tag}`));
await client.login(process.env.DISCORD_TOKEN);
