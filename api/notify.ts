// Vercel Serverless Function to send Telegram notifications
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface VisitorData {
  userAgent?: string;
  referrer?: string;
  timestamp?: string;
  language?: string;
  screenResolution?: string;
  viewport?: string;
  colorDepth?: number;
  devicePixelRatio?: number;
  timezone?: string;
  timezoneOffset?: number;
  pageUrl?: string;
  pageTitle?: string;
  connectionType?: string;
  platform?: string;
  isMobile?: boolean;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Missing Telegram credentials');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { 
      userAgent, 
      referrer, 
      timestamp, 
      language,
      screenResolution,
      viewport,
      colorDepth,
      devicePixelRatio,
      timezone,
      timezoneOffset,
      pageUrl,
      pageTitle,
      connectionType,
      platform,
      isMobile
    } = (req.body || {}) as VisitorData;

    // Debug log
    console.log('Received visitor data:', req.body);

    // Get IP address
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.socket.remoteAddress || 
               'Unknown';

    const safeTime = timestamp ? new Date(timestamp) : new Date();

    // Parse User Agent for better readability
    const parseUserAgent = (ua: string) => {
      if (!ua) return 'Unknown';
      
      // Extract browser
      let browser = 'Unknown';
      if (ua.includes('Chrome/') && !ua.includes('Edg/')) browser = 'Chrome';
      else if (ua.includes('Edg/')) browser = 'Edge';
      else if (ua.includes('Firefox/')) browser = 'Firefox';
      else if (ua.includes('Safari/') && !ua.includes('Chrome/')) browser = 'Safari';
      else if (ua.includes('Opera/') || ua.includes('OPR/')) browser = 'Opera';
      
      // Extract OS
      let os = 'Unknown';
      if (ua.includes('Windows NT 10.0')) os = 'Windows 10/11';
      else if (ua.includes('Windows NT')) os = 'Windows';
      else if (ua.includes('Mac OS X')) os = 'macOS';
      else if (ua.includes('Linux')) os = 'Linux';
      else if (ua.includes('Android')) os = 'Android';
      else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
      
      return `${browser} on ${os}`;
    };

    const browserInfo = parseUserAgent(userAgent || '');

    const message = `
🌐 *New Visitor Alert!*

⏰ *Time:* ${safeTime.toLocaleString()}
🌍 *Timezone:* ${timezone || 'Unknown'}
📍 *Page:* ${pageTitle || 'Unknown'}
🔗 *URL:* ${pageUrl || 'Unknown'}

📱 *Device Info:*
  • Type: ${isMobile ? '📱 Mobile' : '💻 Desktop'}
  • Platform: ${platform || 'Unknown'}
  • Screen: ${screenResolution || 'Unknown'}
  • Viewport: ${viewport || 'Unknown'}
  • Pixel Ratio: ${devicePixelRatio || 'Unknown'}

🌐 *Browser Info:*
  • Browser: ${browserInfo}
  • Language: ${language || 'Unknown'}
  • Connection: ${connectionType || 'Unknown'}

🔗 *Source:*
  • Referrer: ${referrer || 'Direct'}
  • IP: ${ip}

📋 *Raw User Agent:*
${userAgent || 'Unknown'}
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Telegram API error:', error);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
