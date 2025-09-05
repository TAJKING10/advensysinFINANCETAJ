# Advensys Insurance Finance - OVH Cloud Deployment Script
# Fixes white page issues and ensures perfect deployment
param(
    [string]$ProjectPath = "C:\Users\Toufi\AndroidStudioProjects\advensysinFINANCETAJ11",
    [string]$KeyPath = $null
)

$ErrorActionPreference = "Stop"

Write-Host "🚀 Advensys Insurance Finance - OVH Deployment Script" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Gray

# Validate project path
if (-not (Test-Path $ProjectPath)) {
    Write-Host "❌ ERROR: Project path not found: $ProjectPath" -ForegroundColor Red
    exit 1
}

Set-Location $ProjectPath
Write-Host "📁 Project: $ProjectPath" -ForegroundColor Green

# Check if dist exists and warn about Vite base configuration
if (Test-Path "dist") {
    $indexContent = Get-Content "dist/index.html" -Raw -ErrorAction SilentlyContinue
    if ($indexContent -and $indexContent -match '/[^/]+/assets/') {
        Write-Host "⚠️  WARNING: Vite base path seems wrong!" -ForegroundColor Yellow
        Write-Host "   Your assets reference a subpath (not root)" -ForegroundColor Yellow
        Write-Host "   Fix: Set base: '/' in vite.config.js and rebuild" -ForegroundColor Yellow
        Write-Host "   Current content preview:" -ForegroundColor Yellow
        Write-Host ($indexContent | Select-String "assets" | Select-Object -First 3) -ForegroundColor Gray
        $continue = Read-Host "Continue anyway? (y/N)"
        if ($continue -ne "y" -and $continue -ne "Y") {
            exit 1
        }
    }
}

# Step 1: Build the project
Write-Host "🔨 Step 1: Building project..." -ForegroundColor Blue

if (-not (Test-Path "node_modules")) {
    Write-Host "   Installing dependencies (npm ci)..." -ForegroundColor Yellow
    npm ci
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ npm ci failed" -ForegroundColor Red
        exit 1
    }
}

Write-Host "   Building production version..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ npm run build failed" -ForegroundColor Red
    exit 1
}

# Verify dist directory and contents
if (-not (Test-Path "dist")) {
    Write-Host "❌ ERROR: dist/ directory not created by build" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "dist/index.html")) {
    Write-Host "❌ ERROR: dist/index.html not found" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "dist/assets")) {
    Write-Host "❌ ERROR: dist/assets/ directory not found" -ForegroundColor Red
    exit 1
}

# Final validation of index.html content
$indexHtml = Get-Content "dist/index.html" -Raw
if ($indexHtml -match '/advensysinFINANCETAJ11/' -or $indexHtml -match '/AdvensysInFinance/') {
    Write-Host "❌ ERROR: Wrong Vite base configuration detected!" -ForegroundColor Red
    Write-Host "   Found references to project subdirectory in index.html" -ForegroundColor Red
    Write-Host "   Fix: Set base: '/' in vite.config.js, then rebuild" -ForegroundColor Red
    Write-Host "   Problematic line:" -ForegroundColor Red
    Write-Host ($indexHtml | Select-String "advensys|AdvensysInFinance" | Select-Object -First 1) -ForegroundColor Gray
    exit 1
}

Write-Host "✅ Build completed successfully" -ForegroundColor Green
Write-Host "   • index.html: $(if(Test-Path 'dist/index.html') { 'Found' } else { 'Missing!' })" -ForegroundColor Gray
Write-Host "   • assets/: $(if(Test-Path 'dist/assets') { 'Found' } else { 'Missing!' })" -ForegroundColor Gray

# Step 2: Create deployment ZIP
Write-Host "📦 Step 2: Creating deployment package..." -ForegroundColor Blue

if (Test-Path "site.zip") {
    Remove-Item "site.zip" -Force
}

# Create ZIP with ONLY the contents of dist/ (not the dist folder itself)
try {
    Compress-Archive -Path "dist\*" -DestinationPath "site.zip" -Force
    Write-Host "✅ Created site.zip" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to create ZIP: $_" -ForegroundColor Red
    exit 1
}

# Verify ZIP contents (should show index.html and assets/ at root level)
Write-Host "   ZIP contents preview:" -ForegroundColor Gray
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("$PWD\site.zip")
$zip.Entries | Select-Object -First 10 | ForEach-Object { Write-Host "     $($_.FullName)" -ForegroundColor Gray }
$zip.Dispose()

