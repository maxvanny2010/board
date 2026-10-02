# Group 3 DevOps Practical — Project Overview

## Purpose

This is a small team DevOps practical focused
on coordinating work through ClickUp, GitHub and Slack.

The technical project is intentionally simple. The main learning workflow is:

```text
ClickUp → branch → commit → push → Pull Request → CI → review → merge → deploy
```

The practical demonstrates:

- individual work in separate Git branches;
- Pull Requests and human review;
- automated CI validation;
- JSON syntax failure and recovery;
- schema/data validation failure and recovery;
- merge-conflict handling on a shared file;
- team coordination through ClickUp and Slack;
- deployment through GitHub Pages.

## Project ownership

| Student   | Day       | File                           |
|-----------|-----------|--------------------------------|
| Student 1 | Monday    | `data/lectures/monday.json`    |
| Student 2 | Tuesday   | `data/lectures/tuesday.json`   |
| Student 3 | Wednesday | `data/lectures/wednesday.json` |
| Student 4 | Thursday  | `data/lectures/thursday.json`  |
| Student 5 | Friday    | `data/lectures/friday.json`    |
| Student 6 | Saturday  | `data/lectures/saturday.json`  |
| Student 7 | Sunday    | `data/lectures/sunday.json`    |

The shared Day 4 file is:

```text
data/team-journey.json
```

## Four project days

### Day 1 — Clean contribution

Update all three lecture times in your assigned JSON file
to `10:00` and mark `labStatus.timeChange` as `fixed`.

### Day 2 — JSON syntax failure + recovery

Intentionally create a JSON syntax error, observe 
the failed CI check, read the log, fix the JSON, and mark
`labStatus.jsonRecovery` as `fixed`.

### Day 3 — Validation failure + recovery

Change one `roomNumber` from an integer to a quoted string. 
JSON parsing should still pass, but validation should fail.
Fix the value and mark `labStatus.schemaRecovery` as `fixed`.

### Day 4 — Shared-file merge conflict

Each student contributes to `data/team-journey.json` 
according to the integration order given by the Team Lead. The
purpose is to practise resolving a real Git merge conflict safely.

## Tools

- **ClickUp** — task ownership, status and review coordination.
- **GitHub** — repository, branches, Pull Requests and protected `master`.
- **GitHub Actions** — automated validation / CI quality gate.
- **Slack** — project communication and repository notifications.
- **GitHub Pages** — deployment of the lecture board.

## Important rule

Do not work directly on `master`.

Every task follows:

```text
one ClickUp task = one Git branch = one Pull Request
```

Before starting, read:

- [ClickUp workflow](CLICKUP-WORKFLOW.md)
- [Git and GitHub rules](GIT-RULES.md)
