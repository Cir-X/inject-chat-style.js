function injectCSS(retries = 0) {
  const chatRoot = document.querySelector('chat-list')?.shadowRoot;
  if (!chatRoot) {
    if (retries < 20) setTimeout(() => injectCSS(retries + 1), 500);
    else console.warn("Chat root not found.");
    return;
  }

  const style = document.createElement('style');
  style.textContent = `
    .chat-item {
      background: rgba(0,0,0,0.5) !important;
      color: #ffffff !important;
      font-size: 18px !important;
      font-family: 'Segoe UI', sans-serif !important;
      border-left: 4px solid #00ffe1 !important;
      padding: 8px 12px !important;
      margin: 6px 0 !important;
      border-radius: 8px !important;
      box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
    }

    .chat-item .username {
      font-weight: bold !important;
      color: #00ffe1 !important;
    }

    .platform-twitch .chat-item {
      border-left-color: #9146FF !important;
    }

    .platform-youtube .chat-item {
      border-left-color: #FF0000 !important;
    }

    .platform-kick .chat-item {
      border-left-color: #2CE755 !important;
    }

    .platform-tiktok .chat-item {
      border-left-color: #FF0050 !important;
    }
  `;
  chatRoot.appendChild(style);
}

injectCSS();
