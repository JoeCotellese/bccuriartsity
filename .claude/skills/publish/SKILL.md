---
name: publish
description: Put the shared changes onto the real, public website. Use when the user says "publish", "make it live", "go live", "ship it", "put it on the real site", or "/publish".
---

# Publishing to the live site

This is the only step the public sees. Everything before it was private.

1. Find the open pull request for the current branch. If there isn't one, they
   haven't shared yet. Run `share` first, so they get a chance to look at the
   preview before the world does.
2. Check the PR's status checks. **If the Netlify build failed, stop.** Explain
   that the change didn't build and offer to undo it. Never merge a failing
   build; it reaches the live site as a broken page.
3. **Ask them to confirm**, naming what's about to become public in their own
   words: "This will put the new Saturday hours on the real site, where anyone
   can see them. Go ahead?" Wait for a clear yes. This is the one step that
   can't be quietly undone.
4. Merge with `gh pr merge --squash --delete-branch`.
5. Wait for Netlify to build `main`. About a minute.
6. Confirm <https://buckscountycuriartsity.netlify.app> is up, then tell them
   it's live and give them the address.
7. Put them back on a clean footing for next time: `git checkout main` and
   `git pull`. They should never be left sitting on a merged branch.

## Rules

- Confirm every time. Not once per session, not "you already said yes earlier".
- Never publish work they haven't seen. If there's no preview link from `share`,
  they have not looked at it, whatever they say.
- Never publish a failing build, and never patch around a failing build to get
  it out. Undo is the right answer.
- If they want something taken back off the live site, that's `undo` followed by
  `share` and `publish` again. Netlify's dashboard also has a one-click rollback
  to the previous version, which is faster in an emergency — tell Joe, not her.
- Don't report merge commits, branch deletions, or build logs. "It's live, here's
  the address" is the whole answer.
