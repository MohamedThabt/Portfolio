// Client-side utility to send visitor notifications
export const notifyVisitor = async () => {
  // Check if we've already sent a notification in this session
  const hasNotified = sessionStorage.getItem('visitor_notified');
  
  if (hasNotified) {
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
    // For GitHub Pages deployment, we hardcode the Vercel API URL
    const apiUrl = 'https://portfolio-eight-iota-39.vercel.app/api/notify';

    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitorData),
    });

    // Mark as notified for this session
    sessionStorage.setItem('visitor_notified', 'true');
  } catch (error) {
    // Silently fail - we don't want to break the site if notification fails
    console.error('Failed to send visitor notification:', error);
  }
};
