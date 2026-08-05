---
name: save
description: Save the current changes to the site as a version the user can come back to. Use when the user says "save", "save this", "keep it", "keep that change", "that looks right", "/save", or otherwise signals they are happy with a change and want it kept.
---

# Saving a change

Saving records the change on their computer. It does not put it on the live
site. Say so, every time, so the difference stays clear.

1. Look at what actually changed with `git status` and `git diff`. If nothing
   changed, say so and stop.
2. If any structural file changed (`.njk`, `.css`, `.eleventy.js`,
   `package.json`), run `npm run build` first. If the build fails, **do not
   save.** Explain in plain language what broke and offer to undo it. A broken
   build reaches the live site as a blank page.
3. Commit everything that changed, with a message describing the change the way
   the user would say it. "Update the Saturday hours", not "modify site.json".
4. Tell them it's saved, in one sentence, and that the live site hasn't changed
   yet.

## Rules

- Never push. Saving is local. Publishing is a separate, deliberate act.
- One save per change. If they made three unrelated edits and then said save,
  commit them separately so `undo` can take back one without the others.
- Never save a failing build, and never work around a failing build by editing
  around the error. Undo is the right answer.
- Don't list files, diffs, or commit hashes back to them. They asked you to save
  their work, not to report on git.
