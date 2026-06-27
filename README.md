# Bucks County CuriARTsity — website

The website for the shop. It's one page (with a detail page per gallery piece)
built from plain text files. **You edit text files; the site rebuilds itself.**

You don't need to be a programmer to update the copy, the shop details, or the
gallery. This README points you to the right file for whatever you want to change.

## What do I want to change?

| I want to change…                                  | Edit this                                  |
|----------------------------------------------------|--------------------------------------------|
| Shop name, address, phone, email, hours, social links | `src/_data/site.json`                  |
| The top banner or the "Why I Do This" story        | `src/sections/` (see the README in there)  |
| A piece in the gallery (or add/remove one)         | `src/gallery/` (see "Gallery" below)       |
| Colors, fonts, spacing                             | `src/css/style.css`                        |

When in doubt, the text you see on the live site almost always lives in one of
the files above. Search the project for a sentence you see on the page and
you'll usually land on the right file.

## Editing shop details

`src/_data/site.json` is the single source of truth for shop facts — name,
address, phone, email, hours, social links. Change them here, **not** anywhere
else; several other files (the sitemap, search-engine data, etc.) read from this
one automatically.

One thing to know: the hours appear twice in that file — once as friendly text
(`hours`) and once as machine times (`hoursSchema`) that search engines read. If
you change the hours, update **both** so they match.

## Gallery

Each piece is one file in `src/gallery/`, ending in `.md`. To add a piece, copy
an existing one, rename it, and edit the top section. Example:

```
---
title: Harbor at Dusk
date: 2026-06-09
medium: Oil on canvas
year: c. 1920
sold: false
image: /images/harbor-oil.jpg
---

A few sentences describing the piece. This shows on the piece's own page.
```

- `title`, `medium`, `year` — shown to visitors.
- `date` — controls ordering; newest pieces show first.
- `sold` — `true` puts a "Sold" badge on it; `false` leaves it for sale.
- `image` — optional. Drop the photo in `src/images/` and point to it like
  `/images/harbor-oil.jpg`. No image? Leave the line out and it shows a titled
  placeholder tile.

The file name becomes the web address (`harbor-oil.md` → `/gallery/harbor-oil/`),
so keep it short and lowercase with dashes. To remove a piece, delete its file.

## Previewing your changes

You need [Node.js](https://nodejs.org) installed once. Then, in this folder:

```
npm install      # first time only
npm start        # starts a live preview
```

Open the address it prints (usually <http://localhost:8080>) in your browser.
Edits to the content files show up automatically. Press `Ctrl-C` in the terminal
to stop.

> Note: if you change the colors/fonts setup or `.eleventy.js`, stop and restart
> `npm start` — those aren't picked up live.

## Publishing

The live site updates automatically when changes reach the `main` branch on
GitHub. If you're not comfortable with Git, hand your edited files to whoever
manages the site and they'll publish them.

## How it's built (for the curious / for developers)

Static site generated with [Eleventy](https://www.11ty.dev), styled with
[Pico CSS](https://picocss.com) plus a thin re-skin in `src/css/style.css`. No
JavaScript framework, no database. Deeper architecture and styling notes for
developers are in `CLAUDE.md`.
