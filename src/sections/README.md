---
permalink: false
eleventyExcludeFromCollections: true
---
# Homepage sections

Each `.md` file here is one section of the homepage. Edit the text and the site
updates on the next build — you never touch the templates.

A file has two parts:

- **Front matter** (between the `---` lines) — short labelled fields like the
  headline or button text.
- **Body** (everything below the second `---`) — the paragraphs, written in
  plain text / Markdown. Blank line = new paragraph.

| File       | What it is                                  |
|------------|---------------------------------------------|
| `hero.md`  | Top banner: eyebrow label, headline, button, and intro paragraph. |
| `about.md` | "Why I Do This" — label, heading, and the story paragraphs. |

Don't change the `key:` field — that's how the page finds each section.
The gallery is edited separately, in `src/gallery/`.
