# Bucks County CuriARTsity — website

The website for the shop. It's one page (with a detail page per gallery piece)
built from plain text files. **You edit text files; the site rebuilds itself.**

You don't need to be a programmer to update the copy, the shop details, or the
gallery. This README points you to the right file for whatever you want to change.

## First time setup (Mac)

You only do this once.

1. **Install GitHub Desktop** from <https://desktop.github.com>. Open it and
   sign in with your GitHub account.
2. **Clone the site.** File → Clone repository. Pick `bccuriartsity` from the
   list, accept the default location, click Clone. It lands in
   `~/Documents/GitHub/bccuriartsity`.
3. **Install Node.js** from <https://nodejs.org>. Take the version it offers you
   and click through the installer.
4. **Open Claude Code desktop** and open the folder from step 2 as your project.
5. **Ask Claude to set up your computer.** It checks everything is in place and
   installs what the site needs. Takes about a minute.

That's it. From now on you just open Claude Code and start working.

**GitHub Desktop is your undo button.** It shows you everything that changed
since your last save. If something looks wrong, right-click the file and choose
Discard changes.

## Making a change

The loop is the same every time, whether you're fixing a typo or moving a whole
section around:

1. **Say what you want.** Plain English. "Change Saturday to 10 to 4." "Add a
   piece called Harbor at Dusk." "Make the headline bigger." You don't need to
   know which file it lives in.
2. **Look at the preview.** It refreshes on its own within a second or two. If
   you changed how something looks, drag the window narrow too, so you can see
   what it does on a phone.
3. **Say `save` or `undo`.** Save keeps it. Undo takes it back. Either way
   nothing has reached the live site yet.
4. **Say `share` when you're done.** You get a link to your changes that you can
   look at properly or send to Joe. Still not the real site.
5. **Say `publish` to make it real.** It asks you to confirm, then the live site
   updates about a minute later.

Save as often as you like. Each save is a point you can come back to, so it's
better to save three small changes than one big one.

Undo always asks before it takes something back, and it only goes one step at a
time. Say undo again to keep going back.

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

Ask Claude to preview the site. It opens the site in your browser at
<http://localhost:18080> and leaves it running for the rest of your session.
Every change you make appears there a second or two later on its own. You don't
need to restart anything or click refresh.

This preview is only on your computer. Nobody else can see it, and the live site
doesn't change until you publish.

> For developers: `npm install` then `npm start`. Changes to `.eleventy.js` or
> `package.json` need a restart; everything else reloads live.

## Publishing

Your work goes through three stages, and it's worth knowing which one you're in:

- **Saved** — on your computer only. Nobody else can see it.
- **Shared** — on the internet at its own link, which you can send to anyone.
  The real site still hasn't changed.
- **Published** — on the real site at
  <https://buckscountycuriartsity.netlify.app>, where the public sees it.

Say `share` and then `publish` to move through them. Publish asks you to confirm
first, and it won't let you publish something that's broken.

Between share and publish is where you look properly, and where Joe can look
too. Take the time.

## How it's built (for the curious / for developers)

Static site generated with [Eleventy](https://www.11ty.dev), styled with
[Pico CSS](https://picocss.com) plus a thin re-skin in `src/css/style.css`. No
JavaScript framework, no database. Deeper architecture and styling notes for
developers are in `CLAUDE.md`.
