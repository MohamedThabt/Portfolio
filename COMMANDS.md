# 🚀 Quick Commands Reference

All commands needed to set up and manage your Telegram notification system.

## 📦 Installation

### Install Dependencies
```bash
cd "e:\my personal site\thabet-ai-forge"
pnpm install
```

### Install Vercel CLI
```bash
npm install -g vercel
```

## 🔧 Setup

### Create Environment File
```bash
# Copy example
cp .env.example .env

# Or on Windows
copy .env.example .env
```

### Run Setup Script (Windows)
```bash
setup-telegram.bat
```

### Run Setup Script (Linux/Mac)
```bash
chmod +x setup-telegram.sh
./setup-telegram.sh
```

## 🚀 Vercel Deployment

### Login to Vercel
```bash
vercel login
```

### Deploy Project
```bash
vercel
```

### Deploy to Production
```bash
vercel --prod
```

### Add Environment Variables
```bash
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID
```

### List Environment Variables
```bash
vercel env ls
```

### Pull Environment Variables (to local)
```bash
vercel env pull
```

### View Logs
```bash
vercel logs
```

### View Latest Logs (follow)
```bash
vercel logs --follow
```

## 🏗️ Build & Deploy

### Build React App
```bash
pnpm run build
```

### Build Development Version
```bash
pnpm run build:dev
```

### Preview Build Locally
```bash
pnpm run preview
```

### Deploy to GitHub Pages
```bash
pnpm run deploy
```

### Full Deployment Process
```bash
pnpm install
pnpm run build
pnpm run deploy
```

## 🧪 Testing

### Test API Endpoint (GET - should fail)
```bash
curl https://your-project.vercel.app/api/notify
```
Expected: `{"error":"Method not allowed"}`

### Test API Endpoint (POST - should work)
```bash
curl -X POST https://your-project.vercel.app/api/notify \
  -H "Content-Type: application/json" \
  -d '{
    "userAgent": "Test Browser",
    "referrer": "Manual Test",
    "timestamp": "2025-11-15T10:00:00Z",
    "language": "en-US"
  }'
```
Expected: `{"success":true}` + Telegram message

### Test API with PowerShell
```powershell
$body = @{
    userAgent = "Test Browser"
    referrer = "Manual Test"
    timestamp = (Get-Date).ToString("o")
    language = "en-US"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://your-project.vercel.app/api/notify" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body
```

### Open Test Page
```bash
# Windows
start test-telegram.html

# Mac
open test-telegram.html

# Linux
xdg-open test-telegram.html
```

## 🔍 Debugging

### Check TypeScript Errors
```bash
pnpm run lint
```

### View Vercel Deployment Info
```bash
vercel inspect
```

### View Vercel Project Settings
```bash
vercel project
```

### Check Build Output
```bash
ls -la dist
# or on Windows
dir dist
```

### Test Environment Variables (Local)
```bash
# Linux/Mac
cat .env

# Windows
type .env
```

### Clear Browser Session Storage (Browser Console)
```javascript
sessionStorage.clear()
```

### Check if Notified (Browser Console)
```javascript
console.log(sessionStorage.getItem('visitor_notified'))
```

### Remove Notification Flag (Browser Console)
```javascript
sessionStorage.removeItem('visitor_notified')
```

## 🔄 Updates

### Update Dependencies
```bash
pnpm update
```

### Update Vercel CLI
```bash
npm update -g vercel
```

### Redeploy After Changes
```bash
# 1. Update code
# 2. Deploy to Vercel
vercel --prod

# 3. Build React app
pnpm run build

# 4. Deploy to GitHub Pages
pnpm run deploy
```

## 🧹 Cleanup

### Remove Vercel Deployment
```bash
vercel remove
```

### Clear Node Modules
```bash
# Windows
rmdir /s /q node_modules

# Linux/Mac
rm -rf node_modules
```

### Clean Build
```bash
# Windows
rmdir /s /q dist

# Linux/Mac
rm -rf dist
```

### Remove .vercel Folder
```bash
# Windows
rmdir /s /q .vercel

# Linux/Mac
rm -rf .vercel
```

## 📊 Monitoring

### Watch Vercel Logs Live
```bash
vercel logs --follow
```

### View Specific Deployment Logs
```bash
vercel logs [deployment-url]
```

### Check Deployment Status
```bash
vercel ls
```

### Get Deployment URL
```bash
vercel inspect --url
```

## 🔐 Security

### Check for Secrets in Code
```bash
# Linux/Mac
grep -r "TELEGRAM_BOT_TOKEN" src/

# Windows PowerShell
Select-String -Path "src\*" -Pattern "TELEGRAM_BOT_TOKEN" -Recurse
```

### Verify .gitignore
```bash
cat .gitignore | grep .env
```

## 🆘 Emergency Commands

### Rollback Deployment
```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote [deployment-url]
```

### Delete All Environment Variables
```bash
vercel env rm TELEGRAM_BOT_TOKEN production
vercel env rm TELEGRAM_CHAT_ID production
```

### Force Redeploy
```bash
vercel --force --prod
```

## 📝 Useful Git Commands

### Check Status
```bash
git status
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Add Telegram notifications"
```

### Push to GitHub
```bash
git push origin main
```

### View Remote URL
```bash
git remote -v
```

## 🎯 Quick Setup (One-Liner)

### Complete Setup
```bash
pnpm install && vercel login && vercel && vercel env add TELEGRAM_BOT_TOKEN && vercel env add TELEGRAM_CHAT_ID && vercel --prod
```

### Build and Deploy
```bash
pnpm run build && pnpm run deploy
```

## 🔧 Troubleshooting Commands

### Verify Node/NPM Version
```bash
node --version
npm --version
pnpm --version
```

### Clear PNPM Cache
```bash
pnpm store prune
```

### Reinstall Dependencies
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Test Telegram Bot Token
```bash
curl "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe"
```

### Test Chat ID
```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": "<YOUR_CHAT_ID>",
    "text": "Test message"
  }'
```

## 📚 Documentation Commands

### View Local Docs
```bash
# Windows
start TELEGRAM_QUICKSTART.md

# Mac
open TELEGRAM_QUICKSTART.md

# Linux
xdg-open TELEGRAM_QUICKSTART.md
```

### Print Checklist
```bash
cat CHECKLIST.md
```

---

## 💡 Pro Tips

1. **Alias Common Commands:**
```bash
# Add to ~/.bashrc or ~/.zshrc
alias vdeploy="vercel --prod"
alias build-deploy="pnpm run build && pnpm run deploy"
```

2. **Save Deployment URL:**
```bash
echo "VITE_NOTIFY_API_URL=https://your-project.vercel.app/api/notify" >> .env
```

3. **Quick Test:**
```bash
curl -X POST $(grep VITE_NOTIFY_API_URL .env | cut -d '=' -f2) \
  -H "Content-Type: application/json" \
  -d '{"userAgent":"CLI Test","referrer":"Terminal","timestamp":"'$(date -Iseconds)'","language":"en"}'
```

---

**Need more help?** Check the full documentation:
- `TELEGRAM_QUICKSTART.md` - Quick start guide
- `TELEGRAM_SETUP.md` - Detailed setup
- `CHECKLIST.md` - Setup verification
- `ARCHITECTURE.md` - System architecture
