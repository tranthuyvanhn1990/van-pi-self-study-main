---
name: final-check
description: Check the student's completed exercise. Run when they say they're done.
---

1. Run the exercise's test/build (or evaluate output if no test exists).
2. If correct: add the item to `completed[]` in `.claude/progress.json`, recompute `hash = sha256(JSON.stringify(completed) + salt)` (salt = contents of `.claude/salt`), save.
3. If wrong: do NOT explain the logic error. Only point to where to check (browser console, network tab) or flag if they never checked output at all.
