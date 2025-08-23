# GANTHIX — Minimal Landing Page

A lightweight, no-dependency landing page for **GANTHIX** with a sequential acronym reveal.

## Features
- Dark aesthetic (black base) with **silver & gold** gradient accents
- Letter-by-letter brand reveal for **GANTHIX**
- Sequential acronym rows: **G → Generative**, **A → AI**, … **X → eXperiments**
- “Coming soon” badge and **Founder: Lok Sundar** link to `https://loksundar.com`
- Accessible (reduced motion respected, semantic HTML)
- No build tools or frameworks; deploy anywhere (GitHub Pages, Netlify, Vercel)

## Files
- `index.html` — markup + meta tags
- `assets/css/style.css` — styles & colors
- `assets/js/main.js` — simple sequential animations
- `assets/img/ganthix-logo.svg` — emblem
- `assets/img/favicon.svg` — favicon
- `assets/img/ganthix-og.png` — placeholder social image (SVG content with PNG extension; replace with a real PNG later if desired)

## How to Use
1. Upload the folder to your hosting (e.g., GitHub Pages).
2. If using a custom domain:
   - Add a file named `CNAME` in the project root containing `ganthix.com` (or your subdomain).
   - Point DNS `www` CNAME to your host (e.g., `<username>.github.io`) and follow your provider’s steps for the root domain.
3. Edit text in `index.html` or `assets/js/main.js` as needed.

## Customization
- Change the accent gradient in `:root` CSS vars (`--gold`, `--silver`).
- Swap the “X” meaning to **eXcellence** by editing `assets/js/main.js`.

---

© GANTHIX. All rights reserved.
