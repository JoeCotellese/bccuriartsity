---
name: setup
description: One-time setup of this computer for editing the site. Use when the user says "set up my computer", "get me started", "first time", "/setup", or when any other task fails because dependencies are missing or Node.js is absent.
---

# Setting up this computer to edit the site

Run `bin/setup` from the project root and let it finish. It checks Node.js,
installs dependencies, and builds the site once to prove the toolchain works.

Then report the outcome to the user in plain language:

- **If it succeeded**, tell them their computer is ready and that they can ask
  you to preview the site whenever they want to see it. Do not list what was
  installed.
- **If it failed**, the script already printed a plain-language explanation and
  what to do about it. Repeat that instruction in your own words. Do not paste
  the raw output, and do not attempt to fix the problem yourself.

## Rules

- Do not install Node.js, Homebrew, or anything else on their machine. If Node
  is missing, the script tells them to install it from nodejs.org. That stays a
  manual step they perform themselves.
- Do not work around a failure by editing project files. A failing setup means
  something is genuinely wrong and Joe needs to see it.
- The person running this is not a programmer. No version numbers, no file
  paths, no command names in your summary unless they need to type it.
