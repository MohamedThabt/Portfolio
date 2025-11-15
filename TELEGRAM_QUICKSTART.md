# 🔔 Telegram Visitor Notifications - Quick Start

Get notified on Telegram whenever someone visits your portfolio!

## ⚡ Quick Setup (5 minutes)

### 1️⃣ Create Telegram Bot
1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot` and follow the prompts
3. Save your **bot token** (looks like: `123456789:ABC...`)

### 2️⃣ Get Your Chat ID
1. Message [@userinfobot](https://t.me/userinfobot) on Telegram
2. It will reply with your user ID
3. Save your **chat ID** (a number like: `123456789`)
4. Send `/start` to your bot to activate it

### 3️⃣ Deploy Serverless Function

**Option A: Using Vercel (Recommended - Free)**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy your project
cd "e:\my personal site\thabet-ai-forge"
vercel

# Add your Telegram credentials
vercel env add TELEGRAM_BOT_TOKEN
# (Paste your bot token when prompted)

vercel env add TELEGRAM_CHAT_ID
# (Paste your chat ID when prompted)

# Redeploy with environment variables
vercel --prod
```

You'll get a URL like: `https://your-project.vercel.app`

### 4️⃣ Update Configuration

Create `.env` file:
```bash
cp .env.example .env
```

Edit `.env` and update:
```env
VITE_NOTIFY_API_URL=https://your-project.vercel.app/api/notify
```

### 5️⃣ Deploy to GitHub Pages

```bash
pnpm run build
pnpm run deploy
```

### 6️⃣ Test It!

1. Open your portfolio in an incognito window
2. Check Telegram - you should receive a notification! 🎉

## 📱 What You'll Receive

Every time someone visits, you'll get a Telegram message like:

```
🌐 New Visitor Alert!

⏰ Time: 11/15/2025, 2:30:15 PM
📱 User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
🔗 Referrer: https://google.com
🌍 Language: en-US
🖥️ IP: 192.168.1.1
```

## 🛠️ Alternative Setup Options

### Option B: Using Netlify Functions

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify init`
3. Move `api/notify.ts` to `netlify/functions/notify.ts`
4. Update the function export format for Netlify
5. Deploy with `netlify deploy --prod`

### Option C: Using Cloudflare Workers

1. Create a Cloudflare account
2. Use Cloudflare Workers to host the API
3. Update the API endpoint in your code

## 🔧 Troubleshooting

### Not receiving messages?
- ✅ Check bot token is correct
- ✅ Send `/start` to your bot on Telegram
- ✅ Verify chat ID is correct
- ✅ Check Vercel function logs
- ✅ Try clearing browser cache

### Getting errors?
- Check browser console (F12)
- Check Vercel deployment logs
- Verify environment variables are set

### Want to test without deploying?
```javascript
// In browser console:
sessionStorage.removeItem('visitor_notified');
// Then refresh the page
```

## 💰 Cost

- ✅ Telegram: **FREE**
- ✅ Vercel: **FREE** (100GB/month)
- ✅ GitHub Pages: **FREE**

**Total: $0** 💸

## 🔒 Privacy

Only anonymous data is collected:
- Browser type
- Referrer URL
- Timestamp
- Language
- IP address

No personal information or tracking cookies.

## 📚 Full Documentation

See [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md) for detailed instructions.

## 🎯 Features

- ✅ Instant Telegram notifications
- ✅ Session-based (no spam)
- ✅ Privacy-friendly
- ✅ Free forever
- ✅ Easy to set up
- ✅ Works with GitHub Pages

---

**Need help?** Open an issue or check the [full documentation](./TELEGRAM_SETUP.md).
