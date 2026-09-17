# ISAP Forum 2026 — Multi-Page Static Site

Split from the original single-file SPA (`uploads/index.html`) into one HTML
file per page, plus one shared stylesheet and one shared script.
Frontend-only: HTML5 + CSS3 + Vanilla JS — no frameworks, no build step.

## Files

| File | Page |
|---|---|
| `index.html` | Home (hero, countdown, about, stakeholders, featured speakers, programme preview, latest news) |
| `about.html` | About ISAP |
| `forum.html` | ISAP Forum 2026 (the event: theme, objectives, venue) |
| `programme.html` | Programme (filterable schedule, confirmed/TBA statuses) |
| `speakers.html` | Speakers & Panel |
| `partners.html` | Partners & Supporters (4 categories, publication-gated) |
| `news.html` | News & Updates (search, category filter, sort) |
| `article.html` | **News article page — single article view.** Open as `article.html?slug=<slug>` (e.g. `article.html?slug=one-week-to-go`). Unknown/missing slugs redirect to `news.html`. |
| `resources.html` | Resources Library (pre- and post-forum) |
| `register.html` | Register (validated form, demo reference + QR placeholder) |
| `contact.html` | Contact (secretariat details + message form) |
| `style.css` | Full design system (tokens, theme, components, responsive, reduced-motion) |
| `main.js` | CMS-ready data store (`ISAP_DATA`) + theme, menu, countdown, renderers, forms, sharing, scroll-reveal |

## How it works

- Each page declares itself with `<body data-page="…">`; `main.js` runs the
  matching renderer on load. `style.css` and `main.js` are shared by all pages.
- All editable content lives in `ISAP_DATA` in `main.js` (event, programme,
  speakers, partners, news, resources) with publication-status fields
  (`invited / confirmed / published` · `draft / approved / published`).
  Renderers only show `published` records — swap the objects for API/CMS
  responses later without touching the renderers.
- Dark/light theme persists via `localStorage` (bootstrap script in each
  page's `<head>` prevents flash).
- Each page has its own `<title>`, meta description, canonical and OG tags.

## Changes made during the split

- Hash router (`#/…`) replaced with real pages; all links rewritten
  (`#/news/<slug>` → `article.html?slug=<slug>`).
- Nav active states are now static per page (desktop, mobile and the
  "More" dropdown trigger).
- Renderers, countdown, forms and marquee are guarded so the shared
  `main.js` is safe on every page.
- The Tailwind CDN browser build was removed — no `tw-` utility classes were
  used anywhere in the markup; the site runs fully on its own design system
  (also removes the need for that runtime dependency).
- Google Fonts (Space Grotesk / Public Sans) are still loaded from the CDN;
  system-font fallbacks apply when offline.

## Serving

Any static file server works from this folder:

```bash
python3 -m http.server 8080
# or: npx serve .
```

Open `http://localhost:8080/`.

## To customize later

- **Event details** (date, venue, share URL): `ISAP_DATA.event` in `main.js`.
- **Speakers/partners/news/resources**: the other `ISAP_DATA` arrays — change
  `status` to `"published"` to make a record appear.
- **Brand assets**: og:image placeholder in each `<head>`, map/logo
  placeholders noted in the HTML comments.
