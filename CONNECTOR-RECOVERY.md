# Connector Recovery

Last updated: 2026-05-29

## Rule

Gerry does not manually edit repository files.

If the ChatGPT GitHub connector fails, blocks, filters, or behaves inconsistently, do not ask Gerry to paste code, create files, replace files, copy file contents, or manually repair GitHub files.

## Treat these as connector problems

- harmless text-only writes are blocked
- reads work but safe writes fail
- large safe file updates are filtered
- internal action labels confuse the workflow
- normal restaurant page wording is blocked
- live site rendering cannot be verified from the chat environment

## Recovery order

1. Retry with a smaller safe edit.
2. Simplify wording if a text filter appears to be the issue.
3. Split large updates into smaller commits.
4. Skip only the blocked file, not the whole project.
5. Record the blocked file and reason in `PROJECT-STATUS.md`.
6. Continue the next safe item in the queue.
7. Use Codex as the main path for multi-file work.

## Do not do

- Do not stop the project because one connector write is blocked.
- Do not ask Gerry to manually update the blocked file.
- Do not ask Gerry to babysit routine commits.
- Do not change frameworks or deployment methods as a workaround.
- Do not add GitHub Actions deployment as a workaround.

## Known connector false positives

- `public/dallas-restaurants.html` city-to-food cross-link update
- `public/tokyo-restaurants.html` city-to-food cross-link update

## Safe continuation

If at least one repo write path still works, continue safe work directly in the repo.
