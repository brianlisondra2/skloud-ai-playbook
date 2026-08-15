import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const skillPath = path.resolve(
  here,
  "../../../plugins/skloud-workflow-plugin/skills/skloud-delivery-package/SKILL.md",
);

export async function loadDeliverySkill() {
  const skill = await readFile(skillPath, "utf8");

  return `${skill}\n\n## Discord Adapter Rules\n- You are running only the skloud-delivery-package workflow.\n- Never invoke or emulate skloud-implement.\n- Never write, patch, commit, push, or open pull requests.\n- Produce planning/design output suitable for Discord.\n- If live connectors such as GitHub, ClickUp, or Lovable are unavailable, clearly label those integration limits and do not pretend an action occurred.\n- Because Discord messages have length limits, prioritize a concise delivery package and offer clearly separated sections.`;
}
