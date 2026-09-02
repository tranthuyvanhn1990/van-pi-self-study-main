---
name: progress
description: Show the student's progress checklist. Read-only.
---

1. Read `.claude/progress.json`. Recompute `hash` from `completed[]` + salt (`.claude/salt`); if mismatch, re-derive `completed[]` from evidence (practice file exists + its test passed per curriculum item), rewrite file + hash.
2. Print checklist grouped by `curriculum.md` sections, `[x]`/`[ ]` per item, plus overall "Section N/8 · X%".
