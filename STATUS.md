# STATUS.md

Last verified: 2026-06-19
Repo: `Readeasy30/restaurantaibot.com`

## Project status

This repository is active.

GitHub is the source of truth.

Claude must inspect the actual files before saying what is done, missing, broken, or pending.

## Current workflow

Gerry gives the task.

Claude reads:

1. `DIRECTIVES.md`
2. `STATUS.md`
3. Actual GitHub file tree

Then Claude edits files, commits changes, updates `STATUS.md`, and gives a short report.

## Verified present 2026-06-19

- Repo exists under `Readeasy30/restaurantaibot.com`.
- GitHub account verified as `Readeasy30`.
- Write/admin access verified.
- `DIRECTIVES.md` exists and is the main standing instruction file.
- `STATUS.md` exists and was updated 2026-06-19.
- `CLAUDE.md` exists and now points Claude to `DIRECTIVES.md` first.
- `package.json` exists and shows Node/Express dependencies.
- `server.js` exists and contains an Express server using OpenAI and Google Maps API keys from environment variables.

## Drift found 2026-06-19

- Old `STATUS.md` startup routine referenced `CLAUDE.md` first.
- New standing workflow says `DIRECTIVES.md` should be read first.
- Corrected in `STATUS.md` and `CLAUDE.md`.
- This repo currently contains older Node/Express files.
- Gerry's standing website rule prefers plain HTML/CSS/JS and no new Node/npm/build tools unless clearly requested.
- Do not delete or convert Node/Express files unless Gerry clearly asks after repo verification.

## Important rules

- Do not rely on old chat memory.
- Do not redo finished work unless the repo proves it is needed.
- Do not redesign unless asked.
- Preserve the current live repo until a verified task says to change it.
- Keep mobile-first layout.
- Report blockers clearly.
- Do not commit secrets, API keys, tokens, or private credentials.

## Actually next

- On the next `restaurantaibot.com` task, read `DIRECTIVES.md` first.
- Verify the real file tree before code changes.
- Decide from verified repo reality whether the site should remain as-is or be cleaned toward plain HTML/CSS/JS.
