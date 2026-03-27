
Goal: eliminate every possible fallback path so Google can only pick your Tro.ts favicon, then force re-crawl on canonical URLs.

1) Favicon hard reset (single binary identity)
- Regenerate one master favicon set from your brand logo and overwrite ALL public icon entrypoints with that same artwork:
  - `/favicon.ico`, `/favicon.png`, `/favicon-v2.ico`
  - `/favicon-16x16.png`, `/favicon-32x32.png`, `/favicon-48x48.png`, `/favicon-48x48-v2.png`
  - `/apple-touch-icon.png`, `/apple-touch-icon-v2.png`
  - `/android-chrome-192x192.png`, `/android-chrome-192x192-v2.png`
  - `/android-chrome-512x512.png`, `/android-chrome-512x512-v2.png`
- Reason: if Google still has an old cached URL variant, it still receives your logo.

2) Head cleanup in `index.html`
- Keep a minimal, explicit favicon set only (ico + 32x32 + apple + manifest).
- Add `rel="shortcut icon"` pointing to `/favicon.ico`.
- Keep canonical as `https://trotsarchitects.com/`.
- Use one fresh cache version string across all icon links.

3) Canonical host enforcement upgrade in `src/main.tsx`
- Replace current “non-canonical = add noindex” logic with:
  - hard redirect to `https://trotsarchitects.com` for non-local, non-preview hosts.
  - allow localhost + preview host only.
- Reason: prevents non-canonical hosts from becoming competing favicon/index sources.

4) Manifest normalization in `public/site.webmanifest`
- Reference only the normalized 192/512 icons (same cache version as head links).
- Keep branding fields unchanged.

5) Rollout + verification checklist
- Publish frontend update.
- Verify these URLs return your logo: `/favicon.ico`, `/favicon.png`, `/apple-touch-icon.png`, `/android-chrome-512x512.png`.
- In Search Console:
  - URL Inspect + Request Indexing for `/` and `/works`.
  - Live test canonical URL.
  - If any non-canonical URL is indexed, submit temporary removals.
- Expectation: once this is live, Google’s icon usually flips on next favicon recrawl window.

Technical details
- Files to update: `index.html`, `src/main.tsx`, `public/site.webmanifest`, favicon assets in `public/`.
- No backend/database/auth changes required.
