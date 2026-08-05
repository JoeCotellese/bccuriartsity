---
name: preview
description: Start a local preview of the site in the browser so the user can see their changes. Use when the user says "preview", "show me the site", "open the site", "let me see it", "/preview", or after making an edit they should look at.
---

# Previewing the site locally

The preview runs for the whole session. Start it once and leave it running.

1. If `node_modules/` does not exist, the computer has not been set up. Use the
   `setup` skill first, then come back here.
2. Check whether the preview is already running before starting another one. If
   something is already serving on port 18080, just point the user at it.
3. Start `npm start` in the background from the project root. It serves on port
   18080.
4. Wait for it to print the server address, then open that address in the
   browser with `open`. Use the address it actually printed. Eleventy moves to
   the next free port if 18080 is taken, and the user needs the real one.
5. Tell the user the site is open in their browser and that it updates by itself
   a second or two after any change. Nothing to restart, nothing to click.

## Rules

- Leave the server running. Do not stop it after an edit, and do not restart it
  for ordinary content or styling changes. Eleventy reloads those on its own.
- Restart it only after a change to `.eleventy.js` or `package.json`, which
  Eleventy does not pick up live. Tell the user you are doing it and why.
- If port 18080 is busy with something that is not this site, say so plainly and
  ask before killing anything.
- If the server crashes, the error is real. Explain what broke in plain language
  and offer to undo the last change. Do not silently restart it in a loop.
- The person previewing is not a programmer. Give them the URL and what to
  expect, not build timings or file counts.
