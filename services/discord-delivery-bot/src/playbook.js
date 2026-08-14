import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const PLAYBOOK_ROOT = path.resolve(here, "../../..");
const SKILL_PATH = path.join(
  PLAYBOOK_ROOT,
  "plugins/skloud-workflow-plugin/skills/skloud-delivery-package/SKILL.md",
);

export async function loadDeliverySkill() {
  return readFile(SKILL_PATH, "utf8");
}

export function buildDeliveryInput({ request, userName, channelName }) {
  return [
    "You are running the SKLoud skloud-delivery-package workflow from Discord.",
    "The loaded SKILL.md below is authoritative. Follow its planning/design-only scope boundary.",
    "Never implement code, mutate repositories, create branches/commits/PRs, or invoke skloud-implement.",
    "If a workflow step requires a connector that is unavailable in this Discord runtime, state the limitation and return the corresponding draft/payload instead.",
    "Do not create a live ClickUp task from Discord without an explicit follow-up confirmation from the user.",
    "",
    `Discord user: ${userName}`,
    `Discord channel: ${channelName}`,
    "",
    "Product problem/request:",
    request,
  ].join("\n");
}
