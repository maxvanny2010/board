# Group 3 Git Rules

## Branch naming

```text
g3-d<day>-s<student>-<task>
```

Use the exact branch name written in ClickUp.

Always create from updated `master`:

```bash
git switch master
git pull
git switch -c <branch-name>
```

## Core rules

1. Never work directly on `master`.
2. One task = one branch = one Pull Request.
3. A task may contain multiple commits.
4. If CI fails, fix the same branch and push again.
5. Do not create a new PR just because CI failed.