---
name: undo
description: Take back the most recent change to the site. Use when the user says "undo", "undo that", "take that back", "revert", "put it back", "I don't like it", "start over", or "/undo".
---

# Undoing a change

Undo goes back exactly one step, and always asks first. Losing work she meant
to keep is worse than undoing twice.

Work out which step is most recent:

- **Unsaved changes exist** (`git status` is not clean): the most recent step is
  the edit that hasn't been saved. Describe it in plain language, confirm, then
  discard it with `git restore`.
- **Everything is saved** (`git status` is clean): the most recent step is the
  last save. Describe what that save changed, confirm, then take it back.

Taking back a save depends on whether it has reached GitHub:

- **Not yet published** (the commit is local only): `git reset --hard HEAD~1`.
- **Already published** (the commit is on the remote): `git revert` it instead,
  and tell them the live site will change back once they publish again. Never
  reset a commit that has been pushed.

Afterwards, tell them what the site looks like now and that the preview has
already caught up.

## Rules

- Always confirm before discarding anything, and describe what will be lost in
  their terms first. This is the one place where being slower is correct.
- One step at a time. If they want to go back further, undo again and confirm
  again. Never unwind several changes in one move.
- Never undo past a change they didn't make. If the previous save came from the
  developer rather than from this session, say so and ask before continuing.
- If they're unsure whether they want it back, GitHub Desktop shows the history
  visually. Point them there rather than guessing.
