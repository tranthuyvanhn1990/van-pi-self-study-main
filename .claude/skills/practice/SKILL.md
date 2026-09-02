---
name: practice
description: Give the student their next exercise. Run after /setup.
---

1. Read `.claude/progress.json`, cross-check against `curriculum.md` to find the next incomplete item.
2. Create/update a page under `src/app/<section>/<item>/page.js`, where `<section>` is `section` + the curriculum section number (e.g. `section1`) and `<item>` is the item's w3schools slug in kebab-case (e.g. `js-output`), with:
   - a comment block explaining the intent of the exercise
   - a comment instruction for what to fill in
   - blank/empty code snippet (TODO markers) - never the solution
3. Tell the student: "Run `npm run dev` if it's not already running, then open http://localhost:3000/<section>/<item>." Do not run it or read its output yourself.
