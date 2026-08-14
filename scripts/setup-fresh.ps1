param(
  [string]$FrontendUrl = "https://github.com/SKLoud-SDS-Devs/skloud-app-frontend.git",
  [string]$BackendUrl = "https://github.com/SKLoud-SDS-Devs/skloud-backend.git",
  [switch]$CloneOnly,
  [switch]$SkipRepos,
  [switch]$SkipPluginReminder
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$repos = Join-Path $root "repos"
$pluginPath = Join-Path $root "plugins\skloud-workflow-plugin"
$agentsPath = Join-Path $root "AGENTS.md"
$freshSetupPath = Join-Path $root "instructions\fresh-setup.md"

function Write-Step {
  param([string]$Message)

  Write-Host ""
  Write-Host "==> $Message"
}

function Test-Command {
  param([string]$Name)

  $command = Get-Command $Name -ErrorAction SilentlyContinue
  return $null -ne $command
}

Write-Step "Checking local prerequisites"

if (-not (Test-Command "git")) {
  throw "Git is required. Install Git, then rerun this setup script."
}

if (-not (Test-Path $agentsPath)) {
  throw "AGENTS.md was not found at $agentsPath. Run this script from a complete playbook checkout."
}

if (-not (Test-Path $freshSetupPath)) {
  throw "Fresh setup documentation was not found at $freshSetupPath."
}

Write-Host "Playbook root: $root"
Write-Host "Git: $(git --version)"

Write-Step "Preparing repository folder"
New-Item -ItemType Directory -Force -Path $repos | Out-Null
Write-Host "Repository folder: $repos"

if ($SkipRepos) {
  Write-Host "Skipping product repository attachment because -SkipRepos was provided."
} else {
  Write-Step "Attaching product repositories"

  $attachScript = Join-Path $root "scripts\attach-repos.ps1"
  if (-not (Test-Path $attachScript)) {
    throw "Missing attach script: $attachScript"
  }

  if ($CloneOnly) {
    & $attachScript -FrontendUrl $FrontendUrl -BackendUrl $BackendUrl -CloneOnly
  } else {
    & $attachScript -FrontendUrl $FrontendUrl -BackendUrl $BackendUrl
  }
}

if ($SkipPluginReminder) {
  Write-Step "Skipping plugin reminder"
} else {
  Write-Step "SKLoud workflow plugin"

  if (-not (Test-Path $pluginPath)) {
    throw "Missing plugin folder: $pluginPath"
  }

  & (Join-Path $root "scripts\install-local-plugin.ps1") -PluginPath $pluginPath
}

Write-Step "Manual workspace setup still required"
Write-Host "- Connect GitHub, ClickUp, and Lovable in the Codex or ChatGPT workspace as needed."
Write-Host "- Connect the shadcn MCP server through the team-approved Codex MCP configuration path."
Write-Host "- Do not install shadcn components into this playbook repository."

Write-Step "Verification prompt"
Write-Host "Open this folder in Codex and ask:"
Write-Host ""
Write-Host "Summarize the active AGENTS.md instructions for this repository and list the SKLoud source repositories you can inspect."
Write-Host ""
Write-Host "Fresh setup complete. See instructions\fresh-setup.md for role-specific prompts and guardrails."
