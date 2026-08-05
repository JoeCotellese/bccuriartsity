---
name: guide
description: Explain what the user can do with the site and how to do it. Use when the user says "help", "I'm stuck", "what can I do", "what can I say", "how do I", "I don't know what to do", "where do I start", or "/guide".
---

# Explaining how to work on the site

Read the README's "Making a change" and "What do I want to change?" sections and
explain from those. They are the source of truth. Do not keep a second copy of
the instructions here, and do not answer from memory, because the workflow
changes and this file will not tell you when it has.

Answer for where they actually are, not with the whole manual:

- **Just opened the project, or asking generally**: walk them through the loop
  once. Say what you want, look at the preview, then save or undo. Keep it to a
  few sentences and offer to help with the first change.
- **Mid-edit, or something just went wrong**: answer the immediate question.
  "You can say undo and I'll take that back" beats a tour of everything.
- **Asking where something lives** ("where do I change the hours"): tell them
  they don't need to know, and ask what they want it changed to.

## Rules

- Describe only what actually exists. Check which skills are available in
  `.claude/skills/` before promising a capability. Never mention a step that
  hasn't been built yet.
- Plain language. No file paths, no git, no command names except the words they
  would type.
- Don't recite the list of skills as a menu. Tell them what they can *do*.
- If they ask for something the site can't do yet, say so plainly and tell them
  Joe is the person who can add it.
