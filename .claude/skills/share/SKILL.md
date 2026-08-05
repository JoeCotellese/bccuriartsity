---
name: share
description: Put saved changes on the internet as a private preview link the user can look at or send to someone, without changing the live site. Use when the user says "share", "share it", "send it to Joe", "get me a link", "let Joe look at it", "I'm done for now", or "/share".
---

# Sharing changes as a preview link

Sharing puts their saved work on the internet at its own address. The real site
does not change. Say that plainly, because "on the internet" and "live" sound
like the same thing to someone who isn't a programmer.

1. If anything is unsaved, they'll lose it here. Offer to save first, and don't
   continue until the working tree is clean.
2. If nothing has been saved since the last share, say so and stop. There is
   nothing to look at.
3. If the current branch is `main`, something went wrong upstream: `save` should
   have created a working branch. Create one now before going further.
4. Push the branch with `git push -u origin HEAD`.
5. Open a pull request with `gh pr create`, titled the way they'd describe the
   change. If the branch already has an open PR, **reuse it** — the push in step
   4 already updated it. Do not open a second one.
6. Wait for Netlify to finish building. This takes about a minute. The preview
   lives at `https://deploy-preview-<PR number>--buckscountycuriartsity.netlify.app`.
   Poll it until it returns HTTP 200 before showing it to them. If it hasn't
   come up after five minutes, or the PR's checks fail, tell them the preview
   didn't build and that Joe needs to look. Don't hand over a link you haven't
   confirmed works.
7. Give them the link and tell them three things: it works, anyone they send it
   to can see it, and the real site still hasn't changed.

## Rules

- Never merge here. `share` only ever proposes. `publish` is what goes live.
- Never hand over an unverified link. A 404 reads as "I broke it" to someone who
  can't tell a slow build from a failure.
- Each round of edits reuses the same link until it's published. If they share
  again after more saves, the same address updates itself. Tell them that once,
  so they don't expect a new link every time.
- Don't show them the PR page unless they ask. The preview link is the thing
  they want; the pull request is Joe's view of it.
