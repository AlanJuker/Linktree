(function () {
  var p = window.PROFILE || {};

  var ICONS = {
    youtube:
      '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>',
    soundcloud:
      '<svg viewBox="0 0 24 24"><path d="M1.2 13.1c-.1 0-.1.1-.1.1l-.2 1.6.2 1.5c0 .1.1.1.1.1s.1-.1.1-.1l.2-1.5-.2-1.6s0-.1-.1-.1Zm1.4-.9c-.1 0-.1.1-.2.1l-.2 2.5.2 2.4c0 .1.1.1.2.1s.1-.1.1-.1l.3-2.4-.3-2.5s0-.1-.1-.1Zm1.5-.6c-.1 0-.2.1-.2.2L3.7 15l.2 3c0 .1.1.2.2.2s.2-.1.2-.2l.3-3-.3-3.2c0-.1-.1-.2-.2-.2Zm1.6-.2c-.1 0-.2.1-.2.2L5.2 15l.3 3c0 .1.1.2.2.2s.2-.1.2-.2l.3-3-.3-3.4c0-.1-.1-.2-.2-.2Zm1.7.3c-.1 0-.2.1-.2.2L6.9 15l.3 2.9c0 .1.1.2.2.2s.2-.1.2-.2l.3-2.9-.3-3.1c0-.1-.1-.2-.2-.2Zm1.7-1.6c-.1 0-.2.1-.2.2L8.6 15l.3 2.9c0 .1.1.2.2.2s.2-.1.2-.2l.3-2.9-.3-4.6c0-.1-.1-.2-.2-.2Zm1.7-.7c-.2 0-.3.1-.3.3L10.2 15l.3 2.9c0 .1.1.2.3.2s.3-.1.3-.2l.3-2.9-.3-5.3c0-.2-.1-.3-.3-.3Zm1.8-.2c-.2 0-.3.1-.3.3L12 15l.3 2.8c0 .2.1.3.3.3s.3-.1.3-.3l.3-2.8-.3-5.5c0-.2-.1-.3-.3-.3Zm1.8.5c-.2 0-.3.2-.3.3l-.2 5 .2 2.8c0 .2.2.3.3.3.2 0 .3-.2.3-.3l.3-2.8-.3-5c0-.2-.1-.3-.3-.3Zm1.9-1.4c-.2 0-.4.2-.4.4l-.2 6.4.2 2.7c0 .2.2.4.4.4s.4-.2.4-.4l.2-2.7-.2-6.4c0-.2-.2-.4-.4-.4Zm1.9-.6c-.2 0-.4.2-.4.4l-.2 7 .2 2.7c0 .2.2.4.4.4s.4-.2.4-.4l.2-2.7-.2-7c0-.2-.2-.4-.4-.4ZM21 12.2c-.4 0-.8.1-1.1.2-.2-2.7-2.5-4.9-5.3-4.9-.7 0-1.4.2-2 .4-.2.1-.3.2-.3.4v9.4c0 .2.2.4.4.4H21c1.7 0 3-1.3 3-3s-1.3-2.9-3-2.9Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1a3 3 0 0 0-.8-1.2 3 3 0 0 0-1.2-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.2-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z"/></svg>',
    spotify:
      '<svg viewBox="0 0 24 24"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1 .25c-2.8-1.7-6.4-2.1-10.5-1.15a.75.75 0 1 1-.33-1.46c4.5-1.03 8.4-.58 11.6 1.36.35.22.46.68.23 1Zm1.47-3.27a.94.94 0 0 1-1.3.3c-3.2-1.96-8.07-2.53-11.85-1.38a.94.94 0 0 1-.55-1.8c4.32-1.3 9.7-.67 13.4 1.6.44.27.58.85.3 1.28Zm.13-3.4C15.26 8.35 8.9 8.14 5.24 9.25a1.12 1.12 0 1 1-.65-2.15c4.2-1.27 11.2-1.03 15.6 1.6a1.12 1.12 0 1 1-1.14 1.93Z"/></svg>',
    tiktok:
      '<svg viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06V9.7a5.68 5.68 0 0 0-.77-.05 5.67 5.67 0 1 0 5.67 5.67V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.23-1.48Z"/></svg>',
    mixcloud:
      '<svg viewBox="0 0 24 24"><path d="M21.1 9.9a5.4 5.4 0 0 0-5-4.6 6.6 6.6 0 0 0-6.2 3.3 4.2 4.2 0 0 0-3.7 1.3H2.3c-.7 0-1.3.6-1.3 1.3v3.7c0 .7.6 1.3 1.3 1.3h3.9c.9.9 2.3 1.3 3.6 1.1a6.6 6.6 0 0 0 6.3 3.4 5.4 5.4 0 0 0 5-4.6h1.6c.7 0 1.3-.6 1.3-1.3v-3c0-.7-.6-1.3-1.3-1.3h-1.6Z"/></svg>',
    beatport:
      '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 15.2a5.2 5.2 0 1 1 0-10.4 5.2 5.2 0 0 1 0 10.4Zm0-7.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5-8-5V6l8 5 8-5v2.2Z"/></svg>',
    link:
      '<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 1 1 1.4 1.4l-1.4 1.4a1 1 0 0 1-1.4 0Zm-3.5 5.7a4 4 0 0 1 0-5.7l2.1-2.1 1.4 1.4-2.1 2.1a2 2 0 1 0 2.8 2.8l2.1-2.1 1.4 1.4-2.1 2.1a4 4 0 0 1-5.6 0Zm9.8-9.8-2.1 2.1-1.4-1.4 2.1-2.1a2 2 0 1 0-2.8-2.8L10.6 7.2 9.2 5.8l2.1-2.1a4 4 0 1 1 5.6 5.6Z"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || ICONS.link;
  }

  function initials(name) {
    return String(name || '')
      .replace(/[^\p{L}\p{N} ]/gu, '')
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(function (w) {
        return w[0];
      })
      .join('')
      .toUpperCase();
  }

  // --- Título y metadatos ---
  var title = p.pageTitle || (p.name ? p.name + ' · Links' : 'Links');
  document.title = title;
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  if (p.bio) {
    ['meta[name="description"]', 'meta[property="og:description"]'].forEach(function (s) {
      var el = document.querySelector(s);
      if (el) el.setAttribute('content', p.bio);
    });
  }

  // --- Avatar ---
  var slot = document.getElementById('avatar');
  function fallbackAvatar() {
    var div = document.createElement('div');
    div.className = 'avatar';
    div.textContent = initials(p.name) || '♪';
    slot.replaceWith(div);
    slot = div;
  }
  if (p.avatar) {
    var img = new Image();
    img.className = 'avatar';
    img.alt = p.name || 'Avatar';
    img.onload = function () {
      slot.replaceWith(img);
      slot = img;
    };
    img.onerror = fallbackAvatar;
    img.src = p.avatar;
  } else {
    fallbackAvatar();
  }

  // --- Textos ---
  document.getElementById('name').textContent = p.name || '';
  var handleEl = document.getElementById('handle');
  handleEl.textContent = p.handle || '';
  if (!p.handle) handleEl.style.display = 'none';
  var bioEl = document.getElementById('bio');
  bioEl.textContent = p.bio || '';
  if (!p.bio) bioEl.style.display = 'none';

  // --- Links ---
  var wrap = document.getElementById('links');
  (p.links || []).forEach(function (l, i) {
    var a = document.createElement('a');
    a.className = 'link';
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('data-icon', l.icon || 'link');
    a.style.animationDelay = 0.15 + i * 0.07 + 's';
    a.innerHTML =
      '<span class="icon">' +
      icon(l.icon) +
      '</span><span class="label"></span>';
    a.querySelector('.label').textContent = l.label || l.url;
    wrap.appendChild(a);
  });

  // --- Social del footer ---
  var social = document.getElementById('social');
  (p.social || []).forEach(function (s) {
    var a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', s.label || s.icon);
    a.innerHTML = icon(s.icon);
    social.appendChild(a);
  });

  document.getElementById('footer').textContent =
    (p.name || '') + ' © ' + new Date().getFullYear();
})();
