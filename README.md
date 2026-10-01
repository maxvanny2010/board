# ATU Donegal — Group 3 Lecture Board

A compact static lecture-board project for the Group 3 DevOps collaboration exercise.

[![Launch Lecture Board](https://img.shields.io/badge/LAUNCH_LECTURE_BOARD-→-38BDF8?style=for-the-badge&labelColor=FFD21F)](https://maxvanny2010.github.io/board/)

The project is intentionally simple. The learning focus is the delivery workflow:

```text
ClickUp → branch → commit → push → Pull Request → CI → review → merge → deploy
```

## Run / deploy

The site is designed for GitHub Pages.

Local preview: use a small static server such as VS Code Live Server. Opening `index.html` directly with `file://` may
block JSON `fetch()` requests.

## Student ownership

| Student   | Day       | File                           |
|-----------|-----------|--------------------------------|
| Student 1 | Monday    | `data/lectures/monday.json`    |
| Student 2 | Tuesday   | `data/lectures/tuesday.json`   |
| Student 3 | Wednesday | `data/lectures/wednesday.json` |
| Student 4 | Thursday  | `data/lectures/thursday.json`  |
| Student 5 | Friday    | `data/lectures/friday.json`    |
| Student 6 | Saturday  | `data/lectures/saturday.json`  |
| Student 7 | Sunday    | `data/lectures/sunday.json`    |

Each board shows:

```text
time — room — short lecture title
```

and a visible progress area:

```text
Time changed     ✓ / pending
JSON recovery    ✓ / pending
Schema recovery  ✓ / pending
```

## Branch naming

```text
g3-d<day>-s<student>-<task>
```

Examples:

```text
g3-d1-s6-time
g3-d2-s6-json-error
g3-d3-s6-schema-error
g3-d4-s6-conflict
```

Create every task branch from updated `master`:

```bash
git switch master
git pull
git switch -c <branch-name>
```

## Four project days

### Day 1 — Clean contribution

Change all 3 lecture times in your own JSON file to `10:00`,
then mark `labStatus.timeChange` as fixed.

### Day 2 — JSON syntax failure + recovery

Intentionally break JSON, observe red CI, read the log, fix it,
then mark `labStatus.jsonRecovery` as fixed.

### Day 3 — Schema validation failure + recovery

Change one `roomNumber` from an integer to a quoted string.
JSON parsing passes while the validator fails.
Fix it, then mark `labStatus.schemaRecovery` as fixed.

Validation contract is documented in:

```text
schema/lecture-day.schema.json
```

### Day 4 — Controlled team merge conflict

Shared file:

```text
data/team-journey.json
```

Initial website text:

```text
GROUP 3 → Sx → Sx → Sx → Sx → Sx → Sx → Sx
```

Final website text:

```text
GROUP 3 → S1 → S2 → S3 → S4 → S5 → S6 → S7
```

After the final integration, set `labStatus.teamMerge.status` to `fixed`.

## Rules

- Never work directly on `master`.
- One ClickUp task = one branch = one Pull Request.
- Fix CI failures in the same branch and same PR.
- Merge only after green CI and Team Lead approval.
- Day 4 PRs remain open until the Team Lead gives the integration turn.

## Contribution rules

Before starting your task, read:
**[Git workflow and contribution rules](docs/GIT-RULES.md)**