# Step 3: Upload to OVH
Write-Host "📤 Step 3: Uploading to OVH..." -ForegroundColor Blue

$scpCmd = if ($KeyPath) {
    "scp -i `"$KeyPath`" site.zip advensk@ssh01.cluster030.gra.hosting.ovh.net:/home/advensk/"
} else {
    "scp site.zip advensk@ssh01.cluster030.gra.hosting.ovh.net:/home/advensk/"
}

Write-Host "   Command: $scpCmd" -ForegroundColor Gray
Invoke-Expression $scpCmd

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ SCP upload failed" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Upload completed" -ForegroundColor Green

# Step 4: SSH deployment
Write-Host "🔧 Step 4: Deploying on OVH server..." -ForegroundColor Blue

$sshCmd = if ($KeyPath) {
    "ssh -i `"$KeyPath`" advensk@ssh01.cluster030.gra.hosting.ovh.net"
} else {
    "ssh advensk@ssh01.cluster030.gra.hosting.ovh.net"
}

$deployScript = @'
set -e
cd ~

# Create timestamped deployment
TMP=deploy_$(date +%Y%m%d%H%M%S)
echo "🔧 Creating deployment: $TMP"

# Extract to temp directory
mkdir -p "$TMP"
unzip -oq site.zip -d "$TMP"

# Verify extraction
if [ ! -f "$TMP/index.html" ]; then
    echo "❌ ERROR: index.html not found in extracted files"
    exit 1
fi

if [ ! -d "$TMP/assets" ]; then
    echo "❌ ERROR: assets/ directory not found in extracted files"
    exit 1
fi

# Backup current www (if exists)
if [ -d "www" ]; then
    echo "📁 Backing up current www to www_prev_$TMP"
    mv www "www_prev_$TMP"
fi

# Deploy new version
echo "🚀 Deploying new version"
mv "$TMP" www

# Create optimized .htaccess for OVH
echo "⚙️  Creating .htaccess for OVH"
cat > www/.htaccess << 'HTACCESS_END'
# Advensys Insurance Finance - OVH Configuration
DirectoryIndex index.html

RewriteEngine On

# Force HTTPS (OVH-specific)
RewriteCond %{HTTPS} !=on
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# SPA routing - React Router support
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/assets/
RewriteRule ^ index.html [L]

# MIME types
AddType application/javascript .js
AddType text/css .css
AddType image/svg+xml .svg

# Security
<Files ".*">
    Order Allow,Deny
    Deny from all
</Files>

Options -Indexes
HTACCESS_END

# Clean up
rm -f site.zip

# Verification
echo "✅ Deployment completed!"
echo "📂 Web root contents:"
ls -lh ~/www | head -10
echo ""
echo "📄 index.html preview:"
head -n 10 ~/www/index.html
echo ""
echo "🔗 Your website should now be live at: https://advensys-in-finance.com"
'@

Write-Host "   Executing deployment script on server..." -ForegroundColor Yellow
$deployScript | & $sshCmd

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ SSH deployment failed" -ForegroundColor Red
    exit 1
}

# Clean up local files
Remove-Item "site.zip" -Force -ErrorAction SilentlyContinue

Write-Host "" -ForegroundColor Green
Write-Host "🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Gray
Write-Host "🌐 Your website is now live at: https://advensys-in-finance.com" -ForegroundColor Cyan
Write-Host "" -ForegroundColor Green
Write-Host "✅ What was deployed:" -ForegroundColor Green
Write-Host "   • Optimized production build" -ForegroundColor Gray
Write-Host "   • OVH-specific .htaccess configuration" -ForegroundColor Gray
Write-Host "   • React Router SPA support" -ForegroundColor Gray
Write-Host "   • HTTPS redirect" -ForegroundColor Gray
Write-Host "   • All assets and images" -ForegroundColor Gray
Write-Host "" -ForegroundColor Green
Write-Host "🧪 Test your website:" -ForegroundColor Yellow
Write-Host "   • Homepage: https://advensys-in-finance.com" -ForegroundColor Gray
Write-Host "   • About: https://advensys-in-finance.com/about" -ForegroundColor Gray
Write-Host "   • Services: https://advensys-in-finance.com/services" -ForegroundColor Gray
Write-Host "   • Contact: https://advensys-in-finance.com/contact" -ForegroundColor Gray
Write-Host "   • Language switching (FR/EN/SE)" -ForegroundColor Gray
Write-Host "   • Mobile responsive design" -ForegroundColor Gray