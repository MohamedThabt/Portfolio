# Telegram Visitor Notification Setup

This guide will help you set up Telegram notifications when someone visits your portfolio site.

## Prerequisites
- A Telegram account
- A Vercel account (free tier is sufficient)

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat and send `/newbot`
3. Follow the prompts to create your bot:
   - Choose a name for your bot (e.g., "Portfolio Visitor Bot")
   - Choose a username (must end with 'bot', e.g., "yourname_portfolio_bot")
4. Save the **bot token** you receive (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

## Step 2: Get Your Chat ID

1. Search for `@userinfobot` on Telegram
2. Start a chat and send any message
3. It will reply with your user information
4. Save your **Chat ID** (a number like: `123456789`)

Alternatively:
1. Send a message to your bot (the one you created with BotFather)
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for the `chat.id` field in the response

## Step 3: Deploy to Vercel

### Option A: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your project:
   ```bash
   vercel
   ```

4. Add environment variables:
   ```bash
   vercel env add TELEGRAM_BOT_TOKEN
   vercel env add TELEGRAM_CHAT_ID
   ```
   (Enter the values when prompted)

5. Redeploy to apply environment variables:
   ```bash
   vercel --prod
   ```

### Option B: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Go to Project Settings → Environment Variables
5. Add these variables:
   - `TELEGRAM_BOT_TOKEN`: Your bot token from BotFather
   - `TELEGRAM_CHAT_ID`: Your chat ID from userinfobot
6. Redeploy the project

## Step 4: Update Your Portfolio Site

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Vercel function URL:
   ```
   VITE_NOTIFY_API_URL=https://your-project.vercel.app/api/notify
   ```

3. Rebuild and deploy your GitHub Pages site:
   ```bash
   npm run build
   npm run deploy
   ```

## Testing

1. Open your portfolio site in an incognito/private window
2. You should receive a Telegram message with visitor information
3. Check your Telegram bot for the notification

## Troubleshooting

### Not receiving notifications?

1. **Check bot token**: Make sure it's correct and the bot is active
2. **Check chat ID**: Verify it's your correct chat ID
3. **Start the bot**: Send `/start` to your bot on Telegram
4. **Check Vercel logs**: Go to your Vercel dashboard → Deployments → Function Logs
5. **Check browser console**: Look for any error messages

### Privacy Considerations

The notification system collects:
- User agent (browser and device info)
- Referrer (where the visitor came from)
- Timestamp
- Browser language
- IP address (from server)

This is minimal, anonymous data. No personal information is collected.

### Rate Limiting

To avoid spam, notifications are:
- Sent only once per browser session
- Stored in sessionStorage (cleared when browser closes)

If you want to disable notifications for testing, open browser console and run:
```javascript
sessionStorage.setItem('visitor_notified', 'true');
```

## Cost

- Telegram Bot: **Free**
- Vercel Hosting: **Free** (up to 100GB bandwidth/month)
- GitHub Pages: **Free**

Total cost: **$0** 💰
