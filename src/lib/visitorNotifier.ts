// Client-side utility to send visitor notifications
export const notifyVisitor = async () => {
  // Check if we've already sent a notification in this session
  const hasNotified = sessionStorage.getItem('visitor_notified');
  
  // TEMPORARY: Log for debugging
  console.log('[Visitor Notifier] hasNotified:', hasNotified);
  console.log('[Visitor Notifier] API URL:', import.meta.env.VITE_NOTIFY_API_URL || '/api/notify');
  
  if (hasNotified) {
    console.log('[Visitor Notifier] Already notified in this session');
    return;
  }

  try {
    const visitorData = {
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      language: navigator.language,
    };

    // Replace with your actual Vercel function URL after deployment
    const apiUrl = import.meta.env.VITE_NOTIFY_API_URL || '/api/notify';

    console.log('[Visitor Notifier] Sending notification to:', apiUrl);

    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitorData),
    });

    // Mark as notified for this session
    sessionStorage.setItem('visitor_notified', 'true');
    console.log('[Visitor Notifier] Notification sent successfully!');
  } catch (error) {
    // Silently fail - we don't want to break the site if notification fails
    console.error('[Visitor Notifier] Failed to send visitor notification:', error);
  }
};
