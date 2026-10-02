# Group 3 — Git and GitHub Rules

## Before your first task

### 1. Accept the repository invitation

You must have collaborator access to:

```text
https://github.com/maxvanny2010/board
```

### 2. Clone the repository

If GitHub already works on your computer, use the same authentication method you already use.

HTTPS:

```bash
git clone https://github.com/maxvanny2010/board.git
```

SSH:

```bash
git clone git@github.com:maxvanny2010/board.git
```

Use SSH only if you already have SSH configured.

If HTTPS works through VS Code, Git Credential Manager, or browser sign-in, keep using HTTPS.

GitHub account passwords are not used for Git push authentication.

### 3. Open the repository locally

```bash
cd board
```

## Before every task

Always start from an updated `master`:

```bash
git switch master
git pull origin master
```

Then create the exact branch written in your ClickUp task:

```bash
git switch -c <branch-name>
```

Branch format:

```text
g3-d<day>-s<student>-<task>
```

Examples:

```text
g3-d1-s1-time
g3-d2-s1-json-error
g3-d3-s1-schema-error
g3-d4-s1-conflict
```

Do not invent a different branch name.

## Core rules

1. Never work directly on `master`.
2. One ClickUp task = one branch = one Pull Request.
3. A task may contain multiple commits.
4. If CI fails, fix the same branch and push again.
5. Do not create a new Pull Request just because CI failed.
6. If review fails, fix the same branch and same Pull Request.
7. Merge only after green CI and Team Lead approval.
8. Day 4 Pull Requests remain open until the Team Lead gives the integration turn.

## Normal task workflow

1. Make only the change requested in ClickUp.
2. Check the changed files.
3. Stage only the required files:

```bash
git add <file>
```

4. Commit:

```bash
git commit -m "<commit-message>"
```

Use the exact commit message written 
in ClickUp when one is provided.

5. Push your branch:

```bash
git push -u origin <branch-name>
```

6. Open a Pull Request:

```text
base: master
compare: your task branch
```

7. Wait for CI.

If CI is green, move the ClickUp task to `IN REVIEW` 
and mention the Team Lead in the task comments.

## CI failure

A red CI check does not automatically mean the ClickUp task is `REJECTED`.

For Day 2 and Day 3, a CI failure is intentionally part of the exercise.

When CI fails:

1. open the failed GitHub Actions check;
2. read the validation log;
3. identify the failure;
4. fix the same branch;
5. commit again;
6. push again.

GitHub updates the existing Pull Request and runs CI again.

## Review result

### Approved

If the Team Lead selects **Approve**:

1. merge the Pull Request;
2. verify the merge;
3. move the ClickUp task to `DONE`.

### Changes requested

If the Team Lead selects **Request changes**:

1. do not close the Pull Request;
2. move the ClickUp task from `REJECTED` back to `IN PROGRESS`;
3. fix the same branch;
4. push again;
5. wait for green CI;
6. return the task to `IN REVIEW`;
7. mention the Team Lead again.

## Day 4 merge-conflict rule

Day 4 uses the shared file:

```text
data/team-journey.json
```

Do not merge Day 4 work until the Team Lead 
tells you it is your integration turn.

If GitHub reports a conflict:

1. update your local `master`;
2. merge or rebase only as instructed;
3. resolve only the intended conflict;
4. verify that the JSON is valid;
5. commit the conflict resolution;
6. push the same branch;
7. wait for CI to pass.

Do not delete another student's work to resolve a conflict.

## Authentication help

If `git push` already works for you in another GitHub repository, 
no additional authentication setup should normally 
be required after you receive collaborator access to this repository.

If HTTPS asks for authentication:

- use GitHub browser sign-in / Git Credential Manager if available;
- do not use your normal GitHub account password;
- if your existing setup uses SSH, continue using SSH.

Never share passwords, tokens or SSH private keys in Slack, 
ClickUp, GitHub comments or commits.
