#!/bin/bash

# Quick setup script for Telegram notifications

echo "🚀 Setting up Telegram Visitor Notifications"
echo ""

# Check if .env exists
if [ -f .env ]; then
    echo "⚠️  .env file already exists. Please update it manually or delete it first."
    exit 1
fi

echo "📋 Please provide the following information:"
echo ""

# Get bot token
read -p "Enter your Telegram Bot Token (from @BotFather): " BOT_TOKEN
read -p "Enter your Telegram Chat ID (from @userinfobot): " CHAT_ID

# Create .env file
cat > .env << EOF
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=$BOT_TOKEN
TELEGRAM_CHAT_ID=$CHAT_ID

# API URL (update this after deploying to Vercel)
VITE_NOTIFY_API_URL=/api/notify
EOF

echo ""
echo "✅ .env file created successfully!"
echo ""
echo "Next steps:"
echo "1. Install Vercel CLI: npm install -g vercel"
echo "2. Login to Vercel: vercel login"
echo "3. Deploy: vercel"
echo "4. Add environment variables to Vercel:"
echo "   - vercel env add TELEGRAM_BOT_TOKEN"
echo "   - vercel env add TELEGRAM_CHAT_ID"
echo "5. Update VITE_NOTIFY_API_URL in .env with your Vercel URL"
echo "6. Rebuild and deploy to GitHub Pages"
echo ""
echo "For detailed instructions, see TELEGRAM_SETUP.md"
