# Release Checklist

Last updated: 2026-06-04

Use this before pushing or accepting a production change.

## Before changing files

- Read `STABILITY-DIRECTIVE.md`.
- Read `PROJECT-STATUS.md` if present.
- Confirm the task fixes a real problem or advances the current safe queue.
- Confirm the work does not recreate a previously removed broken file.
- Confirm there is no simpler safe fix before replacing a working file.

## Before commit

- Confirm changed links point to real files.
- Confirm homepage still exists.
- Confirm important public pages still exist.
- Confirm no framework migration was added without approval.
- Confirm no live ads, tracking, payments, accounts, uploads, affiliate links, or public AI were added without approval.
- Confirm duplicate or old conflicting files are removed or documented.

## After deployment

Test the homepage, main navigation, important public pages, footer links, and mobile layout.

## Release pass condition

The release is acceptable only when:

- the site opens
- main links work
- no redirect loop appears
- no old test page appears instead of production
- the fix or production change is recorded in a project control file

## If something breaks

Stop new feature work. Restore the last working production path first, then document the cause and the permanent fix.
