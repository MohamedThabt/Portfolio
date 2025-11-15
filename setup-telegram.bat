@echo off
REM Quick setup script for Telegram notifications (Windows)

echo 🚀 Setting up Telegram Visitor Notifications
echo.

REM Check if .env exists
if exist .env (
    echo ⚠️  .env file already exists. Please update it manually or delete it first.
    exit /b 1
)

echo 📋 Please provide the following information:
echo.

REM Get bot token
set /p BOT_TOKEN="Enter your Telegram Bot Token (from @BotFather): "
set /p CHAT_ID="Enter your Telegram Chat ID (from @userinfobot): "

REM Create .env file
(
echo # Telegram Bot Configuration
echo TELEGRAM_BOT_TOKEN=%BOT_TOKEN%
echo TELEGRAM_CHAT_ID=%CHAT_ID%
echo.
echo # API URL ^(update this after deploying to Vercel^)
echo VITE_NOTIFY_API_URL=/api/notify
) > .env

echo.
echo ✅ .env file created successfully!
echo.
echo Next steps:
echo 1. Install Vercel CLI: npm install -g vercel
echo 2. Login to Vercel: vercel login
echo 3. Deploy: vercel
echo 4. Add environment variables to Vercel:
echo    - vercel env add TELEGRAM_BOT_TOKEN
echo    - vercel env add TELEGRAM_CHAT_ID
echo 5. Update VITE_NOTIFY_API_URL in .env with your Vercel URL
echo 6. Rebuild and deploy to GitHub Pages
echo.
echo For detailed instructions, see TELEGRAM_SETUP.md
echo.
pause
