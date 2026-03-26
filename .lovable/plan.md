
Goal: force Google to stop using any stale/default favicon candidate and give it one unambiguous brand icon source.

What I found
- Your code already includes favicon tags and a manifest.
- You confirmed Google is showing the correct URL (`https://trotsarchitects.com`) but Search Console setup is incomplete across variants.
- Most likely issue now is Google SERP favicon cache + multiple historical favicon filenames giving Google too many fallback choices.

Implementation plan (what I will change)
1) Favicon “single source of truth” reset
- Create one SERP-optimized master icon (high-contrast, simple shape for tiny 16x16 display).
- Regenerate and overwrite all favicon entry points to the same artwork:
  - `/favicon.ico` (multi-size)
  - `/favicon-16x16.png`, `/favicon-32x32.png`, `/favicon-48x48.png`
  - `/apple-touch-icon.png`
  - `/android-chrome-192x192.png`, `/android-chrome-512x512.png`
- Keep legacy names (`*-v2`) but make them identical to avoid any stale fallback mismatch.

2) Head metadata cleanup in `index.html`
- Remove duplicate/competing icon declarations.
- Keep only standard explicit links (16/32/48 + ico + apple-touch + manifest).
- Add a fresh cache-bust version on icon and manifest links.

3) Manifest normalization
- Update `public/site.webmanifest` to reference only the normalized icon set (192/512).
- Ensure name/short_name/theme fields remain valid.

4) Host/canonical hardening
- Keep canonical fixed to `https://trotsarchitects.com/`.
- Add runtime guard so non-primary hosts don’t become competing index targets (especially staging host), reducing favicon ambiguity.

5) Verification and rollout checklist
- Validate all icon URLs return 200 + correct image content type.
- Validate `<head>` on both `trotsarchitects.com` and `www.trotsarchitects.com`.
- Publish frontend update.
- Then perform Search Console resubmission for:
  - `https://trotsarchitects.com/`
  - `https://trotsarchitects.com/favicon.ico`
  - `https://www.trotsarchitects.com/` (add/verify URL-prefix variant too)

Expected outcome
- This removes ambiguous favicon candidates and gives Google one clean icon family.
- SERP icon change usually appears after recrawl/caching cycle (often 24h–7 days, sometimes longer), but this plan gives the strongest possible technical signal from your side.

Technical details
- Files to update: `index.html`, `public/site.webmanifest`, favicon assets under `public/`.
- No backend/database changes required.
- No UI/route behavior changes required.
