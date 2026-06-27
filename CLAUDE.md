# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — Eleventy dev server with live reload (`eleventy --serve`)
- `npm run build` — production build to `_site/`
- No tests, no linter. (`npm test` is a stub that exits 1.)

## Deployment

Netlify builds `npm run build` and publishes `_site/` (see `netlify.toml`). Push to `main` deploys.

## Architecture

Eleventy 3 static site. Styling is [Pico CSS v2](https://picocss.com) (CDN, classful build) re-skinned by a thin `src/css/style.css`. No JS framework, no build step beyond Eleventy.

Single source of truth for shop facts is `src/_data/site.json` — name, address, phone, email, hours, social links, map URLs. Templates read it as the global `site`. **Change shop details there, not in templates.** Two derived facts have parallel representations that must be kept in sync by hand: `hours` (human-readable strings) vs `hoursSchema` (machine times for schema.org markup).

`site.json` propagates into generated files that exist to stay in sync with it: `llms.txt.njk` → `/llms.txt`, `sitemap.xml.njk`, `robots.txt.njk`, and the SEO/schema.org meta in `base.njk`. Editing one of these by hand instead of `site.json` will cause drift.

### Page structure

The public site is a **single page** with anchor navigation (`#home`, `#about`, `#gallery`, `#contact`). Gallery pieces also get their own detail pages at `/gallery/<slug>/`.

- `src/_includes/base.njk` — layout shell: `<head>` (fonts, Pico, SEO/OG/Twitter meta, schema.org JSON-LD, favicons), the sticky header nav, and the dark **"Find Me In Person" contact block which doubles as the site footer** (so it appears on every page, including detail pages). Copyright sign-off sits at the bottom of that block.
- `src/index.njk` — homepage sections: hero (`#home`), about (`#about`, first-person "Why I Do This"), gallery (`#gallery`).
- `src/_includes/item.njk` — individual gallery piece page; back-link targets `/#gallery`.

There is **no** standalone `/gallery/` index page — the homepage `#gallery` section is the gallery.

### Gallery (data-driven collection)

Each piece is one markdown file in `src/gallery/`. `src/gallery/gallery.json` is the Eleventy directory data file giving every file in that folder `layout: item.njk` and `tags: [gallery]` — so adding a piece is just dropping in a new `.md`, no config. Front matter consumed by templates: `title`, `date`, `medium`, `year`, `image` (optional — falls back to a titled placeholder tile), `sold` (bool — renders a "Sold" badge via `.gallery-item__sold`). The homepage `#gallery` section renders the `gallery` collection reverse-chronologically into `.gallery-grid`; each tile links to the piece's detail page.

## Style guide

Voice: **first-person, personal** ("I hunt for pieces…", "Find Me In Person") — the owner speaking, not a shop "we". Match that in any copy.

Visual system (defined as CSS custom properties at the top of `style.css`):

- **Palette:** forest green `#2d5016` (primary/accent), deep charcoal `#2c2c2c` (text + dark bands), warm cream `#f8f7f5` (background), taupe `#8b8680` (muted text). On the dark contact/footer band, links use a brighter green (`#a8d472`) for AA contrast.
- **Fonts:** Crimson Text (serif) for headings + the nav wordmark; Jost (sans, weight 300 body) for everything else. Loaded from Google Fonts in `base.njk`.
- **Layout:** full-width sticky header and full-bleed dark contact/footer band; body sections stay within Pico's centered `.container`. Section eyebrows use `.section-label` (small uppercase forest-green).
- **Responsive: mobile-first.** Base CSS is the mobile layout (single-column hero with image on top, stacked grids); the desktop layer is added in a single `@media (min-width: 769px)` block. Add new responsive rules the same way — base = mobile, enhance upward.

## Working with Pico

Pico owns base typography, spacing, forms, tables, and the `.container` utility. The re-skin works by **overriding Pico's design tokens**, not fighting its rules:

- Palette/font tokens (`--pico-background-color`, `--pico-color`, `--pico-muted-color`, `--pico-font-family-sans-serif`, etc.) are set on `:root`.
- **Gotcha — primary color:** Pico defines its primary palette under `:root:not([data-theme="dark"])`, which out-specifies a plain `:root`. The forest-green primary tokens (`--pico-primary-background`, etc.) are therefore set under that same selector. Match this specificity when overriding any other Pico primary token, or it won't take.
- **Gotcha — tables:** Pico paints tables with `--pico-background-color`. On the dark band the hours table is forced `background: transparent` so it doesn't render a white box.
- Headings: Pico has no single heading-font token, so the serif face is applied by targeting `h1, h2, h3, .nav-logo, .contact-block h3` directly.

Reach for a Pico token override or a small component in `style.css` only when Pico's default falls short — don't add a heavyweight component or new dependency for what a few declarations cover.

### Conventions

- `.eleventy.js` registers a `currentYear` filter and passthrough-copies `src/css` and `src/images`.
- Templates carry two-line `ABOUTME:` comments (per global instructions) — preserve them.
