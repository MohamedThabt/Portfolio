# ✅ Setup Checklist

Use this checklist to ensure your Telegram notification system is properly configured.

## 📋 Pre-Deployment Checklist

### 1. Telegram Bot Setup
- [ ] Created bot via @BotFather
- [ ] Saved bot token (format: `123456789:ABC...`)
- [ ] Got chat ID from @userinfobot
- [ ] Sent `/start` to your bot
- [ ] Bot is active and responsive

### 2. Local Configuration
- [ ] Installed dependencies: `pnpm install`
- [ ] Created `.env` file from `.env.example`
- [ ] Added `TELEGRAM_BOT_TOKEN` to `.env`
- [ ] Added `TELEGRAM_CHAT_ID` to `.env`
- [ ] No TypeScript errors in project

### 3. Vercel Setup
- [ ] Installed Vercel CLI: `npm install -g vercel`
- [ ] Logged in: `vercel login`
- [ ] Deployed project: `vercel`
- [ ] Added environment variable: `TELEGRAM_BOT_TOKEN`
- [ ] Added environment variable: `TELEGRAM_CHAT_ID`
- [ ] Redeployed with env vars: `vercel --prod`
- [ ] Noted deployment URL (e.g., `your-project.vercel.app`)

### 4. Environment Configuration
- [ ] Updated `VITE_NOTIFY_API_URL` in `.env` with Vercel URL
- [ ] Verified `.env` is in `.gitignore`
- [ ] No sensitive data in code

### 5. Testing
- [ ] Opened `test-telegram.html` in browser
- [ ] Updated API URL in test page
- [ ] Clicked "Send Test Notification"
- [ ] Received test message on Telegram ✅

### 6. GitHub Pages Deployment
- [ ] Built project: `pnpm run build`
- [ ] Deployed to GitHub Pages: `pnpm run deploy`
- [ ] Visited site in incognito mode
- [ ] Received visitor notification on Telegram ✅

## 🔍 Verification Steps

### Test API Endpoint
```bash
# Test if API is accessible
curl https://your-project.vercel.app/api/notify
```

Expected: 405 Method Not Allowed (because GET is not allowed)

### Test POST Request
```bash
curl -X POST https://your-project.vercel.app/api/notify \
  -H "Content-Type: application/json" \
  -d '{"userAgent":"Test","referrer":"Manual Test","timestamp":"2024-01-01T00:00:00Z","language":"en"}'
```

Expected: 200 OK and Telegram message received

### Test Session Storage
1. Open your site
2. Open browser console (F12)
3. Check: `sessionStorage.getItem('visitor_notified')`
4. Should be: `"true"`

## ⚠️ Common Issues

### Issue: No Telegram Message
**Check:**
- [ ] Bot token is correct
- [ ] Chat ID is correct
- [ ] Sent `/start` to bot
- [ ] Environment variables set in Vercel
- [ ] Vercel function deployed successfully

**Fix:**
```bash
# Verify environment variables
vercel env ls

# Check function logs
vercel logs
```

### Issue: CORS Error
**Check:**
- [ ] CORS headers in `api/notify.ts`
- [ ] API URL is correct
- [ ] Using HTTPS (not HTTP)

**Fix:**
Verify CORS headers in `api/notify.ts`:
```typescript
res.setHeader('Access-Control-Allow-Origin', '*');
```

### Issue: 404 Not Found
**Check:**
- [ ] API path is `/api/notify`
- [ ] `vercel.json` exists
- [ ] Project redeployed after adding files

**Fix:**
```bash
vercel --prod
```

### Issue: TypeScript Errors
**Check:**
- [ ] `@vercel/node` installed
- [ ] All dependencies installed

**Fix:**
```bash
pnpm install
```

## 🎯 Success Indicators

✅ **All Green** when:
- No console errors in browser
- Telegram message received within 2-3 seconds
- SessionStorage shows 'visitor_notified'
- Vercel logs show successful function execution
- No errors in browser Network tab

## 📝 Notes

- Notifications sent **once per browser session**
- Clear sessionStorage to test again
- Check Vercel logs for debugging
- Bot must be started (`/start`) to receive messages

## 🆘 Need Help?

1. **Check Documentation:**
   - `TELEGRAM_QUICKSTART.md` - Quick setup
   - `TELEGRAM_SETUP.md` - Detailed guide
   - `IMPLEMENTATION_SUMMARY.md` - Technical overview

2. **Test Components:**
   - Open `test-telegram.html`
   - Check browser console (F12)
   - Review Vercel function logs

3. **Verify Setup:**
   - Test bot: Send any message to your bot
   - Test API: Use curl or test page
   - Test deployment: Visit in incognito

---

**Last Updated:** Check this list after each deployment
**Status:** [ ] Complete [ ] In Progress [ ] Issues Found
