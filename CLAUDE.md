# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — Eleventy dev server with live reload (`eleventy --serve`)
- `npm run build` — production build to `_site/`
- No tests, no linter. (`npm test` is a stub that exits 1.)

## Deployment

Netlify builds `npm run build` and publishes `_site/` (see `netlify.toml`). Push to `main` deploys.

## Architecture

Eleventy 3 static site, no JS framework, no CSS framework in the repo (hand-written `src/css/style.css`). Single source of truth for shop facts is `src/_data/site.json` — name, address, phone, email, hours, social links, map URLs. Templates read it as the global `site`. **Change shop details there, not in templates.** Two derived facts have parallel representations that must be kept in sync by hand: `hours` (human-readable strings) vs `hoursSchema` (machine times for schema.org markup).

`site.json` propagates into generated files that exist to stay in sync with it: `llms.txt.njk` → `/llms.txt`, `sitemap.xml.njk`, `robots.txt.njk`, and the SEO/schema.org meta in `base.njk`. Editing one of these by hand instead of `site.json` will cause drift.

### Gallery (data-driven collection)

Each piece is one markdown file in `src/gallery/`. `src/gallery/gallery.json` is the Eleventy directory data file that gives every file in that folder `layout: item.njk` and `tags: [gallery]` — so adding a piece is just dropping in a new `.md`, no config. Front matter fields consumed by templates: `title`, `date`, `medium`, `year`, `image` (optional), `sold` (bool — renders a "Sold" stamp and `lot--sold` styling). `src/gallery.njk` renders the index from the `gallery` collection in reverse-chronological order.

### Templates

- `src/_includes/base.njk` — layout shell, `<head>`, SEO/OG/Twitter meta, schema.org JSON-LD, favicon links
- `src/_includes/item.njk` — individual gallery piece page
- `src/index.njk` — homepage, organized into numbered "plates" (Pl. I — The Shop, etc.)

The site uses an antique-catalogue visual idiom ("plates", "lots", "movements"); match that voice in copy and class names.

### Conventions

- `.eleventy.js` registers a `currentYear` filter and passthrough-copies `src/css` and `src/images`.
- Templates carry two-line `ABOUTME:` comments (per global instructions) — preserve them.
