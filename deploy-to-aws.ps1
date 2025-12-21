# PowerShell script to help deploy project to AWS EC2
# Usage: .\deploy-to-aws.ps1 -PublicIP "YOUR_IP" -KeyPath "C:\Users\Charl\.ssh\workflow-dev-key.pem"

param(
    [Parameter(Mandatory=$true)]
    [string]$PublicIP,
    
    [Parameter(Mandatory=$true)]
    [string]$KeyPath,
    
    [string]$RemoteUser = "ubuntu",
    [string]$RemotePath = "~/projects/workflow-logic-review"
)

$ErrorActionPreference = "Stop"

Write-Host "=== Deploying to AWS EC2 ===" -ForegroundColor Green
Write-Host "Public IP: $PublicIP" -ForegroundColor Cyan
Write-Host "Key Path: $KeyPath" -ForegroundColor Cyan
Write-Host ""

# Check if key file exists
if (-not (Test-Path $KeyPath)) {
    Write-Host "ERROR: Key file not found at $KeyPath" -ForegroundColor Red
    exit 1
}

# Get current directory
$ProjectRoot = $PSScriptRoot
if (-not $ProjectRoot) {
    $ProjectRoot = Get-Location
}

Write-Host "Project root: $ProjectRoot" -ForegroundColor Yellow
Write-Host ""

# Create temporary archive (excluding node_modules and .next)
Write-Host "Creating project archive..." -ForegroundColor Yellow
$ArchivePath = Join-Path $env:TEMP "workflow-logic-review-$(Get-Date -Format 'yyyyMMdd-HHmmss').zip"

$FilesToInclude = @(
    "app",
    "components",
    "hooks",
    "lib",
    "public",
    "styles",
    "*.json",
    "*.mjs",
    "*.ts",
    "*.js",
    "*.md",
    ".gitignore"
)

try {
    # Create archive
    $FilesToArchive = Get-ChildItem -Path $ProjectRoot -Include $FilesToInclude -Recurse -File | 
        Where-Object { $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch "\.next" }
    
    Compress-Archive -Path $FilesToArchive -DestinationPath $ArchivePath -Force
    Write-Host "Archive created: $ArchivePath" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to create archive: $_" -ForegroundColor Red
    exit 1
}

# Transfer archive to EC2
Write-Host ""
Write-Host "Transferring archive to EC2..." -ForegroundColor Yellow
try {
    scp -i $KeyPath $ArchivePath "${RemoteUser}@${PublicIP}:~/project.zip"
    Write-Host "Archive transferred successfully!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Failed to transfer archive: $_" -ForegroundColor Red
    Write-Host "Make sure SSH is working: ssh -i $KeyPath ${RemoteUser}@${PublicIP}" -ForegroundColor Yellow
    exit 1
}

# Extract and setup on remote server
Write-Host ""
Write-Host "Setting up project on EC2..." -ForegroundColor Yellow
$SetupCommands = @"
cd ~
mkdir -p projects
cd projects
rm -rf workflow-logic-review
unzip -q ~/project.zip -d workflow-logic-review
cd workflow-logic-review
echo 'Installing dependencies...'
pnpm install
echo 'Setup complete!'
echo ''
echo 'To start development server, run:'
echo '  cd ~/projects/workflow-logic-review'
echo '  pnpm dev'
"@

try {
    ssh -i $KeyPath "${RemoteUser}@${PublicIP}" $SetupCommands
    Write-Host ""
    Write-Host "=== Deployment Complete! ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Connect via SSH: ssh -i $KeyPath ${RemoteUser}@${PublicIP}" -ForegroundColor White
    Write-Host "2. Navigate to project: cd ~/projects/workflow-logic-review" -ForegroundColor White
    Write-Host "3. Start dev server: pnpm dev" -ForegroundColor White
    Write-Host "4. Access via port forwarding: ssh -L 3000:localhost:3000 -i $KeyPath ${RemoteUser}@${PublicIP}" -ForegroundColor White
} catch {
    Write-Host "ERROR: Failed to setup project: $_" -ForegroundColor Red
    exit 1
}

# Cleanup
Write-Host ""
Write-Host "Cleaning up temporary files..." -ForegroundColor Yellow
Remove-Item $ArchivePath -ErrorAction SilentlyContinue
ssh -i $KeyPath "${RemoteUser}@${PublicIP}" "rm ~/project.zip" 2>$null

Write-Host "Done!" -ForegroundColor Green











