param(
  [string]$FrontendUrl = "https://github.com/SKLoud-SDS-Devs/skloud-app-frontend.git",
  [string]$BackendUrl = "https://github.com/SKLoud-SDS-Devs/skloud-backend.git",
  [switch]$CloneOnly
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$repos = Join-Path $root "repos"
New-Item -ItemType Directory -Force -Path $repos | Out-Null

function Add-Repo {
  param(
    [string]$Name,
    [string]$Url
  )

  $target = Join-Path $repos $Name
  if (Test-Path $target) {
    Write-Host "$Name already exists at $target"
    return
  }

  if ($CloneOnly) {
    git clone $Url $target
  } else {
    Push-Location $root
    try {
      git submodule add $Url "repos/$Name"
    } finally {
      Pop-Location
    }
  }
}

Add-Repo -Name "skloud-app-frontend" -Url $FrontendUrl
Add-Repo -Name "skloud-backend" -Url $BackendUrl

